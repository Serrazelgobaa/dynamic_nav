nav = document.querySelector('nav');
li = document.querySelectorAll('li');

const adjustMenu = () => {
	console.log('scrolled');
	if (window.scrollY < 200) {
		nav.style.position = "static";
		nav.style.backgroundColor = "black";
		nav.style.color = "white";
	}

	else {
		nav.style.position = "fixed";
		nav.style.backgroundColor = "white";
		nav.style.width = "100%";
		nav.style.color = "black";
	}
};

window.addEventListener('scroll', adjustMenu);