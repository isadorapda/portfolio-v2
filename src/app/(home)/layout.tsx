import "../globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Exo } from "next/font/google";
import { ThemeProvider } from "../theme-provider";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Navigation/NavBar";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const exo = Exo({
	weight: ["100", "300", "400", "600", "700"],
	subsets: ["latin"],
	variable: "--font-exo",
});

export const metadata: Metadata = {
	title: `Isadora's Portfolio`,
	description:
		"I am a full-stack software developer based in London. Unleashing Tech Potential for Positive Change | TypeScript, React, Next.js, Node.js Developer | Making a Difference Through Code",
	openGraph: {
		title: "Isadora's Portfolio",
		description:
			"I am a full-stack software developer based in London. Unleashing Tech Potential for Positive Change | TypeScript, React, Next.js, Node.js Developer | Making a Difference Through Code",
		siteName: "Isadora's Portfolio",
		type: "website",
	},
};

export default function RootLayout(props: {
	children: ReactNode;
	about: ReactNode;
	skills: ReactNode;
	contacts: ReactNode;
	projects: ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable}  ${exo.variable}`}>
				<ThemeProvider attribute="class">
					<NavBar />
					{props.children}
					{props.about}
					{props.skills}
					{props.projects}
					{props.contacts}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
