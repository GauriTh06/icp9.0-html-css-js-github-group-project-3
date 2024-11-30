
             const quantityElement = document.getElementById("Pc");
             let  Pc = parseInt(quantityElement.innerText);
            function increment() {
              
                quantityElement.innerText = ++Pc;
            
            }
            function decrement() {
               if(Pc<=0)
               {
                quantityElement.innerText =Pc;
                }
                else{
                    quantityElement.innerText =--Pc ;
                }
            
            }