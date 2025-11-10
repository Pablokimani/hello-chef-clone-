document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach(faq => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
      faq.classList.toggle("active");
      

      const answer = faq.querySelector(".faq-answer");
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});

