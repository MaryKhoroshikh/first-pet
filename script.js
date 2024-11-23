const imgs = [
    {
        name: "image description 1",
        src: "./images/1.jpeg"
    },
    {
        name: "image description 2",
        src: "./images/2.jpeg"
    },
    {
        name: "image description 3",
        src: "./images/3.jpeg"
    },
    {
        name: "image description 4",
        src: "./images/4.jpeg"
    },
    {
        name: "image description 5",
        src: "./images/5.jpeg"
    }
];

const imgContainer = document.querySelector('.section-examples__container');
const image = imgContainer.querySelector('.img');
const imgDescription = imgContainer.querySelector('.img-description');
const lengthImg = imgs.length;
const back = imgContainer.querySelector('.back');
const forward = imgContainer.querySelector('.forward');
let i = 0;

function scrollForward() {
    if (i === lengthImg - 1) {
        i = 0;
    } else {
        i += 1;   
    }
    image.src = imgs[i].src;
    imgDescription.textContent = imgs[i].name;
}

function scrollBack() {
    if (i === 0) {
        i = lengthImg - 1;
        console.log(i);
    } else {
        i -= 1;
    }
    image.src = imgs[i].src;
    imgDescription.textContent = imgs[i].name;
}

image.src = imgs[0].src;
imgDescription.textContent = imgs[0].name;

back.addEventListener('click', () => scrollBack());
forward.addEventListener('click', () => scrollForward());