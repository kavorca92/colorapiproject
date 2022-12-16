const colorPicker = document.getElementById("color-picker")
const getColorBtn = document.getElementById("get-color-btn")
const colorDiv1 = document.getElementById("color-div-1")
const selectColor = document.getElementById("select-color")


getColorBtn.addEventListener('click', (e) => {
    let hex = colorPicker.value.toUpperCase()
    let hexWithoutSymbol = colorPicker.value.substr(1)
    let getColors = []

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexWithoutSymbol}&count=5&mode=${selectColor.value}`)
        .then(res => res.json())
        .then(data => {
            colorDiv1.style.backgroundColor = hex
            document.getElementById("hex-code-1").innerText = hex

            for (let i = 1; i < 5; i++) {
                getColors.push(data.colors[i].hex.value)
            }

            for (let i = 2; i <= 5; i++) {
                document.getElementById(`color-div-${i}`).style.backgroundColor = getColors[i - 2]
            }

            for (let i = 2; i < 6; i++) {
                document.getElementById(`hex-code-${i}`).innerText = getColors[i -2]
            }
        })
})