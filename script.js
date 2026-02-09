const weddingDate=new Date("December 17, 2026").getTime();
setInterval(()=>{
const now=new Date().getTime();
const d=weddingDate-now;
if(d<0){document.getElementById("timer").innerHTML="🎉 Wedding Time!";return;}
const days=Math.floor(d/(1000*60*60*24));
document.getElementById("timer").innerHTML=days+" Days Remaining";
},1000);