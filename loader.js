// ==UserScript==
// @name         Cookie Clicker Bot
// @namespace    https://twitch.tv/kaloncpu57
// @version      0.0.1
// @updateURL    http://kaloncpu57.github.io/cookie-clicker-bot/loader.js
// @description  Automatically makes cookies and can auto-buy from the shop
// @author       kaloncpu57
// @match        http*://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

var botscript = document.createElement("script");
botscript.src = "https://kaloncpu57.github.io/cookie-clicker-bot/main.js";
document.head.appendChild(botscript);
