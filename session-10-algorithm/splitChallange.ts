/*
    input = "helloWorld"
    output = ["hello", "World"]

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/


function split(input: string) {
    return input.split(/(?=[A-Z])/)
}

console.log(split("helloWorld"));
console.log(split("HelloWorld"));
console.log(split("johnDoeMiller"));

/*
The (?=[A-Z]) part means that the split happens just before each capital letter 
(excluding the first letter, if it's lowercase).

/(?=[A-Z])/ (Regular Expression):
- This is a regular expression that serves as the delimiter for the split() function.
- (?=[A-Z]) is a positive lookahead:
    - Positive lookahead ((?=...)): This is a regex feature that looks ahead in the string to see if a certain pattern follows, 
        but it doesn't consume the characters (meaning it doesn't actually include them in the match).
    - [A-Z]: This part matches any uppercase letter from A to Z.
*/