import React from "react";
const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

function Section3({ apiData }) {
		let content = (
			<div style={contentStyles}>
				<img alt="things" src={apiData} />
			</div>
		);
	//}

	return (
		<section className="section">
			{content}
		</section>
	);
}

export default Section3;
