import chalk from "chalk";
import { suma, multiplica } from "./controller.js";

const sum1 = suma(1, 2);
const sum2 = suma(4, 5);
const mult = multiplica(sum1, sum2);

console.log(chalk.green(mult));
