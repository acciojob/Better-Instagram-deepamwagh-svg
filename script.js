//your code here
let draggedDiv = null;

document.querySelectorAll(".image").forEach(div => {
  div.addEventListener("dragstart", function () {
    draggedDiv = this;
    this.classList.add("selected");
  });

  div.addEventListener("dragover", function (e) {
    e.preventDefault(); // required to allow drop
  });

  div.addEventListener("drop", function () {
    if (draggedDiv === this) return;

    let temp = this.style.backgroundImage;
    this.style.backgroundImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = temp;

    draggedDiv.classList.remove("selected");
  });

  div.addEventListener("dragend", function () {
    this.classList.remove("selected");
  });
});
