function digitar(valor) {
  document.getElementById("visor").value += valor;
}

function calcular() {
  try {
    let expressao = document.getElementById("visor").value;
    document.getElementById("visor").value = eval(expressao);
  } catch {
    document.getElementById("visor").value = "Erro";
  }
}

function limpar() {
  document.getElementById("visor").value = "";
}
