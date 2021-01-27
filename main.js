// 1
let divContent = document.querySelector('#content')
console.log(divContent);
// 2
let divContent2 = document.querySelectorAll('#content')
console.log(divContent2);
// 3
let li = document.querySelector('.important')
console.log(li);
// 4
let li2 = document.querySelectorAll('.important')
console.log(li2);
// 5
li2.forEach(element => {
    console.log(element.textContent.slice(0,element.textContent.length-1)+ element.textContent.charAt(element.textContent.length-1).toUpperCase());
});

// 6
let grandP = document.getElementById('content').getElementsByClassName('grandParagraphe')[0].textContent
console.log(grandP);