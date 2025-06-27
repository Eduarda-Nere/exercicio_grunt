document.getElementById("roll").addEventListener("click", function () {
    const result = Math.floor(Math.random() * 20) + 1;
    document.getElementById("result").textContent = result;
});