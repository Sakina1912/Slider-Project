const panels = document.querySelectorAll('.panel') //puts all the panel like an array so that we can run it on a loop

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        RemoveActiveClasses()
        panel.classList.add('active')
    })
})

function RemoveActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}