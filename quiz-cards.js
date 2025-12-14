// =========================
// QUIZ CARD UI SCRIPT
// Licensed to: grndedagency.com
// =========================

alert("Quiz JS loaded");



(function () {
  // ---- DOMAIN LOCK ----
  // Only run on *.grndedagency.com
  var allowedRoot = "grndedagency.com";

  if (!window.location.hostname.endsWith(allowedRoot)) {
    console.warn(
      "Quiz card script disabled for this domain:",
      window.location.hostname
    );
    return;
  }

  // ---- MAIN LOGIC ----
  window.addEventListener("load", function () {
    // Find every radio-question container
    var radioContainers = document.querySelectorAll(".standard-radio-container");
    if (!radioContainers.length) return;

    radioContainers.forEach(function (container) {
      // Go up to the question wrapper
      var wrapper =
        container.closest(".form-builder--item") ||
        container.closest(".form-group") ||
        container.parentElement;

      // Add a class only to radio-card questions
      if (wrapper) {
        wrapper.classList.add("card-question");
      }
    });
  });
})();

