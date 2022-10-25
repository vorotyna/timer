const inputArgs = process.argv.slice(2)
  .filter(element => !Number.isNaN(element))
  .filter(element => element >= 0);

for (let arg of inputArgs) {
  setTimeout(() => {
    process.stdout.write('.');
  }, arg * 1000);
}