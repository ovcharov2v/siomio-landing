import gsap from 'gsap'

let isPaused = false
let currentSection = 0;

const sections = document.querySelectorAll('.section')
const footer = document.querySelector('.footer')

const sectionHeroTL = gsap.timeline({paused: true})
	.to([sections[1], sections[2]], {
		y: '-100vh',
		ease: "linear",
		duration: .3,
	})
	.to(sections[0], {
		scale: .8,
		rotate: 13,
		ease: "linear",
		duration: .3,
	}, `-=.3`)
	.to(footer, {
		y: '-100vh',
	}, `-=.3`)

const sectionSwipeTL = gsap.timeline({paused: true})
	.to(sections[2], {
		y: '-=100vh',
		ease: "linear",
		duration: .3,
	})
	.to(sections[1], {
		scale: .8,
		rotate: 13,
		ease: "linear",
		duration: .3,
	}, `-=.3`)
	.to(footer, {
		y: '-=100vh',
		ease: "linear",
		duration: .3,
	}, `-=.3`)

const footerTL = gsap.timeline({paused: true})
	.to(sections, {
		y: '-=395',
		ease: "linear",
		duration: .3,
	})
	.to(footer, {
		y: '-=395',
		ease: "linear",
		duration: .3,
	}, `-=.3`)

document.addEventListener('wheel', (e) => {
	if (isPaused || window.innerWidth < 1024) return
	if (!(e.deltaY < 0 && currentSection === 0) && !(e.deltaY > 0 && currentSection === 3)) {
		isPaused = true
		setTimeout(() => isPaused = false, 300)
	}
	else return

	if (e.deltaY > 0) {
		if (currentSection === 0) {
			currentSection = 1
			sectionHeroTL.play()
		} else if (currentSection === 1) {
			currentSection = 2
			sectionSwipeTL.play()
		} else {
			currentSection = 3
			footerTL.play()
		}
	} else {
		if (currentSection === 1) {
			currentSection = 0
			sectionHeroTL.reverse()
		} else if (currentSection === 2) {
			currentSection = 1
			sectionSwipeTL.reverse()
		} else {
			currentSection = 2
			footerTL.reverse()
		}
	}
})
