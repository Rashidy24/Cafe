// Website Title

// Pre Loader
function pageLoader() {
    let myLoader = document.querySelector('.pre-loader')
    console.log(myLoader) // => Rememper to DElete
    window.addEventListener('load', _ => {
        myLoader.style.display = "none"
    })
}
// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}
// ContextMenu
function appearMyContextMe() {
    const contextMenu = document.querySelector('#menu')
    const Nav = document.querySelector('#pNav')
    console.log(Nav) // => Rememper to DElete
    let initHeight = contextMenu.offsetHeight;
    let initWidth = contextMenu.offsetWidth;
    window.addEventListener("contextmenu", e => {
        e.preventDefault()

        postionY = e.clientY;
        postionX = e.clientX;

        wHeight = window.innerHeight;
        wWidth = window.innerWidth;
        contextMenu.style.display = "block"
        mHeight = contextMenu.offsetHeight || initHeight;
        mWidth = contextMenu.offsetWidth || initWidth;

        avilableHeight = wHeight - postionY;
        avilableWidth = wWidth - postionX;
        if(avilableHeight >= mHeight) {
            contextMenu.style.top = postionY+"px"
            contextMenu.style.bottom = "auto"
            Nav.style.top = "0"
            Nav.style.bottom = "auto" 
        }else {
            contextMenu.style.top = "auto"
            contextMenu.style.bottom = wHeight - postionY+"px"
            Nav.style.bottom = "100%" 
            Nav.style.top = "auto" 
        }

        if(avilableWidth >= mWidth * 2){
            contextMenu.style.left = postionX+"px"
            contextMenu.style.right = "auto"
            Nav.style.left = "100%"
        }else {
            contextMenu.style.left = "auto"
            contextMenu.style.right = wWidth - postionX+"px"
            Nav.style.left = "-100%"
        }
    }) 

    function hidContext() {
        window.addEventListener("click", _ => {
            contextMenu.style.display = "none"
        })
    }

    hidContext()
}
// FloatingImg
function floatingImg() {
    const radio = document.querySelectorAll('[data-radio]')
    const myContent = document.querySelectorAll('.content')
    console.log(radio , myContent) // => Rememper to DElete
    radio.forEach((input, index)=> {
       input.onclick = function() {
        setTimeout(function() {
            myContent.forEach(content => {
                content.classList.remove('active')
             })
             myContent[index].classList.add("active")
        }, 200)
       }
    })
}

function toDoFunc() {
    const revealedItems = document.querySelectorAll('[data-reveal]')
    revealedItems.forEach(element => {
        element.getBoundingClientRect().top <= window.innerHeight ? 
        element.classList.add('revealed') 
        : element.classList.remove('revealed');
    })
}



window.addEventListener('scroll', toDoFunc);
window.addEventListener('load', toDoFunc);
// envoke
pageLoader()
appearMyContextMe()
floatingImg()