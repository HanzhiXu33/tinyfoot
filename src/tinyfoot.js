(function() {
  // Initialize tinyfoot functionality
  function tinyfoot() {
    // Get all footnote buttons
    const footnotes = document.querySelectorAll('.tinyfoot-footnote__button');
    let totalFootnotes = footnotes.length;
    let unreadFootnotes = totalFootnotes;

    // Update counters in the page
    function updateCounters() {
      document.getElementById('footnote-counter').textContent = 
        `Total Footnotes: ${totalFootnotes}, Unread Footnotes: ${unreadFootnotes}`;
    }

    // Add click event listener to all footnote buttons
    footnotes.forEach(function(footnote) {
      footnote.addEventListener('click', function() {
        if (!footnote.classList.contains('read')) {
          footnote.classList.add('read');
          footnote.style.backgroundColor = 'lightblue';  // Change color to blue
          unreadFootnotes--;
          updateCounters();  // Update counters after click
        }
      });
    });

    // Initial update of counters
    updateCounters();
  }

  // Run tinyfoot when the document is ready
  document.addEventListener('DOMContentLoaded', tinyfoot);
})();
