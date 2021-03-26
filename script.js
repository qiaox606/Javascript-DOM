
var button = document.querySelector('#click');
var container = document.querySelector('#container');
var counter = document.querySelector('#counter')
var clear = document.querySelector('#clear')


button.addEventListener('click', function (event) {
    var image = document.createElement('img');
    image.src = 'footprint.png';
    image.style.left = (100 * Math.random()) + '%';
    image.style.top = (100 * Math.random()) + '%';
    container.appendChild(image);
    var images = container.querySelectorAll('img');
    var count = images.length;
    console.log(count);
    counter.innerHTML = count;
});

clear.addEventListener('click', function (clear) {
    container.innerHTML = clear;
    var images = container.querySelectorAll('img');
        container.remove()
});

function changeText(id) {
  id.innerHTML = "JavaScript DOM Manipulation";
}
