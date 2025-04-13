function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Nếu sản phẩm đã có trong giỏ, chỉ tăng số lượng
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

$(document).ready(function () {
    const products = [
        { name: "Bút cao cấp thiên long - bizer", img: "/img/but1.png" },
        { name: "Bút cao cấp Parker", img: "/img/but2.png" },
        { name: "Bút cao cấp Son-X", img: "/img/but3.png" },
        { name: "Bút cao cấp Son-Y", img: "/img/but4.png" },
        { name: "Bút lông thiên long - bizer", img: "/img/butlong1.png" },
        { name: "Bút lông Parker", img: "/img/butlong2.png" },
        { name: "Bút lông Son-X", img: "/img/butlong3.png" },
        { name: "Bút lông Son-Y", img: "/img/butlong4.png" },
        { name: "Bấm Kim", image: "/img/bamKim.png"},
        { name: "Bút Long Bảng", image: "/img/butLongBang.png"},
        { name: "Combo 12 Bút", image: "/img/combo12But.png" },
        { name: "Máy Tính Văn Phòng", image: "/img/mayTinhVanPhong.png"},
        { name: "Túi Giấy", image: "/img/tuiGiay.png" },
        { name: "Nhà Lãnh Đạo", image: "/img/nhaLanhDao.png"},
        {
            name: "Thước Trong", image: "/img/thuocTrong.png"},
        { name: "Khẩu trang xanh", image: "/img/butlong1.png"},
        { name: "Khẩu trang vip", image: "/img/butlong2.png" },
        { name: "Khẩu trang diệt khuẩn", image: "/img/butlong3.png"},
        { name: "Bút lông copypaper", image: "/img/butlong4.png" },
    ];

    $("#searchInput").on("input", function () {
        const query = $(this).val().toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        $("#suggestions").empty();

        if (query !== "") {
            filteredProducts.forEach(product => {
                $("#suggestions").append(`
                    <div class="suggestion-item">${product.name}</div>
                `);
            });
            $("#suggestions").show();
        } else {
            $("#suggestions").hide();
        }
    });

    $(document).on("click", ".suggestion-item", function () {
        const productName = $(this).text();
        $("#searchInput").val(productName);
        $("#suggestions").hide();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest("#searchInput, #suggestions").length) {
            $("#suggestions").hide();
        }
    });
});

