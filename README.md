# Lendsqr Frontend Test (Ernest Haruna)

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Features](#features)
3. [Installation](#installation)
4. [Configurations](#configurations)
5. [Styling | Components](#stylings-components)

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
1. Styliing classes and unitilities
- There are no CSS style libraries used for this project. 
- Component specific styles start with the component name itself i.e., *component-name*-random-class-name
- Utility classes have class names similar to TailwindCSS.

2. Components
- All visual parts of the app are located ./components
- Reuseable components have thier styles located in ./index.scss
