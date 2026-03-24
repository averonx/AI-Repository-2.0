const tools = [
  { name: "ChatGPT", category: "writing", desc: "AI chatbot for everything", link: "https://chat.openai.com" },
  { name: "GitHub Copilot", category: "coding", desc: "AI coding assistant", link: "https://github.com/features/copilot" },
  { name: "Midjourney", category: "image", desc: "AI image generator", link: "#" },
  { name: "Grammarly", category: "writing", desc: "Writing assistant", link: "#" }
];

const container = document.getElementById("tools-container");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".filters button");

let currentCategory = "all";

function render() {
  container.innerHTML = "";

  const filtered = tools.filter(tool => {
    const matchCategory = currentCategory === "all" || tool.category === currentCategory;
    const matchSearch = tool.name.toLowerCase().includes(search.value.toLowerCase());

    return matchCategory && matchSearch;
  });

  filtered.forEach(tool => {
    container.innerHTML += `
      <div class="card">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <a href="${tool.link}" target="_blank" class="btn">Visit</a>
      </div>
    `;
  });
}

search.addEventListener("input", render);

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    render();
  });
});

render();
