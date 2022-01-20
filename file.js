// let btn_one = document.querySelector('.bir');
// btn_one = addEventListener('click', ruxsat);
function ruxsat(){
    document.querySelector('.bir').classList.add('qora')
    document.querySelector('.ikki').classList.remove('qora')
    document.querySelector('.uch').classList.remove('qora')
    document.getElementById('one').classList.remove('yoq');

    document.getElementById('one').classList.add('index');
    document.querySelector('#two').classList.remove('index');
    document.querySelector('#three').classList.remove('index');
  
}

// let btn_two = document.querySelector('.ikki');
// btn_two = addEventListener('click',ikki);
function ikki(){
    document.querySelector('.bir').classList.remove('qora')
    document.querySelector('.ikki').classList.add('qora')
    document.querySelector('.uch').classList.remove('qora')
    
    document.getElementById('one').classList.add('yoq');
    document.querySelector('#one').classList.remove('index');
    document.querySelector('#two').classList.add('index');
    document.querySelector('#three').classList.remove('index');
}

// let btn_three = document.querySelector('.uch');
// btn_three = addEventListener('click',basing);
function basing(){
    document.querySelector('.bir').classList.remove('qora')
    document.querySelector('.ikki').classList.remove('qora')
    document.querySelector('.uch').classList.add('qora')

    document.getElementById('one').classList.add('yoq');

    document.querySelector('#one').classList.remove('index');
    document.querySelector('#two').classList.remove('index');
    document.querySelector('#three').classList.add('index');
}

//  document.getElementById('list').addEventListener('click',many);
function list(){
    document.querySelector('.catigories').classList.toggle('opacity');
}
// document.querySelector('.search .btn').addEventListener('click', ())


function btn_menu(){
    document.querySelector('.list > ul').classList.toggle('block');
    document.querySelector('.navbar').classList.toggle('border_color');
    document.querySelector('.btn__menu').classList.toggle('on');
}

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle('wow', window.scrollY>700);
})

function scrollbtn(){
    window.scrollTo({
        top:0
    })
}

window.addEventListener('scroll',() => {
    let shodow = document.querySelector('.navbar');
    shodow.classList.toggle('shadov', window.scrollY>10);
})