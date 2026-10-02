# 📋 ByteShop Starter Issues Catalog (All 10 Issues)

Copy and paste these issues directly into your GitHub repository under **Issues > New issue**, or run the automated script in `scripts/create_issues.ps1`.

---

### Issue #1: Fix typo in store banner headline
- **Title**: `[Good First Issue]: Fix typo in store banner headline`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`, `documentation`
- **Description**:
  ```markdown
  ### 📌 Description
  There is a spelling mistake in the main hero banner on the homepage. It currently says:
  > "Welcome to BtyeShop"
  
  It should be corrected to:
  > "Welcome to ByteShop"

  ### 🎯 Target File
  `src/components/Banner.jsx`

  ### 🔍 Steps to Reproduce
  1. Start the dev server: `npm run dev`
  2. Open `http://localhost:5173`
  3. Look at the top banner heading: "BtyeShop" is misspelled.

  ### 💡 Hint
  Open `src/components/Banner.jsx` and search for `BtyeShop`, then fix the spelling to `ByteShop`.
  ```

---

### Issue #2: Add your profile to Contributors list
- **Title**: `[Good First Issue]: Add your name to CONTRIBUTORS.md`
- **Labels**: `good first issue`, `hacktoberfest`, `documentation`
- **Description**:
  ```markdown
  ### 📌 Description
  Welcome to ByteShop! As your first open source contribution, add your name, GitHub profile link, and favorite gadget or book to our hall of fame.

  ### 🎯 Target File
  `CONTRIBUTORS.md`

  ### 🔍 How to complete
  1. Open `CONTRIBUTORS.md`.
  2. Under the `## Contributors List` section, add a new bullet point:
     `- **[Your Name](https://github.com/your-username)** - Your Role/College | Favorite Gadget or Book: *Your Choice*`
  3. Save, commit on a new branch, and open a Pull Request!
  ```

---

### Issue #3: Search bar filter is case-sensitive
- **Title**: `[Good First Issue]: Search filter in SearchBar is case-sensitive`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  When typing a search query in lowercase (e.g., "keyboard"), no results appear because the product name uses title case ("Minimalist Mechanical Keyboard").

  The search should be case-insensitive so users can type in lowercase, uppercase, or mixed case and still find matching products.

  ### 🎯 Target File
  `src/components/SearchBar.jsx`

  ### 🔍 Steps to Reproduce
  1. Open `http://localhost:5173`
  2. In the search bar, type `keyboard`
  3. Observe that 0 products are found.
  4. Type `Keyboard` (capital K) and notice the product appears.

  ### 💡 Hint
  Look inside `src/components/SearchBar.jsx` at the `filterProducts` function. You will want to convert both `product.name` and `searchQuery` to lowercase using `.toLowerCase()` before checking `.includes()`.
  ```

---

### Issue #4: Cart badge item counter does not increment
- **Title**: `[Good First Issue]: Shopping cart badge count remains 0 when items are added`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  When you click "Add to Cart" on any product, the item is added to the cart, but the badge number on the Navbar Cart button stays stuck at `0`.

  It should show the total count of items in the cart.

  ### 🎯 Target File
  `src/components/Navbar.jsx`

  ### 🔍 Steps to Reproduce
  1. Open `http://localhost:5173`
  2. Click "Add to Cart" on any item.
  3. Look at the top navigation bar Cart button badge. It still displays `0`.

  ### 💡 Hint
  Check `src/components/Navbar.jsx`. Find `const totalItems = 0;` and replace it with a calculation that sums the items in the `cart` prop (e.g., using `cart.reduce(...)` or `cart.length`).
  ```

---

### Issue #5: Subtotal price calculation concatenates numbers as text
- **Title**: `[Good First Issue]: Cart subtotal displays incorrect concatenated price string`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  When opening the Cart Drawer with items inside, the Subtotal displays bizarre numbers like `$08932` instead of properly adding the prices together (`$121`).

  This is happening because numbers are being converted to strings during the calculation.

  ### 🎯 Target File
  `src/components/CartDrawer.jsx`

  ### 🔍 Steps to Reproduce
  1. Add "Minimalist Mechanical Keyboard" ($89) and "Clean Code Handbook" ($32) to the cart.
  2. Click the Cart button to open the drawer.
  3. Notice the Subtotal says `$08932` instead of `$121`.

  ### 💡 Hint
  Look for the `subtotal` variable in `src/components/CartDrawer.jsx`. Fix the `reduce` accumulator so it performs numeric addition:
  `(total, item) => total + (item.price * item.quantity)`
  ```

---

### Issue #6: In-stock products display red "Out of Stock" badge
- **Title**: `[Good First Issue]: In-stock items display an Out of Stock badge`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  On the product cards, items that are available and in stock currently display a red "Out of Stock" badge, while items that are out of stock show a green "In Stock" badge.

  The badge logic is inverted.

  ### 🎯 Target File
  `src/components/ProductCard.jsx`

  ### 🔍 Steps to Reproduce
  1. Open `http://localhost:5173`
  2. Look at the product cards: items with an active "Add to Cart" button have a red "Out of Stock" badge.

  ### 💡 Hint
  Check the stock badge ternary in `src/components/ProductCard.jsx`. Check whether the condition `product.inStock ? ... : ...` has its true and false UI branches swapped.
  ```

---

### Issue #7: Add a new product in the "Audio" category
- **Title**: `[Good First Issue]: Add missing product to the Audio category`
- **Labels**: `good first issue`, `hacktoberfest`, `enhancement`
- **Description**:
  ```markdown
  ### 📌 Description
  The store has categories for "Electronics", "Books", and "Accessories", and an "Audio" filter pill, but currently there are no products in the "Audio" category.

  We need to add a new audio product (such as Noise-Cancelling Headphones or Wireless Earbuds) to the catalog data.

  ### 🎯 Target File
  `src/data/products.js`

  ### 🔍 How to complete
  1. Open `src/data/products.js`.
  2. Add a new product object to the `INITIAL_PRODUCTS` array with:
     - `id`: unique number (e.g. 9)
     - `name`: "Wireless Noise-Cancelling Headphones"
     - `category`: "Audio"
     - `price`: number (e.g. 129)
     - `rating`: 4.7
     - `reviewsCount`: 50
     - `image`: a valid Unsplash image URL
     - `description`: A short description
     - `inStock`: true
  ```

---

### Issue #8: Clear Cart button does not empty the cart
- **Title**: `[Good First Issue]: Clear Cart button has no effect when clicked`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  When items are in the cart drawer, clicking the red "Clear Cart" button does nothing.

  The button should remove all items from the cart.

  ### 🎯 Target File
  `src/components/CartDrawer.jsx`

  ### 🔍 Steps to Reproduce
  1. Add any item to the cart.
  2. Open the Cart Drawer.
  3. Click "Clear Cart" at the top right of the drawer.
  4. Notice the cart items remain unchanged.

  ### 💡 Hint
  Find the "Clear Cart" button in `src/components/CartDrawer.jsx`. Check its `onClick` attribute—it currently has an empty function `onClick={() => {}}`. Connect it to the `onClearCart` prop!
  ```

---

### Issue #9: Newsletter subscribe button provides no feedback
- **Title**: `[Good First Issue]: Newsletter subscription form does not show confirmation message`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  When a user enters their email and submits the newsletter form in the footer, nothing happens visually.

  We should update the form to display the confirmation message already built into the component (`subscribed` state) or give the user clear feedback that their submission succeeded.

  ### 🎯 Target File
  `src/components/Footer.jsx`

  ### 🔍 Steps to Reproduce
  1. Scroll down to the footer.
  2. Enter an email address in the newsletter input box and click "Subscribe".
  3. Notice that nothing happens and no confirmation message appears.

  ### 💡 Hint
  Check `handleSubscribe` inside `src/components/Footer.jsx`. It receives the form submit event. Call `setSubscribed(true)` inside the handler to reveal the confirmation message!
  ```

---

### Issue #10: Footer GitHub link points to "#"
- **Title**: `[Good First Issue]: GitHub icon in footer points to placeholder link "#"`
- **Labels**: `good first issue`, `hacktoberfest`, `bug`
- **Description**:
  ```markdown
  ### 📌 Description
  In the footer, the GitHub logo link has `href="#"` instead of linking to the actual project repository.

  It should point to the repository URL so visitors can find the source code.

  ### 🎯 Target File
  `src/components/Footer.jsx`

  ### 🔍 Steps to Reproduce
  1. Scroll down to the footer.
  2. Click the GitHub icon under the ByteShop description.
  3. Notice the browser merely jumps to the top of the page because the link is `#`.

  ### 💡 Hint
  In `src/components/Footer.jsx`, find the `<a>` tag wrapping the `<Github className="w-5 h-5" />` icon, and update its `href` to the repository URL (and add `target="_blank" rel="noopener noreferrer"`).
  ```
