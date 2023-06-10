document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const input = document.querySelector("#email");
  const formulario = document.querySelector("form");

  input.addEventListener("blur", validarEmail);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

function validarEmail(e) {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultado = regex.test(e.target.value);
  if (resultado != true) {
    limpiarAlerta(e.target.parentElement);
    const error = document.createElement("p");
    error.textContent = "Please provide a valid email adrress";
    error.classList.add("error");
    this.classList.add("error-input");
    this.setAttribute("placeholder", "example@email/com");

    e.target.parentElement.appendChild(error);
  } else {
    limpiarAlerta(e.target.parentElement);
    this.classList.remove("error-input");
    this.setAttribute("placeholder", "Your email address...");
  }
}

function limpiarAlerta(referencia) {
  const alerta = referencia.querySelector(".error");
  if (alerta) {
    alerta.remove();
  }
}
