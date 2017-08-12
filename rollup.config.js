import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
	entry: 'src/index.js',
	plugins: [resolve()],
	external: ['path'],
	targets: [
		{ dest: pkg.main, format: 'cjs' },
		{ dest: pkg.module, format: 'es' }
	]
};
