let btSwitch = document.getElementById("#botao-switch")

function toggleMode() {
    document.body.classList.toggle('tema-claro');
}

//load light or dark mode
function loadTheme() {
    const temaClaro = localStorage.getItem('tema-claro')

    if (temaClaro) {
        toggleTemaClaro();
    }
}

loadTheme();

let root = document.documentElement
btSwitch.addEventListener('click', () =>{
    toggleTemaClaro();
    
    // save or remove dark mode
   

    if (document.body.classList.contains('tema-claro')) {
        localStorage.setItem('tema-claro', 1);
    }
})
