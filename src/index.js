import { homeLayout } from "./homeLayout.js";

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
    return navButton;
  }

  buttonList.appendChild(createNavButton("Home"));
  buttonList.appendChild(createNavButton("Menu"));
  buttonList.appendChild(createNavButton("About"));
  headerDiv.appendChild(buttonList);
  contentDiv.appendChild(headerDiv);
}

createHeader();
homeLayout();
