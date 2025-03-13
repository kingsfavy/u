document.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.reveal');

    for (const reveal of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 5;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('visible');
        } else {
            reveal.classList.remove('visible');
        }
    }
});

// Carousel Functionality
let currentIndex = 0;
const totalSlides = 3;
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

let slideInterval = setInterval(autoSlide, 3000);

document.querySelector('.carousel-container').addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

document.querySelector('.carousel-container').addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 3000);
});

// Modal Function
function form() {
    document.getElementById("modal").style.display = "block";
}

// Hamburger Menu Function
function ham() {
    const nav = document.getElementById("nav");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");

    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
        one.style.transform = "rotate(45deg)";
        one.style.transitionDuration = "1s";
        one.style.margin = "0";
        two.style.display = "none";
        three.style.transform = "rotate(-45deg)";
        three.style.transitionDuration = "1s";
        three.style.margin = "0";
        one.style.width = "40px";
        three.style.width = "40px";
    } else {
        nav.style.display = "none";
        one.style.width = "30px";
        two.style.width = "30px";
        three.style.width = "30px";
        one.style.transform = "rotate(0deg)";
        one.style.transitionDuration = "1s";
        two.style.display = "block";
        three.style.transform = "rotate(0deg)";
        three.style.transitionDuration = "1s";
    }
}

// Counter Function
function startCounter(elementId, maxCount) {
    let count = 0;
    const duration = 1500; // Faster counter speed
    const steps = Math.min(maxCount, 100);
    const interval = duration / steps;

    const counterElement = document.getElementById(elementId);
    const timer = setInterval(() => {
        counterElement.textContent = count;
        if (count >= maxCount) {
            clearInterval(timer);
        }
        count++;
    }, interval);
}

startCounter("counter1", 100);
startCounter("counter2", 80);
startCounter("counter3", 60);
startCounter("counter4", 50);
startCounter("counter5", 80);

// Text Scrolling Effect
const texts = ["engaging", "efficiently", "seamless"];
let currentTextIndex = 0;

function changeText(newText) {
    const changeElement = document.getElementById('change');

    // Apply the scroll-down animation to the current text
    changeElement.classList.remove('scroll-up');
    changeElement.classList.add('scroll-down');

    setTimeout(() => {
        changeElement.textContent = newText;
        changeElement.classList.remove('scroll-down');
        changeElement.classList.add('scroll-up');
    }, 800);
}

function startScrolling() {
    setInterval(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        changeText(texts[currentTextIndex]);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', startScrolling);
