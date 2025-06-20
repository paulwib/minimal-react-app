# Minimal React App

This is intended as a minimal way to get started with React using Typescript. It aims to be much lighter weight than [create-react-app][] and is focused on basic config and compilation, for example it has no opinions about linting, testing, deployment or monitoring.

This branch uses `vite`, which has signiificantly less dependencies than `webpack` or `rspack` - it has about 112, versus ~400 for `webpack`/`rspack`. __Correction__: this included `serve` and it's dependencies. Without that the previous numbers are reduced by 91 for all versions. Of course there is also `react`, `react-dom` and some dev dependencies too.

Vite does not _require_ a `tsconfig.json` - without it will use typescript's defaults. One is explicitly added here, but probably only the `strict: true` option is different from the defaults (`jsx` is not a default tsconfig option, but vite appears to work fine without it).

## Get started

Running a production version:

```
$ npm run preview
```

Then go to http://localhost:5000.

---

Running in dev mode with hot reloading use:

```
$ npm run dev
```

Then go to http://localhost:5001.

# In the Box

* React 19
* Vite
* Tested with Node 22.x, may work with other versions.

[create-react-app]:https://github.com/facebook/create-react-app
