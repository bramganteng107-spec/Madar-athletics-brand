let storeItems = [
    {id: 1, name: `Madar Goggles V3`, img: `images/goggles-aydar.jpg`, desc: `Crystal-clear vision and a watertight seal for every lap.`},
    {id: 2, name: `Madar Jump Rope Ultra`, img: `images/rope-aydar.jpg`, desc: `Lightweight, fast-spinning design built for serious cardio.`},
    {id: 3, name: `Madar Pull Buoy Xtra`, img: `images/buoy-aydar.webp`, desc: `Optimal buoyancy that isolates your upper body for a stronger pull.`},
    {id: 4, name: `Madar Fins Final`, img: `images/fins-aydar.jpg`, desc: `Powerful propulsion with a comfortable fit for longer sessions.`},
    {id: 5, name: `Madar Soccer Shoes UltimaX`, img: `images/spikeShoes-aydar.webp`, desc: `Precision grip and explosive traction on every surface.`},
    {id: 6, name: `Madar Running Shoes Kalam`, img: `images/shoes-aydar.webp`, desc: `Responsive cushioning that keeps you light on your feet, mile after mile.`}
];

const storeGrid = document.querySelector(`.store-grid`);

storeItems.forEach(item => {
    const div = document.createElement(`div`);
    const textDiv = document.createElement(`div`);
    const a = document.createElement(`a`);
    const h3 = document.createElement(`h3`);
    const p = document.createElement(`p`);
    const img = document.createElement(`img`);

    h3.textContent = item.name;
    p.textContent = item.desc;
    
    // CHANGE THIS: Route to product.html with the correct query parameter ID
    a.href = `product.html?id=${item.id}`;
    
    div.classList.add(`store-grid-card`);
    textDiv.classList.add(`sgc-textDiv`);
    img.src = item.img;
    img.alt = item.name;

    textDiv.append(h3, p)
    a.append(img, textDiv);
    div.append(a);
    storeGrid.append(div);
});

document.querySelectorAll(`summary`).forEach(item => {
    item.addEventListener(`click`, () => {
        document.querySelectorAll(`details`).forEach(d => {
            if (d !== item.parentElement) d.open = false;
        });
    });
});


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