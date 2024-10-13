"use client";

import { NAVIGATION_LINKS } from "@/constants/navigationLinks";
import Link from "next/link";

interface LinksProps {
	setIsMenuOpen: (state: boolean) => void;
}

export function NavigationLinks({ setIsMenuOpen }: LinksProps) {
	return (
		<>
			{NAVIGATION_LINKS.map((link) => {
				return (
					<li
						key={link.id}
						className="list-none"
						onClick={() => setIsMenuOpen(false)}
					>
						<Link
							href={link.id}
							className="font-inter xl:text-[1.1vw] uppercase font-light hover:text-tertiaryColor transition-colors ease-in-out duration-300"
						>
							{link.title}
						</Link>
					</li>
				);
			})}
		</>
	);
}
