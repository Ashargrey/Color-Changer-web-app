const body = document.querySelector('body')
const random_btn = document.querySelector('.random_btn')
const input = document.querySelector('.inp')
const copy_btn = document.querySelector('.copy_btn')
const apply_btn = document.querySelector('.apply_btn')
const current_color = document.querySelector('span')
const toast = document.getElementById('toast')

let colors = [
"AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
"Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
"Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen",
"DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon",
"DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen",
"Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew",
"HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon",
"LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
"LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey",
"LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine",
"MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
"MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite",
"Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
"PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple",
"RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
"SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
"SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
"Yellow","YellowGreen"
]

setInterval(() => {
    current_color.innerText = body.style.background || "White"
}, 100)

function showToast(message, type = "info") {
    toast.innerText = message
    toast.className = `show ${type}`

    setTimeout(() => {
        toast.className = toast.className.replace("show", "")
    }, 2000)
}

random_btn.addEventListener('click', () => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    body.style.background = color
    input.value = color
    showToast("Random color applied 🎨", "info")
})

apply_btn.addEventListener('click', () => {
    if (!input.value) {
        showToast("Please enter a color ❌", "error")
    } else {
        body.style.background = input.value
        showToast("Color applied successfully ✅", "success")
    }
})

copy_btn.addEventListener('click', () => {

    navigator.clipboard.writeText(body.style.background || "white")
    showToast("Color copied 📋", "success")
})