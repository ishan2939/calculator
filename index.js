let i = document.getElementById("iput");

function add(val){
    i.value += val;
}

function solve(){
    let y = eval(i.value);
    i.value = y;
}

function clear(){
    console.log("hello");
    i.value = " ";
}

/*function back(){
    i.value = i.value.subString(0, i.value.length-1);
}*/