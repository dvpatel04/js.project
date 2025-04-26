function GetTime(){
    let d =new Date();
let h= d.getHours();
let m= d.getMinutes();
let s=  d.getSeconds();
  document.getElementById("clock").innerHTML=h+":"+m+":"+s;
  setTimeout(GetTime,1000);
}


GetTime();
