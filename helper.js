function capitalize(string) {
  return string.at(0).toUpperCase() + string.substring(1).toLowerCase();
}

function removeAllChildNodes(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}