const form = document.getElementById("buildingForm");
const leadScore = document.getElementById("leadScore");
const aiNotes = document.getElementById("aiNotes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("socName").value;
  const year = parseInt(document.getElementById("ocYear").value || "2000");
  const floors = parseInt(document.getElementById("floors").value || "1");

  // Mock AI logic
  let score = 50;
  if (year < 1995) score += 20;
  if (floors > 7) score += 10;

  leadScore.textContent = `Lead Score: ${score}/100`;
  aiNotes.textContent = `AI suggests extra NDT tests for ${floors} floors.`;
});
