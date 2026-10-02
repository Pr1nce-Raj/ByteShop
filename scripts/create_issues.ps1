# PowerShell Script to automatically create all 10 ByteShop issues on GitHub
# Prerequisites: Install GitHub CLI (gh) from https://cli.github.com/ and run `gh auth login`

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " ByteShop GitHub Issues Generator " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check if gh CLI is installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "[!] GitHub CLI ('gh') is not installed on your system." -ForegroundColor Yellow
    Write-Host "    You can create the issues manually by copying from 'issues/ISSUES_CATALOG.md'," -ForegroundColor Yellow
    Write-Host "    or install GitHub CLI via 'winget install GitHub.cli' and run this script again." -ForegroundColor Yellow
    Exit
}

$issues = @(
    @{
        title = "[Good First Issue]: Fix typo in store banner headline"
        body = "There is a spelling mistake in the main hero banner on the homepage. It currently says 'Welcome to BtyeShop'. Please fix it to 'Welcome to ByteShop' in `src/components/Banner.jsx`."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: Add your name to CONTRIBUTORS.md"
        body = "Welcome to ByteShop! As your first contribution, add your name, GitHub profile link, and favorite gadget to `CONTRIBUTORS.md` under the Contributors List."
        labels = "good first issue,hacktoberfest,documentation"
    },
    @{
        title = "[Good First Issue]: Search filter in SearchBar is case-sensitive"
        body = "Searching in lowercase (e.g., 'keyboard') returns 0 products because search is case-sensitive. Update `filterProducts` in `src/components/SearchBar.jsx` to use `.toLowerCase()`."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: Shopping cart badge count remains 0 when items are added"
        body = "When items are added to the cart, the cart button badge stays at 0. Update `src/components/Navbar.jsx` to dynamically calculate the total items from the cart prop."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: Cart subtotal displays incorrect concatenated price string"
        body = "The subtotal in `src/components/CartDrawer.jsx` concatenates numbers as text (e.g. '$08932') instead of numeric addition. Fix the reduce accumulator logic."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: In-stock items display an Out of Stock badge"
        body = "Available products display a red 'Out of Stock' badge because the ternary condition is inverted in `src/components/ProductCard.jsx`. Fix the condition so in-stock items display 'In Stock'."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: Add missing product to the Audio category"
        body = "The store has an 'Audio' category filter, but there are no audio items in the catalog. Add a new product object with category 'Audio' (e.g. Wireless Headphones) to `src/data/products.js`."
        labels = "good first issue,hacktoberfest,enhancement"
    },
    @{
        title = "[Good First Issue]: Clear Cart button has no effect when clicked"
        body = "In `src/components/CartDrawer.jsx`, clicking 'Clear Cart' does nothing because the onClick handler is empty. Connect it to the `onClearCart` prop."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: Newsletter subscription form does not show confirmation message"
        body = "Submitting the newsletter form in `src/components/Footer.jsx` gives no feedback. Update `handleSubscribe` to call `setSubscribed(true)`."
        labels = "good first issue,hacktoberfest,bug"
    },
    @{
        title = "[Good First Issue]: GitHub icon in footer points to placeholder link '#'"
        body = "The GitHub icon in `src/components/Footer.jsx` has `href='#'`. Replace it with your actual GitHub repository URL."
        labels = "good first issue,hacktoberfest,bug"
    }
)

foreach ($issue in $issues) {
    Write-Host "Creating: $($issue.title)..." -ForegroundColor Green
    gh issue create --title $issue.title --body $issue.body --label $issue.labels
}

Write-Host "`nAll 10 issues created successfully!" -ForegroundColor Cyan
