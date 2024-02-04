# Spotify Clone with Astro

## 📝Description
This repository contains a clone of the popular music service Spotify built using Astro, a modern front-end site generator that offers incredibly fast performance. It is an educational tool designed for those interested in learning how modern web applications are built using Astro.

## 🛠️ Stack

#### This project was created with:
- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://www.npmjs.com/package/zustand)
- [Shadcn](https://ui.shadcn.com/)
- [clsx](https://www.npmjs.com/package/clsx)

### 🚀 Setup
1. Clone this repository:
   https://github.com/juedsay/spotify-astro-clone.git
   
2. Navigate to the project folder:
   `cd spotify-astro-clone`

3. Install the dependencies:
   `npm install`

4. Run the project:
   `npx astro dev`

Visit `http://localhost:4321` in your browser to see the application in action.

## 🗂️ Project Structure

Inside of this project, you'll see the following folders and files:

```
└── 📁spotify-astro-clone
    └── 📁.astro
    └── astro.config.mjs
    └── package-lock.json
    └── package.json
    └── 📁public
        └── favicon.svg
        └── 📁fonts
        └── 📁music
    └── 📁src
        └── 📁components
            └── AsideMenu.astro
            └── Card.astro
            └── CardPlayButton.jsx
            └── MusicsTable.astro
            └── Player.jsx
            └── PlaylistItemCard.astro
            └── SideMenuCard.astro
            └── SideMenuItem.astro
            └── Slider.tsx
        └── 📁icons
            └── Home.astro
            └── Library.astro
            └── Pause.astro
            └── Play.astro
            └── Search.astro
            └── Time.astro
        └── 📁layouts
            └── Layout.astro
        └── 📁lib
            └── colors.ts
            └── data.ts
        └── 📁pages
            └── 📁api
                └── get-info-playlist.json.js
            └── index.astro
            └── 📁playlist
                └── [id].astro
        └── 📁store
            └── playerStore.js
    └── tailwind.config.mjs
    └── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🫱🏼‍🫲🏼Contributions
Contributions are always welcome. If you encounter any issues or have any suggestions, feel free to open an issue or submit a pull request.

## 🔑 Licencia
This project is licensed under the MIT [LICENSE](LICENSE) - Created by [Julian Simón](https://www.linkedin.com/in/juedsay/).

## ✅ To-Do...
- [ ] Fix bugs
- [ ] There are still many things left to do...
