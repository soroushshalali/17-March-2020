
// let d = new Date()
// console.log(d)
// console.log(d.getFullYear()) //2020
// console.log(d.getHours())
// console.log(d.getSeconds())

// let birthday = new Date(1993, 0, 3, 11, 50, 10)
// let birthday1 = new Date(1993, 0, 3, 11, 50, 10)
// console.log(birthday.getTime())
// //Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// if (birthday.getTime() == birthday1.getTime()) {
//     console.log('gleich')
// } else {
//     console.log("not gleich")
// }

// //setInterval and setTimeout

// console.log(Math.floor(Math.random() * 100))




let mathObj = {
    mathfoor() {
        let Input = document.getElementById("input").value;
        Input = Math.floor(Input);
        document.getElementById("show").innerHTML = `Math.floor() : ${Input}`;
    },
    mathabs() {
        let Input = document.getElementById("input").value;
        Input = Math.abs(Input);
        document.getElementById("show").innerHTML = `Math.abs() : ${Input}`
    },
    mathceil() {
        let Input = document.getElementById("input").value;
        Input = Math.ceil(Input);
        document.getElementById("show").innerHTML = `Math.ceil() : ${Input}`
    },
    mathRround() {
        let Input = document.getElementById("input").value;
        Input = Math.round(Input);
        document.getElementById("show").innerHTML = `Math.round() : ${Input}`
    },
    mathtrunc() {
        let Input = document.getElementById("input").value;
        Input = Math.trunc(Input);
        document.getElementById("show").innerHTML = `Math.trunc() : ${Input}`
    },
    mathmin() {
        let Input = Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 488);
        document.getElementById("show").innerHTML = `Math.min() : ${Input}`;
    },
    mathmax() {
        let Input = Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 488);
        document.getElementById("show").innerHTML = `Math.min() : ${Input}`;
    },
}

document.getElementById("funcs").addEventListener("click", () => {
    if (document.getElementById("select-math").value == "floor") {
        mathObj.mathfoor();
    } else if (document.getElementById("select-math").value == "round") {
        mathObj.mathRround();
    } else if (document.getElementById("select-math").value == "abs") {
        mathObj.mathabs();
    } else if (document.getElementById("select-math").value == "trunc") {
        mathObj.mathtrunc();
    } else if (document.getElementById("select-math").value == "ceil") {
        mathObj.mathceil();
    } else if (document.getElementById("select-math").value == "pi") {
        document.getElementById("show").innerHTML = 3.14;
    } else if (document.getElementById("select-math").value == "random") {
        document.getElementById("show").innerHTML = Math.random();
    } else if (document.getElementById("select-math").value == "random1-100") {
        document.getElementById("show").innerHTML = Math.floor(Math.random() * 100);
    } else if (document.getElementById("select-math").value == "max") {
        mathObj.mathmax();
    } else if (document.getElementById("select-math").value == "min") {
        mathObj.mathmin();
    }
})







