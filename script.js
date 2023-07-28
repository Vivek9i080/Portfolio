$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // typing animation
  var typed = new Typed(".typing", {
    strings: [
      "a Student of NIT Silchar",
      "a Web Developer",
      "an Electronics and Communication Engineer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
