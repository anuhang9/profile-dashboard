// for dark theme/ bright theme
const bright = document.getElementById('br');

bright.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
})



// for react


    const react = document.getElementById('react');
react.addEventListener('click', function (){

    if(react.style.color == 'red'){
        react.style.color = 'gray'
    }
    else{
        react.style.color = 'red'
    }
});

// for follow button
    const button = document.getElementById('mbtn');
button.addEventListener('click',function(){

    if(button.innerHTML == 'Follow'){
        button.innerHTML = 'Followed <i class="fa-sharp fa-solid fa-check"></i>'
    }
    else{
        button.innerHTML = 'Follow'
    }
})
