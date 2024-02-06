alert(
  "Suggestion for values: \nempty string \n0 \nnull \nundefined \nNaN \nfalse \na non-empty string \nany number other than zero"
);

let value = prompt("Enter a value:");
if (isNaN(value)) {
  value = value.toLowerCase();
  if (value == "null") {
    alert(`The entered value "${value}" is falsy.`);
  } else if (value == "undefined") {
    alert(`The entered value "${value}" is falsy.`);
  } else if (value == "nan") {
    alert(`The entered value "${value}" is falsy.`);
  } else if (value == "false") {
    alert(`The entered value "${value}" is falsy.`);
  } else {
    alert(`The entered value "${value}" is truthy.`);
  }
} else if (value == "") {
  alert(`The entered value "${value}" is falsy.`);
} else {
  value = parseFloat(value);
  if (value == "0") {
    alert(`The entered value "${value}" is falsy.`);
  } else {
    alert(`The entered value "${value}" is truthy.`);
  }
}
