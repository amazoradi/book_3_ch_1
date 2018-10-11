const sectionHeader1 = document.querySelector(".article__header");
const articleHeaders = document.querySelectorAll(".article__header");
const dashed = document.querySelector(".dashed");
const footer = document.querySelector(".article__footer")

sectionHeader1.textContent = "Welcome to the Zoradi blog.";

for ( let i = 0; i < articleHeaders.length; i++){
  articleHeaders[i].classList.add("important");
};

dashed.classList.remove("dashed");
footer.classList.add("goldenrod");


