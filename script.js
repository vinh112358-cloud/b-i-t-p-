// Mock Data for Inventory
const products = [
    {
        id: 1,
        name: "Má Phanh Ceramic Premium",
        price: 1200000,
        wholesale_price: 850000,
        type: "OEM",
        category: "gas",
        image: "brake-pad.jpg"
    },
    {
        id: 2,
        name: "Lọc Dầu Chính Hãng Mazda",
        price: 350000,
        wholesale_price: 220000,
        type: "OEM",
        category: "gas",
        image: "oil-filter.jpg"
    },
    {
        id: 3,
        name: "Màn Hình Android 4K Ultra",
        price: 8500000,
        wholesale_price: 6000000,
        type: "Aftermarket",
        category: "ev",
        image: "screen.jpg"
    },
    {
        id: 4,
        name: "Thảm Lót Sàn VinFast VF8 (3D)",
        price: 2100000,
        wholesale_price: 1500000,
        type: "Aftermarket",
        category: "ev",
        image: "mat.jpg"
    },
    {
        id: 5,
        name: "Bộ Sạc Wallbox 7.4kW",
        price: 9500000,
        wholesale_price: 8000000,
        type: "OEM",
        category: "ev",
        image: "charger.jpg"
    },
    {
        id: 6,
        name: "Nhớt Motul 8100 X-cess",
        price: 1100000,
        wholesale_price: 850000,
        type: "Aftermarket",
        category: "gas",
        image: "oil.jpg"
    }
];

// App State
let isB2B = false;

// DOM Elements
const productList = document.getElementById('product-list');
const b2bBtn = document.getElementById('b2b-login-btn');

// Render Products
function renderProducts() {
    productList.innerHTML = '';

    products.forEach(product => {
        const priceDisplay = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);
        const wholesaleDisplay = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.wholesale_price);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="badge ${product.type === 'OEM' ? 'badge-oem' : 'badge-aftermarket'}">${product.type}</span>
            <h4 style="margin-top: 12px; font-size: 18px;">${product.name}</h4>
            <div class="price">
                ${priceDisplay}
            </div>
            ${isB2B ? `<div class="price-wholesale">Giá thợ: ${wholesaleDisplay}</div>` : ''}
            <button class="btn btn-outline" style="width: 100%; margin-top: 16px; font-size: 14px;">Thêm Giỏ Hàng</button>
        `;
        productList.appendChild(card);
    });
}

// B2B Toggle Logic
b2bBtn.addEventListener('click', () => {
    isB2B = !isB2B;
    if (isB2B) {
        b2bBtn.innerText = "Đăng Xuất (Đại Lý)";
        b2bBtn.style.background = "var(--primary)";
        b2bBtn.style.color = "white";
        b2bBtn.style.border = "none";
    } else {
        b2bBtn.innerText = "Đăng Nhập Đại Lý";
        b2bBtn.style.background = "transparent";
        b2bBtn.style.color = "var(--text-main)";
        b2bBtn.style.border = "1px solid var(--text-muted)";
    }
    renderProducts();
});

// Mock Search Logic
function handleSearch() {
    const inputs = document.querySelectorAll('.search-input');
    let hasValue = false;
    inputs.forEach(input => {
        if (input.value.trim() !== "") hasValue = true;
    });

    if (hasValue) {
        alert("🔍 Đang tìm kiếm phụ tùng phù hợp trong kho AutoMega...");
        // In real app, this would filter the product list
        setTimeout(() => {
            alert("✅ Đã tìm thấy 15 kết quả phù hợp cho xe của bạn!");
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    } else {
        alert("Vui lòng nhập thông tin xe để tìm kiếm chính xác.");
    }
}

// Initial Render
renderProducts();
