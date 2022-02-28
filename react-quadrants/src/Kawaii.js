import React from "react";
import { Ghost } from "react-kawaii";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

function Kawaii({ kawaii, refresh}) {
		let content = (
			<div style={contentStyles}>
				<Ghost size={200} mood={kawaii} color="#AD9980"/>
			</div>
		);
	//}

	return (
		<section className="section">
			{content}
		</section>
	);
}
export default Kawaii;