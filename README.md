# MicroSaaS

MicroSaaS

## First Steps

### Introduction

### Showing the Finished Project

### Create Next App

- Create the [Next.js](https://nextjs.org/docs/app/api-reference/cli/create-next-app) project:

```sh
npx create-next-app@latest
```

- Start the project:

```sh
npm run dev
```

- Clean the project:

```sh
rm app/favicon.ico
rm public/*
```

### Configure the Tailwind Style Guide

- [Figma](https://www.figma.com/design/mYIvARKWiAF7TQSik9xxqP/Project-in-bio?node-id=0-1&p=f&t=Fv6qZaRo8qvUPI2e-0)

### Create a Repository on Github

## LP Interface and Inner Pages

### Hero Section Start

```sh
npm i tailwind-merge
npm i clsx
```

### Create the Button component

### Create the input components

### Hero Section continuation

```sh
npm i lucide-react
```

### Total Visits component

### Finish the Hero Section

### Create the Header component

### Create the Video and Prices Sections

### Finish the Landing Page

### Create Link Page

### Create the Dashboard interface

### Create the Upgrade page Interface

## External Providers

### Firebase Explanation

- [Firebase](https://firebase.google.com/)

- [Firebase / Console](https://console.firebase.google.com/)

- 1. Click in the "Create a Firebase project" button
- 2. Insert the project name then click the "Continue" button
- 3. Wait the loader then click the "Continue" button
- 4. In the Overview page, click in the "Cloud Firestore" button
  - 4.1. Click on the "Create Database" button
  - 4.2. Select the database location in the Select list then click the "Next" button
  - 4.3. Select the "Production mode" then click the "Create" button
- 5. In the Overview page, click in the "Storage" button
  - 5.1. Click on the "Make Project Upgrade" button
  - 5.2. Click on the "Create a Cloud Billing Account" button
  - 5.3. Add the Credit Card Info
  - 5.4. Define a monthly budget
  - 5.5. Click on the "Link with Cloud Billing Account" button
  - 5.6. Click on the "Finish" button
- 6. Click on the "Gear" icon then click on "Project Settings" button
- 7. Click on the "Services Accounts" tab
- 8. Click on the "Generate new private key" button then dloanlod the JSON file

- [Base64 Decode](https://www.base64decode.org/)

### Init Firebase in the App

```sh
npm i firebase-admin
```

### Init the authjs in the app

- [Auth.js](https://authjs.dev/)

```sh
pnpm add next-auth@beta
pnpm add @auth/firebase-adapter firebase-admin@12.6.0
```

### Google config and add authentication

- [Google OAuth Configuration](https://console.developers.google.com/apis/credentials)

## Create Bio and Project

### Create Link

### Component: Modal and get project data

### Create Project modal styles

### Finish the Create Project modal

```sh
pnpm i browser-image-compression
```

### List the projects

### Add Social Networks

### Social Networks Buttons

### Add Customized Links

### Edit Profile Data

## Add Stripe and Adjustments

### Add page Views and Clicks

### Fix the components in the Landing page

### Configure the Stripe Keys

- [Stripe](https://stripe.com/en-jp)

Login

```sh
stripe login
```

Forward events to the webhook (generate the weebhook secret):

```sh
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Create the Stripe checkout

```sh
pnpm i stripe
pnpm i @stripe/stripe-js
```

- Test Credit Card: 4242 4242 4242 4242

### Lifetime Checkout

### Configure the Stripe Webhooks

### User Flow Adjustments

### User Control

### Create Stripe Portal
