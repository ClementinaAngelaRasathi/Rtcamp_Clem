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
// Test to verify the sorting order Z-A
(0, test_1.test)('Verify sorting order Z-A', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://www.saucedemo.com/');
    yield page.fill('#user-name', 'standard_user');
    yield page.fill('#password', 'secret_sauce');
    yield page.click('#login-button');
    // Navigate to sorting and select Z-A
    yield page.selectOption('.product_sort_container', 'za');
    const productTitles = yield page.$$eval('.inventory_item_name', items => items.map(item => item.textContent));
    const sortedTitles = [...productTitles].sort().reverse();
    (0, test_1.expect)(productTitles).toEqual(sortedTitles);
}));
// Test to verify price order high-low
(0, test_1.test)('Verify price order high-low', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://www.saucedemo.com/');
    yield page.fill('#user-name', 'standard_user');
    yield page.fill('#password', 'secret_sauce');
    yield page.click('#login-button');
    // Navigate to sorting and select high to low
    yield page.selectOption('.product_sort_container', 'hilo');
    const productPrices = yield page.$$eval('.inventory_item_price', items => items.map(item => { var _a; return parseFloat((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.replace('$', '')); }));
    const sortedPrices = [...productPrices].sort((a, b) => b - a);
    (0, test_1.expect)(productPrices).toEqual(sortedPrices);
}));
// Test to add multiple items and validate checkout
(0, test_1.test)('Add items to cart and checkout', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://www.saucedemo.com/');
    yield page.fill('#user-name', 'standard_user');
    yield page.fill('#password', 'secret_sauce');
    yield page.click('#login-button');
    // Add multiple items to cart
    yield page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    yield page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    yield page.click('.shopping_cart_link');
    // Proceed to checkout
    yield page.click('[data-test="checkout"]');
    yield page.fill('[data-test="firstName"]', 'Test');
    yield page.fill('[data-test="lastName"]', 'User');
    yield page.fill('[data-test="postalCode"]', '12345');
    yield page.click('[data-test="continue"]');
    yield page.click('[data-test="finish"]');
    // Check that the checkout is successful
    const successMessage = yield page.textContent('.complete-header');
    (0, test_1.expect)(successMessage).toBe('THANK YOU FOR YOUR ORDER');
}));
