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
const axe_playwright_1 = require("axe-playwright");
(0, test_1.test)('Accessibility test for All Items page', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://www.saucedemo.com/');
    yield (0, axe_playwright_1.injectAxe)(page);
    // Directly invoke checkA11y and await its response
    const results = yield (0, axe_playwright_1.checkA11y)(page);
    // Check if results exist and are in the expected format
    if (results && results.violations && results.violations.length > 0) {
        console.error('Accessibility violations detected:', results.violations);
        throw new Error(`Accessibility violations detected: ${results.violations.length}`);
    }
    else {
        console.log('No accessibility violations found.');
    }
}));
