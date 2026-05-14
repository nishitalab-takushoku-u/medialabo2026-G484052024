// console.log("こんにちは");
// let x = 3;
// x = x + 1;
// console.log(x);
let i = document.querySelector('button#print');

function greeting() {
    let p = document.querySelector('input[name="shimei"]');
    // console.log(p.value);
    let m = document.querySelector('p#message');
    m.textContent = "こんにちは " + p.value + "さん";
    // console.log(m.textContent + p.value + "さん");
}
i.addEventListener('click', greeting);