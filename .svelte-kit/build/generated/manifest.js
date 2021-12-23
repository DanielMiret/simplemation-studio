const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/explorer.svelte"),
	() => import("../../../src/routes/studio/__layout.reset.svelte"),
	() => import("../../../src/routes/studio/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/explorer.svelte
	[/^\/explorer\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/studio/index.svelte
	[/^\/studio\/?$/, [c[4], c[5]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];