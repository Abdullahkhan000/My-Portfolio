# Abdullah Ibrahim — Portfolio

A cinematic developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and a lightweight Canvas ambience layer.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

All external links, featured projects, technologies, services, and resume content live in `data/portfolio.ts`. Replace placeholder values there without editing individual section components.

Project imagery can use either a local path from `public/` (recommended) or a remote URL. Add the value to the relevant project object's `image` property in `data/portfolio.ts`. New projects use the same typed `Project` shape and are rendered automatically when added to the `projects` array.

The profile image slot is centralized in `portfolioImages.profile` in the same file. External destinations are centralized in `portfolioLinks`; placeholder destinations intentionally remain disabled until replaced.

Recommended local image setup:

- Profile: add `public/images/profile.webp`, then set `portfolioImages.profile` to `"/images/profile.webp"`.
- Project image: add the optimized file under `public/images/projects/`, then set that project object's `image` value to its `/images/projects/...` path.

To add a project, copy one typed object inside the `projects` array and replace its content, links, image, featured state, and year. The carousel and navigation dots update automatically.
