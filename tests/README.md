# Test plan

`npm run test` covers pure cart arithmetic, threshold behavior, invalid amounts, and quantity clamping.

Suggested Playwright integration tests before production:

1. Add a product with selected finish / size; bag total and count update.
2. Increment, decrement, and remove items; cap by stock; reload and verify persistence.
3. Toggle AURELIA10 and polishing cloth; compare dynamic totals.
4. Filter by category, price, stock and search; load more; navigate product detail.
5. Open/close dialogs using keyboard, Escape, backdrop, and focus restoration.
6. Responsive navigation and image fallbacks across mobile/tablet/desktop.
7. Checkout form validation, server-side price recalculation and payment webhooks once integrated.
