var square = document.querySelector('.square');

var manager = new Hammer.Manager(square);

var tap1 = new Hammer.Tap({
  event: 'doubleTap',
  taps: 2
});

manager.add(tap1);

manager.on('doubleTap', function(e) {
  e.target.classList.toggle('expand');
  createMsg();
});

function createMsg(){
    var createDiv = document.createElement('div');
    document.body.appendChild(createDiv);
    input.value ="Sdfsadf";
    return input;

}