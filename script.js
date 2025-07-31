const title = document.getElementById('title');
const secao = document.getElementById('mainSection');
const body = document.getElementById('body');
const span = document.getElementById('span1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const footer = document.getElementById('footer');

setTimeout(() => {
    span.style.animation = 'brilhar2 5s forwards'
    title.style.animation = 'animFundo 5s forwards';
    secao.style.animation = 'animAparece 5s forwards';
    body.style.overflowY = 'scroll';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';
    footer.style.display = 'block';
}, 10000);

