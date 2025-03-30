# skya-project.website
A offical website repo now PUBLIC !

> [!TIP]
> do not use deno to dev/build on purpose!
>
> ~~i am sure it will ruin your life with SWC if you use it incorrectly~~

## Run locally
1. make sure your npm version >= , to check your npm verion, use `npm`
use `npm i` to get the package cache, and `npm run dev` to run it locally.

2. open your browser to access localhost:5173.

## Build
1. use `npm run build` directly.

2. browser access localhost:4173.

## Notes
the whole website was built by vite, based on vite template "react-swc-ts".
do not use deno (another node package solution) because there's a issue of using SWC instead of babel.