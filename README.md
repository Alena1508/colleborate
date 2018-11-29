# Project (sample) for React.js+Redux+MUI+TypeScript by Brainbean Apps

A demo project to be used as lean-and-mean bootstrap.

## Build configuration

* `NODE_ENV`

Is set to `development` or `production` by the build script and is exposed as `config.isDevelopment`, suitable to check if running via `npm start` or `yarn start`.

* `PUBLIC_URL`

Is set to public URL where application build is accessible from and is exposed as `config.publicUrl`. If not set by environment during build, a `homepage` setting from `package.json` is used.

* `REACT_APP_*`

A collection of variables to configure application-specific build configuration. Each variable is exposed like `config.variableName` with value of `REACT_APP_VARIABLE_NAME`

## References

* [TypeScript React Starter by Microsoft](https://github.com/Microsoft/TypeScript-React-Starter/)

## Notes


* For some reason, `@types/redux-actions` is needed in dependencies
* An odd issue, [debug#562](https://github.com/visionmedia/debug/issues/562) and [debug#563](https://github.com/visionmedia/debug/pull/563)
* `classNames` wrapper due to [this issue](https://github.com/JedWatson/classnames/issues/152)
* Ugly workaround due to [this issue](https://github.com/afitiskin/redux-saga-routines/issues/40)
