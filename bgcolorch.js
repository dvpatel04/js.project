function changeColor() {
    const colors = ["#6D712E", "#F4C2C2", "#4F758B", "#36454F", "#DCAE96"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}