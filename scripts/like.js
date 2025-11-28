document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded'); 
  
  const likeButtons = document.querySelectorAll('.card__icon-button');
  console.log('Found like buttons:', likeButtons.length); 
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Like button clicked'); 
      
      const likeIcon = this.querySelector('.like-icon');
      const likeText = this.closest('.card__actions').querySelector('.button__text');
      
      console.log('Like text element:', likeText); 
      console.log('Current text:', likeText.textContent); 
      
      if (likeIcon) {
        likeIcon.classList.toggle('is-liked');
        
        if (likeIcon.classList.contains('is-liked')) {
          likeText.textContent = 'Unlike';
        } else {
          likeText.textContent = 'Like';
        }
        
        console.log('New text:', likeText.textContent); 
      }
    });
  });

  const cardLikeButtons = document.querySelectorAll('.card__like-button');
  cardLikeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const iconButton = this.closest('.card__actions').querySelector('.card__icon-button');
      if (iconButton) {
        iconButton.click();
      }
    });
  });
});