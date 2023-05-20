// Select PlayPause button
const button = document.querySelector("button");
// Click Event
button.addEventListener("click", (e) => {
  // Pause Video
  if (!button.classList.contains("pause")) {
    button.style.setProperty("--left", "50%");
    button.style.setProperty("--border-radius", "0px 50px 50px 0px");
    button.style.textAlign = "left";
    button.classList.toggle("pause");
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("pause").classList.add("hidden");
    document.querySelector("video").pause();
  }
  //Play video
  else {
    button.style.setProperty("--left", "0px");
    button.style.setProperty("--border-radius", "50px 0px 0px 50px");
    button.style.textAlign = "right";
    button.classList.toggle("pause");
    document.getElementById("play").classList.add("hidden");
    document.getElementById("pause").classList.remove("hidden");
    document.querySelector("video").play();
  }
});
