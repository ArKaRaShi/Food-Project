import Image from "next/image";

import React from "react";
import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
	return (
		<main>
			<nav style={{ background: "black" }}>
				<ul>
					<li>
						<Link href="./home"  className="link-no-color-change text-white bg-slate-300">
							Home
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link href="./test" className="">
							Test
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
}
