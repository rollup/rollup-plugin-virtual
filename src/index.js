import path from 'path';

const PREFIX = `\0virtual:`;

export default function virtual(modules) {
	const resolved = new Map();

	Object.keys(modules).forEach(id => {
		resolved.set(path.resolve(id), modules[id]);
	});

	return {
		name: 'virtual',

		resolveId(id) {
			if (id in modules) return PREFIX + id;
		},

		load(id) {
			if (id.startsWith(PREFIX)) {
				return modules[id.slice(PREFIX.length)];
			}

			if (resolved.has(id)) {
				return resolved.get(id);
			}
		}
	};
}