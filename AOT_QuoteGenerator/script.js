document.getElementById("gen").addEventListener("click", function () {
  getQuote();
});

function getQuote() {
  fetch("https://aot-api.vercel.app/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "para"
      ).innerHTML = `"${data.quote}" — <strong>${data.author}</strong>`;
    })
    .catch((error) => console.log("error"));
}
