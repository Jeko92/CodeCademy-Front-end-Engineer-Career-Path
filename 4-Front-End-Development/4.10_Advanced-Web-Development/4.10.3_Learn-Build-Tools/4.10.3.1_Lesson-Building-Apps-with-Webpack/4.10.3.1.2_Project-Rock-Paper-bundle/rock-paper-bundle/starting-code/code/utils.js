export default function clearChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
