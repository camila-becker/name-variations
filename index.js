let inputName = null;
let numberOfCharactersResult = null;
let firstCharacterResult = null;
let lastCharacterResult = null;
let lowerCaseResult = null;
let upperCaseResult = null;
let capitalizeResult = null;
let whitoutSpacesResult = null;

function handleInputName() {
  inputName = document.querySelector("#input-name");
  inputName.addEventListener("keyup", ({ target }) => {
    let name = target.value.trim();
    numberOfCharactersResult = document.querySelector("#number-result");
    firstCharacterResult = document.querySelector("#first-result");
    lastCharacterResult = document.querySelector("#last-result");
    lowerCaseResult = document.querySelector("#lower-result");
    upperCaseResult = document.querySelector("#upper-result");
    capitalizeResult = document.querySelector("#capitalize-result");
    whitoutSpacesResult = document.querySelector("#spaces-result");

    numberOfCharactersResult.innerHTML = numberOfCharacters(name);
    firstCharacterResult.innerHTML = firstCharacter(name);
    lastCharacterResult.innerHTML = lastCharacter(name);
    lowerCaseResult.innerHTML = lowerCase(name);
    upperCaseResult.innerHTML = upperCase(name);
    capitalizeResult.innerHTML = capitalize(name);
    whitoutSpacesResult.innerHTML = whitoutSpaces(name);
  });
}

function numberOfCharacters(name) {
  if (!name) {
    return "";
  }
  return name.length;
}

function firstCharacter(name) {
  if (!name) {
    return "";
  }
  return name[0];
}

function lastCharacter(name) {
  if (!name) {
    return "";
  }
  return name[name.length - 1];
}

function lowerCase(name) {
  if (!name) {
    return "";
  }
  return name.toLowerCase();
}

function upperCase(name) {
  if (!name) {
    return "";
  }
  return name.toUpperCase();
}

function capitalize(name) {
  if (!name) {
    return "";
  }
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

function whitoutSpaces(name) {
  if (!name) {
    return "";
  }
  return name.trim();
}

handleInputName();
