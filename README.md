#  Certificate Generator (Angular)

A simple Angular web application to generate, manage and download custom certificates as .png files. Certificates are stored locally in the browser using localStorage, so users can manage them without any backend or database.
Features

  - Create custom certificates with name, course/title and date.

  - Preview certificate in real time while typing.

  - Download certificate as a .png image.

  - Store certificates in the browser using localStorage.

  - Edit and delete previously created certificates.

  - Responsive layout, optimized for desktop and mobile.

Tech Stack

  - Framework: Angular

  - Language: TypeScript

  - Storage: localStorage (browser)

  - Styling: CSS

Live Demo

  -> Demo: https://seu-link-aqui.com

  -> Repository: https://github.com/teu-usuario/certificate-generator

Getting Started
Prerequisites

  - Node.js (LTS version recommended)

  - npm or yarn

  - Angular CLI installed globally:

bash
npm install -g @angular/cli

Installation

bash
git clone https://github.com/teu-usuario/certificate-generator.git
cd certificate-generator
npm install

Development server

bash
ng serve

Then open:

text
http://localhost:4200/

The app will automatically reload if you change any of the source files.
Production build

bash
ng build --configuration production

The build artifacts will be stored in the dist/ directory. You can deploy this folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).
How It Works

  - When a new certificate is created, its data (name, course, date, etc.) is saved as JSON in the browser’s localStorage.

  - The certificate preview is rendered on the page and can be exported as a .png using an HTML canvas–based approach (for example, with html2canvas or similar library).

  - On each page load, the app reads the saved certificates from localStorage and displays them in a list for quick management.

Project Structure (simplified)

text
src/
  app/
    components/
      certificate-form/
      certificate-preview/
      certificate-list/
    services/
      certificate.service.ts
  assets/
  index.html

  - certificate.service.ts – handles CRUD operations with localStorage.

  - certificate-form – form to create/edit certificates.

  - certificate-preview – visual preview of the certificate.

  - certificate-list – list of saved certificates.

Possible Improvements

Export certificates as PDF.

  1. Internationalization (i18n) for different languages.

License

This project is licensed under the MIT License – feel free to use and adapt it for your own projects.
