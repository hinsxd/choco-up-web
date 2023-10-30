# ChocoUp Website clone

A clone of the [Choco Up](https://choco-up.com/) website, made with Next.js and TailwindCSS.

# Introduction

This website is built with Next.js v14 (App router) and TailwindCSS. The data is not really dynamic so it can probably be built with Static Site Generation (SSG).

# How to deploy/develop

## tl;dr (the Vercel way)

1. Fork the repo
2. Add new project in vercel
3. Connect the repo to vercel
4. Done

## Start the development server

```bash
$ npm run dev
```

## Build for production

```bash
$ npm run build
$ npm run start # to start the production server
```

## Deployment

https://nextjs.org/docs/app/building-your-application/deploying

# Techs Used

- Next.js (v14 App router)
- TailwindCSS
- ESLint
- Prettier
- ESLint TailwindCSS Plugin
- [class-variance-authority](https://cva.style/)
- husky
- link-staged

## Explanation

Eslint and Prettier are used to enforce code style and formatting. I also added a TailwindCSS plugin for eslint to make sure that the TailwindCSS classes are sorted correctly.

Prettier rules are integrated into eslint so that we can use `eslint --fix` to fix the formatting errors. This might not be the best practice, but I like it. Let me know if you have a better solution.

In case someone did not use the plugin, I also added a pre-commit hook to fix the eslint errors.

# Philosophy

The code base is meant to be production-ready and developed with the following principles in mind:

- **Scalability**
- **Readability**
- **Maintainability**

As an experiment, I added an eslint rule "max-lines" to make sure that my files are small and readable. Each files should be less than 150 lines of code. Anything beyond that _should_ be refactored into smaller components.

# Development Guidelines

This is a company website, and everything should be kept as simple as possible. For static data, utilize React Server Component rather than using a query library like `react-query` or `@tanstack/react-query` or `swr`.

Client side library like `framer-motion` is fine when necessary, but try to keep the website JS bundle as small as possible.

# Folder structure (./src)

## `app/layout.tsx`

The entry of Next.js' App router. `layout.tsx` contains the global styles and the layout of the app, including the Navbar and Footer.

## `app/page.tsx`

The page component of the home page (index page). In my opinion, the `page.tsx`s should be as small as possible, and should only contain the layout of the page. The content and blocks of the page should be in the `components` folder.

## `components`

The components of the app. The components are grouped by their usages. I don't have too much to explain here, I think the folder structure is pretty self-explanatory. When some component become being used by multiple components, I will move them to a top level folder or something called `common`.

## `data`

This folder stores the api calls and types of the data used in the app. As these functions are abstracted from the components, they can be easily replaced by other API calls, e.g. from other backends.

One thing I want to point out is type-safety. Normally if I were to be fullstack developer, I would definitely have an OpenAPI or GraphQL schema so that every function call can be generated from the schema. For the time being, we are consuming a consistent API so I just created a `types.ts` file to store the types of the data.

I noticed that `dummyJson` can allow us to select fields to be included in the response, so I think it's a better to cater for type-correctness in this circumstance. The function `getUsers` is a generic function which you can pass `select` as a parameter to select the fields you want to include in the response. The `select` parameter is a string array, and the function will return a type of `User[]` with the fields you selected.

## `src/hooks`

This folder stores the custom hooks used in the app. I only have one custom hook `useClickAway` which is used to hide the menus when clicking outside of the menu.

```
src
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Footer
│   │   └── index.tsx
│   ├── Home
│   │   ├── Hero.tsx
│   │   ├── SuccessStory.tsx
│   │   ├── Testimonials
│   │   │   ├── Slide.tsx
│   │   │   ├── Slider.tsx
│   │   │   └── index.tsx
│   │   ├── Unlock.tsx
│   │   ├── bullet.png
│   │   ├── hero.png
│   │   ├── unlock.webp
│   │   └── videoPreview.webp
│   ├── Navbar
│   │   ├── DesktopMenu.tsx
│   │   ├── GetFundedButton.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── index.tsx
│   │   └── navItems.ts
│   ├── Overlay
│   │   └── index.tsx
│   ├── Providers.tsx
│   └── icons
│       ├── facebook.svg
│       ├── linkedin.svg
│       ├── logo.svg
│       └── logo_white.svg
├── data
│   ├── index.ts
│   └── types.ts
└── hooks
    └── useClickAway.tsx
```

# Final thoughts

It was quite difficult to write this README.md because the structure is pretty simple and I don't have much to write.

## Type-safety

However, `type-safety` is something that I really want to stress on because Typescript and the related tools are the future in my opinion. I cannot imagine consuming some API without type definitions at all. Ambiguity and uncertainty are the last things I want to see in my code base.

## The Slider component

One big challenge in this project was the `Slider` component. I think it's a waste to install a package for a simple slide so I decided to implement my own solution.

It turns out that it was not that difficult!

```
When a slide is active, render two more slides on each side so as to achieve the infinite loop effect.
```

This requirement seems only to be achievable with a package, but it's actually not that difficult to implement. I think this is a good example of how we can achieve a lot with a little bit of creativity.

## Avoiding "Feature Creep"

When developing this clone, I sometimes feel that I want to include more fancy features to prove myself, for example, menu animations and dragging of the slider. However, I think it's important to get the core features first, rather than spending too much time on those nice-to-have features.
