function Generate() {
    let number = "aeioudufuf949494";
    let password = "";
    let length = 9;
    for (let i = 0; i < length; i++) {
        let newIndex = Math.floor(Math.random()* number.length)
        password+= number[newIndex];

        
    }
    document.getElementById("output").value = password
}