---
to: packages/ui.<%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "lib",
    "declarationDir": "lib/types"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "__tests__", "lib"]
}
