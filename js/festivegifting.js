function increment(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  counter.innerText = ++ currentValue;
}

function decrement(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  if (currentValue>0) {
    counter.innerText = --currentValue;
    alert("one item remove successfully" );
  
  }

} 
const search=()=>{
const searchbox=document.getElementById('search').value.toLowerCase();
const storeitems=document.getElementById('products_contener');
const product=document.querySelectorAll('.product');
const pname=document.getElementsByClassName('product-name');
for(let i=0 ;i<pname.length; i++){
  let match=product[i].getElementsByClassName('product-name')[0];
  if(match){
     let textvalue =match.textContent||match.innerHTML
    if(textvalue.toLowerCase().indexOf(searchbox)>-1){
      product[i].style.display="";
    }
   else{
    product[i].style.display="none";
   }
    }
  }
}

function openModel() {
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'flex';
}

function closeModel() {
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none';
}

function openModel1() {
  const overlayElement = document.getElementById('overlay1');
  overlayElement.style.display = 'flex';
}

function closeModel1() {
  const overlayElement = document.getElementById('overlay1');
  overlayElement.style.display = 'none';
}