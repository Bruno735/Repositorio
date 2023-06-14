


    


const menuItems = document.querySelector('.menu-items');
const buttonContainer = document.querySelector('.button-container');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuBUttons();
});

function displayMenuItems(menuItem) {
let showMenu  = menuItem.map((item) => {
    return  
});

showMenu = showMenu.join("");
menuItems.innerHTML = showMenu;
}
    

function displayMenuBUttons() {
    const categories = menu.reduce((value, item) => {
        if(!value.includes(item.category)) {
            value.push(item.category)
        }
        return value;
    }, ["all"]);

    const categoryButtons = categories.map((category) => {
        return `<button class="filter-button" data-id="${category}">${category}</button>`
    }).join("");

    buttonContainer.innerHTML += categoryButtons;

    const filterButton = document.querySelectorAll('.filter-button');

    filterButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            const category = event.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) =>{
                if(menuItem.category === category) {
                    return menuItem;
                }
            });

            if(category === "all") {
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory)
            }
        });
    });
}

    

