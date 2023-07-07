let expression = document.getElementById("expression");
let icons = document.querySelectorAll("li");
console.log(icons);

icons.forEach((icon) => console.log(icon.childNodes[1].textContent));

const expressions = [
  "hello",
  "hello world",
  "Hello, world!",
  "Hello, Friend!",
  "coolEmail@blorglax.com",
  "P@55w0rd!",
  "(617) 222-1247",
  "+1-341-554-3910",
  "1630 Revello Drive, Sunnydale, California",
  "3170 West 53 Road, #35, Annapolis, Maryland",
];
console.log(expression);
let pattern = "";
// const reactToSubnmit = () => console.log(expression.textContent);
expression.addEventListener("input", (e) => {
  console.log(e.target.value);
  pattern = e.target.value;
});

console.log(`pattern: ${pattern}`);
const checkPattern = (pattern) => {
  expressions.forEach((expression) => {
    let matched = [];
    if (pattern === expression) {
    }
  });
};
