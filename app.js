

  
// ======= TOGGLE MENU (Single Working Version) =======
// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.getElementById("menuToggle");
//   const mobileMenu = document.getElementById("mobileMenu");

//   if (menuToggle && mobileMenu) {
//     menuToggle.addEventListener("click", () => {
//       mobileMenu.classList.toggle("active");
//     });
//   }
// });document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");

      // Jab menu open ho, usi jagah khula rahe (upar scroll na kare)
      if (mobileMenu.classList.contains("open")) {
        menuToggle.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }







// document.addEventListener("DOMContentLoaded", () => {
//   const menuToggle = document.getElementById("menuToggle");
//   const mobileMenu = document.getElementById("mobileMenu");

//   if (menuToggle && mobileMenu) {
//     menuToggle.addEventListener("click", () => {
//       mobileMenu.classList.toggle("open");

//       // Agar menu open hua — scroll le aao button ke paas
//       if (mobileMenu.classList.contains("open")) {
//         menuToggle.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     });
//   }
// });


// ======= FOOTER IMPORT =======
fetch("footer/footer.html")
  .then((res) => res.text())
  .then((data) => {
    const footerEl = document.getElementById("footer");
    if (footerEl) footerEl.innerHTML = data;
  })
  .catch((err) => console.error("Footer load error:", err));




// ======= ANIMATION (AOS + Slider) =======
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-in-out",
  offset: 100,
});

// Apply animation to all cards
document.querySelectorAll(".card").forEach((card) => {
  card.setAttribute("data-aos", "fade-up");
});

// ✅ All Medicines Data
const medicines = [
  { name: "COMUG CAP", price: "Rs. 2710", image: "./images/tab-5.jpg" },
  { name: "SPECTRIX 1200", price: "Rs. 1200", image: "./images/tab-2.jpg" },
  { name: "ZATOFEN TAB", price: "Rs. 335", image: "./images/tab-28.jpg" },
  { name: "CQ10 CAP 100mg", price: "Rs. 2270", image: "./images/tab-3.jpg" },
  { name: "LIBIZO MEN SCH", price: "Rs. 3360", image: "./images/tab-1.jpg" },
  { name: "INFERNO TAB", price: "Rs. 5188", image: "./images/tab-6.jpg" },
  { name: "MYOFAM SCH", price: "Rs. 980", image: "./images/myofam.jpg" },
  { name: "METHCOBAL TAB 500mg", price: "Rs. 3000", image: "./images/tab-18.jpg" },
  { name: "CORONDIN", price: "Rs. 1740", image: "./images/tab-7.jpg" },
  { name: "OVACARE", price: "Rs. 2990", image: "./images/tab-8.jpg" },
  { name: "ESON TAB 40mg", price: "Rs. 475", image: "./images/tab-16.jpg" },
  { name: "CAC 1000 PLUS", price: "Rs. 330", image: "./images/tab-11.jpg" },
  { name: "NUBROUL FORT TAB", price: "Rs. 195", image: "./images/tab-10.jpg" },
  { name: "MAXFOL TAB", price: "Rs. 420", image: "./images/tab-13.jpg" },
  { name: "ELFOVA TAB", price: "Rs. 960", image: "./images/elfova.jpg" },
  { name: "CALDREE TAB 600mg", price: "Rs. 420", image: "./images/tab-14.jpg" },
  { name: "DANZEN TAB 5mg", price: "Rs. 220", image: "./images/tab-33.jpg" },
  { name: "POLYMALT TAB 100mg", price: "Rs. 300", image: "./images/tab-19.jpg" },
  { name: "MIXEL 200mg", price: "Rs. 303", image: "./images/mixel200.jpg" },
  { name: "MIXEL 400mg", price: "Rs. 579.58", image: "./images/tab-20.jpg" },
  { name: "RULLING CAP 40mg", price: "Rs. 460", image: "./images/tab-22.jpg" },
  { name: "RISEK CAP 40mg", price: "Rs. 840", image: "./images/tab-36.jpg" },
  { name: "RISEK CAP 20mg", price: "Rs. 372", image: "./images/tab-37.jpg" },
  { name: "OSNATE D TAB", price: "Rs. 600", image: "./images/tab-23.jpg" },
  { name: "VOREN TAB", price: "Rs. 1099", image: "./images/tab-38.jpg" },
  { name: "ASCARD TAB", price: "Rs. 88", image: "./images/tab-26.jpg" },
  { name: "XTRAVIT TAB", price: "Rs. 750", image: "./images/xtravid.jpg" },
  { name: "EZIDAY TAB 50mg", price: "Rs. 478", image: "./images/tab-25.jpg" },
  { name: "PRIMOLUT N TAB 5mg", price: "Rs. 418", image: "./images/tab-27.jpg" },
  { name: "STMOM 200mg", price: "Rs. 200", image: "./images/tab-31.jpg" },
  { name: "ALDOMET TAN 250mg", price: "Rs. 1490", image: "./images/tab-34.jpg" },
  { name: "BRUFEN TAB 400", price: "Rs. 400", image: "./images/tab-39.jpg" },
  { name: "FAMVID TAB", price: "Rs. 630", image: "./images/tab-29.jpg" },
  { name: "FAMIRON CAP", price: "Rs. 420", image: "./images/tab-30.jpg" },
  { name: "MULTBAN CAP", price: "Rs. 400", image: "./images/tab-17.jpg" },
  { name: "NOSPA TAB", price: "Rs. 250", image: "./images/tab-15.jpg" },
  { name: "FLAGYL TAB 400mg", price: "Rs. 950", image: "./images/tab-35.jpg" },
  { name: "CEFIM CAP 400mg", price: "Rs. 510", image: "./images/tab-32.jpg" },
  { name: "PANADOL TAB", price: "Rs. 700", image: "./images/penadol.jpg" },
  { name: "CARNEEL TAB", price: "Rs. 2832", image: "./images/carneelTab.jpg" },
  { name: "FESERVOIR", price: "Rs. 2890", image: "./images/tab-12.jpg" },
  { name: "NEUROBION TAB", price: "Rs. 1388", image: "./images/nuerobion.jpg" },
];

// ✅ Display function (safe for all pages)
function displayMedicines(filtered = medicines) {
  const container = document.getElementById("medicineContainer");
  if (!container) return; // Stop if not on medicine page

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-results">No medicine found 😔</p>`;
    return;
  }

  filtered.forEach((med, index) => {
    const card = document.createElement("div");
    card.classList.add("medicine-card");
    card.setAttribute("data-aos", index % 2 === 0 ? "fade-right" : "fade-left");
    card.innerHTML = `
      <div class="medicine-image">
        <img src="${med.image}" alt="${med.name}">
      </div>
      <div class="medicine-details">
        <h3 class="medicine-name">${med.name}</h3>
        <p class="price">${med.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ✅ Search setup for any form/input
function setupSearch(inputId, formId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = input.value.toLowerCase().trim();
    if (!query) return;

    const onMedicinePage = window.location.pathname.toLowerCase().endsWith("medicine.html");

    if (!onMedicinePage) {
      // Redirect if not on medicine page
      window.location.href = `medicine.html?search=${encodeURIComponent(query)}`;
      return;
    }

    // Filter if already on medicine page
    const filtered = medicines.filter((med) =>
      med.name.toLowerCase().includes(query)
    );
    displayMedicines(filtered);
  });
}

// ✅ Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  // Setup both desktop + mobile search
  setupSearch("searchInput", "searchForm");
  setupSearch("searchInputMobile", "searchFormMobile");

  // Check for ?search= in URL
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search") ? params.get("search").toLowerCase().trim() : "";

  if (query && window.location.pathname.toLowerCase().endsWith("medicine.html")) {
    const filtered = medicines.filter((med) =>
      med.name.toLowerCase().includes(query)
    );
    displayMedicines(filtered);
  } else {
    displayMedicines(medicines);
  }
});

function setupSearch(inputId, formId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);

  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // ✅ Stop page from refreshing

      const searchQuery = input.value.trim();
      if (searchQuery) {
        window.location.href = `medicine.html?search=${encodeURIComponent(searchQuery)}`;
      }
    });
  }
}


window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const whatsapp = document.querySelector(".whatsapp-float");

  if (!footer || !whatsapp) return;

  const footerRect = footer.getBoundingClientRect();

  // If footer is visible on screen → Hide icon
  if (footerRect.top < window.innerHeight) {
    whatsapp.style.opacity = "0";
    whatsapp.style.pointerEvents = "none";
  } else {
    whatsapp.style.opacity = "1";
    whatsapp.style.pointerEvents = "auto";
  }
});
