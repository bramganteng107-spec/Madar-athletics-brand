let fullStoreItems = [
    {id: 1, category: `Swimming`, name: `Madar Goggles V3`, price: `$29.99`, stock: 45, img: `images/goggles-aydar.jpg`, desc: `Anti-fog, wide-view swim goggles designed for ultimate clarity.`},
    {id: 2, category: `Fitness`, name: `Madar Jump Rope Ultra`, price: `$19.99`, stock: 60, img: `images/rope-aydar.jpg`, desc: `High-speed adjustable jump rope built for intense cardio workouts.`},
    {id: 3, category: `Swimming`, name: `Madar Pull Buoy Xtra`, price: `$24.99`, stock: 25, img: `images/buoy-aydar.webp`, desc: `Premium foam training buoy designed to improve upper body strength.`},
    {id: 4, category: `Swimming`, name: `Madar Fins Final`, price: `$39.99`, stock: 20, img: `images/fins-aydar.jpg`, desc: `High-efficiency training fins engineered to maximize kick power.`},
    {id: 5, category: `Soccer`, name: `Madar Soccer Shoes UltimaX`, price: `$89.99`, stock: 15, img: `images/spikeShoes-aydar.webp`, desc: `High-traction firm ground cleats designed for precise ball control.`},
    {id: 6, category: `Running`, name: `Madar Running Shoes Kalam`, price: `$99.99`, stock: 18, img: `images/shoes-aydar.webp`, desc: `Lightweight and responsive running shoes built for maximum speed.`},
    {id: 7, category: `Swimming`, name: `Madar Swim Cap Pro`, price: `$14.99`, stock: 80, img: ``, desc: `Durable ergonomic silicone cap designed to reduce water drag.`},
    {id: 8, category: `Swimming`, name: `Madar Kickboard Elite`, price: `$34.99`, stock: 22, img: ``, desc: `Sturdy hydrodynamic training board designed to improve leg strength.`},
    {id: 9, category: `Swimming`, name: `Madar Paddle Set X`, price: `$44.99`, stock: 15, img: ``, desc: `Contoured power swim paddles designed to improve stroke technique.`},
    {id: 10, category: `Swimming`, name: `Madar Swim Bag Ultra`, price: `$49.99`, stock: 12, img: ``, desc: `Waterproof spacious mesh backpack designed for wet swimming gear.`},
    {id: 11, category: `Running`, name: `Madar Running Shoes Veld`, price: `$109.99`, stock: 14, img: ``, desc: `Cushioned high-mileage road shoes designed for everyday runners.`},
    {id: 12, category: `Running`, name: `Madar Trail Shoes Apex`, price: `$119.99`, stock: 10, img: ``, desc: `Rugged multi-surface trail shoes designed for off-road adventures.`},
    {id: 13, category: `Running`, name: `Madar Running Socks Pro`, price: `$12.99`, stock: 100, img: ``, desc: `Moisture-wicking blister-free socks designed for long distances.`},
    {id: 14, category: `Running`, name: `Madar Arm Sleeve Run`, price: `$18.99`, stock: 40, img: ``, desc: `Lightweight compression arm sleeves designed for UV protection.`},
    {id: 15, category: `Soccer`, name: `Madar Soccer Ball Match`, price: `$39.99`, stock: 35, img: ``, desc: `Premium textured match-grade ball designed for optimal flight.`},
    {id: 16, category: `Soccer`, name: `Madar Shin Guards Ultra`, price: `$24.99`, stock: 30, img: ``, desc: `Impact-resistant lightweight guards designed for secure protection.`},
    {id: 17, category: `Soccer`, name: `Madar Soccer Gloves GK`, price: `$49.99`, stock: 12, img: ``, desc: `High-grip latex goalkeeper gloves designed for superior control.`},
    {id: 18, category: `Soccer`, name: `Madar Soccer Shoes Drift`, price: `$79.99`, stock: 16, img: ``, desc: `Versatile low-profile soccer shoes designed for artificial turf.`},
    {id: 19, category: `Fitness`, name: `Madar Resistance Band Set`, price: `$22.99`, stock: 55, img: ``, desc: `Multi-level premium resistance bands designed for full-body workouts.`},
    {id: 20, category: `Fitness`, name: `Madar Gym Gloves Grip`, price: `$17.99`, stock: 45, img: ``, desc: `Breathable padded lifting gloves designed for maximum palm protection.`},
    {id: 21, category: `Fitness`, name: `Madar Lifting Belt Core`, price: `$54.99`, stock: 15, img: ``, desc: `Heavy-duty contoured leather belt designed for lower back support.`},
    {id: 22, category: `Fitness`, name: `Madar Foam Roller Pro`, price: `$29.99`, stock: 28, img: ``, desc: `High-density deep tissue roller designed for muscle recovery.`},
    {id: 23, category: `Fitness`, name: `Madar Yoga Mat Ultra`, price: `$34.99`, stock: 40, img: ``, desc: `Extra-thick non-slip fitness mat designed for floor exercises.`},
    {id: 24, category: `Fitness`, name: `Madar Dumbbell Set Flex`, price: `$89.99`, stock: 8, img: ``, desc: `Ergonomic non-slip neoprene dumbbells designed for home strength.`},
    {id: 25, category: `Accessories`, name: `Madar Sport Bottle X`, price: `$19.99`, stock: 75, img: ``, desc: `BPA-free insulated stainless steel bottle designed for athletes.`},
    {id: 26, category: `Accessories`, name: `Madar Sport Towel Pro`, price: `$14.99`, stock: 90, img: ``, desc: `Ultra-absorbent quick-drying microfiber towel designed for the gym.`},
    {id: 27, category: `Accessories`, name: `Madar Gym Bag Elite`, price: `$59.99`, stock: 20, img: ``, desc: `Heavy-duty water-resistant duffel bag designed with shoe compartments.`},
    {id: 28, category: `Accessories`, name: `Madar Sport Cap UV`, price: `$24.99`, stock: 35, img: ``, desc: `Breathable lightweight running cap designed with sun protection.`},
    {id: 29, category: `Accessories`, name: `Madar Compression Sleeve`, price: `$16.99`, stock: 50, img: ``, desc: `Elastic multi-sport support sleeve designed for muscle fatigue.`},
    {id: 30, category: `Accessories`, name: `Madar Sport Headband`, price: `$9.99`, stock: 110, img: ``, desc: `Stretchy moisture-wicking sweatband designed for intense workouts.`},
    {id: 31, category: `Accessories`, name: `Madar Phone Arm Strap`, price: `$14.99`, stock: 40, img: ``, desc: `Adjustable touchscreen-friendly armband designed for secure storage.`},
    {id: 32, category: `Accessories`, name: `Madar Shoe Bag Carry`, price: `$12.99`, stock: 65, img: ``, desc: `Compact ventilated travel pouch designed to protect your footwear.`},
    {id: 33, category: `Running`, name: `Madar Running Vest Light`, price: `$69.99`, stock: 14, img: ``, desc: `Ultralight breathable hydration vest designed for trail runners.`},
    {id: 34, category: `Soccer`, name: `Madar Training Cones Set`, price: `$19.99`, stock: 50, img: ``, desc: `High-visibility flexible agility cones designed for sports drills.`},
    {id: 35, category: `Fitness`, name: `Madar Pull Up Bar Pro`, price: `$44.99`, stock: 18, img: ``, desc: `Heavy-duty adjustable doorway bar designed for upper body strength.`},
    {id: 36, category: `Swimming`, name: `Madar Nose Clip Set`, price: `$7.99`, stock: 120, img: ``, desc: `Flexible secure-fit silicone clips designed to keep water out.`},
];


const themeBtn = document.querySelector(`#themeBtn`);
const savedTheme = localStorage.getItem(`theme`);
if (savedTheme) {
    document.documentElement.setAttribute(`data-theme`, savedTheme);
    themeBtn.textContent = `Turn ${savedTheme === `dark` ? `light` : `dark`}`;
}

themeBtn.addEventListener(`click`, () => {
    const beforeTheme = document.documentElement.getAttribute(`data-theme`);
    const afterTheme = beforeTheme === `dark` ? `light` : `dark`;

    document.documentElement.setAttribute(`data-theme`, afterTheme);
    themeBtn.textContent = `Turn ${afterTheme === `dark` ? `light` : `dark`}`;

    localStorage.setItem(`theme`, afterTheme);
});

document.querySelector(`#hamburgerBtn`).addEventListener(`click`, () => {
    document.querySelector(`.dock`).classList.toggle(`open`);
});


const layoutBtn = document.querySelector(`#layoutToggleBtn`);

layoutBtn.addEventListener(`click`, () => {
    const store = document.querySelector(`.storeHtml .store`);
    let beforeLayout = store.getAttribute(`data-layout`);
    beforeLayout ??= `rows`;
    const afterLayout = beforeLayout === `grid` ? `rows` : `grid`;

    store.setAttribute(`data-layout`, afterLayout);
    layoutBtn.textContent = `Turn ${afterLayout === `grid` ? `rows` : `grid`}`;
});

let productState = {
    itemOrder: null,
    selectedCategory: null,
    sortBy: null,
    userSearch: null
}

const filterBtn = document.querySelector(`#filterToggleBtn`);
const sortSelect = document.querySelector(`#sortSelect`);
const orderSelect = document.querySelector(`#orderSelect`);
const categorySelect = document.querySelector(`#categorySelect`);
const searchBar = document.querySelector(`#searchBar`);

filterBtn.addEventListener(`click`, () => {
    const filtersDiv = document.querySelector(`.selectFlex`);
    filtersDiv.classList.toggle(`open`);
    filtersDiv.classList.contains(`open`) ? filterBtn.textContent = `Turn off filters` : filterBtn.textContent = `Turn on filters`;

    if (!filtersDiv.classList.contains(`open`)) {
        productState.itemOrder = `ascending`;
        productState.sortBy = `Sort by`;
        productState.selectedCategory = `All categories`;

        orderSelect.value = productState.itemOrder;
        sortSelect.value = productState.sortBy;
        categorySelect.value = productState.selectedCategory;
        productRender();
    };
});

searchBar.addEventListener(`input`, () => {
    productState.userSearch = searchBar.value.toLowerCase().trim();
    productRender();
});

sortSelect.addEventListener(`change`, () => {
    productState.sortBy = sortSelect.value.toLowerCase();
    productRender();
})
orderSelect.addEventListener(`change`, () => {
    productState.itemOrder = orderSelect.value.toLowerCase();
    productRender();
})
categorySelect.addEventListener(`change`, () => {
    productState.selectedCategory = categorySelect.value.toLowerCase();
    productRender();
})


let currentPage = 1;
let itemsPerPage = 10;

checkPage(fullStoreItems, itemsPerPage);

function checkPage(array, itemPerPage) {
    const pagination = document.querySelector(`.storeHtml .pagination`);
    const numberOfPages = Math.ceil(array.length / itemPerPage);

    pagination.innerHTML = ``;

    if (numberOfPages <= 1) return;

    for (let i = 1; i <= numberOfPages; i++) {
        const button = document.createElement(`button`);
        button.classList.add(`pageBtn`);
        button.textContent = i;

        pagination.append(button);
    };

    const paginationButtons = document.querySelectorAll(`.pageBtn`);
    paginationButtons.forEach(item => {
        item.addEventListener(`click`, () => {
            currentPage = Number(item.textContent);
            productRender();
        });
    });

    const button = document.createElement(`button`);
    button.textContent = `<`;
    button.id = `prevPageBtn`;

    const button2 = document.createElement(`button`);
    button2.textContent = `>`;
    button2.id = `nextPageBtn`;

    pagination.append(button2);
    pagination.prepend(button);

    button2.addEventListener(`click`, () => {
        currentPage++;
        productRender();
    });
    button.addEventListener(`click`, () => {
        currentPage--;
        productRender();
    });

    if (currentPage === 1) {
        button.disabled = true;
        button.classList.add(`disabled`);
    } else if (currentPage === numberOfPages) {
        button2.disabled = true;
        button2.classList.add(`disabled`);
    } else {
        button.disabled = false;
        button2.disabled = false;
        button.classList.remove(`disabled`);
        button2.classList.remove(`disabled`);
    };
};

productRender();

function productRender() {
    const store = document.querySelector(`.storeHtml .store`);
    store.innerHTML = ``;

    const filteredProducts = fullStoreItems.filter(item => {
        const matchesCategory = categorySelect.value.toLowerCase() === item.category.toLowerCase() || categorySelect.value.toLowerCase() === `all categories`;
        const matchesSearch = item.name.toLowerCase().includes(searchBar.value.toLowerCase().trim());
        return matchesCategory && matchesSearch;
    });

    const maxPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
    if (currentPage > maxPages) {
        currentPage = 1;
    }

    if (productState.sortBy?.trim().toLowerCase() === `price`) {
        filteredProducts.sort((a, b) => parseFloat(a.price.replace(`$`, ``)) - parseFloat(b.price.replace(`$`, ``)));
    } else if (productState.sortBy?.trim().toLowerCase() === `stock`) {
        filteredProducts.sort((a, b) => a.stock - b.stock);
    } else if (productState.sortBy?.trim().toLowerCase() === `name`) {
        filteredProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }

    if (productState.itemOrder?.trim().toLowerCase() === `descending`) {
        filteredProducts.reverse();
    }

    checkPage(filteredProducts, itemsPerPage);

    filteredProducts.forEach((item, index) => {
        const div = createItems(item);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        if (start > index || end <= index) div.style.display = `none`;
        store.append(div);
    });

    const freshPages = [...document.querySelectorAll(`.pageBtn`)];

    if (freshPages.length > 3) {
        let activeItem = null;
        
        freshPages.forEach(item => {
            if (Number(item.textContent) === currentPage) {
                item.classList.add(`open`);
                activeItem = item;
            } else {
                item.classList.remove(`open`);
            };
        });

        let lowerItem = Number(activeItem.textContent) - 1;
        let higherItem = Number(activeItem.textContent) + 1;

        if (lowerItem === 0) {
            lowerItem = null;
        } else if (higherItem > Number(freshPages[freshPages.length - 1].textContent)) {
            higherItem = null;
        }

        const shownPages = freshPages.filter(item => {
            const pageNum = Number(item.textContent);

            return pageNum === lowerItem || 
                   pageNum === Number(activeItem.textContent) || 
                   pageNum === higherItem;
        });

        freshPages.forEach(item => item.style.display = `none`);
        shownPages.forEach(item => item.style.display = `block`);

        if (shownPages.length === 2 && Number(activeItem.textContent) === 1) {
            freshPages[2].style.display = `block`;
        } else if (shownPages.length === 2 && Number(activeItem.textContent) === Number(shownPages.at(-1).textContent)) {
            freshPages.at(-3).style.display = `block`;
        };

        return;
    };

    freshPages.forEach(item => {
        if (Number(item.textContent) === currentPage) {
            item.classList.add(`open`);
        } else {
            item.classList.remove(`open`);
        }
    });
};

function createItems(item) {
    const div = document.createElement(`div`);
    
    div.innerHTML = `
        <img src="${item.img}" alt="errs">
        <div class="textDiv">
            <h2>${item.name}</h2>
            <p>${item.desc}</p>
        </div>
        <div class="checkoutDiv">
            <p>${item.price}</p>
            <a href="product.html?id=${item.id}">Buy</a>
        </div>
    `;

    return div;
};
