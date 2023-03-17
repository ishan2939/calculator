let i = document.getElementById("iput");
let str = "";
let clear = false;
let values = [];
let total = 0;

/* to calculate degree */
function deg(){
    str = ((i.value*Math.PI)/180).toPrecision(10);
    i.value = str;
    setClearToTrue();
}

/* to covert to e+ */
function fe(){
    str = Number.parseFloat(i.value).toExponential(5);
    i.value  = str;
    setClearToTrue();
}

/* all the memory functions */
function addAsPositive(){
    values.push(Math.abs(i.value));
    setClearToTrue();
}

function addAsNegative(){
    if(i.value>0)
        values.push(Number((i.value)*(-1)));
    else
        values.push(Number(i.value));
    setClearToTrue();
}

function clearValues(){
    values.splice(0, values.length);
    total  = 0;
    str = "";
    i.value = str;
    setClearToTrue();
}

function mrValues(){
    total = 0;
    for(v of values){
        total += v;
    }
    str = total;
    i.value = str;
    setClearToTrue();
}

/* add values to input field everytime user clicks it */
function add(val) {
    if (clear) {
        str = "";
        clear = false;
    }
    str += val;
    i.value = str;
}
/* call this function when user presses = */
function solve() {
    try {
        let y = eval(str);
        str = y;
        i.value = y;
    }
    catch (e) {
        alert("Please enter valid expression");
        str = "";
        i.value = str;
    }
    finally {
        setClearToTrue();
    }
}
/* clear everything */
function clearinput() {
    str = "";
    i.value = str;
}
/* backspace button */
function backspace() {
    str = str.substring(0, str.length - 1);
    i.value = str;
}

function pi(){
    str = Math.PI;
    i.value = str;
    setClearToTrue();
}

function e(){
    str = Math.E;
    i.value = str;
    setClearToTrue();
}

function squareroot(){
    str = Math.sqrt(i.value);
    i.value = str;
    setClearToTrue();
}

function factorial() {
    let x = Number(i.value);
    let fact = 1;
    if (x < 0)
        fact = -1;
    else if (x == 0)
        fact = 1;
    else {
        for (let i = 1; i <= x; i++) {
            fact = fact * i;
        }
    }
    str = fact;
    i.value = str;
    setClearToTrue();
}

function _10x(){
    str = Math.pow(10,i.value);
    i.value  = str;
    setClearToTrue();
}

function ln(){
    str = Math.log(i.value);
    i.value  = str;
    setClearToTrue();
}

function log(){
    str = Math.log10(i.value);
    i.value  = str;
    setClearToTrue();
}

function sin(){
    str = Math.sin(i.value);
    i.value  = str;
    setClearToTrue();
}

function cos(){
    str = Math.cos(i.value);
    i.value  = str;
    setClearToTrue();
}

function tan(){
    str = Math.tan(i.value);
    i.value  = str;
    setClearToTrue();
}

function sinh(){
    str = Math.sinh(i.value);
    i.value  = str;
    setClearToTrue();
}

function cosh(){
    str = Math.cosh(i.value);
    i.value  = str;
    setClearToTrue();
}

function tanh(){
    str = Math.tanh(i.value);
    i.value  = str;
    setClearToTrue();
}

function x2(){
    str = Math.pow(i.value,2);
    i.value  = str;
    setClearToTrue();
}

function _1byx(){
    str = Math.pow(i.value,-1);
    i.value  = str;
    setClearToTrue();
}

function modex(){
    str = Math.abs(i.value);
    i.value  = str;
    setClearToTrue();
}

function exp(){
    str = Math.pow(Math.E,i.value);
    i.value  = str;
    setClearToTrue();
}
/* switch between + and - */
function plusminus(){
    if(Number(i.value)<0)
        str = i.value.substring(1);
    else{
        str = '-' + i.value;
    }
    i.value = str;
}

function random(){
    str = (Math.random()*100).toFixed();
    i.value = str;

}

/* clear output after user press a new button */
function setClearToTrue(){
    clear = true;
}
