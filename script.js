//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const dropZones = document.querySelectorAll(".drop-zone");

  let draggedItem = null;

  // Add dragstart event listener to each item
  items.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dblclick", handleDoubleClick);
  });

  // Add dragover event listener to each drop zone
  dropZones.forEach((dropZone) => {
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("drop", handleDrop);
  });

  function handleDragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData("text/plain", ""); // required for Firefox
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const dropZone = event.target;

    // Check if the drop occurred in a valid drop zone
    if (dropZone.classList.contains("drop-zone")) {
      // Check if the item is being dropped in a different drop zone
      if (!dropZone.contains(draggedItem)) {
        dropZone.appendChild(draggedItem);
      }
    }
  }

  function handleDoubleClick(event) {
    // Double-click event to move the item back to the unranked drop zone
    const dropZone = document.getElementById("unranked-drop-zone");

    // Check if the item is not already in the unranked drop zone
    if (!dropZone.contains(event.target)) {
      dropZone.appendChild(event.target);
    }
  }
});
