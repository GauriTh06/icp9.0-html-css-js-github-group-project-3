function increment(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  counter.innerText = ++ currentValue;
  alert("one item added successfully" );
}

function decrement(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  if (currentValue>0) {
    counter.innerText = --currentValue;
    alert("one item remove successfully" );
  }

}
