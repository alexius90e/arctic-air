

$(document).ready(function () {
    AOS.init({
        duration: 500,
        easing: 'ease-out'
    });
    const $searchInputs = $('.header-search-input');
    const $clearButtons = $('.search-clear-button');

    $searchInputs.on('input', function (event) {
        const $clearButton = $(event.target).parent().find('.search-clear-button');
        $clearButton.toggleClass('d-none', ! $(event.target).val());
    });

    $clearButtons.on('click', function (event) {
        const $searchInput = $(event.target).parent().find('.header-search-input')
        $searchInput.val('').trigger('input').focus();
    });

    $(".nav-item").hover(
        function () {
            console.log('fadeIn');
            $(this).find('.submenu-container').stop(true, true).slideDown(300);
        },
        function () {
            console.log('fadeOut');
            $(this).find('.submenu-container').stop(true, true).slideUp(150);
        }
    );

    const swiper = new Swiper(".sales-swiper", {
        slidesPerView: 1,
        spaceBetween: 1,
        navigation: {
            nextEl: ".sales-swiper-button-next",
        },
        breakpoints: {

            576: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
        }
    });
    const bestsellersSwiper = new Swiper(".bestsellers-swiper", {
        slidesPerView: 1,
        spaceBetween: 2,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".bestsellers-swiper-button-next",
        },
    });

    const brandsSwiper = new Swiper(".brands-swiper", {
        slidesPerView: 3,
        // spaceBetween: 60,
        watchOverflow: true,
        centeredSlides: false,
        breakpoints: {

            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 7,
            },
            1200: {
                slidesPerView: 8,
            },
        },
        navigation: {
            nextEl: ".brands-swiper-button-next",
        },
    });


    $('#mobileMenuToggle').on('click', function () {
        $('#mobileMenu').addClass('open');
        $('body').addClass('no-scroll');
    });

    $('#closeMobileMenu').on('click', function () {
        $('#mobileMenu').removeClass('open');
        $('body').removeClass('no-scroll');
    });

    $('#mobileSearchInMenuBtn').on('click', function () {
        $('#mobileMenu').addClass('open');
        $('body').addClass('no-scroll');

        setTimeout(() => {
            $('#mobileMenuSearchInput').focus();
        }, 400); // delay to match slide-in transition
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("showFloatingSearch");
    const mobileSearchForm = document.getElementById("floatingSearchForm");

    toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileSearchForm.style.display = "flex";
        mobileSearchForm.style.position = "absolute";
        mobileSearchForm.style.right = '-20px';
        mobileSearchForm.style.top = '30px';
    });

    document.addEventListener("click", function (e) {
        if (!mobileSearchForm.contains(e.target)) {
            mobileSearchForm.style = [];
            mobileSearchForm.style.display = "none";
        }
    });

    const scrollUpBtn = document.getElementById('scrollUpBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            scrollUpBtn.style.display = 'block';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function scaleLines() {
    const screenWidth = window.innerWidth;
    let scaleFactor;

    // Define scale factor per breakpoint
    if (screenWidth >= 1440) {
        scaleFactor = 1; // base size
    } else if (screenWidth >= 1200) {
        scaleFactor = 0.85;
    } else if (screenWidth >= 992) {
        scaleFactor = 0.7;
    } else if (screenWidth >= 768) {
        scaleFactor = 0.55;
    } else {
        scaleFactor = 0.4;
    }

    const lines = document.querySelectorAll('.line');

    lines.forEach(line => {
        const initialLeft = parseFloat(line.dataset.initialLeft);
        const initialWidth = parseFloat(line.dataset.initialWidth);
        const parent = line.parentElement;

        const parentWidth = parent.offsetWidth;
        let scaledLeft = initialLeft * scaleFactor;
        let scaledWidth = initialWidth * scaleFactor;

        // Ensure the line does not overflow the parent's width
        if (scaledLeft < parentWidth) {
            scaledLeft = parentWidth + 10;
        }

        // Ensure the line does not start before the parent's left edge
        line.style.left = Math.max(scaledLeft, 0) + 'px';
        line.style.width = Math.max(scaledWidth, 0) + 'px';
    });
}

// Init
window.addEventListener('DOMContentLoaded', scaleLines);
window.addEventListener('resize', scaleLines);

window.addEventListener('load', function () {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.style.transition = 'opacity 0.4s ease';
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 400);
    }
});
