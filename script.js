const imgs = [
    {
        name: "image description 1",
        src: "./images/1.jpeg"
    },
    {
        name: "image description 3",
        src: "./images/3.jpeg"
    },
    {
        name: "image description 5",
        src: "./images/5.jpeg"
    },
    {
        name: "image description 6",
        src: "./images/6.jpeg"
    },
    {
        name: "image description 7",
        src: "./images/7.jpeg"
    }
];

const imgContainer = document.querySelector('.section-examples__container');
const image = imgContainer.querySelector('.img');
const lengthImg = imgs.length;
const back = imgContainer.querySelector('.back');
const forward = imgContainer.querySelector('.forward');
let i = 0;

function scrollForward() {
    if (i >= lengthImg) {
        i = 0;
    }
    image.src = imgs[i].src;
    image.name = imgs[i].name;
    i += 1;
}

function scrollBack() {
    if (i === 0) {
        i = lengthImg - 1;
    }
    image.src = imgs[i].src;
    image.name = imgs[i].name;
    i -= 1;
}

image.src = imgs[0].src;
console.log(imgs[0].src);
console.log(image.src);

back.addEventListener('click', () => scrollBack());
forward.addEventListener('click', () => scrollForward());