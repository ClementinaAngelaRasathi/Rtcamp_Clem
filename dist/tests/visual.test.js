"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const BASE_URL = 'https://www.saucedemo.com/';
(0, test_1.test)('Visual regression test for All Items page', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto(BASE_URL);
    yield page.fill('#user-name', 'standard_user');
    yield page.fill('#password', 'secret_sauce');
    yield page.click('#login-button');
    yield page.waitForTimeout(1000); // Wait for the page to load
    // Take a screenshot for visual testing
    yield (0, test_1.expect)(page).toHaveScreenshot(); // Takes a screenshot for comparison
}));
