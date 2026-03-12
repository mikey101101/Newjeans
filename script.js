const messages = [
"boba!!! 🧋",
"hehe",
"오늘 boba party <3",
"bubble tea time",
"와",
"hi bunnies",
"newjeans forever",
"who wants boba?"
];

function spawnMessage(){
  const msg = document.createElement("div");
  msg.className = "random-message";

  msg.innerText = messages[Math.floor(Math.random()*messages.length)];

  msg.style.left = Math.random()*80 + "%";
  msg.style.top = Math.random()*80 + "%";

  document.body.appendChild(msg);

  setTimeout(()=>msg.remove(),4000);
}

setInterval(spawnMessage,3000);
const bunny = document.getElementById("bunny");

document.addEventListener("mousemove",(e)=>{
bunny.style.left = e.clientX + 15 + "px";
bunny.style.top = e.clientY + 15 + "px";
});
const notification = document.getElementById("notification");

function showNotification(text){
notification.innerText = text;
notification.style.opacity = "1";

setTimeout(()=>{
notification.style.opacity = "0";
},3000);
}

setInterval(()=>{
showNotification(messages[Math.floor(Math.random()*messages.length)]);
},7000);
