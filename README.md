# Cinema Showtimes

![example workflow](https://github.com/cinema-showtimes/cinema-showtimes.github.io/actions/workflows/main.yml/badge.svg)
![example workflow](https://github.com/cinema-showtimes/cinema-showtimes.github.io/actions/workflows/chromatic.yml/badge.svg)

This site shows all the films you can currently book for Odeon BFI IMAX.

## Pre-requisites

You will need to install Node and you can do so by following instructions here: https://nodejs.org/en/download/

## Install the app

Run the following command in your terminal of choice: `npm install`

## Running the app

Run the following command in your terminal of choice: `gatsby develop`

This will be available on http://localhost:8000

## Storybook

Run the following command in your terminal of choice: `npm run storybook`

This will be available on http://localhost:6006

## Storybook notes (MDX)

The Storybook build in this repo currently excludes `.mdx` files from the stories glob. That was done to avoid an MDX indexer mismatch during the build (Storybook attempted to index `.mdx` files but the local package/dependency layout didn't provide a matching indexer). If you need MDX stories enabled again, follow one of these options:

- Quick re-enable (low-risk): Remove the exclusion in `.storybook/main.js` by restoring the MDX glob entry in `stories`. This may immediately reintroduce the "No matching indexer found for ... .mdx" error if the MDX toolchain isn't installed.
- Full MDX support (recommended for long-term): Upgrade Storybook and related MDX packages as a single coordinated change so the MDX indexer is present. This typically involves bumping Storybook-related packages in `package.json` (docs, mdx, mdx2-csf, related addons) and running `npm install` to ensure a consistent toolchain. If you'd like, I can produce an upgrade plan and apply it in a separate branch.

If you want me to re-enable MDX now, tell me which option you prefer (quick re-enable or full MDX upgrade) and I'll proceed with the chosen plan.
