//your code here
let dragSource = null;

      const boxes = document.querySelectorAll(".image");

      boxes.forEach(box => {
        box.addEventListener("dragstart", e => {
          dragSource = e.target;
          e.target.classList.add("selected");
          e.dataTransfer.effectAllowed = "move";
        });

        box.addEventListener("dragend", e => {
          e.target.classList.remove("selected");
        });

        box.addEventListener("dragover", e => {
          e.preventDefault();
        });

        box.addEventListener("drop", e => {
          e.preventDefault();
          if (dragSource === e.target) return;

          const tempBg = dragSource.style.backgroundImage;
          dragSource.style.backgroundImage = e.target.style.backgroundImage;
          e.target.style.backgroundImage = tempBg;

          const tempText = dragSource.innerText;
          dragSource.innerText = e.target.innerText;
          e.target.innerText = tempText;
        });
      });
