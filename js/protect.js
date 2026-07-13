(function() {
    'use strict';

    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection on images
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable drag on images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable keyboard shortcuts for saving/view source
    document.addEventListener('keydown', function(e) {
        // Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    // Add watermark overlay
    function addWatermark() {
        var watermark = document.createElement('div');
        watermark.className = 'watermark-overlay';
        watermark.setAttribute('aria-hidden', 'true');
        document.body.appendChild(watermark);
    }

    // Add watermark to images
    function addImageWatermarks() {
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.style.userSelect = 'none';
            img.style.draggable = 'false';
            img.setAttribute('draggable', 'false');
        });
    }

    // Console warning
    function addConsoleWarning() {
        console.log('%c⚠️ تحذير', 'color: red; font-size: 30px; font-weight: bold;');
        console.log('%cهذا الموقع محمي بموجب قوانين حماية المحتوى.', 'color: orange; font-size: 16px;');
        console.log('%cالاستخدام غير المصرح به محظور.', 'color: orange; font-size: 16px;');
    }

    // Detect DevTools open (basic)
    function detectDevTools() {
        var threshold = 160;
        var widthCheck = window.outerWidth - window.innerWidth > threshold;
        var heightCheck = window.outerHeight - window.innerHeight > threshold;
        
        if (widthCheck || heightCheck) {
            console.clear();
            console.log('%c⚠️ تم اكتشاف أدوات المطور', 'color: red; font-size: 20px;');
        }
    }

    // Initialize protection
    function init() {
        addWatermark();
        addImageWatermarks();
        addConsoleWarning();
        
        // Check DevTools periodically (basic check)
        setInterval(detectDevTools, 1000);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
