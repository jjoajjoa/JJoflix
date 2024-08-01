// page3.js

// 웹 문서가 보이기 전에 한 번 실행됨
window.addEventListener('DOMContentLoaded', async () => {
    //page3에서 네비바 스크롤에 따라 반투명불투명 바꾸기
    const navbar = document.querySelector('.navbar-custom');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // 스크롤 위치가 50px 이상일 때
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-opaque');
        } else { // 스크롤 위치가 50px 이하일 때
            navbar.classList.remove('navbar-opaque');
            navbar.classList.add('navbar-transparent');
        }
    });

    initThumbnailHover(); // 썸네일 호버 초기화

});

function initPage3() {
    //page3에서 썸네일 호버시 카드 나오게
    const thumbnail = document.getElementById('thumbnail');
    const cardOverlay = document.getElementById('card-overlay');
    thumbnail.addEventListener('mouseover', function () {
        cardOverlay.style.display = 'flex';
    });
    thumbnail.addEventListener('mouseout', function () {
        cardOverlay.style.display = 'none';
    });
}

function scrollLeft() {
    document.getElementById('cards-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('cards-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
