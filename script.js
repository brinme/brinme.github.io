const burgerMenuButton = document.getElementById('burgerMenuButton');
if (burgerMenuButton) {
	burgerMenuButton.addEventListener('click', function() {
		document.getElementById('navMenu').classList.toggle('hidden');
	});
}

const messages = {
	en: {
		enterEmail: 'Please enter your email address.',
		newsletterSuccess: 'You are added to our newsletter, Thank you!',
		error: 'Error, please write email to us: biuro@brinme.pl',
		enterName: 'Please enter your name.',
		enterMessage: 'Please enter your message.',
		acceptTerms: 'You need to accept the Terms',
		contactSuccess: 'Sent, Thank you! We will contact you soon.'
	},
	pl: {
		enterEmail: 'Proszę podać adres e-mail.',
		newsletterSuccess: 'Zostałeś dodany do naszego newslettera, dziękujemy!',
		error: 'Błąd, prosimy o kontakt mailowy: biuro@brinme.pl',
		enterName: 'Proszę podać swoje imię.',
		enterMessage: 'Proszę wpisać wiadomość.',
		acceptTerms: 'Musisz zaakceptować Regulamin',
		contactSuccess: 'Wysłano, dziękujemy! Skontaktujemy się wkrótce.'
	}
};

function getMessage(key) {
	const lang = document.documentElement.lang || 'en';
	return (messages[lang] || messages['en'])[key];
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
			alert(getMessage('enterEmail'));
			return;
		}

		const serviceID = 'service_sk7hpgl';
		const templateID = 'template_zje3xu2';
	   
		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				alert(getMessage('newsletterSuccess'));
				this.reset();
			}, (err) => {
				alert(getMessage('error'));
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
			alert(getMessage('enterName'));
			return;
		}
		if (!emailInput || !emailInput.value.trim()) {
			alert(getMessage('enterEmail'));
			return;
		}
		if (!messageInput || !messageInput.value.trim()) {
			alert(getMessage('enterMessage'));
			return;
		}

		const serviceID = 'service_sk7hpgl';
		const templateID2 = 'template_zje3xu2';

		const terms = document.getElementById('terms');
		if (terms && !terms.checked) { 
			alert(getMessage('acceptTerms'));
			return false; 
		}
	   
		emailjs.sendForm(serviceID, templateID2, this)
			.then(() => {
				alert(getMessage('contactSuccess'));
				this.reset();
			}, (err) => {
				alert(getMessage('error'));
			});
	});
}
