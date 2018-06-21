window.onload = function () {
    let strToRotate = 'Sanitarium';
    let t = 350;
function countdown(len) {
    let count = document.getElementById('count'), inc = 1;
    for (let i = len; i > 0; i--) { 
        setTimeout(() => {
            count.innerHTML = `< < ${i} > >`;
        }, inc*t);
        inc++; 
    }
    setTimeout(() => {
        count.innerHTML = '';
    }, (len / 2 * t*2 + t));
}
function display(str) {
    let h1 = document.getElementById('rotate');
    h1.innerHTML = str;
}
function print(arrOfarrs) {
    setInterval(() => {
        for (let i = 0; i < arrOfarrs.length; i++) {
            setTimeout(() => {
                display(arrOfarrs[i].join(''));
            }, i*t);
        }
    }, arrOfarrs.length*t);
}
function rotate(str) {
    countdown(str.length);
    let arr = str.split(''), arrOfarrs = [], copycrsl;
    for (let i = 0; i < arr.length; i++) {
        let save = arr[0];
        {
        let j = 1;
        for (j; j < arr.length; j++) {
            arr[j-1] = arr[j];
        }
            arr[j-1] = save;
        }
        copycrsl = arr.slice(0, arr.length);
        arrOfarrs.push(copycrsl);
    }
    arrOfarrs.unshift(arr);
    print(arrOfarrs);
}
rotate(strToRotate);
}
