const chatLines = [
  { name: "Minji", avatar: "images/minji.jpg", text: "hi bunnies ✨", time: "11:55" },
  { name: "Hanni", avatar: "images/hanni.jpg", text: "boba!!! 🧋", time: "11:55" },
  { name: "Danielle", avatar: "images/danielle.jpg", text: "hehe", time: "11:56" },
  { name: "Haerin", avatar: "images/haerin.jpg", text: "와", time: "11:56" },
  { name: "Hyein", avatar: "images/hyein.jpg", text: "alien mode 👽", time: "11:57" },
  { name: "Hanni", avatar: "images/hanni.jpg", text: "today is a boba party", time: "11:57" },
  { name: "Danielle", avatar: "images/danielle.jpg", text: "bubble tea time <3", time: "11:58" },
  { name: "Minji", avatar: "images/minji.jpg", text: "It is a soft and dreamy day today", time: "11:58" },
  { name: "Haerin", avatar: "images/haerin.jpg", text: "Meow >.<", time: "11:59" },
  { name: "Hyein", avatar: "images/hyein.jpg", text: "Hello Bunnies <3", time: "11:59" }
];

const liveChat = document.getElementById("live-chat");
const typing = document.getElementById("typing");
const notification = document.getElementById("notification");
const cursor = document.getElementById("cursor");

let lineIndex = 0;

function showTyping() {
  if (!typing) return;
  typing.classList.remove("hidden");
}

function hideTyping() {
  if (!typing) return;
  typing.classList.add("hidden");
}

function showNotification(text) {
  if (!notification) return;
  notification.textContent = text;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2200);
}

function addChatMessage(line) {
  if (!liveChat) return;

  const msg = document.createElement("div");
  msg.className = "msg live-in";
  msg.innerHTML = `
    <img class="avatar" src="${line.avatar}" alt="${line.name} avatar" />
    <div class="msg-content">
      <div class="name">${line.name}</div>
      <div class="bubble small">${line.text}</div>
      <div class="time">${line.time}</div>
    </div>
  `;

  liveChat.appendChild(msg);
  liveChat.scrollTop = liveChat.scrollHeight;
  showNotification(`${line.name}: ${line.text}`);
}

function cycleChat() {
  showTyping();

  setTimeout(() => {
    hideTyping();
    addChatMessage(chatLines[lineIndex]);
    lineIndex = (lineIndex + 1) % chatLines.length;
  }, 1300);
}

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX + 8}px`;
    cursor.style.top = `${e.clientY + 8}px`;
  });
}

window.addEventListener("load", () => {
  if (liveChat) {
    addChatMessage(chatLines[0]);
    addChatMessage(chatLines[1]);
    addChatMessage(chatLines[2]);
    lineIndex = 3;
    setInterval(cycleChat, 3200);
  }
});
