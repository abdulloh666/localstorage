const inputEl = document.querySelector('input');
const div = document.querySelector('div')
const btn = document.querySelector('button')
let arr = ["SMTH"];

inputEl.addEventListener('input' , () =>{
    arr.push(inputEl.value)
    localStorage.setItem("numbers" , JSON.stringify(arr))
    console.log(arr); 
    div.innerHTML = arr;
    if(inputEl.value === ""){
        div.innerText = 'null'
    }
})
div.innerHTML = arr;

btn.addEventListener('click' , () =>{
    localStorage.clear();
    inputEl.value = ''
    div.innerText = ''
})