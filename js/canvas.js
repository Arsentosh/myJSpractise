const canvas = document.querySelector(".canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "rgba(0, 1500, 250, 0.9)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 150, 250, 0.9)";

c.fillRect(200, 200, 100, 100);
c.fillStyle = "rgba(250, 150, 0, 0.9)";

c.fillRect(300, 300, 100, 100);

c.beginPath();
c.moveTo(50, 30);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "blue";
c.stroke();
