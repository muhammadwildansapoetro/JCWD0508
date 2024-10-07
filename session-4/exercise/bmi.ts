/*
Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))²
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z
*/

function bmi (weight: number, height: number) {
    let bmi: string = ""
    let score: number = weight / ((height/100) ** 2)
    console.log(score)

    if (score < 18.5) {
        bmi = "less weight"
    } else if (score >= 18.5 && score < 24.9) {
        bmi = "ideal"
    } else if (score >= 25.0 && score < 29.9) {
        bmi = "overweight"
    } else if (score >= 30.0 && score < 39.9) {
        bmi = "very overweight"
    } else if (score > 39.9) {
        bmi = "obesity"
    }
    return bmi
}

console.log(bmi(90, 180))