# RMMZ CoreScripts
RPG Maker MZ scripts split into separate files.

<br>

## CoreScripts:
RPG Maker MZ Version: 1.6.0
1. copy the `rmmz_xxx` directories into your projects `js` folder
2. copy `main.js` into your projects `js` folder *
3. delete the old files named `rmmz_xxx.js`

<br>

## To split your own files **
1. copy `splits.js` into your projects `js` folder
2. create folders for each rmmz file e.g. `rmmz_core`, `rmmz_manager` etc.
3. run `node splits.js` on command line
4. remove `splits.js` from your projects folders
5. copy steps listed above

<br>

\* Outside of `const scriptUrls` in `main.js` make sure nothing else is overwritten

\*\* The `rmmz_core` directory can sometimes output `JsExtensions` as `unknown-class` so make sure to check and rename it.
(Any other `unknown-class` files can be deleted)
