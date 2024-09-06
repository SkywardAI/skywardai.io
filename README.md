# SkywardaAI Homepage
This is the homepage for skyward AI, deployed on `Cloudflare`.  
Find deployed application here: [https://skywardai.pages.dev](https://skywardai.pages.dev)

## Cross-platform AI Chat
Try our AI chat feature on [https://skywardai.pages.dev/chat](https://skywardai.pages.dev/chat).  
This requires you to download a 368MB model on the first time. You can delete it anytime you want.

## Development
This project is built by [Vite+React](https://vitejs.dev/guide/)  
Packages are managed by `pnpm`, but you can install depedencies use your prefer package manager.  
  
To build and run in `dev` environment, please run
```sh
pnpm install
npm run dev
```
To preview the production build, please run
```sh
npm run preview
```
## Deploy
> _`Github Pages` doesn't support adding custom headers after deploy, this will affect on some features, so please avoid use it._  
  
### Cloudflare
* Please prepare your own Cloudflare account.
* Go to your dashboard and select `Workers & Pages`.
* Select `create`, under `Create an application` please select `Pages`.
* Select `Connect to Git`.
* Connect to your Github Account and allow it to access your project / forked project.
* For `build command` please enter `npm run build`.
* For `Build output directory` please enter `dist`.
* Finish setup following the instructions, Cloudflare will deploy your application automatically and on you updated the selected branch.
* You can check your deployed application using the domains it provided.