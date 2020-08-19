var oBack = document.getElementById('btnBack');
var oClear = document.getElementById('btnClear');

oBack.addEventListener('click', fClickBack);
oClear.addEventListener('click', fClickClear);

function fClickBack(){
  console.log('Click on Back');

  window.open('https://www.tut.by', '_blanc');
}

function fClickClear(){
  console.log('Click on Clear Text');
  document.body.innerHTML="";
}
