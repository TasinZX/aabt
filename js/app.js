$(document).ready(function () {
  $("#profile-ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
  });

  // counter

  const counters = document.querySelectorAll(".counter");
  function runCounter() {
    counters.forEach((counter) => {
      counter.innerText = 0;

      let target = +counter.dataset.count;

      let step = target / 100;

      let countIt = function () {
        let displayedCOunt = +counter.innerText;
        if (displayedCOunt < target) {
          counter.innerText = Math.ceil(displayedCOunt + step);
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };
      countIt();
    });
  }

  let counterSection = document.querySelector(".counter-wrapper");

  let options = {
    rootMargin: "0px 0px -200px 0px",
  };

  let done = 0;

  const sectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done !== 1) {
      done = 1;
      runCounter();
    }
  }, options);
  sectionObserver.observe(counterSection);

  // image filter

  var $wrapper = $(".portfolio-wrapper");

  // initialize isotope

  $(".portfolio-wrapper").isotope({
    // options
    itemSelector: ".item",
    layoutMode: "fitRows",
  });
  $(".tabs ul li a").click(function (e) {
    e.preventDefault();
    $(".tabs ul li a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $(".portfolio-wrapper").isotope({
      filter: selector,
    });
    return false;
  });

  // magnify popup

  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });

  // slider

  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });
});
