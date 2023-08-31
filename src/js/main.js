import './vendor';

import './components/_mobile-menu';

import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add('(min-width: 1024px)', () => {
	const sections = document.querySelectorAll('.section--hero, .section--swipe')

	sections.forEach((section, index) => {
		gsap.timeline().to(section,  {
			scale: .8,
			rotate: 15,
			ease: "linear",
			y: 300,
			scrollTrigger: {
				trigger: section,
				pinSpacing: false,
				pin: true,
				pinnedContainer: ".main",
				start: '1% top',
				end: "220% center",
				scrub:1,
				anticipatePin: 1,
				toggleActions: "restart none none reset",
				//markers: true,
			}
		})
	})
	sections.forEach((section, index) => {
		gsap.timeline().to(section,  {
			ease: "linear",
			scrollTrigger: {
				trigger: section,
				pinnedContainer: ".main",
				start: '1% top',
				//markers: true,
				onLeave: () => {
					section.classList.add('v-hide')
				},
				onEnterBack: () => {
					section.classList.remove('v-hide')
				},
			}
		})
	})
})


