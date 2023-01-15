const btn = document.querySelector('.btn')
const menu = document.querySelector('.menu')
const allNavItems = document.querySelectorAll('.menu__item')

btn.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	btn.classList.toggle('is-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('is-active')
			btn.classList.remove('is-active')
		})
	})
})

function onSubmit() {
	alert('Twoja wiadomość została wysłana!')
}
