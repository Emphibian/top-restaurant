import restaurantImage from "./restaurant.jpg";
import saladImage from "./salad.jpg";

export function homeLayout() {
  let mainBody = document.querySelector("main");

  let bodyDiv = document.createElement("div");
  bodyDiv.classList.add("blocks");

  function createBlockDiv(img, text) {
    let blockDiv = document.createElement("div");
    let blockTextDiv = document.createElement("div");
    let heading = document.createElement("h2");
    let blockText = document.createElement("p");

    blockText.textContent =
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
    let image = new Image(300);

    blockTextDiv.classList.add("block-text");
    image.src = img;
    heading.textContent = text;

    blockTextDiv.appendChild(heading);
    blockDiv.appendChild(blockTextDiv);
    blockDiv.appendChild(image);
    blockDiv.classList.add("block");
    return blockDiv;
  }

  bodyDiv.appendChild(createBlockDiv(saladImage, "Try out the new dish!"));
  bodyDiv.appendChild(createBlockDiv(restaurantImage, "Who are we?"));
  mainBody.appendChild(bodyDiv);
}
