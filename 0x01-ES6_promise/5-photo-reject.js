// Write and export a function named uploadPhoto
export default function uploadPhoto(filename) {
  // Create an Error object with the specified message
  const error_message = `${filename} cannot be processed`;
  throw new Error(error_message);
}
