import "dotenv/config";

import sha1 from "js-sha1";
import fs from "fs";
import { generateData, submitSolution } from "./services/challenge";
import decrypter from "./helpers/decrypter";
import save from "./helpers/save";

import FormData from "form-data";

const app = async () => {
  console.log("Iniciando...");
  //Fetch data, decrypte and encoding(sha1)
  const {
    data: { numero_casas, token, cifrado }
  } = await generateData();

  const decifrado = decrypter(cifrado, numero_casas);
  const resumo_criptografico = sha1(decifrado);

  //Save file
  const dataFile = {
    numero_casas,
    token,
    cifrado,
    decifrado,
    resumo_criptografico
  };

  save(dataFile);

  //Submit solution
  const data = new FormData();
  const file = fs.createReadStream("answer.json");
  data.append("answer", file);

  const {
    data: { score }
  } = await submitSolution(data);

  score === 100
    ? console.log(`Parabéns, o seu score é ${score}`)
    : console.log(`O seu score é ${score}`);
  console.log("Fim!");
};

export default app;
