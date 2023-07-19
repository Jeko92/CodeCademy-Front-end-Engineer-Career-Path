/* secret-messages.js */
/* import {
  toggleHiddenElement,
  changeToFunkyColor,
} from "../modules/dom-functions.js";
 */
import domFunctions from "../modules/dom-functions.js";
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
