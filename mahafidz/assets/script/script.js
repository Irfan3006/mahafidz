// Typing Animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.innerHTML = "<span class='red fw-bolder'>Pengusaha muda</span> yang sukses di Indonesia.";
  }, 0);
  setTimeout(() => {
    text.innerHTML = "<span class='red fw-bolder'>ERP Developer</span> (Enterprise Resource Planning).";
  }, 4000);
  setTimeout(() => {
    text.innerHTML = "<span class='red fw-bolder'>Founder dan CEO</span> PT Metafora Indonesia Teknologi (IDMETAFORA).";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

// Video Popup
$(document).ready(function () {
  $("#headerVideoLinkHomeHero").magnificPopup({
    type: "inline",
    midClick: true,
    showCloseBtn: true,
  });
});

$(document).ready(function () {
  $("#headerVideoLinkHome").magnificPopup({
    type: "inline",
    midClick: true,
    showCloseBtn: true,
  });
});

$(document).ready(function () {
  $("#headerVideoLink").magnificPopup({
    type: "inline",
    midClick: true,
    showCloseBtn: true,
  });
});

$(document).ready(function () {
  $("#headerVideoLink2").magnificPopup({
    type: "inline",
    midClick: true,
  });
});

$(document).ready(function () {
  $("#headerVideoLink3").magnificPopup({
    type: "inline",
    midClick: true,
  });
});

$(document).ready(function () {
  $("#headerVideoLink4").magnificPopup({
    type: "inline",
    midClick: true,
  });
});

// Batas

// Back to top button
(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// End
