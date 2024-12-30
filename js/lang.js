lang = document.getElementById('lang');

lang.addEventListener('change', () => {
    if (lang.value === "esp" ) {
        window.location.href = '../../index.html';
    } else if (lang.value === "eng") {
        window.location.href = './eng/indexeng.html';
    }
})