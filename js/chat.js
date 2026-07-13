(function() {
    'use strict';

    var chatData = {
        greetings: [
            'مرحباً أنا مساعد ناتج 👋',
            'أهلاً بيك! أنا هنا أساعدك',
            'أهلين! كيف أقدر أساعدك؟'
        ],
        services: {
            'تصميم جرافيك': {
                reply: 'تصميم جرافيك 🎨\n\n• لوجوهات\n• هوية بصرية\n• بوسترات\n• كروت شخصية\n\nالسعر: من 500 لـ 2000 جنيه',
                keywords: ['جرافيك', 'لوجو', 'هوية', 'بوستر', 'كارت', 'تصميم']
            },
            'مونتاج فيديو': {
                reply: 'مونتاج فيديو 🎬\n\n• مونتاج احترافي\n• تأثيرات بصرية\n• موشن جرافيك\n• تعليق صوتي\n\nالسعر: من 800 لـ 15000 جنيه',
                keywords: ['مونتاج', 'فيديو', 'فيديو', 'مونتير', 'تعريض', 'موشن']
            },
            'سوشيال ميديا': {
                reply: 'تصاميم سوشيال ميديا 📱\n\n• انستجرام\n• تيك توك\n• فيسبوك\n• يوتيوب\n\nالسعر: من 300 لـ 2000 جنيه',
                keywords: ['سوشيال', 'انستجرام', 'تيك توك', 'فيسبوك', 'بوست', 'ستوري']
            }
        },
        pricing: 'أسعارنا:\n\n🎨 تصميم جرافيك: 500 - 2000 جنيه\n🎬 مونتاج فيديو: 800 - 15000 جنيه\n📱 سوشيال ميديا: 300 - 2000 جنيه\n\nعايز تعرف أكتر؟',
        contact: 'تواصل معنا:\n\n💬 واتساب: +201556152510\n📧 إيميل: natij.team.com@gmail.com',
        unknown: 'ممكن تسأل عن:\n\n• خدماتنا (تصميم جرافيك، مونتاج، سوشيال ميديا)\n• الأسعار\n• طريقة التواصل\n\nأو تواصل معنا مباشرة على الواتساب!',
        fallback: 'معلش، مش فاهم سؤالك. ممكن تسأل عن خدماتنا أو الأسعار أو تتواصل معنا!'
    };

    function getResponse(input) {
        var lower = input.toLowerCase().trim();

        if (/\b(مرحبا|اهلا|السلام|صباح|مساء|هاي|هلو)\b/.test(lower)) {
            return chatData.greetings[Math.floor(Math.random() * chatData.greetings.length)];
        }

        if (/\b(سعر|اسعار|كم|تسعير|تكلفة|price)\b/.test(lower)) {
            return chatData.pricing;
        }

        if (/\b(تواصل|اتصال|رقم|واتساب|ايميل|بريد|هاتف|contact)\b/.test(lower)) {
            return chatData.contact;
        }

        for (var service in chatData.services) {
            var s = chatData.services[service];
            for (var i = 0; i < s.keywords.length; i++) {
                if (lower.indexOf(s.keywords[i]) !== -1) {
                    return s.reply;
                }
            }
        }

        if (/\b(تصميم|جرافيك|لوجو)\b/.test(lower)) {
            return chatData.services['تصميم جرافيك'].reply;
        }
        if (/\b(مونتاج|فيديو|مونتير)\b/.test(lower)) {
            return chatData.services['مونتاج فيديو'].reply;
        }
        if (/\b(سوشيال|انستجرام|تيك توك|فيسبوك)\b/.test(lower)) {
            return chatData.services['سوشيال ميديا'].reply;
        }

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
