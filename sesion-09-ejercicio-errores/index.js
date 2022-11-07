const logger = require("./logger");

const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  throw new Error("Este es un mensaje de error personalizado");
};

const numero = "8";

try {
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  console.error(`El valor de e es: ${e}`);
  logger.error("Este es un mensaje de error personalizado - logger");
}
