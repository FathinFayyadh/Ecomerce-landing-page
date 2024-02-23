//  const plus =document.querySelectorAll('.plus');
//  const num=document.querySelectorAll('.num')
//   const minus= document.querySelectorAll('.minus');
 




// for (let a=1 ; a < plus.length ; a++){
// plus.addEventListener ("click",()=>{

 
//   num[a].innerHTML =   (a < 10) ? "0" + a : a;

//   console.log(a);

//   });

// }





 /* let a = 1

 plus.addEventListener("click",()=>{
  a++;
     a=(a<10)?"0"+a:a;
     num.innerHTML =a;
     console.log(a);
 });

minus.addEventListener("click",()=>{
     if (a>1 ){
         a--;
        a= (a<10)? "0"+a:a;
         num.innerHTML= a;
     } }); */

/* var minus = document.getElementsByClassName('minus');
var plus = document.getElementsByClassName('plus');
for(var i=0; i<plus.length; i++){
    var button=plus[i];
    button.addEventListener('click',function(event){
    var buttonCliked = event.target;
    })

} */
/* const buttons = document.querySelectorAll('.plus, .minus');
const numElements = document.querySelectorAll('.num');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const isPlus = button.classList.contains('plus');
    const index = Array.from(buttons).indexOf(button);
    let a = parseInt(numElements[index].innerHTML);
    
    if ('plus') {
      a++;
    } else if (a > 1) {
      a--;
    }

    numElements[index].innerHTML = (a < 10) ? "0" + a : a;
    console.log(a);
  });
}); */
