function greet(name?: string) {
    return `Hello, ${name || "stranger"}`;
}

console.log(greet());