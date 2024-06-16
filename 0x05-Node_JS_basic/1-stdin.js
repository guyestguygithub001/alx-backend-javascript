// Prompt user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Event listener for input data
process.stdin.on('readable', () => {
  // Read input from STDIN
  const chunk = process.stdin.read();

  // If input received, print the name
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Event listener for end of input
process.stdin.on('end', () => {
  // Notify user that the program is closing
  process.stdout.write('This important software is now closing\n');
});
