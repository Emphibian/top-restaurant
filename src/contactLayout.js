export function contactLayout() {
  let mainBody = document.querySelector("main");

  let bodyDiv = document.createElement("div");
  bodyDiv.classList.add("contact");
  let heading = document.createElement("h2");
  heading.textContent = "Contact Us Below";
  mainBody.appendChild(heading);

  let addressDiv = document.createElement("div");
  addressDiv.classList.add("address");
  let phonesDiv = document.createElement("div");
  phonesDiv.classList.add("phone");

  let phoneHeading = document.createElement("h3");
  phoneHeading.textContent = "Phone numbers";
  let number1 = document.createElement("p");
  let number2 = document.createElement("p");
  number1.textContent = "123456789";
  number2.textContent = "123456788";
  phonesDiv.appendChild(phoneHeading);
  phonesDiv.appendChild(number1);
  phonesDiv.appendChild(number2);

  let addressHeading = document.createElement("h3");
  addressHeading.textContent = "Address";
  let addressPara = document.createElement("p");
  addressPara.textContent =
    "We reside in an unknown valley, we ourselves don't know";
  addressDiv.appendChild(addressHeading);
  addressDiv.appendChild(addressPara);

  bodyDiv.appendChild(phonesDiv);
  bodyDiv.appendChild(addressDiv);
  mainBody.appendChild(bodyDiv);
}
