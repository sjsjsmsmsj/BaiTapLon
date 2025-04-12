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
        // Thêm các sản phẩm khác vào đây...
    ];

    $("#searchInput").on("input", function () {
        const query = $(this).val().toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        
        // Clear previous suggestions
        $("#suggestions").empty();

        if (query !== "") {
            filteredProducts.forEach(product => {
                $("#suggestions").append(`
                    <div class="suggestion-item">
                        <img src="${product.img}" alt="${product.name}">
                        <span>${product.name}</span>
                    </div>
                `);
            });
            $("#suggestions").show();
        } else {
            $("#suggestions").hide();
        }
    });

    // Khi nhấp vào gợi ý
    $(document).on("click", ".suggestion-item", function () {
        const productName = $(this).text();
        $("#searchInput").val(productName);
        $("#suggestions").hide();
    });

    // Ẩn gợi ý khi nhấp ra ngoài
    $(document).click(function (event) {
        if (!$(event.target).closest("#searchInput, #suggestions").length) {
            $("#suggestions").hide();
        }
    });
});
