let scrollRevealOption = {
    distance: "15px",
    duration: 400,
};
ScrollReveal().reveal("body", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal("body", {
     ...scrollRevealOption,
     delay: 400,
});
let inp = document.querySelector(".inp")
function display(input){
inp.value += input;
}
function Cleardisplay(){
inp.value = "";
}
function Clacultaion(){
try{
    inp.value = eval(inp.value);
}
catch(error){
inp.value = "Error";
}
}



