// React
import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Style
import { Paragraph } from "../../textStyle";

const attractionsCloseBySanFrancisco = (
	<div>
		<Paragraph>
			Oakland 12 mi (≅ 19 km), Berkeley 14 mi (≅ 22 km), Muir Woods National Monument 16 mi (≅ 26 km), 
			Halfmoon Bay 29 mi (≅ 47 km), Point Reyes 42 mi (≅ 68 km), Sonoma Valley 44 mi (≅ 71 km), 
			Napa Valley 49 mi (≅ 79 km) and San Jose 55 mi (≅ 88 km).
		</Paragraph>	
    <Paragraph>
    <Link to="/san-francisco/attractions-close-by">
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

export default attractionsCloseBySanFrancisco;
