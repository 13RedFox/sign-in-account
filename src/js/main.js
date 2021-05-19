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

	const form = document.querySelector('.form'),
				email = form.querySelector('.form__email-input'),
				password = form.querySelector('.form__password-input'),
				error = form.querySelectorAll('.error span'),
				btn = form.querySelector('.form__btn');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if (!email.value) {
			email.classList.add('error');
			error[0].style.display = 'block';
		} else {
			email.classList.remove('error');
			error[0].style.display = 'none';
			email.classList.add('valid');
		}

		if (!password.value) {
			password.classList.add('error');
			error[1].style.display = 'block';
		} else {
			password.classList.remove('error');
			error[1].style.display = 'none';
			password.classList.add('valid');
		}

		if (!email.value && !password.value) {
			btn.classList.add('disabled')
		} else {
			btn.classList.remove('disabled')
		}
	});
});
