"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CookieConsentComponent = (function () {
    function CookieConsentComponent() {
    }
    CookieConsentComponent.getCookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    CookieConsentComponent.deleteCookie = function (name) {
        var d = new Date();
        var path;
        var expires;
        d.setTime(d.getTime() - 1);
        expires = "expires=" + d.toUTCString();
        path = '' ? "; path=" : '';
        document.cookie = name + "=''; " + expires + path;
    };
    CookieConsentComponent.setCookie = function (name, value, expire, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        var expires;
        var cookiePath;
        d.setTime(d.getTime() + expire);
        expires = "expires=" + d.toUTCString();
        cookiePath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cookiePath;
    };
    CookieConsentComponent.prototype.checkAuth = function () {
    };
    return CookieConsentComponent;
}());
CookieConsentComponent = __decorate([
    core_1.Component({
        selector: 'cookie-consent',
    })
], CookieConsentComponent);
exports.CookieConsentComponent = CookieConsentComponent;
