import fs from "fs";

const save = data => {
  fs.writeFile("answer.json", JSON.stringify(data), err => {
    if (err) throw err;
    console.log("O arquivo foi salvo...");
  });
};

export default save;
