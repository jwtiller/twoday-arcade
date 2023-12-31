$(document).ready(function () {
  var $carousel = $(".custom-carousel");
  var activeIndex = 0;

  $carousel.owlCarousel({
    autoWidth: true,
    loop: false
  });

  // Ensure the first item is marked as active initially
  setActiveItem(activeIndex);

  function setActiveItem(index) {
    $(".custom-carousel .item").removeClass("active");
    $(".custom-carousel .item").eq(index).addClass("active");
  }

  // Function to add a carousel item dynamically
  function addCarouselItem(data) {
    var $item = $("<div>").addClass("item").css("background-image", "url(" + data.imageSrc + ")");
    var $itemDesc = $("<div>").addClass("item-desc");
    var $title = $("<h3>").text(data.title);
    var $desc = $("<p>").text(data.description);

    $itemDesc.append($title, $desc);
    $item.append($itemDesc);

    $carousel.trigger("add.owl.carousel", [$item]).trigger("refresh.owl.carousel");

    // Add click event to redirect to URL
    $item.click(function () {
      window.location.href = data.url;
    });
  }

  // Define carousel item data in a generic array
  var carouselItems = [
    {
      imageSrc: "images/drone.png",
      title: "Standspill",
      description: "Prøv denne utfordringen som ble vist frem under NDC og Javazone. Her kan du konkurrere med en kollega for å se hvem som raskt kan navigere dronen gjennom labyrinten og nå pakkene først.",
      url: "https://t.ly/RArwH"
    }
    // Add more items here if needed
  ];

  // Add carousel items dynamically using a loop
  carouselItems.forEach(function (itemData) {
    addCarouselItem(itemData);
  });
  
  // Handle keyboard navigation and Enter key press
  $(document).keydown(function (e) {
    if (e.keyCode === 37) {
      activeIndex = (activeIndex - 1 + $carousel.find(".owl-item").length) % $carousel.find(".owl-item").length;
    } else if (e.keyCode === 39) {
      activeIndex = (activeIndex + 1) % $carousel.find(".owl-item").length;
    }
    
    setActiveItem(activeIndex);

    // Check if Enter key (keyCode 13) is pressed
    if (e.keyCode === 13) {
      var currentItem = carouselItems[activeIndex];
      window.location.href = currentItem.url;
    }
  });

  // Set focus on the first item when the page is fully loaded
  $(window).on('load', function () {
      setTimeout(function () {
    setActiveItem(0);
  }, 100);
  });
});
