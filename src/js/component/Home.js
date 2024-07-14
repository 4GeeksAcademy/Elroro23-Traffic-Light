import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red") //Usamos useState para crear la caja(color) y el ayudante(setColor), en principio la caja tendrá el color rojo.
	return (
		<>
			<div className="container align-items-center d-flex flex-column">
				<div className="row stick">
				</div>
				<div className="row">
					<div className="col-6">
						<div className="traffic-light">
							<div onClick={() => setColor("red")} className={`light red ${(color === "red" ? " glow" : "")}`}>
							</div>
							<div onClick={() => setColor("yellow")} className={`light yellow ${(color === "yellow" ? " glow" : "")}`}>
							</div>
							<div onClick={() => setColor("green")} className={`light green ${(color === "green" ? " glow" : "")}`}>
							</div>
						</div>
					</div>
				</div>
				<div className="By-Elroro23">By Elroro23</div>
			</div>
		</>
	);
};

export default Home;
//onClick={() => setColor ("yellow")}:Cuando hagamos click setColor cambia el color de "color" de rojo a amarillo.
//${(color === "yellow" ? " glow" : "")}: Si el color de la caja es amarilla iluminala (" glow") sino no hagas nada ("").