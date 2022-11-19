let lode = document.querySelector('.lode')
let loder = document.querySelector('.loader')

window.setTimeout(
    function () {
        loder.style.opacity = '0';
        lode.style.opacity = '0';
    } ,1000 ,
    function () {
        lode.style.display = 'none';
    } ,1500 
)
