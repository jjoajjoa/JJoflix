let page1;
let page2;
let page3;

// 웹 문서가 보이기 전에 한 번 실행됨
window.addEventListener('DOMContentLoaded', async () => {
    page1 = document.querySelector('#page1');
    page2 = document.querySelector('#page2');
    page3 = document.querySelector('#page3');

    const btnEmail = document.querySelector('#btnEmail');
    btnEmail.addEventListener('click', changePage2);

    showPage1();  // 초기 화면을 페이지 1로 설정

    //Page3에서 네비바 스크롤에 따라 반투명불투명 바꾸기
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


    function showItemDetail() {
        alert(':-P');
    }



    //page3에서 썸네일 호버시 카드 나오게
    const thumbnail = document.getElementById('thumbnail');
    const cardOverlay = document.getElementById('card-overlay');
    thumbnail.addEventListener('mouseover', function () {
        cardOverlay.style.display = 'flex';
    });
    thumbnail.addEventListener('mouseout', function () {
        cardOverlay.style.display = 'none';
    });

});

function changePage2(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    let email = document.querySelector('#inputEmail');
    if (email.value === 'jjo@jjoflix.com') {
        showPage2();
    } else {
        alert('이메일이 다릅니다');
    }
}

//page1 FAQ 콜랩스
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
function collapse(element) {
    var before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
    if (before && before != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
        before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
        before.classList.remove("active"); // 버튼 비활성화
    }

    element.classList.toggle("active"); // 활성화 여부 toggle

    var content = element.nextElementSibling;
    if (element.classList.contains("active")) { // 버튼이 활성화된 경우
        content.style.maxHeight = content.scrollHeight + "px"; // 펼치기
    } else {
        content.style.maxHeight = null; // 접기
    }
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


// 첫 화면(1) | 선택 화면(2) | 주 화면(3)
function showPage1() {
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';
}

function showPage2() {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'none';
}

function showPage3() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'block';
}
