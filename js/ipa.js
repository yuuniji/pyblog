document.querySelectorAll('.ipa-header').forEach(header => {
  header.addEventListener('click', () => {
    const category = header.dataset.category;
    const content = document.getElementById(category);
    const toggle = document.getElementById(`${category}-toggle`);

    // Toggle visibility with animation
    if (content.classList.contains('show')) {
      content.style.height = `${content.scrollHeight}px`; // Set the height before collapsing
      setTimeout(() => (content.style.height = '0'), 0);
    } else {
      content.style.height = `${content.scrollHeight}px`; // Expand to full height
      content.addEventListener(
        'transitionend',
        () => (content.style.height = 'auto'),
        { once: true }
      );
    }

    content.classList.toggle('show');
    toggle.textContent = content.classList.contains('show') ? '-' : '+';
  });
});

document.querySelectorAll('.ipa-play').forEach(button => {
  button.addEventListener('click', () => {
    const audioFile = button.dataset.audio;
    const audio = new Audio(audioFile);
    audio.play();
  });
});