const components = [{
    img:"../images/Crime.webp",
    profile:"../icons/Crime-icon.jpg",
    title:"Behind Bars:Hard Time....",
    name:"Criminals...",
    view:"1.6M views . 1 Year ago"
}, {
    img:"../images/Internet.webp",
    profile:"../icons/f.jpg",
    title:"How the Internet Works..",
    name:"FreeCodeCamp.org...",
    view:"166K views . 2 Months ago"
}, {
    img:"../images/hqdefault.webp",
    profile:"../icons/burna-icon.jpg",
    title:"USINI MWAGE",
    name:"BURNA BOY",
    view:"210K views . 10 days ago",
}, {
    img:"../images/Kibe.webp",
    profile:"../icons/kibe-icon.jpg",
    title:"Andrew Kibe Podcast....",
    name:"Andrew Kibe...",
    view:"386K views . 1 Year ago"
}, {
    img:"../images/Messi.webp",
    profile:"../icons/messi-icon.jpg",
    title:"Messi Respect Moments..",
    name:"SH10Comps.",
    view:"260K views . 3 Weeks ago"
}, {
    img:"../images/React.webp",
    profile:"../icons/c.jpg",
    title:"How To Learn React..",
    name:"Chris Hawkes",
    view:"36K views . 2 Years ago"
}, {
    img:"../images/Solitary.webp",
    profile:"../icons/frontline-icon.jpg",
    title:"Last Days of Solitary..",
    name:"FrontLine PBS...",
    view:"482K views . 6 Months ago"
}, {
    img:"../images/Thief.webp",
    profile:"../icons/think-icon.jpg",
    title:"9 Ingenious Thefts",
    name:"BRAIN TIME...",
    view:"8.2M views . 1 Year ago"
}, {
    img:"../images/Tiktok.webp",
    profile:"../icons/tiktok-icon.jpg",
    title:"Testing Personal Space..",
    name:"Random Toks...",
    view:"4 views . 4 Hours ago"
}, {
    img:"../images/Traversy.webp",
    profile:"../icons/t.jpg",
    title:"Learning Bootstrap in 2020..",
    name:"Traversy Media",
    view:"200K views . 1 Year ago"
}, {
    img:"../images/Wealthy.webp",
    profile:"../icons/dw-icon.jpg",
    title:"Money and Power",
    name:"DW Documentary...",
    view:"1.8M views . 2 Year ago"
}];
const itemEl = document.querySelector(".item");
function displayItems() {
    let displayItem = components.map((item) => {
        return `
        <div class="box-1">
        <div class="image">
            <img src=${item.img} alt="">
        </div>
        <div class="flex">
            <div class="users">
               <p class="use"> <img src=${item.profile} alt=""></p>
            </div>
            <div class="text">
                <p>${item.title}</p>
                <div class="try">
                <div class="channel-name">
                    <p class="name">${item.name}</p>
                    <p class="views">${item.view}</p>
                </div>
                </div>
            </div>
        </div>
    </div>
        `;
    })
    displayItem = displayItem.join("");
    itemEl.innerHTML = displayItem;
};
displayItems()