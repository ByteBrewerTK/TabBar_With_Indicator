const items = document.querySelectorAll('.nav-link');

items.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active');
        item.classList.add("active");

        const indicator = document.querySelector(".indicator");
        indicator.style.left = `${(index*6)+(3.1)}rem`;
    })
})