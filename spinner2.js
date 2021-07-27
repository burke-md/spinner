const sentence = `|/-\\|/-|\\|`;
let delay = 100;
for ( const char of sentence) {
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, delay)
  delay += 200;
}
process.stdout.write("\n")