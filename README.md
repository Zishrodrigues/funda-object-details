# Funda object details 🏡

Vue web app that utilizes the Funda partner API to get and use data of a property object.


## Installation
Create a `.env` based the `.env.example` found in the root of the project.

```
VUE_APP_API_URL=API-URL
VUE_APP_API_KEY=YOUR-KEY-HERE
```

Use the package manager to install dependencies.

```
npm install
```
## Scripts

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints files
```
npm run lint
```

## Further development

Things I would like to add during further development of this app
* Further expand the unit tests
* Add e2e tests
* Add a service worker for increased performance
* Have the option for a previous button when fetching data, caching the previous object in the state
* Add URL parameters for getting a specific object eg: `/:ID`
* Add Tailwind