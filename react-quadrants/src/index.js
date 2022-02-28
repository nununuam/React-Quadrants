import React from "react";
import ReactDOM from "react-dom";
//import Section from "./Section";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import Kawaii from "./Kawaii";
import Button from "./Button"
import "./styles.scss";

//const apiKey = "S0VVLw34GJnIpAZetlFRjhTF6VvgKD5h";
//const searchTerm = "art";
//const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
//Dog APIs below
const fetchUrl1 = "https://random.dog/woof.json";
//const fetchUrl2='https://cataas.com/cat';
const fetchUrl2=`https://randomfox.ca/floof/`;
function App() {
	//const [apiData, setApiData] = React.useState([]);
	const [apiData1, setApiData1] = React.useState();
	const [apiData2, setApiData2] = React.useState();
	const [kawaii, setKawaii] = React.useState("sad");
	React.useEffect(() => {APIs()}, []);
		 const APIs = async () => {
			/*const response = await fetch(fetchUrl);
			const incomingData = await response.json();
			setApiData(incomingData.data);
			console.log(apiKey);
			console.log(incomingData);
			*/
			
			//Dog API that sometime return a url ending with .mp4, will not be use but is available
			const response1 = await fetch(fetchUrl1);
			const incomingData1 = await response1.json();
			setApiData1(incomingData1.url);
			console.log(incomingData1.url);
			console.log("dog api");
			

			const response2 = await fetch(fetchUrl2);
			const incomingData2 = await response2.json();
			setApiData2(incomingData2.image);
			console.log(incomingData2.url);
			console.log("cat api");

			setKawaii("happy");
		};
		//const [kawaii1, setKawaii1] = React.useState("sad");
	

	return (
		<div className="main">
			{/* <Section apiData={apiData} />*/}
			
			<Kawaii kawaii={kawaii} />
			<SectionThree apiData={apiData2} />
			<Button refresh={APIs}/>
			<SectionTwo apiData={apiData1} /> 
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);