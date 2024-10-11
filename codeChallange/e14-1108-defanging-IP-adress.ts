/*
1108. Defanging an IP Address

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

function defangIPaddr(address: string): string {
    let output: string[] = []
    let addrArr: string[] = address.split("")

    output = addrArr.map(item => item.replace(".","[.]"))

    return output.join("")
};

console.log(defangIPaddr("1.1.1.1"))