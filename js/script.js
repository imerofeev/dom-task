const data = [
  {
    label: "Bawcomville",
    id: 0,
  },
  {
    label: "Rushford",
    id: 1,
  },
  {
    label: "Bayview",
    id: 2,
  },
  {
    label: "Moscow",
    id: 3,
  },
  {
    label: "Istanbul",
    id: 4,
  },
  {
    label: "Paris",
    id: 5,
  },
  {
    label: "New York",
    id: 6,
  },
  {
    label: "London",
    id: 7,
  },
  {
    label: "Hong Kong",
    id: 8,
  },
  {
    label: "Tokio",
    id: 9,
  },
  {
    label: "Amsterdam",
    id: 10,
  },
  {
    label: "St.Petersburg",
    id: 11,
  },
  {
    label: "Barcelona",
    id: 12,
  },
  {
    label: "Singapore",
    id: 13,
  },
  {
    label: "Shanghai",
    id: 14,
  },
  {
    label: "San Francisco",
    id: 15,
  },
  {
    label: "Rome",
    id: 16,
  },
  {
    label: "Stockholm",
    id: 17,
  },
  {
    label: "Budapest",
    id: 18,
  },
  {
    label: "Prague",
    id: 19,
  },
  {
    label: "Kiev",
    id: 20,
  },
];

var input = document.getElementsByClassName("input")[0];
var combobox = document.getElementsByClassName("combobox")[0];
var button = document.getElementsByClassName("button")[0];
var prevSelect = "";

function main() {
  createCombobox();
  input.addEventListener("click", showCombobox);
  button.addEventListener("click", showCombobox);
  input.addEventListener("input", showSelection);
  combobox.addEventListener("click", choose);
  document.addEventListener("click", cancel);
  window.addEventListener("scroll", cancel);
  window.addEventListener("resize", cancel);
}

function createCombobox() {
  for (let i = 0; i < data.length; i++) {
    let elem = document.createElement("option");
    elem.setAttribute("label", data[i].label);
    combobox.appendChild(elem);
  }
}

function showCombobox() {
  if (
    input.getBoundingClientRect().bottom + combobox.clientHeight >
    window.innerHeight
  ) {
    combobox.style.bottom =
      input.clientHeight + combobox.clientHeight + 10 + "px";
  } else {
    combobox.style.bottom = 0 + "px";
  }

  combobox.style.visibility = "visible";
  input.value = "";
  input.focus();
  event.stopPropagation();
}

function showSelection(event) {
  let options = document.getElementsByTagName("option");
  for (let i = 0; i < options.length; i++) {
    let label = options[i].getAttribute("label");
    if (
      label.substr(0, input.value.length).toLowerCase() !==
      input.value.toLowerCase()
    ) {
      options[i].hidden = true;
    } else {
      options[i].hidden = false;
    }
  }
}

function getChar(event) {
  if (event.which != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which);
  }
  return null;
}

function choose(event) {
  combobox.style.visibility = "hidden";
  let label = event.target.getAttribute("label");
  input.value = label;
  prevSelect = label;
  event.stopPropagation();
}

function cancel() {
  combobox.style.visibility = "hidden";
  input.value = prevSelect;
  input.blur();
  let options = document.getElementsByTagName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].hidden = false;
  }
}

main();
