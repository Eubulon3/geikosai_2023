// スクロールを禁止にする関数
function disableScroll(event) {
  event.preventDefault();
}

window.onload = function () {
  // //スクロール禁止
  // document.addEventListener("touchmove", disableScroll, { passive: false });
  // document.addEventListener("mousewheel", disableScroll, { passive: false });
  // var firstView = document.getElementById("first-view");

  // const animation = lottie.loadAnimation({
  //   container: firstView,
  //   renderer: "svg",
  //   loop: false,
  //   autoplay: true,
  //   path: "https://lottie.host/db2d4ce2-e080-4866-b13c-a53d95e83b58/7KIC8gEqKH.json",
  // });

  // //アニメーション終了後の処理
  // animation.onComplete = () => {
  //   //lottieアニメーションの要素を消す
  //   firstView.classList.add("delete");

  //   // スクロール解除
  //   document.removeEventListener("touchmove", disableScroll, {
  //     passive: false,
  //   });
  //   document.removeEventListener("mousewheel", disableScroll, {
  //     passive: false,
  //   });

  //   // フェードイン(jquery)
  //   $("body").hide().fadeIn();

  //読み込み方法の判定
  var perfEntries = performance.getEntriesByType("navigation");
  console.log(perfEntries);
  var firstView = document.getElementById("first-view");
  perfEntries.forEach(function (pe) {
    switch (pe.type) {
      case "navigate":
        console.log(pe.type);

        //スクロール禁止
        document.addEventListener("touchmove", disableScroll, {
          passive: false,
        });
        document.addEventListener("mousewheel", disableScroll, {
          passive: false,
        });

        const animation = lottie.loadAnimation({
          container: firstView,
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "https://lottie.host/db2d4ce2-e080-4866-b13c-a53d95e83b58/7KIC8gEqKH.json",
        });

        //アニメーション終了後の処理
        animation.onComplete = () => {
          //lottieアニメーションの要素を消す
          firstView.classList.add("delete");

          // スクロール解除
          document.removeEventListener("touchmove", disableScroll, {
            passive: false,
          });
          document.removeEventListener("mousewheel", disableScroll, {
            passive: false,
          });

          // フェードイン(jquery)
          $("body").hide().fadeIn();
        };

        animation.play();

        break;
      case "reload":
        firstView.classList.add("delete");
        console.log(pe.type);
        break;
      case "back_forward":
        firstView.classList.add("delete");
        console.log("back");
        break;
      case "pritender":
        firstView.classList.add("delete");
        console.log("pritender");
        break;
    }
  });
};
