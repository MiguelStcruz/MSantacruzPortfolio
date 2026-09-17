# Miguel Santacruz — Game Programmer Portfolio


A dependency-free, single-page portfolio built with semantic HTML, CSS, and vanilla JavaScript. It works by opening `index.html` and is ready for GitHub Pages.

## Run locally

Open `index.html` in a browser. No build step is required.

For a local web server, use any static server you already have, for example:

```powershell
npx.cmd serve .
```

The direct-file version remains the supported baseline.

## Replace personal information

Search the project for these markers:

- `[PLACEHOLDER]`
- `[CONFIRM]`
- `[Graduation year]`
- `[Year]`
- `[add URL]`
- `your-domain.example`

Update the name, biography, timeline, skills, SEO description, canonical URL, and Open Graph image in `index.html`. Remove any unverified technology or experience before publishing.

## Add or edit projects

Open `js/script.js` and edit the `projects` array. Each object controls one project card and its case-study modal:

```js
{
  title: 'Your Game Title',
  description: 'One clear sentence about the game.',
  role: 'Gameplay Programmer',
  engine: 'Unity',
  language: 'C#',
  teamSize: '4',
  duration: '12 weeks',
  contributions: ['Player controller', 'Combat system'],
  overview: '…',
  challenge: '…',
  implementation: '…',
  result: '…',
  learned: '…',
  code: `// A short, readable snippet`,
  image: 'assets/images/your-project.webp',
  video: 'https://…',
  github: 'https://github.com/…',
  itch: 'https://….itch.io/…',
  trailer: 'https://…'
}
```

Copy an existing object to add another project. The layout renders all entries automatically.

## Add project images and videos

Put optimized images in `assets/images/` and videos in `assets/videos/`.

- Prefer WebP or AVIF images around 1600 px wide.
- Keep each image reasonably small and include a descriptive project title.
- Prefer a poster image and a user-initiated video over autoplay.
- Set the project `image`, `video`, and `trailer` values in `js/script.js`.

The current technical artwork is a lightweight CSS placeholder. When an `image` path is added, it is rendered with explicit dimensions and lazy loading.

## Configure GitHub Pages

1. Create a GitHub repository and push this folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Replace `your-domain.example` in `index.html` with the published URL.

## Customize colors

Edit the custom properties at the top of `css/styles.css`. The main tokens are `--bg`, `--surface`, `--text`, `--muted`, `--accent`, and `--accent-bright`. Recheck contrast after changing them.

## Customize social links

Update the email, GitHub, LinkedIn, and Itch.io references in `index.html`. Project-specific links live in the `projects` array in `js/script.js`.

## Project structure

```text
.
├── index.html
├── css/styles.css
├── js/script.js
├── assets/
│   ├── images/
│   ├── videos/
│   └── icons/favicon.svg
└── README.md
```
