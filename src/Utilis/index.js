// a simple function that takes in a file and convert it to base 64 string

export function getBase64(file) {
  file = new File(file);
  console.log("firstline >>>", file);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      console.log("event >>>", e);
      const blob = new Blob([new Uint8Array(e.target.result)], {
        type: file.type,
      });
      console.log("file >>>", file);
      console.log("blob >>>", blob);

      resolve(blob);
    };
    reader.onerror = (error) => reject(error);
  });
}
