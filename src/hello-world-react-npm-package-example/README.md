# Hello World React NPM Package Example

To publish npm package to npm.
1. npm login in your terminal if not yet logged in.
2. in your directory, npm init
3. Add your files. Make sure to create index.js for entry.
4. For react components,
    - make sure to `import React from 'react'` in your components even for react 17.
    - make sure to use babel to transpile your code. Otherwise, your browser will complain about jsx.
5. For componets with css,etc.  Use webpack to bundle all together.
6. Import components in your project.

## For Development
1. `yarn link` in the root of this package locally.
2. `yarn run watch` in the root of this package (this will run `"watch 'yarn run build'"` - uses `watch` library to detect any file changes and run build and copy files to lib.)
    ** Need to investigate a better way to watch the file changes.  But, it works.
3. `yarn link "hello-world-react-npm-package-example"` (name of this package) in your project in which you are using this package.
