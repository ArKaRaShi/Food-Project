"use clie";

import React, { ChangeEvent, useState } from "react";

import { SearchOutlined } from '@ant-design/icons';
type Props = {};

export default function SearchContainer({}: Props) {
	const [value, setValue] = useState("Enter search...");

	return (
		<div className="relative w-full text-gray-600">
			<div>
				<input
					type="search"
					name="search"
					placeholder={"Enter Search"}
					className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
					onChange={(event) => {
						setValue(event.target.value);
					}}
				/>
				<button
					type="submit"
					className="absolute right-0 top-0 mt-3 mr-4"
				>
					<SearchOutlined />

				</button>
			</div>
		</div>
	);
}
