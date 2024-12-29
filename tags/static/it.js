// Select all timeline items
const timelineItems = document.querySelectorAll(".timeline-item");

// Add click event listeners
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle active class to show/hide content
    item.classList.toggle("active");
  });
});
