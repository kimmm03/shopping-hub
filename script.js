const categories = [
    { name: "Coffee", icon: "☕" },
    { name: "Beauty", icon: "💄" },
    { name: "Electronics", icon: "🔌" },
    { name: "Gaming", icon: "🎮" },
    { name: "Food", icon: "🍜" },
    { name: "Home", icon: "🏠" }
];

const products = [
    {
        category: "Coffee",
        brand: "ZUS",
        name: "ZUS Voucher",
        link: "https://s.shopee.com.my/3B5Jt1ShBW"
    },
    {
        category: "Coffee",
        brand: "CBTL",
        name: "CBTL Voucher",
        link: "https://s.shopee.com.my/4qDXsUVMaB"
    },
    {
        category: "Food",
        brand: "Anas",
        name: "Anas Product",
        link: "https://s.shopee.com.my/20tMVZotcq"
    },
    {
        category: "Home",
        brand: "BNB",
        name: "BNB Product",
        link: "https://s.shopee.com.my/50Wy5BjzNA"
    },
    {
        category: "Gaming",
        brand: "Sony",
        name: "PS5 Product",
        link: "https://s.shopee.com.my/1LdfiWwTg2"
    },
    {
        category: "Electronics",
        brand: "UGREEN",
        name: "UGREEN Power Bank",
        link: "https://s.shopee.com.my/8KnQ3a92VO"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skintific Matte",
        link: "https://s.shopee.com.my/80AZf1idbr"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skintific Glow",
        link: "https://s.shopee.com.my/1BKFWUUNre"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skintific UV",
        link: "https://s.shopee.com.my/9UzNRpWhHv"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skintific Mask",
        link: "https://s.shopee.com.my/9fIneAefnX"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skintific Setting Spray",
        link: "https://s.shopee.com.my/8fQGSM44g5"
    },
    {
        category: "Beauty",
        brand: "Unknown",
        name: "Low PH Cleanser",
        link: "https://s.shopee.com.my/1LdfivCUgh"
    },
    {
        category: "Beauty",
        brand: "Skintific",
        name: "Skin Tint",
        link: "https://s.shopee.com.my/9UzNRztKa2"
    },
    {
        category: "Food",
        brand: "Sambal Nyet",
        name: "Sambal Nyet",
        link: "https://s.shopee.com.my/3LOk6oduhH"
    },
    {
        category: "Home",
        brand: "Portable Fan",
        name: "Portable Fan",
        link: "https://s.shopee.com.my/6pycHIBYlf"
    },
    {
        category: "Food",
        brand: "Kuaci",
        name: "Kuaci",
        link: "https://s.shopee.com.my/AAF4FY1YBd"
    }
];

const content = document.getElementById("content");
const backBtn = document.getElementById("backBtn");
const search = document.getElementById("search");

function showCategories() {

    backBtn.style.display = "none";

    content.innerHTML = "";

    categories.forEach(category => {

        const total = products.filter(p => p.category === category.name).length;

        content.innerHTML += `
        
        <div class="col-md-4">

            <div class="card-item" onclick="showProducts('${category.name}')">

                <div class="icon">${category.icon}</div>

                <div class="name">${category.name}</div>

                <div class="count">${total} Products</div>

            </div>

        </div>

        `;

    });

}

function showProducts(category){

    backBtn.style.display = "inline-block";

    content.innerHTML = "";

    const filtered = products.filter(p => p.category === category);

    filtered.forEach(product=>{

        content.innerHTML += `

        <div class="col-md-4">

            <div class="product-card">

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="brand">
                    ${product.brand}
                </div>

                <button
                class="open-btn"
                onclick="window.open('${product.link}','_blank')">

                🛒 Open Shopee

                </button>

            </div>

        </div>

        `;

    });

}

backBtn.addEventListener("click",()=>{

    showCategories();

});

search.addEventListener("keyup",()=>{

    const keyword = search.value.toLowerCase();

    if(keyword==""){

        showCategories();
        return;

    }

    backBtn.style.display="inline-block";

    content.innerHTML="";

    const result = products.filter(product=>

        product.name.toLowerCase().includes(keyword) ||

        product.brand.toLowerCase().includes(keyword)

    );

    result.forEach(product=>{

        content.innerHTML+=`

        <div class="col-md-4">

            <div class="product-card">

                <div class="product-name">

                    ${product.name}

                </div>

                <div class="brand">

                    ${product.brand}

                </div>

                <button

                class="open-btn"

                onclick="window.open('${product.link}','_blank')">

                🛒 Open Shopee

                </button>

            </div>

        </div>

        `;

    });

});

showCategories();