
//Header Background color Changing Based on Scrollbar y Possition.
function scrollFunction() {
    var header = document.querySelector('.Header_Fixed_Navbar');
    var scrollPosition = window.scrollY;
    var threshold = 1;

    if (scrollPosition > threshold) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.821)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.866)';
    }
}
document.styleSheets[0].insertRule('.Header_Fixed_Navbar { transition: background-color 0.4s ease; }', 0);
window.onscroll = scrollFunction;


// SideBar Navigation Creation
function createDropdownMenu() {
    const menu = document.createElement('div');
    menu.classList.add('dropdown-container');
    menu.style.display ='flex';
    menu.style.flexDirection = 'column';
    menu.style.alignItems = 'flex-end';
    menu.style.height = '100%';
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.right = '0';
    menu.style.backgroundColor = 'rgb(40, 40, 40)';
    menu.style.padding = '10px';
    menu.style.width = '200px';

    const linksData = [
        { href: 'https://www.tbcacademy.ge/', name: 'მთავარი' },
        { href: 'https://www.tbcacademy.ge/it-academy', name: 'TBC IT' },
        { href: 'https://www.tbcacademy.ge/usaid', name: 'TBC x USaid' },
        { href: 'https://www.tbcacademy.ge/risks-academy', name: 'რისკები' }
    ];

    linksData.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.textContent = linkData.name;
        link.style.display = 'block';
        link.style.color = 'white';
        link.style.textDecoration = 'none';
        link.style.marginTop = '50px';
        link.style.fontFamily = 'sans-serif';
        menu.appendChild(link);
    });
    document.body.appendChild(menu);
}


// Deleting Sidebar Menu
function deleteDropdown() {
    const dropdown = document.querySelector('.dropdown-container');
    if (dropdown) {
        dropdown.parentNode.removeChild(dropdown);
    }
}

// Navigation Button Functional
function toggleDropdownMenu() {
    const dropdownMenu = document.querySelector('.Mobile_Dropdown_Menu');
    const isRotatedMenu = dropdownMenu.style.transform && dropdownMenu.style.transform.includes('rotate(45deg)');

    dropdownMenu.style.transition = 'transform 0.3s ease-in-out';
    dropdownMenu.style.transform = isRotatedMenu ? '' : 'rotate(45deg)';

    const shortlines = document.querySelectorAll('.shortline');
    shortlines.forEach(shortline => {
        const isRotatedLine = shortline.style.transform && shortline.style.transform.includes('rotate(90deg)');
        shortline.style.transition = 'transform 0.3s ease-in-out';
        shortline.style.transform = isRotatedLine ? '' : 'rotate(90deg)';
        if (isRotatedLine) {
            deleteDropdown();
        } else {
            createDropdownMenu();
        }
    });
}
document.querySelector('.Mobile_Dropdown_Menu').addEventListener('click', toggleDropdownMenu);





//async await 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function burger() {
    function updateColors() {
        if (window.innerWidth > 800) {
            deleteDropdown();
            document.querySelector('.Main_Navigation').style.display = 'flex';
            document.querySelector('.Header_Fixed_Navbar').style.justifyContent = 'space-evenly';
            document.querySelector('.Mobile_Dropdown_Menu').style.display = 'none'; 
            document.querySelector('.Container_Title').style.fontSize = '45px';
            document.querySelector('.Container_Title2').style.fontSize = '28px';
            document.querySelector('.Edu_paragraph').style.fontSize = '28px';
            document.querySelector('.Edu_paragraph').style.padding = '40px';


        } else {
            document.querySelector('.Header_Fixed_Navbar').style.justifyContent = 'space-between';
            document.querySelector('.Main_Navigation').style.display = 'none'; 
            document.querySelector('.Mobile_Dropdown_Menu').style.display = 'flex'; 
            document.querySelector('.Container_Title').style.fontSize = '35px';
            document.querySelector('.Container_Title2').style.fontSize = '18px';
            document.querySelector('.Edu_paragraph').style.fontSize = '18px';
            document.querySelector('.Edu_paragraph').style.padding = '20px';
        }
    }

    updateColors();
    
    window.addEventListener('resize', async () => {
        await delay(100);
        updateColors();
    });
}
burger();

