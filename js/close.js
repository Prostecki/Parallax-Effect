const hide = document.querySelector('.christ');
const audio = document.querySelector('.showElement');
const sound = document.querySelector('.sound');
const show = document.querySelector('.control');

hide.addEventListener('click', function(){
    audio.classList.add('hideElement');
    sound.classList.add('soundShow__pic');
});

show.addEventListener('click', function(){
    audio.classList.remove('hideElement');
    sound.classList.remove('soundShow__pic');
});
