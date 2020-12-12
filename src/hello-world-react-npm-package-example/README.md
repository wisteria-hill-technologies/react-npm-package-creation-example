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
