import React from "react";
const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};
function Button({refresh}){
    let content = (
        <div style={contentStyles}>
            <button onClick={refresh}>Refresh</button>
        </div>
    );
    return (
        <section className="section">
            {content}
        </section>
    );
}
export default Button;