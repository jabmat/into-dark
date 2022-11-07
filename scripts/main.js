const myImage = document.querySelector('img');

myImage.onclick = () => {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/white-to-dark.jpg') {
		myImage.setAttribute('src', 'images/white-to-dark-changed.jpg');
	} else {
		myImage.setAttribute('src', 'images/white-to-dark.jpg');
	}
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	const myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `ID welcomes ${myName}`;
	}
}

// if (!localStorage.getItem('name')) {
// 	setUserName();
// } else {
// 	const storedName = localStorage.getItem('name');
// 	myHeading.textContent = `ID welcomes ${storedName}`;
// }

// myButton.onclick = () => {
// 	setUserName();
// };
