---
to: packages/ui.<%= name %>/rollup.config.js
---
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const globals = {
  ...packageJson.devDependencies,
};

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs", // commonJS
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: { module: "es2015" },
        exclude: ["**/*.stories.*"],
      },
    }),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),
    terser(),
  ],
  external: Object.keys(globals),
};
