let Home = document.getElementById('Home');
let Contact = document.getElementById('Contact');
let About = document.getElementById('About');
let Help = document.getElementById('Help');
let main = document.getElementById('main');
let Home1 = document.getElementById('Home1');
let Contact1 = document.getElementById('Contact1');
let About1 = document.getElementById('About1');
let Help1 = document.getElementById('Help1');
let burger = document.querySelector('.burger')
let body = document.querySelector("body")

Home.addEventListener('click', () => {
    main.style.display = 'none';
    Home1.classList.add('active');
    Contact1.classList.remove('active');
    About1.classList.remove('active');
    Help1.classList.remove('active');
})

Contact.addEventListener('click', () => {
    main.style.display = 'none';
    Contact1.classList.add('active');
    Home1.classList.remove('active');
    About1.classList.remove('active');
    Help1.classList.remove('active');
})

About.addEventListener('click', () => {
    main.style.display = 'none';
    About1.classList.add('active');
    Contact1.classList.remove('active');
    Home1.classList.remove('active');
    Help1.classList.remove('active');
})

Help.addEventListener('click', () => {
    main.style.display = 'none';
    Help1.classList.add('active');
    Contact1.classList.remove('active');
    About1.classList.remove('active');
    Home1.classList.remove('active');

})
