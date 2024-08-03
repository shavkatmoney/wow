let elDarkButton = document.querySelector('.header__dark');
let elBody = document.querySelector('.body');

elDarkButton.addEventListener('click' , () => {
    elBody.classList.toggle('header__dark')
    
})