# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DailyVal-Website is a static website for the DailyVal mobile application, a Valorant companion app. The site is built using vanilla HTML, CSS, and JavaScript and deployed via GitHub Pages.

## Architecture

This is a simple static website with the following structure:

- **docs/**: Contains all website files (GitHub Pages serves from this directory)
  - **index.html**: Main landing page showcasing the DailyVal app
  - **support.html**: Support and contact page
  - **404.html**: Custom 404 error page
  - **tos.html**: Terms of Service page
  - **privacy-policies.html**: Privacy Policy page
  - **style.css**: Main stylesheet with responsive design
  - **script.js**: JavaScript for mobile navigation toggle
  - **images/**: App screenshots, icons, and assets
  - **_config.yml**: Jekyll configuration for GitHub Pages

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6)
- **Styling**: Custom CSS with Google Fonts (Inter, Noto Sans JP)
- **Icons**: Unicons icon library
- **Deployment**: GitHub Pages with Jekyll
- **Language**: Primarily Traditional Chinese content

## Development Workflow

Since this is a static site deployed via GitHub Pages:

1. **No build process**: Direct HTML/CSS/JS editing
2. **No package manager**: No npm, yarn, or similar tools
3. **No testing framework**: Manual testing in browsers
4. **Deployment**: Automatic via GitHub Pages when pushing to main branch

## Key Features

- **Responsive Design**: Mobile-first approach with responsive navigation
- **App Store Integration**: Direct links to iOS App Store
- **Social Media Links**: Instagram and Threads integration
- **SEO Optimized**: Meta tags for Open Graph and Twitter Cards
- **Multilingual**: Traditional Chinese primary language

## Contact Information

- **Support Email**: support@dailyval.com
- **App Store**: https://apps.apple.com/tw/app/dailyval/id1637782901
- **Social**: @dailyval_official on Instagram and Threads

## Common Tasks

Since this is a static site, common tasks include:

- **Edit content**: Modify HTML files directly in docs/
- **Update styling**: Edit docs/style.css
- **Add functionality**: Modify docs/script.js
- **Update images**: Replace files in docs/images/
- **Test changes**: Open HTML files in browser or use local server