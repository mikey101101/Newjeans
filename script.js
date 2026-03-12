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
const chatLines = [
  { name: "Minji", avatar: "images/minji.jpg", text: "hi bunnies ✨", time: "11:55" },
  { name: "Hanni", avatar: "images/hanni.jpg", text: "boba!!! 🧋", time: "11:55" },
  { name: "Danielle", avatar: "images/danielle.jpg", text: "hehe", time: "11:56" },
  { name: "Haerin", avatar: "images/haerin.jpg", text: "wa", time: "11:56" },
  { name: "Hyein", avatar: "images/hyein.jpg", text: "alien mode 👽", time: "11:57" },
  { name: "Hanni", avatar: "images/hanni.jpg", text: "today is boba partyyyyy", time: "11:57" },
  { name: "Danielle", avatar: "images/danielle.jpg", text: "bubble tea time", time: "11:58" },
  { name: "Minji", avatar: "images/minji.jpg", text: "soft dreamy day today", time: "11:58" }
];

const liveChat = document.getElementById("live-chat");
const bunny = document.getElementById("bunny");
const notification = document.getElementById("notification");

let lineIndex = 0;

function addChatMessage(line) {
  if (!liveChat) return;

  const msg = document.createElement("div");
  msg.className = "msg live-in";
  msg.innerHTML = `
    <img class="avatar" src="${line.avatar}" alt="${line.name} avatar" />
    <div class="msg-content">
      <div class="name">${line.name}</div>
      <div class="bubble">${line.text}</div>
      <div class="time">${line.time}</div>
    </div>
  `;
  liveChat.appendChild(msg);
  liveChat.scrollTop = liveChat.scrollHeight;
}

function cycleChat() {
  addChatMessage(chatLines[lineIndex]);
  showNotification(`${chatLines[lineIndex].name}: ${chatLines[lineIndex].text}`);
  lineIndex = (lineIndex + 1) % chatLines.length;
}

function showNotification(text) {
  if (!notification) return;
  notification.textContent = text;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2600);
}

if (bunny) {
  document.addEventListener("mousemove", (e) => {
    bunny.style.left = e.clientX + 16 + "px";
    bunny.style.top = e.clientY + 16 + "px";
  });
}

setInterval(cycleChat, 2500);
window.addEventListener("load", () => {
  for (let i = 0; i < 3; i++) cycleChat();
});
const music=document.getElementById("music");
const btn=document.getElementById("musicBtn");

btn.onclick=()=>{
music.paused?music.play():music.pause();
}
document.addEventListener("click",(e)=>{
const bunny=document.createElement("div");

bunny.innerText="🐰";
bunny.className="bunny-pop";

bunny.style.left=e.clientX+"px";
bunny.style.top=e.clientY+"px";

document.body.appendChild(bunny);

setTimeout(()=>bunny.remove(),1000);
});
const pop=new Audio("pop.mp3");

function playPop(){
pop.currentTime=0;
pop.play();
}
const pop=new Audio("pop.mp3");

function playPop(){
pop.currentTime=0;
pop.play();
}
const random = chatLines[Math.floor(Math.random()*chatLines.length)];
addChatMessage(random);
document.querySelectorAll(".reaction").forEach(r=>{
r.addEventListener("click",()=>{
r.style.transform="scale(1.4)";
setTimeout(()=>r.style.transform="scale(1)",200);
});
});
function openProfile(name,img){
document.getElementById("profilePopup").style.display="flex";
document.getElementById("profileName").innerText=name;
document.getElementById("profileImg").src=img;
}

function closeProfile(){
document.getElementById("profilePopup").style.display="none";
}
liveChat.scrollTop = liveChat.scrollHeight;
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
function fakeTyping(){
const typing = document.getElementById("typing");

typing.style.display="flex";

setTimeout(()=>{
typing.style.display="none";
spawnMessage();
},2000);
}

setInterval(fakeTyping,6000);
