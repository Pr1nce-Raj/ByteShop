# 🛡️ Maintainer Cheat Sheet & PR Review Guide

> **Confidential Maintainer Key**: Keep this file handy during your meetup! It contains the exact file locations, line references, and solution code for all 10 bugs so you can review and merge student Pull Requests in seconds.

---

## ⚡ Quick Meetup Workflow for You

1. **Assign Issues**: When a student comments *"Can I work on Issue #3?"*, reply: *"Assigned to you! Follow CONTRIBUTING.md to open your PR."*
2. **Reviewing PRs**:
   - Check the **"Files changed"** tab on their PR.
   - Verify that **only** the target file was edited (ensure they didn't accidentally commit `.env`, `node_modules`, or unwanted files).
   - Compare their diff against the **Solution Key** below.
   - If correct: Click **"Review changes"** -> **"Approve"** -> **"Squash and merge"**!
   - Drop an encouraging comment: *"Great job! Your PR is merged. Welcome to open source! 🎉"*

---

## 🔑 Bug Solutions Key

### Bug #1: Typo in store banner headline
- **Target File**: `src/components/Banner.jsx`
- **Buggy Code**:
  ```jsx
  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
    Welcome to BtyeShop
  </h1>
  ```
- **Fix**:
  ```jsx
  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
    Welcome to ByteShop
  </h1>
  ```
- **Review Check**: Just ensure "BtyeShop" is changed to "ByteShop".

---

### Bug #2: Add your profile to Contributors list
- **Target File**: `CONTRIBUTORS.md`
- **Buggy State**: Only sample maintainers listed.
- **Fix**: Student adds a new bullet point under `## Contributors List`:
  ```markdown
  - **[Student Name](https://github.com/student-handle)** - Student | Favorite Gadget: *Mechanical Keyboard*
  ```
- **Review Check**: Make sure their markdown syntax is valid and didn't delete previous contributors.

---

### Bug #3: Search bar filter is case-sensitive
- **Target File**: `src/components/SearchBar.jsx`
- **Buggy Code**:
  ```javascript
  const matchesSearch = product.name.includes(searchQuery);
  ```
- **Fix**:
  ```javascript
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchQuery.toLowerCase());
  ```
- **Review Check**: Both strings must be converted using `.toLowerCase()` (or `.includes(searchQuery.toLowerCase())`).

---

### Bug #4: Cart badge item counter does not increment
- **Target File**: `src/components/Navbar.jsx`
- **Buggy Code**:
  ```javascript
  const totalItems = 0;
  ```
- **Fix (Option A - total quantity)**:
  ```javascript
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  ```
  *(Or Option B - distinct items count: `const totalItems = cart.length;` - either is acceptable for a beginner!)*
- **Review Check**: Badge now displays a dynamic number reflecting items added to the cart.

---

### Bug #5: Subtotal price calculation concatenates numbers as text
- **Target File**: `src/components/CartDrawer.jsx`
- **Buggy Code**:
  ```javascript
  const subtotal = cart.reduce(
    (total, item) => total + String(item.price * item.quantity),
    0
  );
  ```
- **Fix**:
  ```javascript
  const subtotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );
  ```
- **Review Check**: The `String(...)` wrapper is removed and numbers add up mathematically (e.g. $89 + $32 = $121).

---

### Bug #6: In-stock products display red "Out of Stock" badge
- **Target File**: `src/components/ProductCard.jsx`
- **Buggy Code**:
  ```jsx
  {product.inStock ? (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
      Out of Stock
    </span>
  ) : (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
      In Stock
    </span>
  )}
  ```
- **Fix**: Swap the ternary condition or the badge components:
  ```jsx
  {product.inStock ? (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
      In Stock
    </span>
  ) : (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
      Out of Stock
    </span>
  )}
  ```
- **Review Check**: In-stock items now have green "In Stock" badges; out-of-stock items have red "Out of Stock".

---

### Bug #7: Add missing product in the "Audio" category
- **Target File**: `src/data/products.js`
- **Buggy State**: No item has `category: "Audio"`.
- **Fix**: Student appends a new item object to `INITIAL_PRODUCTS`:
  ```javascript
  {
    id: 9,
    name: "Active Noise-Cancelling Headphones",
    category: "Audio",
    price: 149,
    rating: 4.8,
    reviewsCount: 150,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Premium over-ear wireless headphones with studio-quality audio.",
    inStock: true
  }
  ```
- **Review Check**: Check that `category: "Audio"` matches the category filter pill and all fields (`id`, `name`, `price`, `image`, etc.) are present.

---

### Bug #8: Clear Cart button does not empty the cart
- **Target File**: `src/components/CartDrawer.jsx`
- **Buggy Code**:
  ```jsx
  <button
    type="button"
    onClick={() => {
      // Empty handler! Clear cart does nothing.
    }}
    className="text-xs text-rose-600 hover:text-rose-700 font-semibold transition-colors"
  >
    Clear Cart
  </button>
  ```
- **Fix**:
  ```jsx
  <button
    type="button"
    onClick={onClearCart}
    className="text-xs text-rose-600 hover:text-rose-700 font-semibold transition-colors"
  >
    Clear Cart
  </button>
  ```
- **Review Check**: The button calls `onClearCart` (or `() => onClearCart()`) when clicked.

---

### Bug #9: Newsletter subscribe button provides no feedback
- **Target File**: `src/components/Footer.jsx`
- **Buggy Code**:
  ```javascript
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Intentionally empty: no feedback given to the user
  };
  ```
- **Fix**:
  ```javascript
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };
  ```
- **Review Check**: Submitting the form calls `setSubscribed(true)` which displays the green success banner.

---

### Bug #10: Footer GitHub link points to "#"
- **Target File**: `src/components/Footer.jsx`
- **Buggy Code**:
  ```jsx
  <a
    href="#"
    className="text-slate-400 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
    aria-label="GitHub Repository"
  >
    <Github className="w-5 h-5" />
  </a>
  ```
- **Fix**:
  ```jsx
  <a
    href="https://github.com/your-username/ByteShop"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-slate-800"
    aria-label="GitHub Repository"
  >
    <Github className="w-5 h-5" />
  </a>
  ```
- **Review Check**: `href` now points to an actual GitHub URL instead of `#`.

---

## 💬 Ready-to-Paste PR Review Comments

- **When Approving**:
  > *"Awesome work! The fix is clean, tested, and works as expected. Thank you for your contribution to ByteShop! Merging now 🚀"*

- **If they made an unintended change (e.g. edited extra files)**:
  > *"Great job on the fix! Before we merge, could you please revert the changes in `other-file.js` so this PR only updates `src/components/...`? Once updated, we'll merge right away!"*

- **If they forgot to reference the issue**:
  > *"Looks good! Please add `Fixes #X` to your PR description so GitHub automatically closes the issue when merged."*
