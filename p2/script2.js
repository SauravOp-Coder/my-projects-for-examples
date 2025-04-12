function filterMenu(category) {
    const cards = document.querySelectorAll('.food-card');
    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      }
    });
  }
  
  document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  