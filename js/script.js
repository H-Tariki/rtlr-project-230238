let left= document.getElementById("left")
left.addEventListener('mouseover' , ()=>{
    left.classList.add("animate__pulse")
    setTimeout(() => {
        left.classList.remove("animate__pulse")
    }, 2000);
})

