let btn1 =  document.getElementById("btn1"); 
let hello = document.getElementById('hello'); 
let prev = document.getElementById('prev');

prev.addEventListener('click', changeBG);
hello.addEventListener('click', sayHello);

function sayHello(){
    alert('Say Hello to our visitors! ')
}
function clickFunction(){
    alert('Welcome Sir'); 
    btn1.innerHTML = "Booo! Text Changed!"; 
};

function changeBG(){
    document.body.style.background ="orange";
};