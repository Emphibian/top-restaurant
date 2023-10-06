import { homeLayout } from "./homeLayout.js";
import { menuLayout } from "./menuLayout.js";
import { contactLayout } from "./contactLayout.js";
import './style.css';

let currentTab = "Home";

function createHeader() {
  let contentDiv = document.querySelector("#content");

  let headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  let heading = document.createElement("h2");
  heading.textContent = "Restaurant";
  headerDiv.appendChild(heading);

  let buttonList = document.createElement("div");
  buttonList.classList.add("nav");

  function createNavButton(text) {
    let navButton = document.createElement("button");
    navButton.textContent = text;
    navButton.addEventListener("click", (e) => {
      currentTab = text;
      reloadLayout();
    });
    return navButton;
  }

  buttonList.appendChild(createNavButton("Home"));
  buttonList.appendChild(createNavButton("Menu"));
  buttonList.appendChild(createNavButton("Contact"));
  headerDiv.appendChild(buttonList);

  let mainBody = document.createElement("main");
  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(mainBody);
}

function reloadLayout() {
  let mainBody = document.querySelector("main");
  if (mainBody) {
    mainBody.innerHTML = "";

    switch (currentTab) {
      case "Home":
        homeLayout();
        break;
      case "Menu":
        menuLayout();
        break;
      case "Contact":
        contactLayout();
        break;
      default:
        homeLayout();
    }
  }
}

createHeader();
reloadLayout();
