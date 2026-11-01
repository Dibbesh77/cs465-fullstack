# CS 465 — Module One: Travlr Getaways

This is the **Module One Express website shell**, based on the provided `travlr.zip` mockup and SNHU **CS 465 Full Stack Guide**, pages 61–75. The original seven HTML pages, stylesheet, and images live in the `public/` folder, which is served by Node.js and Express.

## Folder structure

```
travlr/
├── app.js                 Express application and static-file configuration
├── bin/www                HTTP server, port 3000 by default
├── package.json           npm dependencies and commands
├── .gitignore             Git exclusions, including node_modules
├── public/
│   ├── index.html         Home page
│   ├── travel.html        Other supplied pages
│   ├── rooms.html
│   ├── meals.html
│   ├── news.html
│   ├── about.html
│   ├── contact.html
│   ├── css/style.css      The supplied pages expect css/style.css
│   ├── images/            Images from the supplied ZIP
│   └── javascripts/
├── routes/                Express Generator-style routes
├── views/                 Handlebars templates for Module Two
└── scripts/               Lightweight validation scripts
```

## Run on your Mac

1. Install the **LTS Node.js** version at <https://nodejs.org/en/download> if needed, then confirm in **Terminal**:

   ```bash
   node -v
   npm -v
   git --version
   ```

2. Unzip `CS465_Module_One_Travlr_Express.zip` in Downloads. Open Terminal and run:

   ```bash
   cd ~/Downloads/travlr
   npm install
   npm run check
   npm start
   ```

   If you unzipped into a different folder, replace `~/Downloads/travlr` with its location. `npm install` requires an Internet connection the first time. Leave the Terminal window running.

3. Open **<http://localhost:3000>** in your browser. Confirm that you see the styled **Travlr Getaways** website (not an unstyled page and not the default "Express" welcome page). Test the **Travel**, **Rooms**, **Meals**, **News**, **About**, and **Contact** links.

4. Open a **second** Terminal and run:

   ```bash
   cd ~/Downloads/travlr
   npm run test:server
   ```

   It should print PASS for each site resource. For a basic server check also visit **<http://localhost:3000/health>**.

5. Take your own **real browser screenshot**. Show the Travlr homepage loaded at `http://localhost:3000` and the address bar visible. On Mac, press **Shift-Command-4** to select an area, or **Shift-Command-3** for the whole screen. Name the file `CS465_Module1_Express_Screenshot.png`. The screenshot must show **your running Express application**, not a mockup or preview image.

## Put the files in GitHub on the `module1` branch

The assignment requests that you **clone your GitHub repository**, update `.gitignore`, create a branch named `module1`, and push your work. Do this on **your computer**, using the GitHub repository you created for CS 465.

If your CS 465 GitHub repository already exists:

```bash
cd ~/Documents
git clone https://github.com/YOUR_USERNAME/cs465-fullstack.git
cd cs465-fullstack
git switch -c module1
```

The clone URL and folder may differ; copy the actual **HTTPS clone URL** from your GitHub repo. If the repository already exists locally, `cd` to the existing clone instead and make sure you haven't already created a `module1` branch. Copy **the contents of `travlr/`**, not the outer `travlr` folder, into the root of that cloned repository (you can do this in Finder; preserve the hidden `.git` directory and any existing repository files). Then:

```bash
npm install
npm run check
npm start
```

After checking the site in the browser and taking the screenshot, run the following in the cloned Git repository directory (not your stand-alone Downloads copy):

```bash
git status
git add .
git commit -m "Baseline Express Website - static only"
git push --set-upstream origin module1
```

**Important:** Git needs `user.name` and `user.email` configured to commit. If prompted, use `git config user.name "YOUR NAME"` and `git config user.email "YOUR GITHUB EMAIL"`. You must authenticate with GitHub if prompted and invite your instructor as requested by the course. Do not include `node_modules/` in Git or your submission ZIP.

## What to submit in Brightspace

1. **Website ZIP** — the provided `CS465_Module_One_Travlr_Express.zip` contains your website folder and Node/Express source. It intentionally excludes `node_modules`; the grader can run `npm install` to get dependencies.
2. **Actual screenshot** — `CS465_Module1_Express_Screenshot.png`, taken *on your machine with Express running*.
3. **GitHub requirement** — confirm the `module1` branch is pushed to your course repository. Follow any additional instructor instructions about supplying a URL.

**Rubric:** functionality **33**, architecture **33**, testing **34**.

## Notes

- This assignment serves **static HTML through Express**. MongoDB, an API, dynamic Handlebars, and Angular belong to later modules and should not be added prematurely.
- To match paths in the supplied HTML, the CSS is stored under **`public/css/style.css`** (not `public/stylesheets/style.css`), as explained on guide page 71.
- Two links in the supplied homepage pointed to files that were not included in `travlr.zip` (`dives.html` and `foods.html`). They have been corrected to point to the supplied `travel.html` and `meals.html` pages. The supplied layout, images, and stylesheet are otherwise preserved.
- If port 3000 is occupied, stop the other server using it, or run `PORT=3001 npm start` and test at `http://localhost:3001` with `PORT=3001 npm run test:server`.
