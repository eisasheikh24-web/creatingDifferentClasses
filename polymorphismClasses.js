class slap1 {
    hits() {
        console.log("Yusuf got slapped")
    }
}

class slap2 extends slap1 {
    hits() {
        super.hits();
        console.log("Eisa got slapped")
    }
}

class slap3 extends slap1 {
    hits() {
        console.log("Musa got slapped")
    }
}

let YE = new slap2()
let ME = new slap3()
YE.hits(); // extends to both Eisa and Yusuf
ME.hits(); // "Musa got slapped" but doesnt extend to "Yusuf got slapped"