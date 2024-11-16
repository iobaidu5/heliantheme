$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


$(document).ready(function() {
  // Show all images by default on page load
  $('.portfolio-grid-item').css('display', 'block').fadeIn(400);

  // Click event for each filter button
  $('#portfolio-flters li').on('click', function() {
    // Remove the 'filter-active' class from all filter buttons and add it to the clicked button
    $('#portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');

    // Get the filter category from the clicked button
    const filterValue = $(this).data('filter');

    // Show or hide portfolio items based on the selected filter
    if (filterValue === '.all') {
      $('.portfolio-grid-item').fadeIn(400); // Show all items when "All" is clicked
    } else {
      $('.portfolio-grid-item').fadeOut(300); // Hide all items initially
      $(filterValue).fadeIn(400); // Show only items matching the selected filter
    }
  });

  // Portfolio overlay effect on hover
  $('.portfolio-item').hover(
    function() {
      $(this).find('.portfolio-content-overlay').css({
        opacity: 1,
        visibility: 'visible',
        bottom: '10px'
      });
      $(this).find('p, h3').css({
        opacity: 1,
        visibility: 'visible',
        transform: 'translateX(0)'
      });
      $(this).find('.portfolio-link-icon').css({
        transform: 'translateX(0)'
      });
    },
    function() {
      $(this).find('.portfolio-content-overlay').css({
        opacity: 0,
        visibility: 'hidden',
        bottom: '-20px'
      });
      $(this).find('p, h3').css({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateX(-15px)'
      });
      $(this).find('.portfolio-link-icon').css({
        transform: 'translateX(100%)'
      });
    }
  );
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
   nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progres");

  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value;
    bar.classList.add("animate-progress");
  });
});

//Creates an event that fires every time the mouse moves over any div with the class of "img".
// $(".slider_image").mousemove(function(event){
  
//   //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
//   var mousex = event.pageX - $(this).offset().left;
//   var mousey = event.pageY - $(this).offset().top;
  
  
//   //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.
  
//   //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
//   var imgx = (mousex - 300) / 40;
//   var imgy = (mousey - 200) / 40;
  
//   //Adds a translation css styles to the image element
//   $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
// });

// //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
// $(".img").mouseout(function(){
//   $(this).css("transform", "translate(0px,0px)");
// });




const container = document.querySelector(".slider_image");
const card = document.querySelector(".slider_image-img");

container.addEventListener("mousemove",(e)=>{
  const xPos = (window.innerWidth /2 - e.pageX) / 10;
    const yPos = (window.innerHeight /2 - e.pageY) / 10;
  
  card.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg)`;
})

container.addEventListener("mouseenter", (e)=>{
  card.style.transition = "none";
})

container.addEventListener("mouseleave",(e)=>{
  card.style.transition = "transform 0.3s";
  card.style.transform = "none";
})

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll('.progres');
  progressBars.forEach(progressBar => {
      const value = progressBar.getAttribute('data-value'); // Get the percentage from the data-value attribute
      progressBar.style.width = value; // Set the width to the data-value
  });
});




$(function() {  
  $('.btn-hover')
      .on('mouseenter', function(e) {
          const parentOffset = $(this).offset();
          const relX = e.pageX - parentOffset.left;
          const relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX });
      })
      .on('mouseout', function(e) {
          const parentOffset = $(this).offset();
          const relX = e.pageX - parentOffset.left;
          const relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX });
      });
});



$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
  }, {

      //chnage count up speed here
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

$(document).ready(function() {
  $('.portfolio').each(function() {
      $(this).addClass('show');
  });

  $('#filters .filter').on('click', function() {
      var filterValue = $(this).data('filter');
      $('#filters .filter').removeClass('active');
      $(this).addClass('active');
      
      if (filterValue === '*') {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      } else {
          $('.portfolio').each(function() {
              $(this).hide("slow").removeClass('show');
          });
          $(filterValue).each(function() {
              $(this).hide("slow").removeClass('show').delay(500).queue(function(next) {
                  $(this).show("slow").addClass('show');
                  next();
              });
          });
      }
  });
});


$(document).ready(function () {
  var owl = $(".owl");
  owl.owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // navText: [
    //   "<i class='fas fa-circle owlNav-left'></i>",
    //   "<i class='fas fa-circle owlNav-right'></i>",
    // ],
    responsiveClass: true,
    responsive: {
      100: {
        items: 1,
        nav: true,
      },
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1600: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  function limitDots() {
    var dots = $('.owl-dot');
    if (dots.length > 3) {
      dots.slice(3).hide(); // Hide all dots after the third one
    }
  }

  // Call the function to limit dots
  limitDots();

  // Reapply the limitDots function after each change (like when navigating)
  owl.on('changed.owl.carousel', function (event) {
    limitDots();
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});


  $(document).ready(function () {
    $('#accordion').on('show.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-plus').addClass('fa-minus');
      $cardArrow.css('transform', 'rotate(0deg)');
    }).on('hide.bs.collapse', function (e) {
      var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
      $cardArrow.find('i').removeClass('fa-minus').addClass('fa-plus');
      $cardArrow.css('transform', 'rotate(0deg)');
    });
  });

  function addTitleToLinks() {
    var links = document.querySelectorAll('a');
  
    links.forEach(function(link) {
        if (!link.hasAttribute('title')) {
            var linkText = link.textContent;
            link.setAttribute('title', linkText);
        }
    });
  }
  
  addTitleToLinks();
  
  


  $(document).ready(function () {
    $('.tabs_ul li:first-child').addClass('active');
    $('.tab-content .tab-pane:first-child').addClass('in active');

    $('.tabs_ul a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
    
        $('.tabs_ul .active').removeClass('active');
        $this.parent().addClass('active');
    
        $('.tab-content .tab-pane').removeClass('in active');
        var target = $this.attr('href');
        $(target).addClass('in active');
    });
});
  
  
  

  
  $(document).ready(function(){
    $(".carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      arrow: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });
  


$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});