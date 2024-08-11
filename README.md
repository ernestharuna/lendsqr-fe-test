# Lendsqr Frontend Test (Ernest Haruna)

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configurations](#configurations)
4. [Styling | Components](#stylings-components)
5. [App Structure](#structure)

## Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ernestharuna/lendsqr-fe-test.git
   cd lendsqr-fe-test
   npm install

## Configuration
Configure environment variables with API endpoint and API Key
1. VITE_API_BASE - https://...(your URL)
2. VITE_API_KEY - `If your end point requeires an API key`

## Styling | Components
1. Styliing classes and utilities
- There are no CSS-style libraries used for this project. 
- Component-specific styles start with the component name itself i.e., *component-name*-random-class-name
- Utility classes have class names similar to TailwindCSS.

2. Components
- All visual parts of the app are located ./components
- Reusable components have their styles located in ./index.scss

## App Structure
- Assets: Holds images, fonts, and SVG icons used all through the app
- Components: All visual components of the app reside here — this includes all shared components, pages, and layouts.
- HTTP: An instance of Axios and an interceptor can be found in the *interceptor.ts*. A class for fetching users is found within this folder. This allows for cleaner components and confines data fetching to this component.
- Utils: Reusable code pieces are exported from here, these include, a date formatted, and the nav bar structure.
