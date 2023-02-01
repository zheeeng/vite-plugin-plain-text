import { defineConfig } from "vite";
import plainText from "../src/index";

export default defineConfig({
  plugins: [
    plainText([/\/LICENSE$/, '**/*.text', /\.glsl$/], { namedExport: false, dtsAutoGen: true, distAutoClean: true }),
  ],
});
