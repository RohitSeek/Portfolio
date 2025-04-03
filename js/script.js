/*---------About me Read more-------------*/
document.getElementById('read-more-btn').addEventListener('click', function() {
    var extraContent = document.getElementById('extra-content');
    if (extraContent.style.display === "block") {
        extraContent.style.display = "none";
        this.innerHTML = "Read More";
    } else {
        extraContent.style.display = "block";
        this.innerHTML = "Show Less";
    }
});


/*---------toogle icon navbar-------------*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*---------Scroll Sections active link-------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*---------------sticky navbar------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*-------------remove toggle icon and navbar when click navbar link(scroll)-----------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*--------------sroll reveal--------------------*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    Delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*-------------typed js----------------*/
const typed = new Typed('.multiple-text', {
    strings: [' Web Developer', ' Software Developer', ' Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




(function () {
    emailjs.init("LV0a3AN55QpCwLPTL");  
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    // Prepare email parameters
    const params = {
        to_name: "Rohit",
        from_name: fullName,
        reply_to: email,
       
      
        message: message,
    };
//   subject: emailSubject,
//  contactNo: contactNo,
    // Send email using EmailJS
    emailjs.send("service_5g1liyk", "template_mn9vk59", params)  // Replace with your actual Service ID and Template ID
        .then(function (response) {
            alert("Message sent successfully!");
            document.getElementById('contact-form').reset();  // Clear the form after submission
        }, function (error) {
            alert("Failed to send the message. Please try again.");
        });
});