// Function to upload and display profile picture
function uploadProfilePic() {
  const profilePicInput = document.getElementById('profile-pic-upload').files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
      const profilePicData = event.target.result;
      localStorage.setItem('profilePic', profilePicData);
      document.getElementById('profile-pic').src = profilePicData;
  }

  if (profilePicInput) {
      reader.readAsDataURL(profilePicInput); // Convert image to Base64
  }
}

// Function to load saved details from localStorage
function loadPortfolio() {
  const profilePicData = localStorage.getItem('profilePic');
  if (profilePicData) {
      document.getElementById('profile-pic').src = profilePicData;
  }

  const name = localStorage.getItem('name');
  if (name) {
      document.getElementById('name-input').value = name;
  }

  const aboutMe = localStorage.getItem('aboutMe');
  if (aboutMe) {
      document.getElementById('about-me-text').value = aboutMe;
  }

  const skills = localStorage.getItem('skills');
  if (skills) {
      document.getElementById('skills-text').value = skills;
  }

  const achievements = localStorage.getItem('achievements');
  if (achievements) {
      document.getElementById('achievements-text').value = achievements;
  }

  const contact = localStorage.getItem('contact');
  if (contact) {
      document.getElementById('contact-text').value = contact;
  }

  const education = localStorage.getItem('education');
  if (education) {
      document.getElementById('education-text').value = education;
  }

  const workExperience = localStorage.getItem('workExperience');
  if (workExperience) {
      document.getElementById('work-experience-text').value = workExperience;
  }
}

// Function to save manually typed text content
function savePortfolio() {
  const name = document.getElementById('name-input').value;
  localStorage.setItem('name', name);

  const aboutMe = document.getElementById('about-me-text').value;
  localStorage.setItem('aboutMe', aboutMe);

  const skills = document.getElementById('skills-text').value;
  localStorage.setItem('skills', skills);

  const achievements = document.getElementById('achievements-text').value;
  localStorage.setItem('achievements', achievements);

  const contact = document.getElementById('contact-text').value;
  localStorage.setItem('contact', contact);

  const education = document.getElementById('education-text').value;
  localStorage.setItem('education', education);

  const workExperience = document.getElementById('work-experience-text').value;
  localStorage.setItem('workExperience', workExperience);

  alert("Portfolio saved successfully!");
}

// Function to generate resume PDF using jsPDF
function generateResume() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const profilePic = localStorage.getItem('profilePic');
  if (profilePic) {
      doc.addImage(profilePic, 'JPEG', 150, 10, 40, 40); // Profile picture in top-right corner
  }

  const name = localStorage.getItem('name') || "Your Name";
  doc.setFontSize(24);
  doc.text(20, 20, name); // Name as the main heading

  // About Me Section
  const aboutMe = localStorage.getItem('aboutMe') || "";
  doc.setFontSize(12);
  doc.text(20, 50, aboutMe);

  // Skills Section
  doc.setFontSize(16);
  doc.text(20, 70, "Skills");
  const skills = localStorage.getItem('skills') || "";
  doc.setFontSize(12);
  doc.text(20, 80, skills);

  // Achievements Section
  doc.setFontSize(16);
  doc.text(20, 100, "Achievements");
  const achievements = localStorage.getItem('achievements') || "";
  doc.setFontSize(12);
  doc.text(20, 110, achievements);

  // Contact Section
  doc.setFontSize(16);
  doc.text(20, 130, "Contact");
  const contact = localStorage.getItem('contact') || "";
  doc.setFontSize(12);
  doc.text(20, 140, contact);

  // Education Section
  doc.setFontSize(16);
  doc.text(20, 160, "Education");
  const education = localStorage.getItem('education') || "";
  doc.setFontSize(12);
  doc.text(20, 170, education);

  // Work Experience Section
  doc.setFontSize(16);
  doc.text(20, 190, "Work Experience");
  const workExperience = localStorage.getItem('workExperience') || "";
  doc.setFontSize(12);
  doc.text(20, 200, workExperience);

  doc.save('resume.pdf'); // Save PDF as "resume.pdf"
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
