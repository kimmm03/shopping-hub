const categories = [
    { name: "Coffee", icon: "☕" },
    { name: "Beauty", icon: "💄" },
    { name: "Electronics", icon: "🔌" },
    { name: "Gaming", icon: "🎮" },
    { name: "Food", icon: "🍜" },
    { name: "Home", icon: "🏠" }
];

let products = [];

const CSV_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vR5a6aGSfFO9ZJInYdoyl3aoWcbYNMnV-ZJaNW11UXU2Ty7fKCEIMxgRt1kxh27hFt8gs4UqsLEvsnb/pub?output=csv";

async function loadProducts(){

    const response = await fetch(CSV_URL);

    const csv = await response.text();

    const rows = csv.trim().split("\n");

    const headers = rows.shift();

    products = rows.map(row=>{

        const cols = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

        return{

            category: cols[0].replace(/"/g,""),

            brand: cols[1].replace(/"/g,""),

            name: cols[2].replace(/"/g,""),

            link: cols[3].replace(/"/g,"")

        };

    });

    showCategories();

}

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

loadProducts();;