const originalDisorderFormat = 
"Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const newDisorderFormat = originalDisorderFormat.split("|$|")
const disordersList = newDisorderFormat.join("<div></div>")

console.log (`<div>${disordersList}</li>`)
// list

