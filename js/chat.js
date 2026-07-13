(function() {
    'use strict';

    var chatData = {
        greetings: [
            'مرحباً بيك في ناتج! 👋\nأنا مساعدك الرقمي. أقدر أساعدك في معرفة خدماتنا وأسعارنا أو توصلك لفريق العمل.',
            'أهلاً وسهلاً! 👋\nأنا مساعد ناتج. كيف أقدر أخدمك اليوم؟',
            'أهلين بيك! 👋\nأنا هنا عشان أساعدك في أي استفسار عن خدماتنا.'
        ],
        about: 'ناتج هو براند متخصص في التصميم الإبداعي والإنتاج البصري.\n\nفريقنا يضم مصممين ومونتيرين محترفين على مدار الساعة.\n\n🎯 رؤيتنا: تقديم محتوى بصري يโด عن المنافسين.\n\nعايز تعرف خدماتنا؟',
        services: {
            'تصميم جرافيك': {
                reply: '🎨 تصميم جرافيك\n\nنقدم خدمات تصميم احترافية تشمل:\n\n• لوجوهات وهويات بصرية\n• بوسترات وإعلانات\n• كروت شخصية وبروشورات\n• تصاميم سوشيال ميديا\n\n💰 السعر: من 500 لـ 2,000 جنيه مصري\n\nعايز تبدأ مشروعك؟ تواصل معنا!',
                keywords: ['جرافيك', 'لوجو', 'هوية', 'بوستر', 'كارت', 'تصميم', 'بروشور', 'إعلان']
            },
            'مونتاج فيديو': {
                reply: '🎬 مونتاج فيديو\n\nخدمات مونتاج احترافية تشمل:\n\n• مونتاج فيديو ريبورتاجي\n• مونتاج إعلاني\n• موشن جرافيك وتأثيرات بصرية\n• تعليق صوتي ومؤثرات صوتية\n\n💰 السعر: من 800 لـ 15,000 جنيه مصري\n\nمشروعك يستاهل أحسن مونتاج!',
                keywords: ['مونتاج', 'فيديو', 'مونتير', 'موشن', 'تعليق', 'مؤثرات']
            },
            'سوشيال ميديا': {
                reply: '📱 تصاميم سوشيال ميديا\n\nنعمل تصاميم احترافية لـ:\n\n• انستجرام (بوستات وستوريز وريلز)\n• تيك توك\n• فيسبوك\n• يوتيوب (ثانامبل)\n• لينكدإن\n\n💰 السعر: من 300 لـ 2,000 جنيه مصري\n\nهروبلك أكتر من المنافسين! 💪',
                keywords: ['سوشيال', 'انستجرام', 'تيك توك', 'فيسبوك', 'يوتيوب', 'بوست', 'ستوري', 'ريلز', 'لينكدإن']
            }
        },
        combined_pricing: '📋 ملخص أسعارنا:\n\n🎨 تصميم جرافيك: 500 - 2,000 ج.م\n🎬 مونتاج فيديو: 800 - 15,000 ج.م\n📱 سوشيال ميديا: 300 - 2,000 ج.م\n\n💡 ملاحظة: الأسعار تعتمد على حجم المشروع ومتطلباته.\n\nعايز تعرف تفاصيل أكتر عن خدمة معينة؟',
        pricing_graphic: '💰 أسعار تصميم الجرافيك:\n\n• لوجو بسيط: من 500 ج.م\n• هوية بصرية كاملة: من 1,500 ج.م\n• بوستر إعلاني: من 800 ج.م\n• بروشور: من 1,000 ج.م\n• كروت شخصية: من 500 ج.م\n\nكل الأسعار قابلة للتفاوض حسب حجم المشروع.',
        pricing_video: '💰 أسعار مونتاج الفيديو:\n\n• فيديو ريبورتاجي (حتى 3 دقائق): من 800 ج.م\n• فيديو إعلاني: من 2,000 ج.م\n• موشن جرافيك: من 3,000 ج.م\n• تعليق صوتي: من 500 ج.م\n\n✅ السعر يشمل المونتاج والموسيقى والمؤثرات.',
        pricing_social: '💰 أسعار تصاميم سوشيال ميديا:\n\n• باقة 10 بوستات: من 800 ج.م\n• باقة 20 بوستات: من 1,500 ج.م\n• ستوريز (حتى 5): من 300 ج.م\n• ريلز/تيك توك: من 500 ج.م\n\n📦 باقات شهرية متاحة بأسعار مميزة.',
        contact: '📞 طرق التواصل معنا:\n\n💬 واتساب: +20 155 615 2510\n(متاح من 10 صباحاً لـ 12 مساءً)\n\n📧 البريد الإلكتروني: natij.team.com@gmail.com\n(رد خلال 24 ساعة)\n\n🌐 الموقع: yahiazakihr-dev.github.io/natij-portfolio\n\n⚡ للرد السريع، تواصل عبر الواتساب!',
        delivery: '⏰ مواعيد التسليم:\n\n• تصميم جرافيك: 1-3 أيام عمل\n• مونتاج فيديو: 3-7 أيام عمل\n• تصاميم سوشيال ميديا: 1-2 أيام عمل\n\n⚡ تسليم سريع متاح مقابل إضافي.\n\n📦 프로ジェクト كبير؟ ممكن نتفق على جدول تسليم مناسب.',
        payment: '💳 طرق الدفع:\n\n• فودافون كاش\n• فوري\n• بنك (تحويل بنكي)\n• PayPal (للعملاء overseas)\n\n💰 دفعة مقدمة 50% + 50% عند التسليم.\n\n✅ فاتورة رسمية متاحة عند الطلب.',
        quality: '✅ لماذا ناتج؟\n\n🎯 خبرة +3 سنوات في التصميم والمونتاج\n⚡ تسليم سريع ودقيق\n🎨 تصميمات أصلية 100%\n🔄 تعديلات مجانية حتى الرضا\n💰 أسعار تنافسية\n🤝 دعم مستمر بعد التسليم\n\nعايز تبدأ مشروعك؟',
        unknown: 'أهلاً بيك! 😊\n\nعشان أقدر أساعدك أكتر، ممكن تسأل عن:\n\n• خدماتنا وأسعارنا\n• مواعيد التسليم\n• طرق الدفع\n• التواصل معنا\n\nاكتب سؤالك ببساطة وهجاوبك فوراً! 💬',
        fallback: 'أهلاً بيك! 😊\n\nعشان أقدر أساعدك أكتر، ممكن تسأل عن:\n\n• خدماتنا وأسعارنا\n• مواعيد التسليم\n• طرق الدفع\n• التواصل معنا\n\nأو كلمنا مباشرة على الواتساب: +201556152510\n\nفريقنا جاهز لمساعدتك! 🤝'
    };

    function getResponse(input) {
        var lower = input.toLowerCase().trim();

        // Greetings
        if (/\b(مرحبا|اهلا|السلام|صباح|مساء|هاي|هلو|هاي|السلام عليكم)\b/.test(lower)) {
            return chatData.greetings[Math.floor(Math.random() * chatData.greetings.length)];
        }

        // About Natij
        if (/\b(مين انتو|من انتم|عن ناتج|انتو مين|Company|About|من شركه|شركتكم)\b/.test(lower)) {
            return chatData.about;
        }

        // Quality / Why Natij
        if (/\b(ليه ناتج|ليه اختركم|مميزات|Why|Quality|جوده|مميزاتكم)\b/.test(lower)) {
            return chatData.quality;
        }

        // Delivery time
        if (/\b(تسليم|مواعيد|وقت|كم يوم|متى|Delivery|Time|deadLine|موعد)\b/.test(lower)) {
            return chatData.delivery;
        }

        // Payment methods
        if (/\b(دفع|دفعات|如何|فودافون|فوري|بنك|PayPal|دفع|تحويل|فاتوره|فاتورة)\b/.test(lower)) {
            return chatData.payment;
        }

        // Combined pricing
        if (/\b(اسعار|أسعار|كم|تسعير|تكلفة|price|باقات|عروض)\b/.test(lower)) {
            // Check for specific service pricing
            if (/تصميم|جرافيك|لوجو|هوية/.test(lower) && /مونتاج|فيديو|موشن/.test(lower)) {
                return chatData.combined_pricing;
            }
            if (/تصميم|جرافيك|لوجو|هوية/.test(lower)) {
                return chatData.pricing_graphic;
            }
            if (/مونتاج|فيديو|موشن/.test(lower)) {
                return chatData.pricing_video;
            }
            if (/سوشيال|انستجرام|تيك توك|فيسبوك/.test(lower)) {
                return chatData.pricing_social;
            }
            return chatData.combined_pricing;
        }

        // Specific service pricing
        if (/تصميم|جرافيك|لوجو|هوية|بوستر|كارت|بروشور/.test(lower)) {
            if (/سعر|كم|cost|price/.test(lower)) {
                return chatData.pricing_graphic;
            }
            return chatData.services['تصميم جرافيك'].reply;
        }

        if (/مونتاج|فيديو|موشن|تعليق|مؤثرات/.test(lower)) {
            if (/سعر|كم|cost|price/.test(lower)) {
                return chatData.pricing_video;
            }
            return chatData.services['مونتاج فيديو'].reply;
        }

        if (/سوشيال|انستجرام|تيك توك|فيسبوك|يوتيوب|بوست|ستوري|ريلز/.test(lower)) {
            if (/سعر|كم|cost|price/.test(lower)) {
                return chatData.pricing_social;
            }
            return chatData.services['سوشيال ميديا'].reply;
        }

        // Contact
        if (/تواصل|اتصال|رقم|واتساب|ايميل|بريد|هاتف|contact|call|phone|email|اتكلم|كلمني|اعرف رقم|ارقام|ايميلكم|رقمكم|نتواصل|ازاي اتصل|هاتفي/.test(lower)) {
            return chatData.contact;
        }

        // Thanks
        if (/\b(شكر|ممنون|مشكور|thanks|thank you|Thank)\b/.test(lower)) {
            return 'الشكر لله! 😊\n\nلو عندك أي استفسار تاني، أنا هنا.\n\nواتسابنا: +201556152510\n\nنتمنى نكون عند حُسن ظنكم! 🤝';
        }

        // Short input
        if (lower.length < 3) {
            return chatData.unknown;
        }

        return chatData.fallback;
    }

    function addMessage(container, text, isUser) {
        var msg = document.createElement('div');
        msg.className = 'chat-message ' + (isUser ? 'user' : 'bot');

        var bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = text;

        msg.appendChild(bubble);
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
    }

    function showTyping(container) {
        var typing = document.createElement('div');
        typing.className = 'chat-message bot';
        typing.id = 'typing-indicator';

        var dots = document.createElement('div');
        dots.className = 'chat-typing';
        dots.innerHTML = '<span></span><span></span><span></span>';

        typing.appendChild(dots);
        container.appendChild(typing);
        container.scrollTop = container.scrollHeight;
    }

    function removeTyping() {
        var el = document.getElementById('typing-indicator');
        if (el) el.remove();
    }

    function initChat() {
        var widget = document.createElement('div');
        widget.className = 'chat-widget';
        widget.id = 'chat-widget';
        widget.innerHTML = [
            '<button class="chat-toggle" id="chat-toggle" aria-label="Open chat">',
            '    <span class="chat-icon">💬</span>',
            '    <span class="chat-close-icon" style="display:none">✕</span>',
            '</button>',
            '<div class="chat-window" id="chat-window">',
            '    <div class="chat-header">',
            '        <div class="chat-header-info">',
            '            <div class="chat-avatar">ن</div>',
            '            <div>',
            '                <h4>ناتج</h4>',
            '                <span class="chat-status">متصل الآن</span>',
            '            </div>',
            '        </div>',
            '        <button class="chat-minimize" id="chat-minimize" aria-label="Close chat">✕</button>',
            '    </div>',
            '    <div class="chat-messages" id="chat-messages"></div>',
            '    <div class="chat-input-area">',
            '        <input type="text" id="chat-input" placeholder="اكتب سؤالك..." autocomplete="off">',
            '        <button class="chat-send" id="chat-send" aria-label="Send">',
            '            <span>←</span>',
            '        </button>',
            '    </div>',
            '</div>'
        ].join('');

        document.body.appendChild(widget);

        var toggle = document.getElementById('chat-toggle');
        var window_ = document.getElementById('chat-window');
        var minimize = document.getElementById('chat-minimize');
        var input = document.getElementById('chat-input');
        var sendBtn = document.getElementById('chat-send');
        var messages = document.getElementById('chat-messages');
        var chatIcon = toggle.querySelector('.chat-icon');
        var closeIcon = toggle.querySelector('.chat-close-icon');

        var isOpen = false;
        var hasStarted = false;

        function toggleChat() {
            isOpen = !isOpen;
            window_.classList.toggle('active', isOpen);
            chatIcon.style.display = isOpen ? 'none' : 'inline';
            closeIcon.style.display = isOpen ? 'inline' : 'none';

            if (isOpen && !hasStarted) {
                hasStarted = true;
                setTimeout(function() {
                    showTyping(messages);
                    setTimeout(function() {
                        removeTyping();
                        addMessage(messages, chatData.greetings[0], false);
                    }, 800);
                }, 300);
            }

            if (isOpen) {
                input.focus();
            }
        }

        function sendMessage() {
            var text = input.value.trim();
            if (!text) return;

            addMessage(messages, text, true);
            input.value = '';

            showTyping(messages);
            setTimeout(function() {
                removeTyping();
                var response = getResponse(text);
                addMessage(messages, response, false);
            }, 600 + Math.random() * 400);
        }

        toggle.addEventListener('click', toggleChat);
        minimize.addEventListener('click', toggleChat);
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }

})();
