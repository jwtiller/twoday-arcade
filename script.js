$(document).ready(function () {
  var $carousel = $(".custom-carousel");
  var activeIndex = 0;

  $carousel.owlCarousel({
    autoWidth: true,
    loop: false
  });

  function setActiveItem(index) {
    $(".custom-carousel .item").removeClass("active");
    $(".custom-carousel .item").eq(index).addClass("active");
  }

  setActiveItem(activeIndex);

  $(".custom-carousel .item").click(function () {
    var index = $(this).index();
    setActiveItem(index);
    activeIndex = index;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 37) {
      activeIndex = (activeIndex - 1 + $carousel.find(".owl-item").length) % $carousel.find(".owl-item").length;
    } else if (e.keyCode === 39) {
      activeIndex = (activeIndex + 1) % $carousel.find(".owl-item").length;
    }
    
    setActiveItem(activeIndex);

    // Check if Enter key (keyCode 13) is pressed
    if (e.keyCode === 13) {
      alert("Current Index: " + activeIndex);
    }
  });
});
