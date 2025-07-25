//  Define DOM elements
const heroImage = document.querySelector('#hero__animation__img');

const tl = document.querySelector('#grid__tl');
const tr = document.querySelector('#grid__tr');
const bl = document.querySelector('#grid__bl');
const br = document.querySelector('#grid__br');

const tlBtn = document.querySelector('#grid__tl_btn');
const trBtn = document.querySelector('#grid__tr_btn');
const blBtn = document.querySelector('#grid__bl_btn');
const brBtn = document.querySelector('#grid__br_btn');

const tlContent = document.querySelector('#grid__tl_content');
const trContent = document.querySelector('#grid__tr_content');
const blContent = document.querySelector('#grid__bl_content');
const brContent = document.querySelector('#grid__br_content');

const projectOne = document.querySelector('.p-1');
const projectTwo = document.querySelector('.p-2');
const projectThree = document.querySelector('.p-3');

// Define colors and positions
const bgColor = 'var(--bg)';
const bgColorAlt = 'var(--bg-alt)';
const textColor = 'var(--text)';
const textColorAlt = 'var(--textalt)';

let tlActive = 'translateX(5vw) translateY(0)';
let tlHidden = 'translateX(-100vw) translateY(-100vh)';

let trActive = 'translateX(-5vw) translateY(0)';
let trHidden = 'translateX(100vw) translateY(-100vh)';

let blActive = 'translateX(10vw) translateY(7vh)';
let blHidden = 'translateX(-100vw) translateY(100vh)';

let brActive = 'translateX(-5vw) translateY(0)';
let brHidden = 'translateX(100vw) translateY(100vh)';

// Define corner that is open
let activeCorner = '';

// Add an event listener to the window object to listen to resize events
window.addEventListener('resize', handleWindowResize);

// Function that handles the styling when resizing window
function handleWindowResize() {
	// some code
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = '';

// Play animation function
function playAnimation(animation, reverseAnimation) {}

function playClosingAnimation(reverseAnimation) {}

tlBtn.onclick = fucntion () {}