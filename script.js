const getEvent = document.querySelector(".event");

window.addEventListener("keydown", (e) => {
  getEvent.innerHTML = `<div class="insert">${(e.key =
    e.key === " " ? e.code : e.key)} <small>key </small></div>
    <div class="insert">${e.code} <small>code </small></div>
    <div class="insert">${e.keyCode} <small>key code </small></div>`;
  console.log(e);
});
