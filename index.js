// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const testBoxes = document.querySelectorAll(".test-box");

  testBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const testType = box.getAttribute("data-test");
      if (testType) {
        window.location.href = `${testType}.html`;
      }
    });
  });
});