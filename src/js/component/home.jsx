import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./semaforo";

//create your first component
const Home = () => {
	return (
		<div className="text-center container mt-5 p-5 bg-info">
			<Semaforo />
		</div>
	);
};

export default Home;

