[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Add new package

`npx lerna create @ekidpro/ui.<project_name>`

# Add dependencies for package

`yarn workspace @ekidpro/ui add react`

# Add dependencies to all packages

`yarn add -W --dev typescript prettier eslint`

# Start new package with current template

`yarn new-package`

# Build all packages

`yarn build`

# Release ( all packages will be built before they can submit to npmjs.com )

`yarn publish`


# add dependencies for package

`npx lerna --scope @ekidpro/<package_name> <yarn command>`

For example:

`npx lerna --scope @ekidpro/ui.button add axios`

`npx lerna --scope @ekidpro/ui.button add -D @types/abcxyz`