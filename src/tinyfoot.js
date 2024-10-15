(function() {
  (function($) {
    return $.tinyfoot = function(options) {
      var settings, footnoteInit, updateCounters;

      settings = $.extend({
        buttonMarkup: "<div class='tinyfoot-footnote__container'><button class='tinyfoot-footnote__button' data-footnote-number='{{FOOTNOTENUM}}'>{{FOOTNOTENUM}}</button></div>"
      }, options);

      // Function to initialize footnotes
      footnoteInit = function() {
        var footnotes = $(".tinyfoot-footnote__button");
        updateCounters(); // Update the counters

        // Add click event to footnote buttons
        footnotes.on('click', function() {
          if (!$(this).hasClass('read')) {
            $(this).addClass('read');
            $(this).css('background-color', 'lightblue'); // Change color to blue when read
            updateCounters(); // Recalculate counters
          }
        });
      };

      // Function to update counters (total and unread)
      updateCounters = function() {
        var totalFootnotes = $(".tinyfoot-footnote__button").length;
        var unreadFootnotes = $(".tinyfoot-footnote__button:not(.read)").length;
        $('#footnote-counter').text(`Total Footnotes: ${totalFootnotes}, Unread Footnotes: ${unreadFootnotes}`);
      };

      $(document).ready(function() {
        footnoteInit(); // Initialize footnotes on page load
      });
    };
  })(jQuery);
})();
