document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	// ! Slider
	const swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 700,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 3500,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	// ! Form
	const form = document.querySelector('.sign-in__form'),
				email = form.querySelector('input[name="email"]'),
				password = form.querySelector('input[name="password"]'),
				btn = form.querySelector('.sign-in__form-btn');

	let validEmail = false,
		validPassword = false;

	function validateEmail() {
		const req = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email.value.match(req)) {
			email.previousElementSibling.classList.add('hidden');
			email.classList.remove('error');
			email.classList.add('valid');
			validEmail = true;
		} else {
			email.previousElementSibling.classList.remove('hidden');
			email.classList.add('error');
			email.classList.remove('valid');
			validEmail = false;
		}
	}

	function validatePassword() {
		if (password.value === '' || password.value.length < 6) {
			password.previousElementSibling.classList.remove('hidden');
			password.classList.add('error');
			password.classList.remove('valid');
			validPassword = false;
		} else {
			password.previousElementSibling.classList.add('hidden');
			password.classList.remove('error');
			password.classList.add('valid');
			validPassword = true;
		}
	}

	function validateBtn() {
		if (validEmail === true && validPassword === true) {
			btn.disabled = false;
			btn.classList.remove('disabled')
		} else {
			btn.disabled = true;
			btn.classList.add('disabled')
		}
	}

	function resetForm() {
		document.forms[0].reset();
		email.classList.remove('valid');
		password.classList.remove('valid');
		btn.disabled = true;
		btn.classList.add('disabled');
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		resetForm();
		console.log('Check');
	});

	email.addEventListener('input', () => {
		validateEmail();
		validateBtn();
	});

	password.addEventListener('input', () => {
		validatePassword();
		validateBtn();
	});
});
