let contentDiv = document.querySelector('#content');

let headerDiv = document.createElement('div');
let headerList = document.createElement('ul');

function createListElement(text) {
  let listElement = document.createElement('li');
  listElement.textContent = text;
  return listElement;
}

headerList.appendChild(createListElement('Link 1'));
headerList.appendChild(createListElement('Link 1'));
headerList.appendChild(createListElement('Link 1'));
headerDiv.appendChild(headerList);
contentDiv.appendChild(headerDiv);

let bodyDiv = document.createElement('div');

function createBlockDiv(img, text) {
  let blockDiv = document.createElement('div');
  let heading = document.createElement('h2');
  let image = new Image(300);

  image.src = img;
  heading.textContent = text;

  blockDiv.appendChild(heading);
  blockDiv.appendChild(image);
  return blockDiv;
}

bodyDiv.appendChild(createBlockDiv("./anh-nguyen-kcA-c3f_3FE-unsplash.jpg", "Try out the new dish!"));
bodyDiv.appendChild(createBlockDiv("./shawnanggg-nmpW_WwwVSc-unsplash.jpg", "Who are we?"));
contentDiv.appendChild(bodyDiv);
