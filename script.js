
var button = document.querySelector('#click');
var container = document.querySelector('#container');
var counter = document.querySelector('#counter')
var clear = document.querySelector('#clear')


button.addEventListener('click', function (event) {
    var image = document.createElement('img');
    image.src = 'https://cdn.glitch.com/706c81d7-b126-438a-b1fd-7b7f31bcf467%2F%E6%89%8B%E7%BB%98%E5%8D%A1%E9%80%9A%E8%84%9A%E5%8D%B0%E5%85%83%E7%B4%A0.png?v=1616691150176';
    image.style.left = (100 * Math.random()) + '%';
    image.style.top = (100 * Math.random()) + '%';
    container.appendChild(image);
    var images = container.querySelectorAll('img');
    var count = images.length;
    console.log(count);
    counter.innerHTML = count;
});

container.addEventListener('click', function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName == 'IMG'); {
        event.target.remove();
        var images = container.querySelectorAll('img');
        var count = images.length;
        console.log(count);
        counter.innerHTML = count;
    }
});

clear.addEventListener('click', function (clear) {
    container.innerHTML = clear;
    var images = container.querySelectorAll('img');
        var count = images.length;
        container.remove()
});

function changeText(id) {
  id.innerHTML = "JavaScript DOM Manipulation";
}