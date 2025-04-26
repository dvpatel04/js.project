function GetTime(){
    let d =new Date();
let h= d.getHours();
let m= d.getMinutes();
let s=  d.getSeconds();
  document.getElementById("clock").innerHTML=h+":"+m+":"+s;
  setTimeout(GetTime,1000);
}

// function Getdate(){
//   let a= new Date();  
//   let t= a.getDate();
//   let x=a.getMonth();
//   let y=a.getFullYear();
//   document.getElementById("clock").innerHTML=t+"/"+x+"/"+y;
// setTimeout(Getdate,1000);
// }
// function CallFunction(){
GetTime();
// Getdate();
// }
// CallFunction();