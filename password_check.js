function getPasswordChecker(password) {
    actualPassword = 'asdfg'
    function isPassword() {
        if (password===actualPassword) {
            return true
        }
        else {
            return false
        }
    }
    return isPassword()
}
// node password_check.js ab
console.log(getPasswordChecker(process.argv[2]))