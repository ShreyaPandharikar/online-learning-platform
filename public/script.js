// script.js

// Dummy Course List
const courseList = [
  { title: "HTML Basics", enrolled: false },
  { title: "CSS Flexbox", enrolled: true },
  { title: "JavaScript Essentials", enrolled: false }
];

// Dummy Notifications
const notifications = [
  "New course on React coming soon!",
  "Join our live session tomorrow at 5 PM",
  "Your course progress was updated."
];

// Render Courses in the Courses Section
function renderCourses() {
  const container = document.getElementById("course-list");
  container.innerHTML = "";
  courseList.forEach((course, index) => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${course.title}</h3>
      <button onclick="toggleEnrollment(${index})">
        ${course.enrolled ? "Enrolled" : "Enroll Now"}
      </button>
    `;
    container.appendChild(div);
  });
}

// Toggle enrollment status (simulated)
function toggleEnrollment(index) {
  courseList[index].enrolled = !courseList[index].enrolled;
  renderCourses();
}

// Render Dummy Notifications
function renderNotifications() {
  const notifContainer = document.getElementById("notifications-list");
  notifContainer.innerHTML = "";
  notifications.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    notifContainer.appendChild(li);
  });
}

// Dummy Login Function
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  if (email && pass) {
    alert(`Logging in user: ${email}`);
  } else {
    alert("Please enter valid credentials.");
  }
}

// Dummy Signup Function
function signupUser() {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  if (email && pass) {
    alert(`Signing up user: ${email}`);
  } else {
    alert("Please fill in all fields.");
  }
}

// On page load
window.onload = function () {
  renderCourses();
  renderNotifications();
};
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");

  if (!email || !pass) {
    error.style.display = "block";
    error.textContent = "Please fill in both email and password.";
    return;
  }

  error.style.display = "none";
  alert("Login successful!");
  window.location.href = "courses.html";
}
