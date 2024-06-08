let queryElem = (selector) => {
	let selection = document.querySelectorAll(selector)
	return selection.length > 1 ? selection : selection[0]
}

let principalElem = queryElem("#principal")
// let categoriaElem = queryElem(".categoria")
let toggleButton = queryElem(".menu-toggle")

document.addEventListener("DOMContentLoaded", function () {
	menuMobileHelper()

	window.addEventListener("resize", function () {
		menuMobileHelper(window.innerWidth)
	})

	function menuMobileHelper() {
		if (window.matchMedia("(max-width: 886px)").matches) {
			principalElem.classList.replace("desktop", "mobile")
			principalElem.classList.add("closed", "dkaopdksaodksa")
		} else {
			principalElem.classList.replace("mobile", "desktop")
			principalElem.classList.remove("closed", "open")
		}
	}

	let menuIsClosed = () => principalElem.classList.contains("closed")

	toggleButton.addEventListener("click", function () {
		if (menuIsClosed()) {
			return principalElem.classList.replace("closed", "open")
		} else {
			return principalElem.classList.replace("open", "closed")
		}
	})
})
