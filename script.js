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
const cursorPoint = cursor.querySelector('.cursor__point');


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
	const maxSqueeze = 0.5;
	const accelerator = 100;
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

// Cursor on click

document.addEventListener('mousedown', function(){
	cursorCircle.classList.add('click')
	cursorPoint.classList.add('cursorhoverclick')
});

document.addEventListener('mouseup', function(){
	cursorCircle.classList.remove('click')
	cursorPoint.classList.remove('cursorhoverclick')
});

// Cursor on hover span

document.querySelectorAll('span').forEach(item => {
	item.addEventListener('mouseover', () => {
		cursorPoint.classList.add('cursorhoverclick');
	});
	item.addEventListener('mouseleave', () => {
		cursorPoint.classList.remove('cursorhoverclick');
	});
})

// Cursor on hover button

document.querySelectorAll('button').forEach(item => {
	item.addEventListener('mouseover', () => {
		cursorPoint.classList.add('cursorhoverclick');
	});
	item.addEventListener('mouseleave', () => {
		cursorPoint.classList.remove('cursorhoverclick');
	});
})

// Cursor on hover a

document.querySelectorAll('a').forEach(item => {
	item.addEventListener('mouseover', () => {
		cursorPoint.classList.add('cursorhoverclick');
	});
	item.addEventListener('mouseleave', () => {
		cursorPoint.classList.remove('cursorhoverclick');
	});
})

// Cursor on hover li

document.querySelectorAll('li').forEach(item => {
	item.addEventListener('mouseover', () => {
		cursorPoint.classList.add('cursorhoverclick');
	});
	item.addEventListener('mouseleave', () => {
		cursorPoint.classList.remove('cursorhoverclick');
	});
})


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

// Caroussel

var w, container, carousel, item, radius, itemLength, rY, ticker; 
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var addX = 0;

$(document).ready( init )

function init() {
	w = $(window);
	container = $( '#contentContainer' );
	carousel = $( '#carouselContainer' );
	item = $( '.carouselItem' );
	itemLength = $( '.carouselItem' ).length;
	rY = 360 / itemLength;
	radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
	
	TweenMax.set(container, {perspective:600})
	TweenMax.set(carousel, {z:-(radius)})	
	for ( var i = 0; i < itemLength; i++ ) {
		var $item = item.eq(i);
		var $block = $item.find('.carouselItemInner');
		TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
		animateIn( $item, $block )						
	}
	window.addEventListener( "mousemove", onMouseMove, false );
	ticker = setInterval( looper, 1000/60 );			
}

function animateIn( $item, $block ) {
	var $nrX = 360 * getRandomInt(2);
	var $nrY = 360 * getRandomInt(2);
		
	var $nx = -(2000) + getRandomInt( 4000 )
	var $ny = -(2000) + getRandomInt( 4000 )
	var $nz = -4000 +  getRandomInt( 4000 )
		
	var $s = 1.5 + (getRandomInt( 10 ) * .1)
	var $d = 1 - (getRandomInt( 8 ) * .1)
	
	TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
	TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
	TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
	TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
}

function onMouseMove(event) {
	mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
	mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
	mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
}

function looper() {
	addX += mouseX
	TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
	TweenMax.set( carousel, {z:mouseZ } )}

function getRandomInt($n) {
	return Math.floor((Math.random()*$n)+1);	
}