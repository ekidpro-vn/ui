---
to: packages/ui.<%= name %>/package.json
---
{
  "name": "@ekidpro/ui.<%= name %>",
  "version": "0.0.0",
  "description": "> TODO: description",
  "author": "lamlv <lam.luongvan2305@gmail.com>",
  "homepage": "",
  "license": "ISC",
  "main": "lib/index.js",
  "module": "lib/index.es.js",
  "types": "lib/types/index.d.ts",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "build": "rollup -c",
    "storybook": "start-storybook -p 6006"
  }
}
