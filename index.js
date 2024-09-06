document.addEventListener("DOMContentLoaded", function () {
  let colorBox = document.getElementById("color-box");
  let changeColorBtn = document.getElementById("change-color-btn");

  let cont = document.getElementsByClassName("container");
  console.log(cont);
  for (let i = 0; i <cont.length; i++) {
   box = cont[i].children[1]
    button = cont[i].children[1].children[0];

    button.addEventListener("click", () => {
      const colors =["red", "blue", "yellow", "pink"];

      let i = 0;
      setInterval(() =>{
         box.style.background = colors[i];
         i++
         if (i > colors.length - 1) {
            i = 0;
         }
      } , 1000);

    });
  }
});
