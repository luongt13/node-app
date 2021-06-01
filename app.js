function count(chunk) {
    let lines = chunk.toString().split("\n").length
    console.log(lines)
}
process.stdin.once("data", count)