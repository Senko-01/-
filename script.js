document.getElementById("discordBtn").onclick = function() {
  window.location.href = "https://discord.gg/cMQWT4hen6";
};

document.getElementById("foxyDoxyBtn").onclick = function() {
  window.location.href = "https://discord.com/oauth2/authorize?client_id=993828394892546138&permissions=67584&scope=bot";
};

document.getElementById("tanjiroKamadoBtn").onclick = function() {
  window.location.href = "https://discord.com/oauth2/authorize?client_id=1212319283116380220&permissions=67584&scope=bot";
};

document.getElementById("wolfClientBtn").onclick = function() {
  var wolfClientBox = document.getElementById("wolfClientBox");
  if (wolfClientBox.style.display === "none") {
    wolfClientBox.style.display = "block";
  } else {
    wolfClientBox.style.display = "none";
  }
};
