# KP Portfolio Website

A static multi-page portfolio website built for GitHub Pages.

## Pages included

- `index.html` — homepage
- `projects.html` — project grid with filters
- `project-anomaly-detection.html` — detailed case study page
- `about.html` — profile and skills
- `contact.html` — links and static email form
- `assets/styles.css` — full website styling
- `assets/script.js` — navigation, animations, filters and contact form

## How to use

1. Replace `KP` with your preferred display name if needed.
2. Replace placeholder project links with your GitHub repository links.
3. Replace contact placeholders:
   - `github.com/yourusername`
   - `linkedin.com/in/yourprofile`
   - `you@example.com`
4. Upload all files to a GitHub repository.
5. Go to **Settings → Pages**.
6. Set:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save.

Your site will be available at:

```text
https://yourusername.github.io/repository-name/
```

For a cleaner personal website URL, name the repository:

```text
yourusername.github.io
```

Then the website becomes:

```text
https://yourusername.github.io
```

## Editing project cards

Open `projects.html` and edit each `<article class="project-card">`.

Example:

```html
<article class="project-card" data-category="ml data">
  <h2>Your Project Name</h2>
  <p>Your project description.</p>
</article>
```

## Notes

This site has no build step. It works directly on GitHub Pages.
