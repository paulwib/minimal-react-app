# Minimal React App

This is intended as a minimal way to get started with React using Typescript. It aims to be much lighter weight than [create-react-app][] and is focused on basic config and compilation, for example it has no opinions about linting, testing, deployment or monitoring.

This version uses `rspack`, a `webpack` compatible alternative written in Rust. It aims to have better performance, but in this minimal project there is no measurable differnce.

## Get started

Running a production version:

```
$ npm install
$ npm run build
$ npm start
```

Then go to http://localhost:5000.

---

Running in dev mode with hot reloading use:

```
$ npm run dev-start
```

Then go to http://localhost:8080.

# In the Box

* React 19
* Typescript (with ts-loader)
* Rspack
* Tested with Node 22.x, may work with other versions.

[create-react-app]:https://github.com/facebook/create-react-app
