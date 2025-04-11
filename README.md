# skya-project.website
skya-project website frontend repo now is PUBLIC !

<p align="center">
    <image align="center" src="https://raw.githubusercontent.com/Gulfy034/skya-pjt-web/master/public/imgs/SKYA_web_Welcome.svg"/>
</p>


> [!TIP]
> do not use deno to dev/build on purpose!
>
> ~~i am sure it will ruin your life with SWC if you use it incorrectly~~

## Run locally

1. make sure your npm version >= 10 , to check your npm verion, use `npm --version`
use `npm i` to get the package cache, and `npm run dev` to run it locally.

2. open your browser to access localhost:5173.

## Build

1. use `npm run build` directly.

2. browser access localhost:4173.

## File trees description

### Only notes the important parts.

- src
  - routes (pages router)
  - styles (styles for components)
    - shared (shared styles)
  - main.tsx (entry)


- components
  - shared(components need)


- public
  - fonts (opensource font with licenses)
  - imgs (images)
  - locates (translation files)
  - models (gltf threejs)
  - sfx (sound effects)
  - theatre (json animation files for threejs)


## Notes

the whole website frontend part was built by vite, based on vite template "react-swc-ts".
do not use deno (another node package solution) because there"s a issue of using SWC instead of babel.