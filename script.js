let butright = document.querySelector('.strelkaright');
let butleft = document.querySelector('.strelkaleft');
let backleft = document.querySelector('.backgroundleft');


butright.onclick = () => {
    console.log('click');
    backleft.classList.add('active');

}
butleft.onclick = () => {
    backleft.classList.remove('active');
}