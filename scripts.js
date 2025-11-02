document.querySelector("button").addEventListener("click", function () {
    const now = new Date();
    document.getElementById("datetime").innerText = now.toLocaleString();
});
