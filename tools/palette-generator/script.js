const button = document.getElementById("generate-color");
  const clip = document.querySelector("nav > p");

  // Hex background colors
  const color_1 = document.getElementById("color-1");
  const color_2 = document.getElementById("color-2");
  const color_3 = document.getElementById("color-3");
  const color_4 = document.getElementById("color-4");
  const color_5 = document.getElementById("color-5");

  const hexColor_1 = document.getElementById("hexColor1");
  const hexColor_2 = document.getElementById("hexColor2");
  const hexColor_3 = document.getElementById("hexColor3");
  const hexColor_4 = document.getElementById("hexColor4");
  const hexColor_5 = document.getElementById("hexColor5");

  const colorCodes = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

// Function to generate Hex colors
  function generateColors(){
      let hexColor1 = "#",
      hexColor2 = "#",
      hexColor3 = "#",
      hexColor4 = "#",
      hexColor5 = "#";

    // for loop to generate hexadecimal colors by looping 5 times and concatenating to # to form hex code
    for (let i = 0; i < 6; ++i) {
      hexColor1 += `${colorCodes[rand(colorCodes)]}`;
      hexColor2 += `${colorCodes[rand(colorCodes)]}`;
      hexColor3 += `${colorCodes[rand(colorCodes)]}`;
      hexColor4 += `${colorCodes[rand(colorCodes)]}`;
      hexColor5 += `${colorCodes[rand(colorCodes)]}`;
    }

    hexColor_1.textContent = hexColor1;
    color_1.style.backgroundColor = `${hexColor1}`;

    hexColor_2.textContent = hexColor2;
    color_2.style.backgroundColor = `${hexColor2}`;

    hexColor_3.textContent = hexColor3;
    color_3.style.backgroundColor = `${hexColor3}`;

    hexColor_4.textContent = hexColor4;
    color_4.style.backgroundColor = `${hexColor4}`;

    hexColor_5.textContent = hexColor5;
    color_5.style.backgroundColor = `${hexColor5}`;
  }

  function rand(color) {
    return Math.floor(Math.random() * color.length);
  };
  
// Function to generate colors when generate button is clicked
button.addEventListener("click", generateColors);

// function to generate colors when spacebar is pressed. 'Keydown event'
window.addEventListener('keydown', e => {
  if(e.keyCode == '32'){
    generateColors();
  }
});