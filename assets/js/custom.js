(function ($) {
  "use strict";

  // Page loading animation
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });

  // WOW JS
  $(window).on("load", function () {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // Animated element css class (default is wow)
        animateClass: "animated", // Animation css class (default is animated)
        offset: 20, // Distance to the element when triggering the animation (default is 0)
        mobile: true, // Trigger animations on mobile devices (default is true)
        live: true, // Act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $("header").height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  var width = $(window).width();
  $(window).resize(function () {
    if (width > 992 && $(window).width() < 992) {
      location.reload();
    } else if (width < 992 && $(window).width() > 992) {
      location.reload();
    }
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".nav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }

  const dropdownOpener = $(".main-nav ul.nav .has-sub > a");

  // Open/Close Submenus
  if (dropdownOpener.length) {
    dropdownOpener.each(function () {
      var _this = $(this);

      _this.on("tap click", function (e) {
        var thisItemParent = _this.parent("li"),
          thisItemParentSiblingsWithDrop = thisItemParent.siblings(".has-sub");

        if (thisItemParent.hasClass("has-sub")) {
          var submenu = thisItemParent.find("> ul.sub-menu");

          if (submenu.is(":visible")) {
            submenu.slideUp(450, "easeInOutQuad");
            thisItemParent.removeClass("is-open-sub");
          } else {
            thisItemParent.addClass("is-open-sub");

            if (thisItemParentSiblingsWithDrop.length === 0) {
              thisItemParent
                .find(".sub-menu")
                .slideUp(400, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            } else {
              thisItemParent
                .siblings()
                .removeClass("is-open-sub")
                .find(".sub-menu")
                .slideUp(250, "easeInOutQuad", function () {
                  submenu.slideDown(250, "easeInOutQuad");
                });
            }
          }
        }

        e.preventDefault();
      });
    });
  }

  $("#playerOne").on("hidden.bs.modal", function () {
    let ReadyPlayerOne = document.querySelector("#RPO");

    ReadyPlayerOne.pause();
  });
  
  $("#battleAngel").on("hidden.bs.modal", function () {
    let AlitaBattleAngel = document.querySelector("#ABA");

    AlitaBattleAngel.pause();
  });
  
  $("#anni").on("hidden.bs.modal", function () {
    let Annihilation = document.querySelector("#ANN");

    Annihilation.pause();
  });
  
  $("#adastra").on("hidden.bs.modal", function () {
    let AdAstra = document.querySelector("#AA");

    AdAstra.pause();
  });

})(window.jQuery);
