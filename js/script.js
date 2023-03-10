window.addEventListener("load", (e) => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    //   Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".page-loader").style.display = "none";
    }, 600);
  });
  
  // Toggle Navbar
  const navToggler = document.querySelector(".nav-toggler");
  navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
  });
  function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
  }
  function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
  }
  
  // Active Section
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
      //   Activate the overlay to prevent multiple clicks
      document.querySelector(".overlay").classList.add("active");
      navToggler.classList.add("hide");
      if (e.target.classList.contains("nav-item")) {
        toggleNavbar();
      } else {
        hideSection();
        document.body.classList.add("hide-scrolling");
      }
      setTimeout(() => {
        document
          .querySelector("section.active")
          .classList.remove("active", "fade-out");
        document.querySelector(e.target.hash).classList.add("active");
        window.scrollTo(0, 0);
        document.body.classList.remove("hide-scrolling");
        navToggler.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");
      }, 500);
    }
  });
  
  // About Tabs
  const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");
  
  tabsContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      tabsContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
  
  // Portfolio Item Details
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
      togglePortfolioPopup();
      document.querySelector(".portfolio-popup").scrollTo(0, 0);
      portfolioItemDetails(e.target.parentElement);
    }
  });
  function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
  }
  document
    .querySelector(".pp-close")
    .addEventListener("click", togglePortfolioPopup);
  
  // Hide popup when click outside of it
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
      togglePortfolioPopup();
    }
  });
  
  function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
      ".portfolio-item-thumbnail img"
    ).src;
  
    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item-details"
    ).innerHTML;
  }

  //cv
  let btnDownload = document.querySelector("button");
btnDownload.addEventListener("click", startDownload);
async function startDownload() {
  let url = "test.pdf";
  let fileName = "My Document";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);
};


(function(){
  emailjs.init("R_S3A6tgG2OkvnQ--");
})();
//contact-form
function sendMail(contactForm) {
  emailjs.send("service_2z0g60s", "template_a4wo40s", {
    "from_name": contactForm.Name.value,
    "from_email": contactForm.Email.value,
    "subject": contactForm.Subject.value,
    "message": contactForm.Message.value
  })
  .then(function(response) {
    console.log("SUCCESS", response);
  }, function(error) {
    console.log("FAILED", error);
  });
  return false; // To block from loading a new page
}
document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault(); // To prevent default submission behavior
  sendMail(this);
});

  // });
  // document.getElementById('contact-form').addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     // generate a five digit number for the contact_number variable
  //     this.contact_number.value = Math.random() * 100000 | 0;
  //     // these IDs from the previous steps
  //     emailjs.sendForm('contact_service', 'contact_form', this)
  //         .then(function() {
  //             console.log('SUCCESS!');
  //         }, function(error) {
  //             console.log('FAILED...', error);
  //         });
  // })
// }