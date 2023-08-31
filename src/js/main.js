import './vendor';

import './components/_mobile-menu';

import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia()

mm.add('(min-width: 1024px)', () => {
	ScrollTrigger.create({
		trigger: ".main",
		start: "1px top",
		toggleActions: "restart none none reverse",
		snap: {
			snapTo: 1 / 3,
			duration: .5,
			delay: 0.0,
			ease: "none",
		}
	})

	const sections = document.querySelectorAll('.section--hero, .section--swipe')

	sections.forEach((section, index) => {
		gsap.timeline().to(section,  {
			y: () => window.innerHeight,
			scale: .8,
			rotate: 15,
			opacity: 0,
			duration:.5,
			ease: "linear",
			scrollTrigger: {
				trigger: section,
				start: '1% top',
				toggleClass: "active",
				scrub:1,
				toggleActions: "restart none none reset",
				//markers: true,
			}
		})
	})
})
