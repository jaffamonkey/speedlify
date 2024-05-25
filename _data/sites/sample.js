module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 10,
		frequency: 30, // (in minutes)
	},
	urls: [
		"https://jaffamonkey.com/",
		"https://jaffamonkey.com/about/"
	]
};