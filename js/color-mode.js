// Define DOM elements

const toggleButton = document.querySelector('#toggle-button');
const root = document.querySelector(':root');
const storageKey = 'color-mode';
const defaultMode = 'light-mode';

// Load the user's preffered color mode from local storage

function loadColorMode() {
	// Some code functionality here to run
	const colorMode = localStorage.getItem(storageKey);
	root.classList.add(colorMode || defaultMode);
	updateToggleButton();
}
loadColorMode();

// Toggle the color mode

toggleButton.addEventListener('click', () => {
	// Some code functionality here to run
	console.log('test');
	saveColorMode();
});

// Save the user\s preeffered color mode to local storage
function saveColorMode() {
	// Check if the root element gas a class of "dawrk-mode".
	// If yes, then the current mode is switched to light and vice versa
	const currentMode = root.classList.contains('dark-mode')
		? 'light-mode'
		: 'dark-mode';
	root.classList.remove('light-mode', 'dark-mode');
	root.classList.add(currentMode);
	localStorage.setItem(storageKey, currentMode);
	updateToggleButton();
}

function updateToggleButton() {
	if (root.classList.contains('dark-mode')) {
		toggleButton.style.backgroundImage = 'var(--moon)';
	} else {
		toggleButton.style.backgroundImage = 'var(--sun)';
	}
}
