function insert(num) {
    document.getElementById("textField").value += num;
}
function equal() {
    var exp = document.getElementById("textField").value;
    if (exp) {
        document.getElementById("textField").value = eval(exp);
    }
}
function clean() {
    document.getElementById("textField").value = "";
}
function backk() {
    var exp = document.getElementById("textField").value;
    document.getElementById("textField").value = exp.substring(0, exp.length - 1);
}
function sq() {
    var exp = document.getElementById("textField").value;
    var val = exp * exp;
    document.getElementById('textField').value = val;
}
function fact() {
    var exp = document.getElementById("textField").value;
    var n = exp;
    n.parseInt;
    if (n > 1) {
        while (n!=1) {
            n = n * (n - 1);
            document.getElementById('textField').value = n;
        }
    }
}