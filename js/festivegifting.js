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
    }
  
  }