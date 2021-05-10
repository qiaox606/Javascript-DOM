var button = document.querySelector('#clickSleep');
var button2 = document.querySelector('#clickFeed');
var button3 = document.querySelector('#clickGame');
var container = document.querySelector('#container');
var counter = document.querySelector('#counter')
var clear = document.querySelector('#clear')
var textCountId = document.querySelector('#textCountId');

var box1Id = document.querySelector('#box1Id');
var box2Id = document.querySelector('#box2Id');
var box3Id = document.querySelector('#box3Id');

/* click to add sleep */
button.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = 'https://cdn.glitch.com/82e3bc67-a491-459e-8fd4-76fc5df23096%2Fsleep.png?v=1620670086886';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += 'item(s)';
  }
  textCountId.innerHTML = counterText;
});


/* click to add feed */
button2.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = 'https://cdn.glitch.com/82e3bc67-a491-459e-8fd4-76fc5df23096%2Ffood.png?v=1620670088015';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += 'item(s)';
  }
  textCountId.innerHTML = counterText;
});

/* click to add game */
button3.addEventListener('click', function(event) {
  let image = document.createElement('img');
  image.classList.add('new-content');
  image.src = 'https://cdn.glitch.com/82e3bc67-a491-459e-8fd4-76fc5df23096%2Fplay.png?v=1620670086817';
  image.style.right = (80 * Math.random()) + '%';
  image.style.top = (90 * Math.random()) + '%';
  container.appendChild(image);

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += 'item(s)';
  }
  textCountId.innerHTML = counterText;
});

/* remove */
clear.addEventListener('click', function(event) {
  var boxes = document.querySelectorAll('.new-content');
  boxes.forEach(function(box) {
    box.remove();
  })
});

/* count the number */
container.addEventListener('click', function(event) {
  if (event.target.classList.contains('new-content') ) {
    event.target.remove();
  }

  var counter = document.querySelectorAll('.new-content');
  var counterText = counter.length + ' ';
  if (counter.length > 1) {
    counterText += 'recent number';
  }
  textCountId.innerHTML = counterText;
});

/* change background color */
container.addEventListener('click', function(event) {
  var target = event.target;
  if (target.classList.contains('swatch')) {
    var color = getComputedStyle(target)['backgroundColor'];
    var boxes = document.querySelectorAll("BODY");

    boxes.forEach(function(box) {
      box.style.backgroundColor = color;
    });
  }
});
