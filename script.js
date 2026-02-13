const sections = document.querySelectorAll(".tab-content");
const navLinks = document.querySelectorAll(".activate-link");

const observerOptions = {
  root: null,
  threshold: 0.6, // 60% of the section must be visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the link that matches the current section ID
      const activeLink = document.querySelector(
        `nav ul li a[href="#${entry.target.id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

window.onload = function () {
  document.getElementById("home").style.visibility = "visible";
};




const text = "Web Developer";
const container = document.querySelector(".shrink-text");

container.innerHTML = "";
[...text].forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.style.animationDelay = `${index * 0.3}s`;
  container.appendChild(span);

});



(function() {
    emailjs.init("TcPbrvBRxIaP3PeHG");
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // 'contact-form' is the form ID
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('SUCCESS! Email sent directly.');
                // Optional: Reset the form
                this.reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('FAILED... ' + JSON.stringify(error));
            });
    });
}


