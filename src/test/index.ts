import { Colorful } from '../lib/colorful';

console.log(Colorful.bold(Colorful.fg.red("Hello " + Colorful.bg.cyan("world"))) + ", goodbye");