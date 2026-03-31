// ===== DỮ LIỆU MENU =====
// Chỉnh sửa file này để thêm/bớt/sửa sản phẩm.
// Mỗi item gồm: id, name (tên), image (đường dẫn ảnh), price (giá, đơn vị nghìn đồng)

const MENU_ITEMS = [
    {
        id: 1,
        category: "seed-milk",
        name: "Sữa Đậu Nành",
        image: "assets/images/dau-nanh.jpg",
        price: 20
    },
    {
        id: 6,
        category: "seed-milk",
        name: "Đậu Nành Mè Đen",
        image: "assets/images/dau-nanh-me-den.jpg",
        price: 22,
        isBestSeller: true
    },
    {
        id: 7,
        category: "seed-milk",
        name: "Sữa Bắp",
        image: "assets/images/sua-bap.jpg",
        price: 22
    },
    {
        id: 8,
        category: "seed-milk",
        name: "Sữa Gạo Lứt",
        image: "assets/images/sua-gao-lut.jpg",
        price: 22
    },
    {
        id: 8,
        category: "seed-milk",
        name: "Sữa Đậu Đỏ",
        image: "assets/images/sua-dau-do.png",
        price: 22
    },
    {
        id: 2,
        category: "seed-milk",
        name: "Đậu Nành Bò",
        image: "assets/images/dau-nanh-bo.jpg",
        price: 22
    },
    {
        id: 3,
        category: "seed-milk",
        name: "Đậu Nành Bạc Hà",
        image: "assets/images/dau-nanh-bac-ha.jpg",
        price: 22,
        isBestSeller: true
    },
    {
        id: 4,
        category: "seed-milk",
        name: "Đậu Nành Cacao",
        image: "assets/images/dau-nanh-cacao.jpg",
        price: 22,
        isBestSeller: true
    },
    {
        id: 5,
        category: "seed-milk",
        name: "Đậu Nành Cacao-Mint",
        image: "assets/images/cacao-mint.jpg",
        price: 25
    },
    {
        id: 9,
        category: "seed-milk",
        name: "Hạt Điều Yến Mạch",
        image: "assets/images/hat-dieu-yen-mach.jpg",
        price: 25
    },
    {
        id: 5,
        category: "seed-milk",
        name: "Đậu Nành Matcha",
        image: "assets/images/dau-nanh-matcha.jpg",
        price: 25
    },
    {
        id: 5,
        category: "seed-milk",
        name: "Đậu Nành Cafe",
        image: "assets/images/dau-nanh-cf.png",
        price: 25
    },
    {
        id: 21,
        category: "seed-milk",
        name: "Sữa Gạo Rang - Hạt Điều - Óc Chó",
        image: "assets/images/gao-rang.jpg",
        price: 25
    },
    {
        id: 22,
        category: "seed-milk",
        name: "Hạt Điều - Yến Mạch - Đậu Xanh",
        image: "assets/images/hat-dieu-yen-mach.jpg",
        price: 25
    },
    {
        id: 23,
        category: "seed-milk",
        name: "Hạt Điều - Yến Mạch - Cacao",
        image: "assets/images/dau-nanh-cacao.jpg",
        price: 25
    },
    {
        id: 24,
        category: "seed-milk",
        name: "Sữa Hạt Điều - Yến Mạch - Củ Dền",
        image: "assets/images/sua-gao-lut.jpg",
        price: 25
    },
    {
        id: 25,
        category: "seed-milk",
        name: "Sữa Bí Đỏ - Hạt Điều - Mè Đen",
        image: "assets/images/Bido.jpg",
        price: 25
    },
    {
        id: 26,
        category: "seed-milk",
        name: "Sữa Bắp - Bí Đỏ - Hạt Điều",
        image: "assets/images/sua-bap.jpg",
        price: 25
    },
    {
        id: 27,
        category: "coffee-latte",
        name: "Cafe Phê Đá",
        image: "assets/images/dau-nanh-cf.png",
        price: 20
    },
    {
        id: 28,
        category: "coffee-latte",
        name: "Cafe Phê Sữa",
        image: "assets/images/dau-nanh-cf.png",
        price: 22
    },
    {
        id: 29,
        category: "coffee-latte",
        name: "Bạc Xỉu",
        image: "assets/images/dau-nanh-cf.png",
        price: 22
    },
    {
        id: 31,
        category: "coffee-latte",
        name: "Matcha Latte",
        image: "assets/images/matcha-latte.png",
        price: 25
    },
    {
        id: 32,
        category: "coffee-latte",
        name: "Cacao Latte",
        image: "assets/images/cacao-latte.png",
        price: 25
    },
    {
        id: 100,
        category: "extras",
        name: "Up Size Lớn",
        image: "assets/images/sua-bap.jpg", // Placeholder until real image is available
        price: 7
    },
    {
        id: 101,
        category: "extras",
        name: "Trân Châu 3Q",
        image: "assets/images/gao-rang.jpg", // Placeholder until real image is available
        price: 7
    },
    {
        id: 102,
        category: "extras",
        name: "Thạch Sương Sáo",
        image: "assets/images/gao-rang.jpg", // Placeholder until real image is available
        price: 7
    },
    {
        id: 103,
        category: "extras",
        name: "Kem Mặn",
        image: "assets/images/gao-rang.jpg", // Placeholder until real image is available
        price: 7
    }
];
