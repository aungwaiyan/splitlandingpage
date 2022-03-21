const container = document.querySelector('.container');
const leftsplit = document.querySelector('.left');
const rightsplit = document.querySelector('.right');


leftsplit.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left');
});

leftsplit.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left');
});

rightsplit.addEventListener('mouseenter',()=>{
    container.classList.add('hover-right');
});

rightsplit.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right');
});

const btns = document.querySelectorAll('.btn');

btns.forEach(btn=>{
    // console.log(btn);

    btn.addEventListener('click',(e)=>{

        const cx = e.clientX;
        const cy = e.clientY;

        const topangle = e.target.offsetTop;
        const leftangle = e.target.offsetLeft;

        const  horizontal = cx-leftangle;
        const vertical = cy-topangle;

        const circle = document.createElement('span');

        circle.classList.add('circle');

        circle.style.top=vertical+"px";
        circle.style.left=horizontal+"px";

        e.target.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);
    })
})
    

