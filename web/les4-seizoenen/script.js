const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seasons = [

    {
        "title": "Seasons",
        "image": "img/seasons.jpg",
        "background": "black",
        "color": "white",
    },

    {
        "title": "Winter",
        "image": "img/winter.jpg",
        "background": "cyan",
        "color": "black",
    },

    {
        "title": "Spring",
        "image": "img/spring.jpg",
        "background": "pink",
        "color": "white",
    },

    {
        "title": "Summer",
        "image": "img/summer.jpg",
        "background": "yellow",
        "color": "black",
    },

    {
        "title": "Autumn",
        "image": "img/autumn.jpg",
        "background": "orange",
        "color": "white",
    }


];

function show(index) {
    myTitle.innerHTML = seasons[index].title;
    myImage.src = seasons[index].image;
    document.body.style.backgroundColor = seasons[index].background;
    document.body.style.color = seasons[index].color;
}