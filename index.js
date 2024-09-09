window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav-bar");
  const navItem1 = document.getElementById("navitem-1");
  const navItem2 = document.getElementById("navitem-2");
  const navItem3 = document.getElementById("navitem-3");
  const navItem4 = document.getElementById("navitem-4");
  const navItem5 = document.getElementById("navitem-5");
  const navItem6 = document.getElementById("navitem-6");
  const navItem7 = document.getElementById("navitem-7");
  const aboutSection = document.getElementById("about");
  const experienceSection = document.getElementById("experience");
  const educationSection = document.getElementById("education");
  const blogsSection = document.getElementById("blogs");
  const interestSection = document.getElementById("interest");
  const contactSection = document.getElementById("contact");

  const aboutTop = aboutSection.offsetTop;
  const experienceTop = experienceSection.offsetTop;
  const educationTop = educationSection.offsetTop;
  const blogsTop = blogsSection.offsetTop;
  const interestTop = interestSection.offsetTop;
  const contactTop = contactSection.offsetTop;

  // Get the current scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Change navbar background color based on scroll position
  if (scrollPosition >= aboutTop && scrollPosition < experienceTop) {
    navbar.style.backgroundColor = "blue";
    navItem2.style.textDecoration = "underline white 3px";
    navItem3.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
    navItem1.style.textDecoration = "none";
  } else if (scrollPosition >= experienceTop && scrollPosition < educationTop) {
    navbar.style.backgroundColor = "orangered";
    navItem3.style.textDecoration = "underline white 3px";
    navItem2.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
    navItem1.style.textDecoration = "none";
  } else if (scrollPosition >= educationTop && scrollPosition < blogsTop) {
    navbar.style.backgroundColor = "blue";
    navItem4.style.textDecoration = "underline white 3px";
    navItem1.style.textDecoration = "none";
    navItem2.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
  } else if (scrollPosition >= blogsTop && scrollPosition < interestTop) {
    navbar.style.backgroundColor = "#4caf50";
    navItem5.style.textDecoration = "underline white 3px";
    navItem1.style.textDecoration = "none";
    navItem2.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
  } else if (scrollPosition >= interestTop && scrollPosition < contactTop) {
    navbar.style.backgroundColor = "#4caf50";
    navItem6.style.textDecoration = "underline white 3px";
    navItem1.style.textDecoration = "none";
    navItem2.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
  } else if (scrollPosition >= contactTop) {
    navbar.style.backgroundColor = "orangered";
    navItem7.style.textDecoration = "underline white 3px";
    navItem1.style.textDecoration = "none";
    navItem2.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
  } else {
    navbar.style.backgroundColor = "black";
    navItem1.style.textDecoration = "underline white 3px";
    navItem2.style.textDecoration = "none";
    navItem3.style.textDecoration = "none";
    navItem4.style.textDecoration = "none";
    navItem5.style.textDecoration = "none";
    navItem6.style.textDecoration = "none";
    navItem7.style.textDecoration = "none";
  }
});

const sendMail = async () => {
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  console.log(name, subject, email, message);
  const url = "http://localhost:5002/user/sendemail";
  const data = { name, subject, email, message };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      if (!responseData.status) {
        console.log(responseData.message);
      } else {
        console.log(responseData.message, "message");
        console.log(AdminqrCode);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
