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


- ./public
  - fonts (opensource fonts with license files)
  - imgs (svg or png)
  - locates (translation files)
  - models (gltf models for threejs)
  - sfx (sound effects)

- ./functions (cloudflare pages functions)

## Notes

the whole website frontend part was built by vite, based on vite template "react-swc-ts".
do not use deno (another node package solution) because there"s a issue of using SWC instead of babel.

## License

Mixed Licenses:

1. The website codes(including html files, style files, components files, translation files) **don't have License**. And because of that, this is just a public repository that you're had been only allowed to check the code resources in it. No modify-and-republish or copy-and-republish without author's permission, and also not in commercial use.

2. Some elements or sprites were licensed under **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**. It's not allowed to use some elements(including the game logo, character avatars, character voice files, character 3d models, etc) in COMMERCIAL USE with the copyright. But you can share and adapt/modify as fan-made stuff or in other non-commercial activities.