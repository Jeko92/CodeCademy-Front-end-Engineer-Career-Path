let social = document.getElementById("social-media");
let share = document.getElementById("share-button");
let text = document.getElementById("text");

let sharePhoto = function (e) {
  console.log(e);
  console.log(e.target);
  e.target.style.display = "none";
  text.innerHTML = `${(Math.round(e.timeStamp) / 1000).toFixed(
    2
  )} seconds passed between DOM loading and click Event firing`;
};

share.addEventListener("click", sharePhoto);
