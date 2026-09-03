/* =====================================================
   script.js - Part 1
   Preloader • Typing Effect • Mobile Menu
   Theme Toggle • Smooth Scrolling
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
       PRELOADER
    ========================================== */

  const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });

  /* ==========================================
       TYPING EFFECT (Typed.js)
    ========================================== */

  if (document.getElementById("typing")) {
    new Typed("#typing", {
      strings: ["Full Stack Developer", "Front-end Developer"],

      typeSpeed: 80,

      backSpeed: 50,

      backDelay: 1800,

      loop: true,

      smartBackspace: true,
    });
  }

  /* ==========================================
       MOBILE MENU
    ========================================== */

  const menuBtn = document.getElementById("menu-btn");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");

      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  /* ==========================================
       DARK / LIGHT MODE
    ========================================== */

  const themeButton = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    themeButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("portfolio-theme", "dark");

      themeButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem("portfolio-theme", "light");

      themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });

  /* ==========================================
       SMOOTH SCROLL
    ========================================== */

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 80,

        behavior: "smooth",
      });
    });
  });

  /* ==========================================
       DOWNLOAD RESUME MESSAGE
    ========================================== */

  const resumeButton = document.querySelector(".secondary-btn");

  if (resumeButton) {
    resumeButton.addEventListener("click", () => {
      console.log("Resume download started.");
    });
  }

  /* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
});

/* ==========================================
   Google Form Contact Me
========================================== */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const button = contactForm.querySelector("button[type='submit']");

    button.disabled = true;
    button.textContent = "Sending...";

    fetch(
      "https://script.google.com/macros/s/AKfycbzU39WNYJxui9tw4LOGR_emyFJX1z3-NS29OQWapjbQXy49PkUUCuZnpBJK9BN__GP-Eg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      },
    )
      .then(function () {
        alert("Message sent successfully!");
        contactForm.reset();
      })
      .catch(function (error) {
        console.error("Contact form error:", error);

        alert("Unable to send message. Please try again.");
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = "Send Message";
      });
  });
});

/* ==========================================
   Google Form Contact Me with mail update
========================================== */

// fetch("https://script.google.com/macros/s/AKfycbwbV-8tuc8JhYkdBltzmZvQYtoAgAzJuFSPz_tkVgCAVd_TjODbfHXsajJvSToRrboaEg/exec", {
//     method: "POST",
//     mode: "no-cors",
//     headers: {
//         "Content-Type": "text/plain"
//     },
//     body: JSON.stringify({
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//     })
// });

// function doGet(e) {
//   return ContentService
//     .createTextOutput("Portfolio Contact Form API is working.")
//     .setMimeType(ContentService.MimeType.TEXT);
// }

// function doPost(e) {

//   try {

//     const sheet = SpreadsheetApp
//       .getActiveSpreadsheet()
//       .getSheetByName("Contact Me");

//     const yourEmail = "neeraj2006kp@gmail.com";

//     const data = JSON.parse(e.postData.contents);

//     const name = data.name || "";
//     const email = data.email || "";
//     const subject = data.subject || "";
//     const message = data.message || "";

//     // Add message to Google Sheet
//     sheet.appendRow([
//       new Date(),
//       name,
//       email,
//       subject,
//       message
//     ]);

//     // Send notification email
//     MailApp.sendEmail({
//       to: yourEmail,
//       subject: "New Portfolio Contact: " + subject,
//       body:
//         "You received a new message from your portfolio website.\n\n" +
//         "Name: " + name + "\n" +
//         "Email: " + email + "\n" +
//         "Subject: " + subject + "\n\n" +
//         "Message:\n" + message,
//       replyTo: email
//     });

//     return ContentService
//       .createTextOutput(
//         JSON.stringify({
//           status: "success"
//         })
//       )
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (error) {

//     return ContentService
//       .createTextOutput(
//         JSON.stringify({
//           status: "error",
//           message: error.toString()
//         })
//       )
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }
