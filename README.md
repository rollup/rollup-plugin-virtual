# rollup-plugin-virtual

Load modules from memory.

## Usage

Suppose you have an input file like this, and you want to load `foo` and `src/bar.js` from memory:

```js
// src.main.js
import foo from 'foo';
import bar from './bar.js';

console.log(foo, bar);
```

```js
// rollup.config.js
import virtual from 'rollup-plugin-virtual';

export default {
  entry: 'src/main.js',
  // ...
  plugins: [
    virtual({
      'foo': 'export default 1',
      'src/bar.js': 'export default 2'
    })
  ]
};
```


## License

[MIT](LICENSE)