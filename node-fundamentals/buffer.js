const buffer = new Buffer.from("Vishwas", "utf-8");
buffer.write("Codevolution");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
