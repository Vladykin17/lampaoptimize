// ==UserScript==
// @name         Lampa.mx Optimizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Убирает анимации и оптимизирует интерфейс на сайте lampa.mx
// @author       Vladykin17
// @match        https://lampa.mx/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Отключение CSS-анимаций
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            transition: none !important;
            animation: none !important;
            scroll-behavior: auto !important;
        }

        /* Оптимизация интерфейса: скрытие ненужных элементов */
        .popup, .tooltip, .ad-banner {
            display: none !important;
        }

        /* Примеры для возможной оптимизации размеров изображений */
        img {
            max-width: 100%;
            height: auto;
        }
    `;
    document.head.appendChild(style);

    // Удаление элементов, которые могут мешать или загружать страницу
    const elementsToRemove = ['.popup', '.tooltip', '.ad-banner'];
    elementsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
    });

    // Дополнительные оптимизации
    window.addEventListener('load', () => {
        // Удаление ненужных скриптов
        const scriptsToRemove = ['script[src*="analytics"]', 'script[src*="tracking"]'];
        scriptsToRemove.forEach(selector => {
            const scripts = document.querySelectorAll(selector);
            scripts.forEach(script => script.remove());
        });
    });

})();
