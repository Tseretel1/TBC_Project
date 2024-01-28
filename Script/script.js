//Header Background color Changing Based on Scrollbar y Possition.
function scrollFunction() {
  var header = document.querySelector(".Header_Fixed_Navbar");
  var scrollPosition = window.scrollY;
  var threshold = 1;

  if (scrollPosition > threshold) {
    header.style.backgroundColor = "rgba(33, 32, 32, 0.955)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.868)";
  }
}
document.styleSheets[0].insertRule(
  ".Header_Fixed_Navbar { transition: background-color 0.4s ease; }",
  0
);
window.onscroll = scrollFunction;


// Edu-Paragraph
function Paragraph() {
  function insertParagraph() {
    const paragraphText =
      "„ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა  საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს  სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.";
    const paragraphContainer = document.querySelector(".Edu_paragraph");
    paragraphContainer.innerHTML = paragraphText;
  }
  insertParagraph();
}
Paragraph();

// SideBar Navigation! This Code creates right sidebar navigation for mobile users.
function createDropdownMenu() {
  const menu = document.createElement("div");
  menu.classList.add("dropdown-container");
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.alignItems = "flex-end";
  menu.style.height = "100%";
  menu.style.position = "fixed";
  menu.style.top = "0";
  menu.style.right = "0";
  menu.style.backgroundColor = "rgb(40, 40, 40)";
  menu.style.padding = "10px";
  menu.style.width = "200px";
  menu.style.zIndex = "0";

  const linksData = [
    { href: "https://www.tbcacademy.ge/", name: "მთავარი" },
    { href: "https://www.tbcacademy.ge/it-academy", name: "TBC IT" },
    { href: "https://www.tbcacademy.ge/usaid", name: "TBC x USaid" },
    { href: "https://www.tbcacademy.ge/risks-academy", name: "რისკები" },
  ];

  linksData.forEach((linkData) => {
    const link = document.createElement("a");
    link.href = linkData.href;
    link.textContent = linkData.name;
    link.style.display = "block";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.marginTop = "50px";
    menu.appendChild(link);
  });
  document.body.appendChild(menu);
}

// Deleting Sidebar! This code is for X button which removes siedbar.
function deleteDropdown() {
  const dropdown = document.querySelector(".dropdown-container");
  if (dropdown) {
    dropdown.parentNode.removeChild(dropdown);
  }
}


// Navigation Button! This Code controls creating and deleting sidebar.
function toggleDropdownMenu() {
  const dropdownMenu = document.querySelector(".Mobile_Dropdown_Menu");
  const isRotatedMenu =
    dropdownMenu.style.transform &&
    dropdownMenu.style.transform.includes("rotate(-45deg)");

  dropdownMenu.style.transition = "transform 0.3s ease-in-out";
  dropdownMenu.style.transform = isRotatedMenu ? "" : "rotate(-45deg)";

  const shortlines = document.querySelectorAll(".shortline");
  const longline = document.querySelector(".longline");

  shortlines.forEach((shortline, index) => {
    const isRotatedLine =
      shortline.style.transform &&
      shortline.style.transform.includes(`rotate(${90 * (index % 2 ? -1 : 1)}deg)`);
    shortline.style.transition = "transform 0.3s ease-in-out";
    shortline.style.transform = isRotatedLine ? "" : `rotate(${90 * (index % 2 ? -1 : 1)}deg)`;
    if (isRotatedLine) {
      deleteDropdown();
    } else {
      createDropdownMenu();
    }
  });

  const isRotatedLongLine =
    longline.style.transform &&
    longline.style.transform.includes("rotate(45deg)");

  longline.style.transition = "transform 0.3s ease-in-out";
  longline.style.transform = isRotatedLongLine ? "" : "rotate(45deg)";
}

document.querySelector(".Mobile_Dropdown_Menu").addEventListener("click", toggleDropdownMenu);









// Cards Creation! Thic creates informational ` cards based on data.
function Cards() {
  const CardDataObject = [
    {
      imgSource: "img/Cources/ios.webp",
      Name: "IOS Development",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource : "https://www.tbcacademy.ge/usaid/ios-development",
    },
    {
      imgSource: "img/Cources/react.webp",
      Name: "React",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/react',
    },
    {
      imgSource: "img/Cources/python.webp",
      Name: "Intro to Python",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/python-basic',
    },
    {
      imgSource: "img/Cources/advancedpython.webp",
      Name: "Advanced Python",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/python-advance',
    },
    {
      imgSource: "img/Cources/cybersecuryty.webp",
      Name: "Advanced Cybersecurity Course",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/information-security-advance',
    },
    {
      imgSource: "img/Cources/ToT.webp",
      Name: "ToT - Training of Trainers",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/training-of-trainers',
    },
    {
      imgSource: "img/Cources/blokchain.webp",
      Name: "Blockchain",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/blockchain',
    },
    {
      imgSource: "img/Cources/devops.webp",
      Name: "DevOps",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/devops',
    },
    {
      imgSource: "img/Cources/informationsecurity.webp",
      Name: "Information Security Governance",
      Reg: "რეგისტრაცია დასრულებულია",
      Detail: "კურსის დეტალები",
      link_To_Cource :'https://www.tbcacademy.ge/usaid/information-security-basic',
    },
  ];
  CardDataObject.forEach((data) => {
    const Card = document.createElement("div");
    Card.classList.add("Card");
    Card.style.display = "flex";
    Card.style.flexDirection = "column";
    Card.style.width = "300px";
    Card.style.height = "420px";
    Card.style.border = "1px solid grey";
    Card.style.backgroundColor = "rgb(23, 22, 22)";
    Card.style.zIndex = "0";
    Card.style.borderRadius = "5px";
    Card.style.padding = "0";
    Card.style.margin = '20px'

    const ImgCard = document.createElement("img");
    ImgCard.style.width = "100%";
    ImgCard.style.height = "200px";
    ImgCard.src = data.imgSource;
    ImgCard.style.borderTopLeftRadius = "5px";
    ImgCard.style.borderTopRightRadius = "10px";

    Card.appendChild(ImgCard);

    const DataContainer = document.createElement("div");
    DataContainer.style.width = "100%";
    DataContainer.style.height = "100%";
    DataContainer.style.display = "flex";
    DataContainer.style.flexDirection = "column";
    DataContainer.style.padding = "20px";
    DataContainer.style.fontSize = "15px";

    Card.appendChild(DataContainer);

    const CourseName = document.createElement("p");
    CourseName.textContent = data.Name;
    CourseName.style.color = "white";
    CourseName.style.fontSize = '18px';
    CourseName.style.maxWidth ='90%';

    const Registration = document.createElement("p");
    Registration.textContent = data.Reg;
    Registration.style.color = "white";


    const arrowIMG = document.createElement("img");
    arrowIMG.style.width = "20px";
    arrowIMG.src = 'img/Icons&Logos/BlueArrow.png'
    arrowIMG.style.paddingRight = '10px'

    const Details = document.createElement("a");
    Details.textContent = data.Detail;
    Details.href = data.link_To_Cource;
    Details.style.color = "rgb(95, 170, 245)";
    Details.style.fontWeight = '600'

    Details.style.textDecoration = "none";

    const arrowDiv = document.createElement("div");
    arrowDiv.style.display = 'flex';
    arrowDiv.style.alignItems = 'center';
    arrowDiv.style.paddingTop = "80px";

    arrowDiv.appendChild(arrowIMG);
    arrowDiv.appendChild(Details);


    DataContainer.appendChild(CourseName);
    DataContainer.appendChild(Registration);
    DataContainer.appendChild(arrowDiv);

    const INfo_Cards = document.querySelector(".INfo_Cards");
    INfo_Cards.appendChild(Card);
  });
}
Cards();









// slider! this code controls slider functional.

const PartnerLogos = [
  {
    logo: "img/Partners/usaid-logo.png",
  },
  {
    logo: "img/Partners/spaceint-logo.png",
  },
  {
    logo: "img/Partners/tnet-logo.png",
  },
  {
    logo: "img/Partners/tegeta-logo.png",
  },
  {
    logo: "img/Partners/spectre-logo.png",
  },
  {
    logo: "img/Partners/tbcleasing-logo.png",
  },
  {
    logo: "img/Partners/ufc-logo.png",
  },
];

const createSlider = () => {
  let currentIndex = 0;
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = dot.dataset.index;
      displayPartnerImages(currentIndex);
    });
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = currentIndex - 1 < 0 ? 2 : currentIndex - 1;
    displayPartnerImages(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = currentIndex + 1 > 2 ? 0 : currentIndex + 1;
    displayPartnerImages(currentIndex);
  });
  setInterval(() => {
    currentIndex = currentIndex + 1 > 2 ? 0 : currentIndex + 1;
    displayPartnerImages(currentIndex);
  }, 5000);
  displayPartnerImages(currentIndex);
};

const displayPartnerImages = (slideNumber) => {
  slideNumber *= 3;
  const sliderParentElement = document.querySelector(".partners-list");
  sliderParentElement.classList.remove("fade-in");
  sliderParentElement.classList.add("fade-away");
  setTimeout(() => {
    sliderParentElement.innerHTML = "";
    for (
      let i = slideNumber;
      i < Math.min(slideNumber + 3, PartnerLogos.length);
      i++
    ) {
      const partnerElement = document.createElement("img");
      partnerElement.classList.add("partner-logo");
      partnerElement.src = PartnerLogos[i].logo;
      sliderParentElement.appendChild(partnerElement);
    }
  }, 1000);
  setTimeout(() => {
    sliderParentElement.classList.add("fade-in");
  }, 1000);
};

createSlider();

//