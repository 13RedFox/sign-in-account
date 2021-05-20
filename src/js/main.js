'use strict';

document.addEventListener('DOMContentLoaded', function () {

	// ! Slider

	const swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
		},
	});

	// ! Form

	const req = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const form = document.querySelector('.form'),
				email = form.querySelector('input[name="email"]'),
				password = form.querySelector('input[name="password"]'),
				btn = form.querySelector('.form__btn');

	let validEmail = false,
			validPassword = false;

	function validateEmail() {
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
		}
		else {
			btn.disabled = true;
			btn.classList.add('disabled')
		}
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

	function resetForm() {
		form.reset();
		email.classList.remove('valid');
		password.classList.remove('valid');
		btn.disabled = true;
		btn.classList.add('disabled');
	}
});
