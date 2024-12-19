document.addEventListener('DOMContentLoaded', () => {
	const footer = document.querySelector('.footer') as HTMLElement
	const btnNav = document.querySelector('.header-nav-btn') as HTMLElement
	const menuBtnNav = document.querySelector('.header-nav-menu') as HTMLElement
	const menu = document.querySelector('.header-menu') as HTMLElement
	const x = document.querySelector('.header-menu-x') as HTMLElement
	const FAQ = document.querySelector('.FAQ') as HTMLElement

	btnNav?.addEventListener('click', () => footer?.scrollIntoView())

	menuBtnNav?.addEventListener('click', () => {
		console.log('open')
		// menu!.style.display = 'initial'
        menu!.style.right = '0'
		menuBtnNav.style.opacity = '0'
		setTimeout(() => window.addEventListener('click', handleClickOutside), 0)
		window.addEventListener('wheel', preventScroll, { passive: false })
	})

	x.addEventListener('click', () => {
		// menu!.style.display = 'none'
        menu!.style.right = '-200px'
		menuBtnNav.style.opacity = '1'
		window.removeEventListener('wheel', preventScroll)
		console.log('close')
        window.removeEventListener('click', handleClickOutside)
	})

	FAQ.addEventListener('click', () => {
        menu!.style.right = '-200px'
		// menu!.style.display = 'none'
		menuBtnNav.style.opacity = '1'
		window.removeEventListener('wheel', preventScroll)
		footer?.scrollIntoView()
		console.log('scroll faq')
        window.removeEventListener('click', handleClickOutside)
	})

	function preventScroll(e: { preventDefault: () => void }) {
		e.preventDefault()
	}

	function handleClickOutside(event: any) {
		if (!menu.contains(event.target)) {
			console.log('close modal')
			// menu!.style.display = 'none'
            menu!.style.right = '-200px'
			menuBtnNav.style.opacity = '1'
			window.removeEventListener('wheel', preventScroll)
            window.removeEventListener('click', handleClickOutside)
		}
	}
})
