document.addEventListener('DOMContentLoaded', () => {
	const menuButton = document.querySelector('.header__menu-button')
	const mobileMenu = document.querySelector('.mobile-menu')
	menuButton.addEventListener('click', () => {
		if (mobileMenu.classList.contains('mobile-menu--show')) {
			mobileMenu.classList.remove('mobile-menu--show')
			setTimeout(()=>{
				mobileMenu.style.display = ''
				document.body.style.overflow = ''
			}, 300)
		} else {
			mobileMenu.style.display = 'flex'
			setTimeout(()=>{
				mobileMenu.classList.add('mobile-menu--show')
				document.body.style.overflow = 'hidden'
			})
		}
	})

	const chevron = mobileMenu.querySelector('.mobile-menu__nav-chevron')
	chevron.addEventListener('click', () => {
		chevron.closest('.mobile-menu__nav-elem').classList.toggle('mobile-menu__nav-elem--expanded')
	})
})
