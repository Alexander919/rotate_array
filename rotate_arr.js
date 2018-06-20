window.onload = function () {
function countdown() {
    let count = document.getElementById('count'), reset;
    for (let i = 0; i<12; i++) { 
    setTimeout(() => {
        count.innerHTML = i;
    }, i*500);
    
}
console.log(count.innerHTML);
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
            }, i*500);
        }
    }, arrOfarrs.length*500);
}
function rotate(str) {
    countdown();
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
let strToRotate = 'Hello_World!';
rotate(strToRotate);
}

//let arr= [' H','e','l','l','o','_','W', 'o', 'r', 'l', 'd','! '];
//rotate(arr);
