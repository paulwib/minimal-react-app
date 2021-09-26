# Minimal React App

This is intended as the most minimal way to get started with React. It aims to be much lighter weight than [create-react-app][] and is focused on basic config and compilation, for example it has no opinions about linting, testing, deployment or monitoring.

## Get started

Running a production version:

```
$ yarn
$ yarn build --mode=production
$ yarn start
```

Then go to http://localhost:5000.

---

Running in dev mode with hot reloading use:

```
$ yarn dev-start
```

Then go to http://localhost:8080.

In dev mode you don't need to run the `yarn build` step.

# In the Box

* React 16
* Babel 7 config
* Webpack 5 config
* Tested with Node 12.x and 14.x, may work with other versions.

[create-react-app]:https://github.com/facebook/create-react-app
