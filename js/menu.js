// ===== Menu Renderer, Price Editor & PDF Export =====

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();
    initPriceEditing();
});

// Render menu items from MENU_ITEMS data
function renderMenuItems() {
    const grid = document.getElementById('menu-grid');
    if (!grid || typeof MENU_ITEMS === 'undefined') return;

    const categoryNames = {
        'seed-milk': 'Sữa Hạt',
        'coffee-latte': 'Coffee & Latte',
        'extras': 'Topping & Up Size'
    };
    const categoryIcons = {
        'seed-milk': '🥛🌱',
        'coffee-latte': '☕✨',
        'extras': '✨🍮'
    };

    let html = '';
    let currentCategory = '';

    MENU_ITEMS.forEach(item => {
        if (item.category !== currentCategory) {
            currentCategory = item.category;
            html += `
                <div class="category-divider ${currentCategory}">
                    <div class="divider-line"></div>
                    <div class="divider-content">
                        <span class="divider-icon">${categoryIcons[currentCategory] || ''}</span>
                        <h2 class="divider-title">${categoryNames[currentCategory] || currentCategory}</h2>
                        <span class="divider-icon">${categoryIcons[currentCategory] || ''}</span>
                    </div>
                </div>
            `;
        }

        html += `
            <div class="menu-item">
                <div class="item-image-wrapper">
                    ${item.isBestSeller ? '<span class="best-seller-badge">Best Seller</span>' : ''}
                    <div class="item-mask">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <span class="price-badge ${item.category || ''}" contenteditable="true" id="price-${item.id}">${item.price}</span>
                </div>
                <p class="item-name">${item.name}</p>
            </div>
        `;
    });

    grid.innerHTML = html;

    const itemCount = MENU_ITEMS.length;
    const cols = 5;
    const rows = Math.ceil(itemCount / cols) + 2; // +2 for headers
    
    document.documentElement.style.setProperty('--grid-cols', cols);

    if (rows > 5 || itemCount > 15) {
        grid.classList.add('compact-mode');
        let scaleRatio = 0.65; // Slightly smaller to fit headers
        document.documentElement.style.setProperty('--item-scale', scaleRatio);
    } else {
        grid.classList.remove('compact-mode');
        document.documentElement.style.setProperty('--item-scale', '0.85');
    }
}

// Initialize price badge editing
function initPriceEditing() {
    const tooltip = document.querySelector('.tooltip');

    document.addEventListener('focusin', (e) => {
        if (!e.target.classList.contains('price-badge')) return;
        const badge = e.target;

        // Select all text on focus
        const range = document.createRange();
        range.selectNodeContents(badge);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        showTooltip('Nhập giá mới rồi nhấn Enter');
    });

    document.addEventListener('focusout', (e) => {
        if (!e.target.classList.contains('price-badge')) return;
        const badge = e.target;

        // Clean up - remove non-numeric chars
        let val = badge.textContent.replace(/[^0-9.]/g, '');
        if (!val || val === '0') val = '0';
        badge.textContent = val;
        hideTooltip();
    });

    document.addEventListener('keydown', (e) => {
        if (!e.target.classList.contains('price-badge')) return;

        // Allow: backspace, delete, tab, escape, enter, arrows
        if ([8, 9, 13, 27, 37, 38, 39, 40, 46].includes(e.keyCode)) {
            if (e.keyCode === 13) {
                e.preventDefault();
                e.target.blur();
            }
            return;
        }
        // Block non-numeric
        if ((e.key < '0' || e.key > '9') && e.key !== '.') {
            e.preventDefault();
        }
    });

    document.addEventListener('paste', (e) => {
        if (!e.target.classList.contains('price-badge')) return;
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text');
        const clean = text.replace(/[^0-9.]/g, '');
        document.execCommand('insertText', false, clean);
    });

    // Tooltip helpers
    function showTooltip(msg) {
        if (tooltip) {
            tooltip.textContent = msg;
            tooltip.classList.add('show');
        }
    }

    function hideTooltip() {
        if (tooltip) {
            tooltip.classList.remove('show');
        }
    }
}

// PDF Export via browser print
function exportPDF() {
    // Remove focus from any editable element
    document.activeElement.blur();

    // Small delay to let blur take effect
    setTimeout(() => {
        window.print();
    }, 200);
}
