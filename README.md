# skya-project.website
the skya-project game website's frontend-part repository now is PUBLIC !

<p align="center">
    <image align="center" src="https://raw.githubusercontent.com/Gulfy034/skya-pjt-web/master/public/imgs/SKYA_web_Welcome.svg"/>
</p>

## File trees description

- ./src
  - routes (pages router)
  - styles (styles for components)
    - shared (shared styles)
  - main.tsx (entry)


- ./components
  - shared (reuseable components)

- ./hooks (Custom react hooks)

- ./tests (Custom vitest test sections)

- ./public
  - fonts (opensource fonts with license files)
  - imgs (svg or png)
  - locates (translation files, **!symbolic! zh -> zh_CN as default**)
  - models (gltf models for threejs)
  - sfx (sound effects)

- ./functions (cloudflare pages functions)
- ./worker (cloudflare workers)

## Build and Run

1. Build & Run Preview:

   Make sure you have installed node(v18.0.0 or above) and its package manager. Clone and `cd` to the repository root, run `npm i && npm run build`. When it built successfully, run `npm run preview`, and then open a browser to access `localhost:4173`.

2. Run Dev:
  
   After `npm i && npm run dev`, and then open a browser to access `localhost:5173`.

## Notes

1. the whole website frontend part was built by vite, based on vite template "react-swc-ts".

2. do not use deno (another node package solution) because there's a issue of using SWC instead of babel.

3. Very unstable now, please do not as a learning example.

## License

1. The website codes(including html files, style files, components files, translation files) **don't have License**. And because of that, **no modify-and-republish or copy-and-republish without author's permission**, and also **not in commercial use**. You can clone this repository and run locally, create a issue or a discussion of this website repository.

2. Some elements or sprites were licensed under **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**. It's not allowed to use some elements(including the game logo, character avatars, character voice files, character 3d models, etc.) in COMMERCIAL USE with the copyright. But you can share and adapt/modify as fan-made stuff or in other non-commercial activities.