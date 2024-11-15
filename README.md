#Manufac Assignment
This project was bootstrapped with Vite and utilizes TypeScript for development. It includes Mantine UI components and hooks, as well as other essential libraries for building and optimizing the app.

#Installation
To get started with this project, follow these steps:

Clone this repository to your local machine.

Open a terminal window and navigate to the project directory.

Run the following command to install the necessary dependencies:

yarn install

This will install all the required node modules as specified in the package.json file.


Here’s a well-structured version of your README file:

Manufac Assignment
This project was bootstrapped with Vite and utilizes TypeScript for development. It includes Mantine UI components and hooks, as well as other essential libraries for building and optimizing the app.

Table of Contents
Installation
Available Scripts
yarn install
yarn dev
yarn build
yarn preview
yarn lint
Dependencies
Project Structure
Development Workflow
License
Installation
To get started with this project, follow these steps:

Clone this repository to your local machine.

Open a terminal window and navigate to the project directory.

Run the following command to install the necessary dependencies:

bash
Copy code
yarn install
This will install all the required node modules as specified in the package.json file.

Available Scripts
In the project directory, you can run the following scripts:

yarn install
Installs all the dependencies specified in package.json.

yarn dev
Runs the app in development mode.

Open http://localhost:5173 in your browser to view it.
The page will reload when changes are made.
Linting errors will appear in the console.
yarn build
Builds the app for production.

Runs tsc to compile TypeScript files and bundles the app using Vite.
Optimizes the build for best performance and includes hashed filenames.
Once built, the app is ready to be deployed.

yarn preview
Serves the built app locally to preview the production version.

Test how the app will appear in production before deploying it.

yarn lint
Runs ESLint to check for linting issues in the code.

Make sure to fix any linting issues before committing your changes to maintain code quality.

Dependencies
The following dependencies are used in this project:

@mantine/core: A library of React components and hooks for building modern user interfaces.
@mantine/hooks: Additional hooks for managing UI state and behavior.
react: The core React library for building the user interface.
react-dom: The DOM-specific methods for React rendering.


Here’s a well-structured version of your README file:

Manufac Assignment
This project was bootstrapped with Vite and utilizes TypeScript for development. It includes Mantine UI components and hooks, as well as other essential libraries for building and optimizing the app.

Table of Contents
Installation
Available Scripts
yarn install
yarn dev
yarn build
yarn preview
yarn lint
Dependencies
Project Structure
Development Workflow
License
Installation
To get started with this project, follow these steps:

Clone this repository to your local machine.

Open a terminal window and navigate to the project directory.

Run the following command to install the necessary dependencies:

bash
Copy code
yarn install
This will install all the required node modules as specified in the package.json file.

Available Scripts
In the project directory, you can run the following scripts:

yarn install
Installs all the dependencies specified in package.json.

yarn dev
Runs the app in development mode.

Open http://localhost:3000 in your browser to view it.
The page will reload when changes are made.
Linting errors will appear in the console.
yarn build
Builds the app for production.

Runs tsc to compile TypeScript files and bundles the app using Vite.
Optimizes the build for best performance and includes hashed filenames.
Once built, the app is ready to be deployed.
yarn preview
Serves the built app locally to preview the production version.

Test how the app will appear in production before deploying it.
yarn lint
Runs ESLint to check for linting issues in the code.

Make sure to fix any linting issues before committing your changes to maintain code quality.
Dependencies
The following dependencies are used in this project:

@mantine/core: A library of React components and hooks for building modern user interfaces.
@mantine/hooks: Additional hooks for managing UI state and behavior.
react: The core React library for building the user interface.
react-dom: The DOM-specific methods for React rendering.
Development Dependencies
The following packages are used for development:

@eslint/js: ESLint configuration for JavaScript.
@types/react: Type definitions for React.
@types/react-dom: Type definitions for ReactDOM.
eslint: A linting tool for identifying and fixing issues in JavaScript and TypeScript code.
vite: A fast and modern build tool for JavaScript applications.
typescript: TypeScript compiler for transpiling .ts and .tsx files.
postcss: A tool for transforming CSS with JavaScript plugins.
postcss-preset-mantine: PostCSS preset optimized for Mantine components.
Project Structure
The project structure is as follows:

bash
Copy code
/src
  /assets          # Static assets like images, fonts, etc.
  /components      # React components for various parts of the UI
  /hooks           # Custom hooks for managing state and side effects
  /styles          # Global CSS or SCSS files
  /utils           # Utility functions and helpers
  /pages           # React components for different pages
  App.tsx          # Main application component
  index.tsx        # Entry point for React rendering
/vite.config.ts    # Vite configuration file
/package.json      # Project metadata and dependencies
/tsconfig.json     # TypeScript configuration file
/eslintrc.json     # ESLint configuration
Development Workflow
Follow this workflow to set up and work with the project:

Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
yarn install
Start the development server:

bash
Copy code
yarn dev
Open http://localhost:3000 to view the app in your browser.

Make changes to the code, and the app will automatically reload to reflect them.

Build the app for production when you're ready:

bash
Copy code
yarn build
Preview the production build:

bash
Copy code
yarn preview
Check for linting issues before committing:

bash
Copy code
yarn lint










#SCREENSHOTS

![image](https://github.com/user-attachments/assets/2cbedf96-6f4f-4edb-ba8f-6ca022b81a91)
![image](https://github.com/user-attachments/assets/062d2397-5c05-464f-b784-3284c30e35f9)







































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
