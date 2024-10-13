import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkPrimaryColor: "#383838",
				darkContrastPrimaryColor: "#FCFCFD",

				primaryColor: "#FCFCFD",
				contrastPrimaryColor: "#383838",

				primaryBackground: "#EDFBED",
				secondaryBackground: "#FCFCFD",
				darkPrimaryBackground: "#383838",
				darkSecondaryBackground: "#313030",
				tertiaryColor: "#57A743",

				90: "rgba(87, 167, 67, 0.90)",
				70: "rgba(87, 167, 67, 0.70)",
				50: "rgba(87, 167, 67, 0.50)",
				30: "rgba(87, 167, 67, 0.30)",
				10: "rgba(87, 167, 67, 0.10)",
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				exo: ["var(--font-exo)"],
			},
			fontSize: {
				textBody: "16px",
				textBodyMobile: "14px",
				textHeaderSmall: "20px",
				textHeadersLarge: "10vw",
			},
			lineHeight: {
				body: "30px",
				bodyMobile: "26px",
				headerMobile: "36px",
			},
			boxShadow: {
				primaryShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
			},
			padding: {
				mobile: "20vh 10vw ",
			},
			screens: {
				"max-L": { max: "1023px" },
				"max-S": { max: "430px" },
			},
		},
	},
	plugins: [],
};
export default config;
