# faidejs
A hacking space for whatever I am experimenting with

The code is native ES6.  I don't currently have any plans to add a transpiler but if you would like to run/fork the repo,
I am developing on the Chrome dev channel (currently v50).  Any features that are implemented in the dev channel
([which you can find a list of here](https://www.chromestatus.com/features)) may appear in the code.

## Build From Source
Install rollup and gulp

```
npm install -g rollup gulp
```

Install dependencies

```
npm install
```

Run gulp

```
gulp bundle
```

The resulting output can be found in `dist/main.js`.