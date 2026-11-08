# CS 465 Module Two - Travlr Getaways MVC Routing

Builds on the provided Module One Travlr Express website, using the SNHU
*CS 465 Full Stack Guide*, **Module 2: MVC Routing (pages 76-88)**.

## What changed

- `app_server/controllers/main.js`: controller for the home-page fallback.
- `app_server/controllers/travel.js`: controller rendering the Travel view.
- `app_server/routes/index.js`, `app_server/routes/travel.js`, and
  `app_server/routes/users.js`: Express routing separated from controllers.
- `app_server/views/travel.hbs`: converted from the provided `travel.html`.
- `app_server/views/partials/header.hbs` and `footer.hbs`: common navigation
  and footer extracted from the travel page with `{{> header }}` and
  `{{> footer }}` directives.
- `app_server/views/layouts/layout.hbs`: original Express layout relocated,
  as shown in the guide; the Travel view retains its own complete HTML shell.
- `app.js`: `views` path updated; `hbs` partials registered; `/travel` router
  mounted. Static pages, styling, and original images remain available.
- Navigation links to the Travel page now target `/travel` so they exercise
  the MVC route rather than the static `/travel.html` file.

## Folder layout

```text
travlr/
├── app.js
├── app_server/
│   ├── controllers/
│   │   ├── main.js
│   │   └── travel.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── travel.js
│   │   └── users.js
│   └── views/
│       ├── layouts/layout.hbs
│       ├── partials/header.hbs
│       ├── partials/footer.hbs
│       ├── index.hbs
│       ├── error.hbs
│       └── travel.hbs
├── bin/www
├── public/ (original HTML pages, CSS, images)
├── scripts/ (checks and tests)
└── package.json
```

## Start on your Mac

Open Terminal in the existing local Git project and create the required
branch **before applying Module Two changes**:

```bash
cd ~/Desktop/travlr
git switch module1
git switch -c module2
```

Copy the updated project files into that directory, preserving `.git`.
(If using the provided ZIP downloaded to Downloads, one method is:
`unzip -o ~/Downloads/CS465_Module_Two_Travlr_MVC.zip -d ~/Desktop`.)
Since unzipping does not delete old directories, remove the **now relocated**
top-level `routes` and `views` folders from this new Git branch:

```bash
git rm -r routes views
```

Then run:

```bash
cd ~/Desktop/travlr
npm install
npm run check
npm start
```

Open **http://localhost:3000/travel**. The page should show the *Travel*
heading, Gale Reef, Dawson's Reef, Claire's Reef, the styled navigation,
and the original footer.

Run these checks in another Terminal while the server is running:

```bash
cd ~/Desktop/travlr
npm run test:mvc
npm run test:server
```

For the submission, capture your own screenshot showing the browser at
`localhost:3000/travel` alongside the Terminal displaying a working server.

## Push the Module Two branch

```bash
cd ~/Desktop/travlr
git status
git add .
git commit -m "Module Two MVC routing and Handlebars templates"
git push -u origin module2
```

Submit the updated project ZIP in Brightspace. **Do not submit a Git repo's
`.git` directory or `node_modules`;** those are intentionally omitted from
the ZIP. JSON-driven trip rendering is introduced in **Module Three**, so
this Module Two project retains the supplied trip content in the HBS view.
