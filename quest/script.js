// Typing Effect
    const typedText = document.getElementById("typed-text");
    const text = "Ifat Baloch | IT Student Portfolio";
    let index = 0;

    function typeText() {
      if (index < text.length) {
        typedText.textContent += text.charAt(index); // use textContent instead of innerHTML
        index++;
        setTimeout(typeText, 100); // typing speed in milliseconds
      }
    }

    // Start typing when page loads
    window.onload = typeText;
    
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = e.target.closest('a');
      if (!target || target.getAttribute('target') === '_blank' || target.href.includes('#')) return;

      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location = target.href;
      }, 500); // match animation duration
    });
  });
