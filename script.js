// Smooth scrolling

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// Offer Button

const dealBtn = document.getElementById("dealBtn");

dealBtn.addEventListener("click", () => {

    alert(
        "Sorry! This offer is no longer available."
    );

});

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.15)";
    }
    else{
        header.style.boxShadow = "none";
    }

});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    successMessage.textContent = "✅ Thank you! Your message has been sent.";

    form.reset();

    setTimeout(() => {
        successMessage.textContent = "";
    }, 5000);

});