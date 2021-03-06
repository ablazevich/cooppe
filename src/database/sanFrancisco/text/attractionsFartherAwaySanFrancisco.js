// React
import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Style
import { Paragraph } from "../../textStyle";

const attractionsFartherAwaySanFrancisco = (
	<div>
	<Paragraph>
    	Santa Cruz 76 mi (122.3 km), Sacramento 88 mi (141.6 km), Monterey and
    	Carmel-by-the-Sea 120 mi (193.1 km), Mendocino 155 mi (249.4 km), South
    	Lake Tahoe 188 mi (302.6 km), Paso Robles 205 mi (329.9 km), Yosemite
    	National Park 211 mi (339.6 km) and Reno 218 mi (350.8 km).
  	</Paragraph>
  	<Paragraph>
    <Link to="/san-francisco/attractions-farther-away">
      <FlatButton
        style={{
          backgroundColor: "lightgrey",
          fontWeight: "500"
        }}
      >
        MAP
      </FlatButton>
    </Link>
    </Paragraph>
  	</div>
	);

export default attractionsFartherAwaySanFrancisco;
