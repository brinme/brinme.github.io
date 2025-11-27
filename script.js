const burgerMenuButton = document.getElementById('burgerMenuButton');
if (burgerMenuButton) {
	burgerMenuButton.addEventListener('click', function() {
		document.getElementById('navMenu').classList.toggle('hidden');
	});
}

emailjs.init({
	publicKey: 'cHgdAfRLWl7UDIbbX',
	blockHeadless: true,
	limitRate: {
		id: 'app',
		throttle: 10000,
	},
});

const form = document.getElementById('form');
if (form) {
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const emailInput = this.querySelector('input[name="email"]');
		if (!emailInput || !emailInput.value.trim()) {
			alert('Please enter your email address.');
			return;
		}

		const serviceID = 'service_sk7hpgl';
		const templateID = 'template_zje3xu2';
	   
		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				alert('You are added to our newsletter, Thank you!');
				this.reset();
			}, (err) => {
				alert('Error, please write email to us: biuro@brinme.pl');
			});
	});
}
		
const formSend = document.getElementById('form-send');
if (formSend) {
	formSend.addEventListener('submit', function(event) {
		event.preventDefault();

		const nameInput = this.querySelector('input[name="name"]');
		const emailInput = this.querySelector('input[name="email"]');
		const messageInput = this.querySelector('textarea[name="message"]');

		if (!nameInput || !nameInput.value.trim()) {
			alert('Please enter your name.');
			return;
		}
		if (!emailInput || !emailInput.value.trim()) {
			alert('Please enter your email address.');
			return;
		}
		if (!messageInput || !messageInput.value.trim()) {
			alert('Please enter your message.');
			return;
		}

		const serviceID = 'service_sk7hpgl';
		const templateID2 = 'template_zje3xu2';

		const terms = document.getElementById('terms');
		if (terms && !terms.checked) { 
			alert('You need to accept the Terms');
			return false; 
		}
	   
		emailjs.sendForm(serviceID, templateID2, this)
			.then(() => {
				alert('Sent, Thank you! We will contact you soon.');
				this.reset();
			}, (err) => {
				alert('Error, please write email to us: biuro@brinme.pl');
			});
	});
}
