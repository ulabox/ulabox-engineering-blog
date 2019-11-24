# Ulabox Engineering Blog

👋 Hello! Welcome to the **Ulabox Engineering Blog**. This blog is built with
[Gatsby.js](https://www.gatsbyjs.org) and deployed automatically with [Netlify](http://netlify.com).

## Cheatsheet

| Description           | Command          |
| --------------------- | ---------------- |
| Install dependencies  | `yarn install`   |
| Start development env | `yarn run start` |
| Build site            | `yarn run build` |
| Serve site            | `yarn run serve` |
| Clean cache           | `yarn run clean` |
| Run tests             | `yarn run test`  |

## Writing a post

To write a new post you should:

1. Create a git branch.
2. Create a new directory inside of [`src/pages/blog`](./src/pages/blog). Use [`kebab-case`](https://en.wiktionary.org/wiki/kebab_case) on the directory name. This name defines the URL of the post.
3. Inside of the directory you created, add an `index.md` file.
4. Use [Markdown](https://guides.github.com/features/mastering-markdown/) to write the post.
5. Once finished submit a **pull request** to preview the post and pass the CI.
6. Finally after your PR is approved merge it :rocket:
