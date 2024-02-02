import React from "react";

type Props = {};

function Card({ imgSrc, imgAlt }) {
	return (
		<>
			<div className="lg:p-4 md:w-full flex justify-center mt-40">
				<div className="max-w-sm rounded-2xl overflow-hidden shawdow-lg">
					<img className="w-full" src={imgSrc} alt={imgAlt} />
					<div className="px-6 py-4 lg:h-52">
						<span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							BarSomething
						</span>

						<div className="title-font text-lg font-medium mb-2">
							<a href="#" className="no-underline text-gray-900">
								Next js tutorial
							</a>
						</div>

						<p className="text-gray-700 text-base">
							askodfmfoanjoneji
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default function CanteenList({}: Props) {
	return (
		<div>
			<ul>
				<li>บาวิศวะ</li>
				<Card imgSrc="./test1.png" imgAlt="บาร์วิศวะ" />
				<li>บาใหม่</li>
				<li>บาใหม่กว่า</li>
				<li>บาวิทยา</li>
				<li>อื่นๆ</li>
			</ul>
		</div>
	);
}
