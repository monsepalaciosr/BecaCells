const circle = document.querySelector('.circle');

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        let circleTop = 0;
        // let circleTop = parseInt(window.getComputedStyle(circle).top); 
        circle.style.top = (circleTop + 10) + "px";
    }
});
