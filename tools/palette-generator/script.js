const clickedColour = document.querySelector('.clicked-colour')
const hexValue = document.querySelector('.hex-colour')
const colourValue = document.querySelectorAll('.colour-value')
const colourValueCopy = document.querySelectorAll('.colour-value')
const colourValueText = document.querySelectorAll('.colour-value-text')
const generateBtn = document.querySelector('.btn')



// Random HEX Colour Value Generator
// CREDIT ==== https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// FUNC - Generates random colour in DOM
function generateRandomColour() {
    colourValueText.forEach((text) => {
        text.innerText = getRandomColor()
        text.previousElementSibling.style.backgroundColor = `${text.innerText}`

        
    })
    
}

generateRandomColour()

// FUNC - Add copied popup on screen and pop up colour card
function clickedColorPalette() {
    colourValue.forEach((colour) => {
        colour.addEventListener('click', () => {
            // Clicked colour palatte card effect
            colour.classList.add('success');
            // Clicked colour card pop up
            clickedColour.classList.add('active')
            // Add HEX value to pop up
            hexValue.innerText = `${colour.lastElementChild.innerText}`

            // Copy to clipboard
            // CREDIT ==== https://alligator.io/js/copying-to-clipboard/
            const selection = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(colour);
            selection.removeAllRanges()
            selection.addRange(range)
            
            try {
                document.execCommand('copy')
                selection.removeAllRanges()
    
                // const original = colour.textContent
                // colour.textContent = 'Copied!'
                
                setTimeout(() => {
                    // Removes classes
                    colour.classList.remove('clicked')
                    colour.classList.remove('success');
                    
                }, 1000)
            } catch(e) {
                // const errorMsg = document.querySelector('.error-msg');
                // errorMsg.classList.add('show');
    
                // setTimeout(() => {
                //     errorMsg.classList.remove('show');
                // }, 1000);
    
            }
            setTimeout(() => {
                // Longer timeout for pop up class removal
                clickedColour.classList.remove('active')
            }, 1500)
        })
    })
}

clickedColorPalette()


// CREDIT === Thanks to TimonNetherlands for the help with this one
// https://stackoverflow.com/questions/65655896/copy-innertext-of-multiple-element-to-clipboard-using-js/65656153#65656153
function copyAllHexValues() {
    let values = [];
    document.querySelectorAll('.colour-value-text').forEach( (p) => values.push( p.innerHTML ) );
    let text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = values.join(', ');
    text.select();
    document.execCommand('copy');
    text.parentNode.removeChild(text);
       
}

// document.execCommand('copy')
document.addEventListener('keydown', (e) => {
    const c_keyDown = e.key

    if(c_keyDown == 'c') {
        copyAllHexValues()
        }
    })

// Generate Random Palette - Spacebar
document.addEventListener('keydown', (e) => {
    const spacebarDown = e.key

    if(spacebarDown == ' ') {
        generateRandomColour()
        }
})

// Generate Random Palette - Btn
generateBtn.addEventListener('click', () => {
    generateRandomColour()
})