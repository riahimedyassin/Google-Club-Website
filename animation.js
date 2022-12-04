const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
        }
		else {
		    entry.target.classList.remove('show');
		}
	});
});
const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('log-anim');
        }
		else {
		    entry.target.classList.remove('log-anim');
		}
	});
});
const log=document.querySelectorAll('.log');
log.forEach((el) => observer2.observe(el));

