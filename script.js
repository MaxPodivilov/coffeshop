let butright = document.querySelector('.strelkaright');
let butleft = document.querySelector('.strelkaleft');
let backleft = document.querySelector('.backgroundleft');
let cart = document.querySelector('.shop');


console.log(butright);

butright.onclick = () => {
    backleft.classList.add('active');
    cart.classList.add('shopactive');
    cart.classList.remove('shopactiveback');
}
butleft.onclick = () => {
    cart.classList.add('shopactiveback');
    backleft.classList.remove('active');
    
}