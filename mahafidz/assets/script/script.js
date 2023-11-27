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

/* Firebase Views Counter

$.each($(".post-view[data-id]"), function (a, e) {
  var l = $(e).parent().find("#postviews").addClass("view-load"),
    i = new Firebase("https://mahafidz-61b68-default-rtdb.firebaseio.com/pages/id" + $(e).attr("data-id"));
  i.once("value", function (a) {
    var n = a.val(),
      t = !1;
    null == n && ((n = {}), (n.value = 0), (n.url = window.location.href), (n.id = $(e).attr("data-id")), (t = !0)),
      l.removeClass("view-load").text(n.value),
      n.value++,
      "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value));
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyAzjnIRF22VGEOLGYjF_oBSJM8F-JXTfTo",
  authDomain: "mahafidz-61b68.firebaseapp.com",
  projectId: "mahafidz-61b68",
  storageBucket: "mahafidz-61b68.appspot.com",
  messagingSenderId: "87819973629",
  appId: "1:87819973629:web:c506d792bed5a6b1239f94",
  measurementId: "G-ZYE5N4RQLL",
};

const app = firebase.initializeApp(firebaseConfig);

const hitCounter = document.getElementById("visits1");
hitCounter.style.display = "none";

const db = firebase.database().ref("totalHits");
db.on("value", (snapshot) => {
  hitCounter.textContent = snapshot.val();
});
db.transaction(
  (totalHits) => totalHits + 1,
  (error) => {
    if (error) {
      console.log(error);
    } else {
      hitCounter.style.display = "inline-block";
    }
  }
);
const userCookieName = "returningVisitor";
checkUserCookie(userCookieName);

function checkUserCookie(userCookieName) {
  const regEx = new RegExp(userCookieName, "g");
  const cookieExists = document.cookie.match(regEx);
  if (cookieExists != null) {
    hitCounter.style.display = "block";
  } else {
    createUserCookie(userCookieName);
    db.transaction(
      (totalHits) => totalHits + 1,
      (error) => {
        if (error) {
          console.log(error);
        } else {
          hitCounter.style.display = "inline-block";
        }
      }
    );
  }
}

function createUserCookie(userCookieName) {
  const userCookieValue = "Yes";
  const userCookieDays = 7;
  let expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + userCookieDays);
  document.cookie = userCookieName + "=" + userCookieValue + "; expires=" + expiryDate.toGMTString() + "path=/";
}
*/
