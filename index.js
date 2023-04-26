const campos = document.querySelectorAll('.required');
const form = document.getElementById('form');
const spans = document.querySelectorAll('.span-required');
const email= /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+([a-z]+)?$/i
function erro(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.visibility = 'visible';
}

function removeErro(index){
    campos[index].style.border = '2px solid  #00C22B';
    spans[index].style.visibility = 'hidden';
}

function nameValidate() {
  if(campos[0].value.length < 3) {
    erro(0)
  } else {
    removeErro(0)
  }
}
function emailValidate(){
    if(!email.test(campos[1].value)){
    erro(1)
    }else{
        removeErro(1)
    } 
}
function passwordValidate(){
    if(campos[2].value.length<8){
        erro(2)
    }else{
        removeErro(2)
    }
}
function textValidate(){
   if(campos[3].value.length<3){
    erro(3)
   }else{
    removeErro(3)
   }
}
form.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio do formulário
  nameValidate(); 
  emailValidate();
  passwordValidate();
  textValidate();

});
