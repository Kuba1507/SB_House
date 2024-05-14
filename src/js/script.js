const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".nav");
const navList = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__menu-item-link");
const yearSpan = document.querySelector(".actual-year");
const cookieBox = document.querySelector(".cookie-box");
const cookieBtn = document.querySelector(".cookie-box__button");
const contactSection = document.querySelector(".contact");
const aboutSection = document.querySelector(".about-us");
const moveToContactBtns = document.querySelectorAll(".move-contact");
const moveArrow = document.querySelector(".circle-arrow");

const blockScroll = () => {
	body.classList.toggle("block-scroll");
};

const handleNav = () => {
	burgerBtn.classList.toggle("is-active");
	navigation.classList.toggle("show-nav");

	handleNavItemsAnimation();
	blockScroll();
};

const closeNav = () => {
	burgerBtn.classList.remove("is-active");
	navigation.classList.remove("show-nav");
	navigation.classList.remove("navigation-shadow");
	body.classList.remove("block-scroll");

	navItems.forEach((item) => {
		item.classList.remove("nav-items-animation");
	});
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});

	navigation.classList.toggle("navigation-shadow");
};

const handleHeaderShadow = () => {
	if (window.scrollY >= 50) {
		header.classList.add("header-shadow");
	} else {
		header.classList.remove("header-shadow");
	}
};

const setYear = () => {
	const currentYear = new Date().getFullYear();

	if (yearSpan) {
		yearSpan.textContent = currentYear;
	}
};

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie");

	if (cookieEaten) {
		cookieBox.classList.add("hide");
	}
};

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true");

	cookieBox.classList.add("hide");
};

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleHeaderShadow);
navItems.forEach((item) => {
	item.addEventListener("click", closeNav);
});
document.addEventListener("DOMContentLoaded", setYear);
cookieBtn.addEventListener("click", handleCookieBox);
showCookie();
moveToContactBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		contactSection.scrollIntoView({ behavior: "smooth" });
	});
});
moveArrow.addEventListener("click", () => {
	aboutSection.scrollIntoView({ behavior: "smooth" });
});
