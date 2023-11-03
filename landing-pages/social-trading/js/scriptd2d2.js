'use strict';

$(document).ready(function () {
    let fpNav = document.querySelector('#pp-nav');
    let prevBtn = fpNav.querySelector('.slide-btn_top');
    let nextBtn = fpNav.querySelector('.slide-btn_bottom');
    let navLinksArr = fpNav.querySelectorAll('ul li');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth >= 1220 && windowHeight >= 698) {
        $('#pagepiling').pagepiling({
            verticalCentered: true,
            anchors: ['introductionPage', 'socialTradingPage', 'startToCopyPage', 'areYouBeginner', 'areYouProTraderPage', 'copyrightPage'],
            navigation: false,
            afterRender: function () {
                $('video').get(0).play();
            },
            onLeave: function (origin, destination, direction) {
                let destinationSectionId = destination;

                if (destinationSectionId == 1) {
                    fpNav.setAttribute('data-color', 'white');
                } else if (destinationSectionId == 2) {
                    fpNav.setAttribute('data-color', 'light-blue');
                } else if (destinationSectionId == 3) {
                    fpNav.setAttribute('data-color', 'blue');
                } else if (destinationSectionId == 4) {
                    fpNav.setAttribute('data-color', 'green');
                } else if (destinationSectionId == 5) {
                    fpNav.setAttribute('data-color', 'yellow');
                } else if (destinationSectionId == 6) {
                    fpNav.setAttribute('data-color', 'blue');
                }
                if (navLinksArr.length) {
                    navLinksArr = Array.from(navLinksArr);
                    navLinksArr.forEach(function (navLink) {
                        let navLinkA = navLink.querySelector('a');
                        navLinkA.classList.remove('active', 'next', 'prev');

                    })
                    navLinksArr[destinationSectionId - 1].querySelector('a').classList.add('active');
                    if (destinationSectionId == 1) {
                        nextBtn.classList.remove('hide');
                        prevBtn.classList.add('hide');
                        navLinksArr[destinationSectionId].querySelector('a').classList.add('next');
                    } else if (destinationSectionId == navLinksArr.length) {
                        nextBtn.classList.add('hide');
                        prevBtn.classList.remove('hide')
                        navLinksArr[destinationSectionId - 2].querySelector('a').classList.add('prev');
                    } else {
                        nextBtn.classList.remove('hide');
                        prevBtn.classList.remove('hide')
                        navLinksArr[destinationSectionId - 2].querySelector('a').classList.add('prev');
                        navLinksArr[destinationSectionId].querySelector('a').classList.add('next');
                    }
                }
            },
            responsiveWidth: 1140
        });
    }

    let viwAllBtnArr = Array.from(document.querySelectorAll('.view-all, .show-scroll'));
    let body = document.querySelector('body');
    viwAllBtnArr.forEach(function (viwAllBtn) {
        viwAllBtn.addEventListener('click', function () {
            if (body.classList.contains('disabled-scroll')) {
                body.classList.remove('disabled-scroll');
            } else {
                body.classList.add('disabled-scroll');
            }
        });
    });

    nextBtn.addEventListener('click', function () {
        let activeItem = fpNav.querySelector('.next');
        document.location.href = activeItem.getAttribute('href');
    })
    prevBtn.addEventListener('click', function () {
        let activeItem = fpNav.querySelector('.prev');
        document.location.href = activeItem.getAttribute('href');
    })
});

