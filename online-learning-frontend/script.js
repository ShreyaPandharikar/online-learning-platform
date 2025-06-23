// script.js

const API_BASE = "https://learning-horizon-backend.onrender.com/api";

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
  if (!container) return;
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
  alert(courseList[index].enrolled ? "Successfully enrolled!" : "Enrollment removed.");
  renderCourses();
}

// Render Dummy Notifications
function renderNotifications() {
  const notifContainer = document.getElementById("notifications-list");
  if (!notifContainer) return;
  notifContainer.innerHTML = "";
  notifications.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    notifContainer.appendChild(li);
  });
}

// Real Login Function
async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");

  if (!email || !pass) {
    error.style.display = "block";
    error.textContent = "Please fill in both email and password.";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    alert("Login successful!");
    localStorage.setItem("token", data.token);
    window.location.href = "courses.html";
  } catch (err) {
    error.style.display = "block";
    error.textContent = err.message;
  }
}

// Real Signup Function
async function signupUser() {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;
  const error = document.getElementById("signupError");

  if (!email || !pass) {
    error.style.display = "block";
    error.textContent = "Please fill in all fields.";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pass })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Signup failed");
    }

    alert("Signup successful! You can now log in.");
    window.location.href = "auth.html";
  } catch (err) {
    error.style.display = "block";
    error.textContent = err.message;
  }
}

// On page load
window.onload = function () {
  renderCourses();
  renderNotifications();
};
