// Global
var win = window,
    doc = document;

// Global Functions

function hasClass(el, cls) {
  return el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) el.className += " " + cls;
};

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    el.className = el.className.replace(reg,' ');
  }
};

// Elements

var site = doc.getElementsByClassName('site-wrap')[0];
var wrap = doc.getElementsByClassName('panel-wrap')[0];

var panel = doc.getElementsByClassName('panel');

var zoom = doc.getElementsByClassName('js-zoom');

var nav_up = doc.getElementsByClassName('js-up'),
    nav_left = doc.getElementsByClassName('js-left'),
    nav_right = doc.getElementsByClassName('js-right'),
    nav_down = doc.getElementsByClassName('js-down');

var animation = doc.getElementsByClassName('js-animation');

// Tracking
var pos_x = 0,
    pos_y = 0;

function setPos() {
  wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
  setTimeout( function(){removeClass(wrap, 'animate');}, 600);
}

setPos();

// Movement

function moveUp() {
  addClass(wrap, 'animate');
  pos_y++;
  setPos();
}

function moveLeft() {
  addClass(wrap, 'animate');
  pos_x++;
  setPos();
}

function moveRight() {
  addClass(wrap, 'animate');
  pos_x--;
  setPos();
}

function moveDown() {
  addClass(wrap, 'animate');
  pos_y--;
  setPos();
}

for (var x = 0; x < nav_up.length; x++) nav_up[x].addEventListener('click', moveUp);

for (var x = 0; x < nav_left.length; x++) nav_left[x].addEventListener('click', moveLeft);

for (var x = 0; x < nav_right.length; x++) nav_right[x].addEventListener('click', moveRight);

for (var x = 0; x < nav_down.length; x++) nav_down[x].addEventListener('click', moveDown);

// Animations

addClass(animation[0], 'active');
addClass(wrap, animation[0].getAttribute('data-animation'));

for (var x = 0; x < zoom.length; x++) zoom[x].addEventListener('click', zoomOut); 

function zoomOut(e) {
  e.stopPropagation();
  addClass(site, 'show-all');
  for (var x = 0; x < panel.length; x++) (function(_x){panel[_x].addEventListener('click', setPanelAndZoom);})(x);
}

function setPanelAndZoom(e) {
  pos_x = -e.target.getAttribute('data-x-pos'),
  pos_y = e.target.getAttribute('data-y-pos');
  setPos();
  zoomIn();
}

function zoomIn() {
  for (var x = 0; x < panel.length; x++) panel[x].removeEventListener('click', setPanelAndZoom);
  removeClass(site, 'show-all');
}

window.onwheel = e => {
	if(e.deltaY >= 0){
	  // Scrolling Down with mouse
	  zoomOut(e);
	} else {
	  // Scrolling Up with mouse
	  zoomIn(e);
	}
  }

// Cursor

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 };
const pos = { x: 0, y: 0 };
const speed = 0.1;

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);

  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});

// Waves

var self = window; 
 
(function(self) {	
	var canvas, context, wave1 = [], wave2 = [], wave3 = [], mouse = { x: innerWidth * 0.5, y: innerHeight * 0.5 }, angle = 0, mouseDown = interactive = true, FPS = 60;
	
	function init() {
		var body = document.querySelector('body');
		
		canvas = document.createElement('canvas');
		
    	canvas.width = innerWidth;
		canvas.height = innerHeight;
		
		canvas.style.position = 'absolute';
		canvas.style.top = 0;
		canvas.style.bottom = 0;
		canvas.style.left = 0;
		canvas.style.right = 0;
		canvas.style.zIndex = -1;
		canvas.style.cursor = 'none';
       
    	body.appendChild(canvas);
		
		// Browser supports canvas?
		if(!!(capable)) {
			context = canvas.getContext('2d');

			// Events
			if('ontouchmove' in window) {
				canvas.addEventListener('touchstart', onTouchStart, false);
				canvas.addEventListener('touchend', onTouchEnd, false);
				canvas.addEventListener('touchmove', onTouchMove, false);		
			}	
			else {
				canvas.addEventListener('mousedown', onMouseDown, false);
				canvas.addEventListener('mouseup', onMouseUp, false);
				canvas.addEventListener('mousemove', onMouseMove, false);
			}
			window.onresize = onResize;
			createWaves();
		}
		else console.error('Please, update your browser for seeing this animation.');
	}

// Browser supports canvas?
function capable() {
	return canvas.getContext && canvas.getContext('2d');
}

// On Resize

function onResize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

// On Mouse Down

function onMouseDown(event) {
	event.preventDefault();
	mouseDown = true;
}

// On Mouse Up

function onMouseUp(event) {
	event.preventDefault();
	mouseDown = false;
}

// On Mouse Move

function onMouseMove(event) {
	event.preventDefault();
	mouse.x = event.pageX - canvas.offsetLeft;
	mouse.y = event.pageY - canvas.offsetTop;
	if(interactive) mouseDown = interactive = false;
}

// On Touch Start

function onTouchStart(event) {
	event.preventDefault();
	mouseDown = true;
}

// On Touch End

function onTouchEnd(event) {
	event.preventDefault();
	mouseDown = false;
}

// On Touch Move

function onTouchMove(event) {
	event.preventDefault();
	mouse.x = event.touches[0].pageX - canvas.offsetLeft;
	mouse.y = event.touches[0].pageY - canvas.offsetTop;
	if(interactive) mouseDown = interactive = false;
}

// Generate Waves

function createWaves() {
	var totalPoints = Math.round(canvas.width / 170);

// First Wave

	for(var quantity = 0, len = totalPoints; quantity < len; quantity++) {
		wave1.push({
			x: canvas.width * quantity / (len - 1),
			y: canvas.height * 0.5 - 20,
			vy: Math.random() * 10,
			depth: canvas.height * 0.5	
		});
	}
		
// Second Wave

	for(var quantity = 0, len = totalPoints; quantity < len; quantity++) {
		wave2.push({
			x: canvas.width * quantity / (len - 1),
			y: canvas.height * 0.5,
			vy: Math.random() * 10,
			depth: canvas.height * 0.5  
		});
	}
		
// Third Wave

	for(var quantity = 0, len = totalPoints; quantity < len; quantity++){
		wave3.push({
			x: canvas.width * quantity / (len - 1),
			y: canvas.height * 0.5 + 20,
			vy: Math.random() * 10,
			depth: canvas.height * 0.5	
		});		
	}

	wave();
}

// Loop Anim

function wave() {
	clear();
	update();
	render();
	requestAnimFrame(wave);	
}

// Clear All
	
function clear() {
	context.clearRect(0, 0, innerWidth, innerHeight);
};

// Update Anim

function update() {
var ease, friction, threshold;
	friction = 0.99;
	threshold = interactive ? Math.round(canvas.width / 4.5) : 280;

	if(interactive) {
		angle += 0.05;
		mouse.x = canvas.width * 0.5 + Math.sin(angle) * canvas.width * 0.2;
		mouse.y = (canvas.height * 0.5 - 50) + Math.sin(angle) * canvas.height * 0.2;
	}

	for(var index = 0; index < (wave1.length || wave2.length || wave3.length); index++) {  
		var point1 = wave1[index];
		var point2 = wave2[index];
		var point3 = wave3[index];
	
		point1.y += point1.vy;
		point2.y += point2.vy;
		point3.y += point3.vy;
	
		// Ease
		point1.vy += (point1.depth - point1.y) * (interactive ? 0.03 : 0.009);
		point2.vy += (point2.depth - point2.y) * (interactive ? 0.02 : 0.008);
		point3.vy += (point3.depth - point3.y) * (interactive ? 0.01 : 0.007);
		
		// Friction
		point1.vy *= friction;
		point2.vy *= friction;
		point3.vy *= friction;
		
		// Threshold
		if(distanceTo(mouse, point1) < threshold && mouseDown) point1.vy += (mouse.y - point1.y) * (interactive ? 0.03 : 0.009);

		if(distanceTo(mouse, point2) < threshold && mouseDown) point2.vy += (mouse.y - point2.y) * (interactive ? 0.02 : 0.008);
			
		if(distanceTo(mouse, point3) < threshold && mouseDown) point3.vy += (mouse.y - point3.y) * (interactive ? 0.01 : 0.007);
	}	
}

// Rendering Waves

function render() {
	for(var wave = 0; wave < (wave1.length || wave2.length || wave3.length); wave++) {  

		clear();	
		
		// Wave 1 Data

		context.save();
		context.globalAlpha = 0.5;
		context.fillStyle = '#fff';
		context.beginPath();
		context.moveTo(wave1[0].x, wave1[0].y); 
		
		// Draw Wave 1

		for(var N = 1; N < wave1.length - 2; N++) {
			var xc = (wave1[N].x + wave1[N + 1].x) / 2;
			var yc = (wave1[N].y + wave1[N + 1].y) / 2;
			context.quadraticCurveTo(wave1[N].x, wave1[N].y, xc, yc);
		}
		
		context.quadraticCurveTo(wave1[wave1.length - 2].x, wave1[wave1.length - 2].y, wave1[wave1.length - 1].x, wave1[wave1.length - 1].y);
		context.lineTo(canvas.width, canvas.height);
		context.lineTo(0, canvas.height);
		context.lineTo(0, wave1[0].y);
		context.fill();
		context.restore();
		
		// Wave 2 Data

		context.save();
		context.globalAlpha = 0.5;
		context.fillStyle = '#001';
		context.beginPath();
		
		context.moveTo(wave2[0].x, wave2[0].y);
		
		// Draw Wave 2

		for(var N = 1; N < wave2.length - 2; N++) {
			var xc = (wave2[N].x + wave2[N + 1].x) / 2;
			var yc = (wave2[N].y + wave2[N + 1].y) / 2;
			context.quadraticCurveTo(wave2[N].x, wave2[N].y, xc, yc);	
		}
		
		context.quadraticCurveTo(wave2[wave2.length - 2].x, wave2[wave2.length - 2].y, wave2[wave2.length - 1].x, wave2[wave2.length - 1].y);
		context.lineTo(canvas.width, canvas.height);
		context.lineTo(0, canvas.height);
		context.lineTo(0, wave2[0].y);
		context.fill();
		context.restore();
		
		// Wave 3 Data

		context.save();
		context.globalAlpha = 0.5;
		context.fillStyle = '#000';
		context.beginPath();
		
		context.moveTo(wave3[0].x, wave3[0].y);
		
		// Draw Wave 3

		for(var N = 1; N < wave3.length - 2; N++) {
			var xc = (wave3[N].x + wave3[N + 1].x) / 2;
			var yc = (wave3[N].y + wave3[N + 1].y) / 2;
			context.quadraticCurveTo(wave3[N].x, wave3[N].y, xc, yc);
		}
		
		context.quadraticCurveTo(wave3[wave3.length - 2].x, wave3[wave3.length - 2].y, wave3[wave3.length - 1].x, wave3[wave3.length - 1].y);
		context.lineTo(canvas.width, canvas.height);
		context.lineTo(0, canvas.height);
		context.lineTo(0, wave3[0].y);
		context.fill();
		context.restore();
	}
}

// Distance Between Waves

function distanceTo(pointA, pointB) {
	var dx = Math.abs(pointA.x - pointB.x);
	var dy = Math.abs(pointA.y - pointB.y);
	return Math.sqrt(dx * dx + dy * dy);
};

// Request 60 FPS
	
	win.requestAnimFrame = (function() {
		return  win.requestAnimationFrame   || 
				win.webkitRequestAnimationFrame || 
				win.mozRequestAnimationFrame    || 
				win.oRequestAnimationFrame      || 
				win.msRequestAnimationFrame     || 
				function(callback) {
					win.setTimeout(callback, 1000 / FPS);
				};		  
	})();

	win.addEventListener ? win.addEventListener('load', init, false) : win.onload = init;
})(self);

// Translation

function translate(lng, tagAttr) {
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en') {
      $("#enTranslator").css('color', '#f4623a');
      $("#frTranslator").css('color', '#212529');
    } 
    if(lng == 'fr') {
      $("#frTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
}

$(doc).ready(function() {
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function() {
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (French) with attribute lng-tag
  $("#frTranslator").click(function() {
    translate('fr', 'lng-tag');
  });
});