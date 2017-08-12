const path = require('path');
const assert = require('assert');
const virtual = require('../dist/rollup-plugin-virtual.cjs');

describe('rollup-plugin-virtual', () => {
	it('loads a bare module ID from memory', () => {
		const plugin = virtual({
			foo: 'export default 42'
		});

		const resolved = plugin.resolveId('foo');

		assert.equal(resolved, '\0virtual:foo');
		assert.equal(plugin.load(resolved), 'export default 42');
	});

	it('loads an absolute path from memory', () => {
		const plugin = virtual({
			'src/foo.js': 'export default 42'
		});

		assert.equal(plugin.load(path.resolve('src/foo.js')), 'export default 42');
	});
});