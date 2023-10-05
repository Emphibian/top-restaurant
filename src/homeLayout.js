export function homeLayout() {
  let contentDiv = document.querySelector("#content");

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

  bodyDiv.appendChild(
    createBlockDiv(
      "./anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
      "Try out the new dish!",
    ),
  );
  bodyDiv.appendChild(
    createBlockDiv("./shawnanggg-nmpW_WwwVSc-unsplash.jpg", "Who are we?"),
  );
  contentDiv.appendChild(bodyDiv);
}
