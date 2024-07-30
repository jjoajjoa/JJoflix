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
