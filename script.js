window.addEventListener('load', () => {
    const loader = document.querySelector('.centerLoaders')


    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(()=>{
            loader.style.display = 'none'
        }, 500)
    }, 1000)

   })