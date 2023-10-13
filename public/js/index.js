console.log("あ");

window.onload = function () {
  var firstView = document.getElementById("first-view");

  const animation = lottie.loadAnimation({
    container: firstView,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://lottie.host/db2d4ce2-e080-4866-b13c-a53d95e83b58/7KIC8gEqKH.json",
  });

  animation.play();
};
