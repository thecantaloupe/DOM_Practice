console.log("does this work")

const btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value
    console.log(inp.value)
    if (inp.value !== ""){
        document.querySelector('ul').appendChild(li)
    }
    // will drop bullets
    // li.style.display = "block"
    inp.value = ""
});

document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(event) {
    console.log(event)
    event.target.style.color = "orange"
    // cap = document.querySelectorAll('li')
    // for (el of cap){
    //     console.log(el)
    //     console.log(el.style.display)
    // }
}


