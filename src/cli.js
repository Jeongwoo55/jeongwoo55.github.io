const sharp = require("sharp");
const fs = require("fs");
const directory = "./src/images/original";
const outputDirectory = "./src/images/responsive";

fs.readdirSync(directory).forEach((file) => {
  try {
    sharp(`${directory}/${file}`)
      .resize(1024, 768, { fit: "inside" }) // width, height
      .toFile(
        `${outputDirectory}/${file.substring(0, file.length - 5)}-small.webp`
      );
  } catch (error) {
    console.error(error);
  }
});

fs.readdirSync(directory).forEach((file) => {
  try {
    sharp(`${directory}/${file}`)
      .resize(1920, 1080, { fit: "inside" }) // width, height
      .toFile(
        `${outputDirectory}/${file.substring(0, file.length - 5)}-medium.webp`
      );
  } catch (error) {
    console.error(error);
  }
});

fs.readdirSync(directory).forEach((file) => {
  try {
    sharp(`${directory}/${file}`)
      .resize(4096, 2160, { fit: "inside" }) // width, height
      .toFile(
        `${outputDirectory}/${file.substring(0, file.length - 5)}-large.webp`
      );
  } catch (error) {
    console.error(error);
  }
});
