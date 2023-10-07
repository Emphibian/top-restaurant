export function menuLayout() {
  let mainBody = document.querySelector("main");

  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  let menuElements = [
    ["Menu1", "", "Description goes here"],
    ["Menu2", "", "Description goes here"],
    ["Menu3", "", "Description goes here"],
  ];

  menuElements.forEach((menuInfo) =>
    menuDiv.appendChild(createMenuElement(...menuInfo)),
  );

  mainBody.appendChild(menuDiv);
}

function createMenuElement(name, img, description) {
  let menuElement = document.createElement("div");
  menuElement.classList.add("menu-element");

  let heading = document.createElement("h3");
  heading.textContent = name;
  let image = document.createElement("img");
  image.src = img;
  let paragraph = document.createElement('p');
  paragraph.textContent = description;

  menuElement.appendChild(heading);
  menuElement.appendChild(image);
  menuElement.appendChild(paragraph);
  return menuElement;
}
