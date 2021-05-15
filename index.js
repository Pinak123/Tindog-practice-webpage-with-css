let position=1;
change(position);
function change1(a){
   position+=a;
   change(position);
}
function change(a){
    let test=document.getElementsByClassName('test');
    if(a<1){
        position=test.length;
    };
    if(a>test.length){
        position=1;
    }
    for(let i=0;i<test.length;i++){
        test[i].style.display="none";
    };
    test[position-1].style.display="block";
    activee(position-1);
}
function change2(a){
    position=a;
    change(position);
}
function activee(a){
    let active=document.getElementsByClassName('circle');
   for (let i=0;i<active.length;i++){
       active[i].classList.remove("activee");
   };
   active[a].classList.add("activee");
}
// let set=()=>{
//     position+=1;
//     change(position);
// }
// set();
// let setinter=setInterval(set,2000);
