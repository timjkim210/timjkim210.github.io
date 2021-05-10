function mouseOverHandler() {
            const circle = d3.select(this)
            togglePopup(this.id)
            }
        
function mouseOutHandler() {
        const circle = d3.select(this)
        togglePopup(this.id);
}

function clickHandler() {
    console.log('You just clicked me!');
    let pieChart = document.getElementsByClassName(`${name}-pie-chart`)
        console.log(pieChart)
        pieChart.item(0).classList.toggle("show")
       let majors = document.getElementsByClassName(`${name}-majors`)
       majors.item(0).classList.toggle("show")
}

function togglePopup(name) {
        let ele = document.getElementsByClassName(name)
        ele.item(0).classList.toggle("show")
        let pieChart = document.getElementsByClassName(`${name}-pie-chart`)
        console.log(pieChart)
        pieChart.item(0).classList.toggle("show")
       let majors = document.getElementsByClassName(`${name}-majors`)
       majors.item(0).classList.toggle("show")
        
}