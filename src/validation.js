const form = document.getElementById("form");

const inputs = form.elements;

function validateForm() {
  for (let i = 0; i < inputs.length - 1; i++) {

    switch (inputs[i].name) {
      case "firstName": {
        if (!inputs[i].value.match(/^[a-zA-Z]{3,}$/)) {
          addError(i);
        }
        break;
      }
      case "lastName": {
        if (!inputs[i].value.match(/^[a-zA-Z]{3,}$/)) {
          addError(i);
        }
        break;
      }
      case "nickName": {
        if (!inputs[i].value.match(/^[a-zA-Z]+[A-z0-9]{2,16}$/)) {
          addError(i);
        }
        break;
      }
      case "email": {
        if (!inputs[i].value.match(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/)) {
          addError(i);
        }
        break;
      }
    }
  }
}


function addError(nodeIndex) {
  if (!inputs[nodeIndex].classList.contains("error")) {
    inputs[nodeIndex].classList.add("error");
  }
}

window.onload = () => {
  for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].oninput = () => {
      if (inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("error");
      }
    };
  }
}