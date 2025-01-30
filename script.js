const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})


const back_1 = document.querySelector('.btn_left_1');
const next_1 = document.querySelector('.btn_right_1');
const back_2 = document.querySelector('.btn_left_2');
const next_2 = document.querySelector('.btn_right_2');

const photos_1 = ["https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/place1.jpg?v=1680877019009", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/place2.jpg?v=1680877024436", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/place3.jpg?v=1680877026982", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/place4.jpg?v=1680877029051", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/place5.jpg?v=1680877031468"];
const photos_2 = ["https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/house1.jpg?v=1680877033661", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/house2.jpg?v=1680877035716", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/house3.jpg?v=1680877037586", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/house4.jpg?v=1680877039413", "https://cdn.glitch.global/c1fa5584-3a45-4e9f-9478-7affdf5bc517/house5.jpg?v=1680877041496"];

let i = 0;

next_1.addEventListener('click', () => {
    i++;
    if (i > photos_1.length-1) {
        i = 0;
    }
    document.querySelector('.pictures_1').src = photos_1[i];
})
back_1.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos_1.length-1;
    }
    document.querySelector('.pictures_1').src = photos_1[i];
})

next_2.addEventListener('click', () => {
    i++;
    if (i > photos_2.length-1) {
        i = 0;
    }
    document.querySelector('.pictures_2').src = photos_2[i]
})
back_2.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos_2.length-1;
    }
    document.querySelector('.pictures_2').src = photos_2[i]
})