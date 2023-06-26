/*
Conversition formulas according to Wikipedia article:
x K in ...	... corresponds to ...

Celsius	   (x − 273.15) °C
Fahrenheit	   (1.8 x − 459.67) °F
Rankine	   1.8 x °Ra
*/

// Constant value of Kelvin
const kelvin = 293;

// x K in ...	... corresponds to ... Celsius	   (x − 273.15) °C
const celsius = kelvin - 273;

// x C in ...	... corresponds to ... fahrenheit
let fahrenheit = (celsius * 9) / 5 + 32;

// Rounding dow results for Celsius-Fahrenheit conversion
fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
