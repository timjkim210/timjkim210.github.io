function mouseOverHandler() {
            const circle = d3.select(this)
            togglePopup(this.id)
            }
        
function mouseOutHandler() {
        const circle = d3.select(this)
        togglePopup(this.id);
}

function clickHandler() {
    console.log('You just clicked me!')
}

function togglePopup(name) {
        let ele = document.getElementsByClassName(name)
        ele.item(0).classList.toggle("show")
}