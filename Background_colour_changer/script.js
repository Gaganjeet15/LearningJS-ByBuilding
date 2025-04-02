function colour() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let set_id;
const test = document
  .getElementById("start")
  .addEventListener("click", function () {
    function start_btn() {
      document.querySelector("body").style.backgroundColor = colour();
    }
    if (!set_id) {
      set_id = setInterval(start_btn, 1000);
    }
  });

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(set_id);
  set_id = null;
});
