/* ============================
   Part 2: JavaScript Functions
============================ */

// Function with parameters and return value
function calculateArea(width, height) {
  return width * height;
}

// Scope demonstration
let globalVar = "I'm going global";

function showScope() {
  let localVar = "I'm local";
  // Display result of calculateArea
  const result = calculateArea(5, 10);
  document.getElementById("areaResult").textContent = `Area: ${result}`;
}

/* ============================
   Part 3: CSS + JS Integration
============================ */

// Reusable animation trigger
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.classList.add(animationClass);
  setTimeout(() => el.classList.remove(animationClass), 1000);
}

// Modal toggle function
function toggleModal(show) {
  const modal = document.getElementById('modal');
  if (!modal) return;
  if (show) {
    modal.className = 'modal slide-in';
    modal.style.display = 'block';
  } else {
    modal.className = 'modal slide-out';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
}

// Card flip function
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

// ============================
// Event Listeners for Demo
// ============================
window.onload = function() {
  // Button animation
  document.getElementById('animateBtn').onclick = function() {
    triggerAnimation('animateBox', 'bounce');
  };

  // Modal open/close
  document.getElementById('openModalBtn').onclick = function() {
    toggleModal(true);
  };
  document.getElementById('closeModalBtn').onclick = function() {
    toggleModal(false);
  };

  // Card flip
  document.getElementById('card').onclick = function() {
    flipCard(this);
  };

  // Show scope/area
  document.getElementById('scopeBtn').onclick = function() {
    showScope();
  };
};



