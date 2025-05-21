---
title: 'Portfolio Website'
description: 'Making portfolio website'
pubDate: 'May 21 2025'
heroImage: '/portfolio-site/portfolio.jpg'
---

Hello, this is the first entry for my projects page!

----

### Intro

I wanted to create a portfolio site to highlight my work and honestly to replace my old one from 1st year of college.
For this website, I used Astro, a front-end framework that excels at generating static sites.
I chose this because I want to make a static website (free hosting on github.io) that is content-driven.
Astro allows me to write a simple markdown file and a template (.astro file) that applies to all my posts.

I started with the Astro-provided blog template.
So far, I have implemented a home page, navigation, social links, etc. Very basic UI stuff.
I also added reactJS for the [GitHub calendar component](https://www.npmjs.com/package/react-github-calendar).

This project is currently located on my [GitHub repo](https://github.com/ted0526/portfolio-site).

I want to document **all** my projects from 3D printing, web development, coursework, and more as well as maintain my resume. 

The resume tab is also written in markdown, which makes it extremely easy to export into any file format but I also have version history on my resume :) which is pretty cool.

---

### Tools

So far, here are the tools I've used:
- [AstroJS](https://astro.build/)
- [ReactJS](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React GitHub Calendar](https://www.npmjs.com/package/react-github-calendar)
- [@iconify/json](https://www.npmjs.com/package/@iconify/json)
    - [mdi](https://pictogrammers.com/library/mdi/)
    - [simpleicons](https://simpleicons.org/)
- [MDX](https://mdxjs.com/)/[MD](https://www.markdownguide.org/)

So overall, it is quite light-weight and extremely easy to deploy with Astro's built in GitHub support.

---

### Planned Features (TO-DO)

I want to add more functionality and UI tweaks as I develop the site further. I'm pretty happy with the state it is in right now, but as I add more content, I plan to implement some more things.

- Better file structure for images. Right now, they're all stored in my public directory, which works but it might be better to use an S3 bucket or atleast an actual directory structure.
- Along a similar vein, I would like to sort or tag each post by genre or tools used or smth like that.
    - Maybe a search tool like [Lunr.js](https://lunrjs.com/)
- Even though this site is designed for static performance in mind and I have no issues with deployment, I may want to connect an actual domain later.
- 404 Page
- Learn [Framer Motion](https://motion.dev/) for some more eye candy
