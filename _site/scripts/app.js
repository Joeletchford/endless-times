// Fade in stickyHeader on scroll / fade out at top of post
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 75) {
        $('#stickyHeader').fadeIn();
    } else {
        $('#stickyHeader').fadeOut();
    }
});

// Scroll progress bar / https://github.com/mburakerman/prognroll
// Included locally at /scripts
$(function() {
  $("#post").prognroll({
    color: "#000"
  });
});
