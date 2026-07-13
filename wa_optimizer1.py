"""
🟢 WhatsApp Video Optimizer V3
Built by ENI for LO
"""

import os
import subprocess
import shutil
import gradio as gr

OUTPUT_DIR = "output"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FFMPEG_PATH = shutil.which("ffmpeg") or r"C:\ffmpeg\bin\ffmpeg.exe"
FFPROBE_PATH = shutil.which("ffprobe") or r"C:\ffmpeg\bin\ffprobe.exe"

print("🟢 WhatsApp Optimizer V3 جاهز!")

WHATSAPP_STATUS_LIMIT_MB = 9


def get_video_info(video_path):
    try:
        cmd_duration = [FFPROBE_PATH, "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", video_path]
        duration = float(subprocess.check_output(cmd_duration).decode().strip())
        cmd_resolution = [FFPROBE_PATH, "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", video_path]
        resolution = subprocess.check_output(cmd_resolution).decode().strip()
        size_mb = os.path.getsize(video_path) / (1024 * 1024)
        return {"duration": duration, "resolution": resolution, "size_mb": round(size_mb, 2)}
    except Exception:
        return {"duration": 0, "resolution": "unknown", "size_mb": 0}


def calculate_bitrate(target_size_mb, duration_seconds, audio_bitrate_kbps=96):
    target_size_kbits = target_size_mb * 8192
    audio_size_kbits = audio_bitrate_kbps * duration_seconds
    video_size_kbits = target_size_kbits - audio_size_kbits
    video_bitrate_kbps = int(video_size_kbits / duration_seconds)
    video_bitrate_kbps = int(video_bitrate_kbps * 0.95)
    return max(video_bitrate_kbps, 150)


def process_with_target_size(video_path, target_size_mb, video_bitrate, audio_bitrate, scale, max_dur, info_before, name, progress):
    output_path = os.path.join(OUTPUT_DIR, f"whatsapp_{name}.mp4")
    progress(0.4, desc=f"بضغط الفيديو لحجم {target_size_mb} MB...")
    cmd = [FFMPEG_PATH, "-y", "-i", video_path, "-c:v", "libx264", "-preset", "medium", "-b:v", f"{video_bitrate}k", "-maxrate", f"{int(video_bitrate * 1.2)}k", "-bufsize", f"{int(video_bitrate * 2)}k", "-vf", scale, "-c:a", "aac", "-b:a", f"{audio_bitrate}k", "-movflags", "+faststart", "-pix_fmt", "yuv420p"]
    if max_dur and info_before["duration"] > max_dur:
        cmd.extend(["-t", str(max_dur)])
    cmd.append(output_path)
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        return None, f"❌ حصل error:\n{result.stderr[:500]}"
    progress(0.95, desc="بحفظ النتيجة...")
    info_after = get_video_info(output_path)
    size_reduction = round((1 - info_after["size_mb"] / info_before["size_mb"]) * 100, 1) if info_before["size_mb"] > 0 else 0
    warning = ""
    if info_after["size_mb"] > 10:
        warning = "\n⚠️ تحذير: الفيديو لسه أكبر من 10 ميجا!"
    report = f"""✅ تم بنجاح!

📊 قبل: {info_before['resolution']} | {round(info_before['duration'], 1)}s | {info_before['size_mb']} MB
📊 بعد: {info_after['resolution']} | {round(info_after['duration'], 1)}s | {info_after['size_mb']} MB ✅
📉 تقليل الحجم: {size_reduction}%{warning}

💾 محفوظ في: {output_path}
"""
    progress(1.0, desc="خلصت!")
    return output_path, report


def process_high_quality(video_path, info_before, name, scale, crf, audio_bitrate, preset, progress):
    output_path = os.path.join(OUTPUT_DIR, f"whatsapp_{name}.mp4")
    progress(0.3, desc=f"بضغط الفيديو بجودة عالية ({name})...")
    cmd = [FFMPEG_PATH, "-y", "-i", video_path, "-c:v", "libx264", "-preset", preset, "-crf", crf, "-vf", scale, "-c:a", "aac", "-b:a", audio_bitrate, "-movflags", "+faststart", "-pix_fmt", "yuv420p", output_path]
    progress(0.5, desc="جاري المعالجة (قد يأخذ وقت)...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        return None, f"❌ حصل error:\n{result.stderr[:500]}"
    progress(0.95, desc="بحفظ النتيجة...")
    info_after = get_video_info(output_path)
    report = f"""✅ تم بنجاح بأعلى جودة ممكنة!

📊 قبل: {info_before['resolution']} | {round(info_before['duration'], 1)}s | {info_before['size_mb']} MB
📊 بعد: {info_after['resolution']} | {round(info_after['duration'], 1)}s | {info_after['size_mb']} MB 🔥
الجودة: ممتازة (CRF {crf})

💾 محفوظ في: {output_path}

💡 الواتس بيقبل لحد 2 جيجا في الشات
"""
    progress(1.0, desc="خلصت!")
    return output_path, report


def process_copy_only(video_path, info_before, progress):
    output_path = os.path.join(OUTPUT_DIR, "whatsapp_Original.mp4")
    progress(0.5, desc="بنسخ الفيديو...")
    shutil.copy(video_path, output_path)
    info_after = get_video_info(output_path)
    report = f"""✅ تم النسخ بنفس الجودة الأصلية!

📊 الدقة: {info_after['resolution']}
📊 المدة: {round(info_after['duration'], 1)} ثانية
📊 الحجم: {info_after['size_mb']} MB

💾 محفوظ في: {output_path}

💡 بدون أي ضغط، بجودته الأصلية 100%
"""
    progress(1.0, desc="خلصت!")
    return output_path, report


def optimize_for_whatsapp(video_file, target_type, custom_size_mb, max_duration_seconds, progress=gr.Progress()):
    if not video_file:
        return None, "⚠️ ارفع فيديو الأول!"
    video_path = video_file.name if hasattr(video_file, 'name') else video_file
    try:
        progress(0.1, desc="بفحص الفيديو...")
        info_before = get_video_info(video_path)

        if target_type == "حالة (Status) - تحت 9 ميجا":
            actual_duration = info_before["duration"]
            if actual_duration > 30:
                actual_duration = 30
            video_bitrate = calculate_bitrate(WHATSAPP_STATUS_LIMIT_MB, actual_duration, 96)
            return process_with_target_size(video_path, WHATSAPP_STATUS_LIMIT_MB, video_bitrate, 96, "scale='min(1080,iw)':'-2'", 30, info_before, "Status", progress)

        elif target_type == "شات (Chat) - أعلى جودة (1080p)":
            return process_high_quality(video_path, info_before, "Chat_1080p", "scale='min(1920,iw)':'-2'", "18", "192k", "slow", progress)

        elif target_type == "شات (Chat) - جودة 4K":
            return process_high_quality(video_path, info_before, "Chat_4K", "scale='min(3840,iw)':'-2'", "17", "256k", "slow", progress)

        elif target_type == "شات (Chat) - أصلي بدون تعديل":
            return process_copy_only(video_path, info_before, progress)

        elif target_type == "مستند (Document) - بدون ضغط":
            output_path = os.path.join(OUTPUT_DIR, "whatsapp_document.mp4")
            shutil.copy(video_path, output_path)
            info_after = get_video_info(output_path)
            report = f"""✅ تم! ارفعه كـ Document في الواتس

📊 الدقة: {info_after['resolution']}
📊 المدة: {round(info_after['duration'], 1)} ثانية
📊 الحجم: {info_after['size_mb']} MB

💡 في الواتس، اختار من Document مش Gallery!"""
            return output_path, report

        else:
            max_dur = max_duration_seconds if max_duration_seconds > 0 else None
            actual_duration = info_before["duration"]
            if max_dur and actual_duration > max_dur:
                actual_duration = max_dur
            video_bitrate = calculate_bitrate(custom_size_mb, actual_duration, 128)
            return process_with_target_size(video_path, custom_size_mb, video_bitrate, 128, "scale='min(1920,iw)':'-2'", max_dur, info_before, "Custom", progress)

    except Exception as e:
        import traceback
        return None, f"❌ حصل error:\n{str(e)}\n\n{traceback.format_exc()[:500]}"


with gr.Blocks(theme=gr.themes.Soft(), title="WhatsApp Video Optimizer V3") as app:
    gr.Markdown("# 🟢 WhatsApp Video Optimizer V3")
    gr.Markdown("### جهّز فيديوهاتك بأعلى جودة على الواتس ✨")

    with gr.Row():
        with gr.Column():
            video_input = gr.File(label="📹 ارفع الفيديو (حتى 2 جيجا)", file_types=[".mp4", ".mov", ".avi", ".mkv", ".webm"])
            target_type = gr.Radio(
                choices=[
                    "حالة (Status) - تحت 9 ميجا",
                    "شات (Chat) - أعلى جودة (1080p)",
                    "شات (Chat) - جودة 4K",
                    "شات (Chat) - أصلي بدون تعديل",
                    "مستند (Document) - بدون ضغط",
                    "مخصص (Custom)"
                ],
                value="شات (Chat) - أعلى جودة (1080p)",
                label="🎯 إيه الاستخدام؟"
            )
            custom_size_mb = gr.Slider(minimum=1, maximum=100, value=9, step=1, label="📦 الحجم بالميجا (للمخصص فقط)")
            max_duration_seconds = gr.Slider(minimum=0, maximum=300, value=0, step=5, label="⏱️ أقصى مدة بالثواني (0 = من غير قص)")
            submit_btn = gr.Button("🚀 جهّز الفيديو", variant="primary", size="lg")

            gr.Markdown("""
            ### 💡 الفرق بين الأنواع:

            **🟢 حالة:** تحت 9 ميجا، أقصى 30 ثانية

            **💬 شات 1080p:** Full HD، جودة ممتازة

            **🔥 شات 4K:** Ultra HD، أعلى جودة

            **📦 شات أصلي:** بدون أي تعديل

            **📄 مستند:** بدون ضغط، ارفعه كـ Document

            **⚙️ مخصص:** تحدد الحجم والمدة
            """)

        with gr.Column():
            video_output = gr.Video(label="🎞️ الفيديو الجاهز")
            report_output = gr.Textbox(label="📊 التقرير", lines=20)

    submit_btn.click(fn=optimize_for_whatsapp, inputs=[video_input, target_type, custom_size_mb, max_duration_seconds], outputs=[video_output, report_output])


if __name__ == "__main__":
    print("\n" + "="*50)
    print("🟢 WhatsApp Video Optimizer V3")
    print("📍 افتح المتصفح على: http://localhost:7861")
    print("="*50 + "\n")
    app.launch(server_name="127.0.0.1", server_port=7861, share=False, max_file_size="2gb")
