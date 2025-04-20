addEventListener("DOMContentLoaded", (event) => {
    let colorBox = document.getElementById("color-box");
    let colorBtn = document.getElementById("change-color-btn");
    //Generate random colors
    function getRandomColor() {
        let value1 = Math.floor(Math.random() * 256);
        let value2 = Math.floor(Math.random() * 256);
        let value3 = Math.floor(Math.random() * 256);
        return `rgb(${value1}, ${value2}, ${value3})`;
    }
    //Change the color when the button clicked
    colorBtn.addEventListener("click", function(){
        colorBox.style.backgroundColor = getRandomColor();
    })
});
