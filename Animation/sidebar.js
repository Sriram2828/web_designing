document.addEventListener('DOMContentLoaded',()=>{
    const sidebar=document.querySelector('.sidebar');
    const button=document.querySelector('button');
    const restarea=document.querySelector('.restarea');

    button.addEventListener('click',()=>{
        sidebar.classList.add('open');
    });
    button.addEventListener('click',()=>{
        restarea.classList.add('open');
    });
    restarea.addEventListener('click',()=>{
        sidebar.classList.remove('open');
    });
});