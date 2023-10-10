(()=>{"use strict";var __webpack_modules__={606:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n;// CONCATENATED MODULE: ./src/restaurant.jpg\nconst restaurant_namespaceObject = __webpack_require__.p + "dfa67163366fa60342ad.jpg";\n;// CONCATENATED MODULE: ./src/salad.jpg\nconst salad_namespaceObject = __webpack_require__.p + "24861e242224e084013a.jpg";\n;// CONCATENATED MODULE: ./src/homeLayout.js\n\n\n\nfunction homeLayout() {\n  let mainBody = document.querySelector("main");\n\n  let bodyDiv = document.createElement("div");\n  bodyDiv.classList.add("blocks");\n\n  function createBlockDiv(img, text) {\n    let blockDiv = document.createElement("div");\n    let blockTextDiv = document.createElement("div");\n    let heading = document.createElement("h2");\n    let blockText = document.createElement("p");\n\n    blockText.textContent =\n      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";\n    let image = new Image(300);\n\n    blockTextDiv.classList.add("block-text");\n    image.src = img;\n    heading.textContent = text;\n\n    blockTextDiv.appendChild(heading);\n    blockDiv.appendChild(blockTextDiv);\n    blockDiv.appendChild(image);\n    blockDiv.classList.add("block");\n    return blockDiv;\n  }\n\n  bodyDiv.appendChild(createBlockDiv(salad_namespaceObject, "Try out the new dish!"));\n  bodyDiv.appendChild(createBlockDiv(restaurant_namespaceObject, "Who are we?"));\n  mainBody.appendChild(bodyDiv);\n}\n\n;// CONCATENATED MODULE: ./src/menuLayout.js\nfunction menuLayout() {\n  let mainBody = document.querySelector("main");\n\n  let menuDiv = document.createElement("div");\n  menuDiv.classList.add("menu");\n\n  let menuElements = [\n    ["Menu1", "", "Description goes here"],\n    ["Menu2", "", "Description goes here"],\n    ["Menu3", "", "Description goes here"],\n  ];\n\n  menuElements.forEach((menuInfo) =>\n    menuDiv.appendChild(createMenuElement(...menuInfo)),\n  );\n\n  mainBody.appendChild(menuDiv);\n}\n\nfunction createMenuElement(name, img, description) {\n  let menuElement = document.createElement("div");\n  menuElement.classList.add("menu-element");\n\n  let heading = document.createElement("h3");\n  heading.textContent = name;\n  let image = document.createElement("img");\n  image.src = img;\n  let paragraph = document.createElement(\'p\');\n  paragraph.textContent = description;\n\n  menuElement.appendChild(heading);\n  menuElement.appendChild(image);\n  menuElement.appendChild(paragraph);\n  return menuElement;\n}\n\n;// CONCATENATED MODULE: ./src/contactLayout.js\nfunction contactLayout() {\n  let mainBody = document.querySelector("main");\n\n  let bodyDiv = document.createElement("div");\n  bodyDiv.classList.add("contact");\n  let heading = document.createElement("h2");\n  heading.textContent = "Contact Us Below";\n  mainBody.appendChild(heading);\n\n  let addressDiv = document.createElement("div");\n  addressDiv.classList.add("address");\n  let phonesDiv = document.createElement("div");\n  phonesDiv.classList.add("phone");\n\n  let phoneHeading = document.createElement("h3");\n  phoneHeading.textContent = "Phone numbers";\n  let number1 = document.createElement("p");\n  let number2 = document.createElement("p");\n  number1.textContent = "123456789";\n  number2.textContent = "123456788";\n  phonesDiv.appendChild(phoneHeading);\n  phonesDiv.appendChild(number1);\n  phonesDiv.appendChild(number2);\n\n  let addressHeading = document.createElement("h3");\n  addressHeading.textContent = "Address";\n  let addressPara = document.createElement("p");\n  addressPara.textContent =\n    "We reside in an unknown valley, we ourselves don\'t know";\n  addressDiv.appendChild(addressHeading);\n  addressDiv.appendChild(addressPara);\n\n  bodyDiv.appendChild(phonesDiv);\n  bodyDiv.appendChild(addressDiv);\n  mainBody.appendChild(bodyDiv);\n}\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\nlet currentTab = "Home";\n\nfunction createHeader() {\n  let contentDiv = document.querySelector("#content");\n\n  let headerDiv = document.createElement("div");\n  headerDiv.classList.add("header");\n\n  let heading = document.createElement("h2");\n  heading.textContent = "Restaurant";\n  headerDiv.appendChild(heading);\n\n  let buttonList = document.createElement("div");\n  buttonList.classList.add("nav");\n\n  function createNavButton(text) {\n    let navButton = document.createElement("button");\n    navButton.textContent = text;\n    navButton.addEventListener("click", (e) => {\n      currentTab = text;\n      reloadLayout();\n    });\n    return navButton;\n  }\n\n  buttonList.appendChild(createNavButton("Home"));\n  buttonList.appendChild(createNavButton("Menu"));\n  buttonList.appendChild(createNavButton("Contact"));\n  headerDiv.appendChild(buttonList);\n\n  let mainBody = document.createElement("main");\n  contentDiv.appendChild(headerDiv);\n  contentDiv.appendChild(mainBody);\n}\n\nfunction reloadLayout() {\n  let mainBody = document.querySelector("main");\n  if (mainBody) {\n    mainBody.innerHTML = "";\n\n    switch (currentTab) {\n      case "Home":\n        homeLayout();\n        break;\n      case "Menu":\n        menuLayout();\n        break;\n      case "Contact":\n        contactLayout();\n        break;\n      default:\n        homeLayout();\n    }\n  }\n}\n\ncreateHeader();\nreloadLayout();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA2LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNWOztBQUU5QjtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMscUJBQVU7QUFDL0MscUNBQXFDLDBCQUFlO0FBQ3BEO0FBQ0E7OztBQ2pDTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuQzZDO0FBQ0E7QUFDTTtBQUM5Qjs7QUFFckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSxhQUFhO0FBQ3JCO0FBQ0E7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9ob21lTGF5b3V0LmpzP2QxM2QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvbWVudUxheW91dC5qcz81NDgyIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RMYXlvdXQuanM/OWQ2OSIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0YXVyYW50SW1hZ2UgZnJvbSBcIi4vcmVzdGF1cmFudC5qcGdcIjtcbmltcG9ydCBzYWxhZEltYWdlIGZyb20gXCIuL3NhbGFkLmpwZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUxheW91dCgpIHtcbiAgbGV0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgbGV0IGJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2R5RGl2LmNsYXNzTGlzdC5hZGQoXCJibG9ja3NcIik7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQmxvY2tEaXYoaW1nLCB0ZXh0KSB7XG4gICAgbGV0IGJsb2NrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYmxvY2tUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBsZXQgYmxvY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBibG9ja1RleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcXVpIG1pbmltIGxhYm9yZSBhZGlwaXNpY2luZyBtaW5pbSBzaW50IGNpbGx1bSBzaW50IGNvbnNlY3RldHVyIGN1cGlkYXRhdC5cIjtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoMzAwKTtcblxuICAgIGJsb2NrVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiYmxvY2stdGV4dFwiKTtcbiAgICBpbWFnZS5zcmMgPSBpbWc7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICBibG9ja1RleHREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgYmxvY2tEaXYuYXBwZW5kQ2hpbGQoYmxvY2tUZXh0RGl2KTtcbiAgICBibG9ja0Rpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgYmxvY2tEaXYuY2xhc3NMaXN0LmFkZChcImJsb2NrXCIpO1xuICAgIHJldHVybiBibG9ja0RpdjtcbiAgfVxuXG4gIGJvZHlEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvY2tEaXYoc2FsYWRJbWFnZSwgXCJUcnkgb3V0IHRoZSBuZXcgZGlzaCFcIikpO1xuICBib2R5RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJsb2NrRGl2KHJlc3RhdXJhbnRJbWFnZSwgXCJXaG8gYXJlIHdlP1wiKSk7XG4gIG1haW5Cb2R5LmFwcGVuZENoaWxkKGJvZHlEaXYpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVMYXlvdXQoKSB7XG4gIGxldCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGxldCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBsZXQgbWVudUVsZW1lbnRzID0gW1xuICAgIFtcIk1lbnUxXCIsIFwiXCIsIFwiRGVzY3JpcHRpb24gZ29lcyBoZXJlXCJdLFxuICAgIFtcIk1lbnUyXCIsIFwiXCIsIFwiRGVzY3JpcHRpb24gZ29lcyBoZXJlXCJdLFxuICAgIFtcIk1lbnUzXCIsIFwiXCIsIFwiRGVzY3JpcHRpb24gZ29lcyBoZXJlXCJdLFxuICBdO1xuXG4gIG1lbnVFbGVtZW50cy5mb3JFYWNoKChtZW51SW5mbykgPT5cbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVFbGVtZW50KC4uLm1lbnVJbmZvKSksXG4gICk7XG5cbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQobWVudURpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVFbGVtZW50KG5hbWUsIGltZywgZGVzY3JpcHRpb24pIHtcbiAgbGV0IG1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtZWxlbWVudFwiKTtcblxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IGltZztcbiAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgcmV0dXJuIG1lbnVFbGVtZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RMYXlvdXQoKSB7XG4gIGxldCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGxldCBib2R5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9keURpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXMgQmVsb3dcIjtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgbGV0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICBsZXQgcGhvbmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGhvbmVzRGl2LmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcblxuICBsZXQgcGhvbmVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwaG9uZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBob25lIG51bWJlcnNcIjtcbiAgbGV0IG51bWJlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IG51bWJlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbnVtYmVyMS50ZXh0Q29udGVudCA9IFwiMTIzNDU2Nzg5XCI7XG4gIG51bWJlcjIudGV4dENvbnRlbnQgPSBcIjEyMzQ1Njc4OFwiO1xuICBwaG9uZXNEaXYuYXBwZW5kQ2hpbGQocGhvbmVIZWFkaW5nKTtcbiAgcGhvbmVzRGl2LmFwcGVuZENoaWxkKG51bWJlcjEpO1xuICBwaG9uZXNEaXYuYXBwZW5kQ2hpbGQobnVtYmVyMik7XG5cbiAgbGV0IGFkZHJlc3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBhZGRyZXNzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWRkcmVzc1wiO1xuICBsZXQgYWRkcmVzc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzc1BhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiV2UgcmVzaWRlIGluIGFuIHVua25vd24gdmFsbGV5LCB3ZSBvdXJzZWx2ZXMgZG9uJ3Qga25vd1wiO1xuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcbiAgYWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChhZGRyZXNzUGFyYSk7XG5cbiAgYm9keURpdi5hcHBlbmRDaGlsZChwaG9uZXNEaXYpO1xuICBib2R5RGl2LmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuICBtYWluQm9keS5hcHBlbmRDaGlsZChib2R5RGl2KTtcbn1cbiIsImltcG9ydCB7IGhvbWVMYXlvdXQgfSBmcm9tIFwiLi9ob21lTGF5b3V0LmpzXCI7XG5pbXBvcnQgeyBtZW51TGF5b3V0IH0gZnJvbSBcIi4vbWVudUxheW91dC5qc1wiO1xuaW1wb3J0IHsgY29udGFjdExheW91dCB9IGZyb20gXCIuL2NvbnRhY3RMYXlvdXQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgY3VycmVudFRhYiA9IFwiSG9tZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgbGV0IGJ1dHRvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25MaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmF2QnV0dG9uKHRleHQpIHtcbiAgICBsZXQgbmF2QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuYXZCdXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIG5hdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGN1cnJlbnRUYWIgPSB0ZXh0O1xuICAgICAgcmVsb2FkTGF5b3V0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5hdkJ1dHRvbjtcbiAgfVxuXG4gIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QnV0dG9uKFwiSG9tZVwiKSk7XG4gIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QnV0dG9uKFwiTWVudVwiKSk7XG4gIGJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QnV0dG9uKFwiQ29udGFjdFwiKSk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChidXR0b25MaXN0KTtcblxuICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5Cb2R5KTtcbn1cblxuZnVuY3Rpb24gcmVsb2FkTGF5b3V0KCkge1xuICBsZXQgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgaWYgKG1haW5Cb2R5KSB7XG4gICAgbWFpbkJvZHkuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHN3aXRjaCAoY3VycmVudFRhYikge1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgaG9tZUxheW91dCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgIG1lbnVMYXlvdXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29udGFjdFwiOlxuICAgICAgICBjb250YWN0TGF5b3V0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaG9tZUxheW91dCgpO1xuICAgIH1cbiAgfVxufVxuXG5jcmVhdGVIZWFkZXIoKTtcbnJlbG9hZExheW91dCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///606\n')}},__webpack_require__={};__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;__webpack_require__.g.importScripts&&(n=__webpack_require__.g.location+"");var e=__webpack_require__.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var c=t.length-1;c>-1&&!n;)n=t[c--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=n})();var __webpack_exports__={};__webpack_modules__[606](0,__webpack_exports__,__webpack_require__)})();