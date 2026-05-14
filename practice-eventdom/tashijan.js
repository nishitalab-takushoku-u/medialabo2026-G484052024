
let i = document.querySelector('button#calc');
function calcu() {
    let l = document.querySelector('input[name="left"]');
    let left = Number(l.value);
    let r = document.querySelector('input[name="right"]');
    let right = Number(r.value);
    let sum = left + right;
    let ans = document.querySelector('span#answer');
    ans.textContent = sum;
}
i.addEventListener('click', calcu);