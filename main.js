function show_result(){
   let c = document.querySelector("#c").value; 
   let m = document.querySelector("#m").value; 
   let p = document.querySelector("#p").value; 
   let u = document.querySelector("#u").value; 
   let e = document.querySelector("#e").value;

   let to = parseFloat(c) + parseFloat(m) + parseFloat(p) + parseFloat(u) + parseFloat(e);
   let per = (to * 100)/500;

   if(per >= 90){
    document.querySelector(".gra").innerHTML = "a+";
   }else if(per >= 80){
    document.querySelector(".gra").innerHTML = "a";
   }else if(per >= 70){
    document.querySelector(".gra").innerHTML = "b+";
   }else if(per >= 60){
    document.querySelector(".gra").innerHTML = "b";
   }else if(per >= 50){
    document.querySelector(".gra").innerHTML = "c+";
   }else if(per >= 40){
    document.querySelector(".gra").innerHTML = "c";
   }else if(per >= 35){
    document.querySelector(".gra").innerHTML = "d+";
   }else if(per >= 30){
    document.querySelector(".gra").innerHTML = "d";
   }else{
    document.querySelector(".gra").innerHTML = "You Are Fail";
   }

   document.querySelector(".to").innerHTML = to;
   document.querySelector(".per").innerHTML = per;

   if(per > 30){
    document.querySelector(".result h2").innerHTML = "You Are Pass";
   }else{
    document.querySelector(".result h2").innerHTML = "You Are Fail";
   }
}