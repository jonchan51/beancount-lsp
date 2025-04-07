declare module '*.scm' {
	const content: string;
	export = content;
}

declare module '*.wasm' {
	const content: Uint8Array;
	export = content;
}
