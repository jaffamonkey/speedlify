module.exports = {
	name: "jaffamonkey website", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 10,
		frequency: 1440, // (in minutes)
	},
	urls: [
		"https://jaffamonkey.com/",
		"https://jaffamonkey.com/about",
		"https://jaffamonkey.com/skills/testing",
		"https://jaffamonkey.com/skills/accessibility",
		"https://jaffamonkey.com/resources/",
		"https://jaffamonkey.com/skills/contact"
	]
};
