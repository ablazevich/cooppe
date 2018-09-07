// React
import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Style
import { Paragraph, A } from "../../textStyle";

const foodStoresSanFrancisco = (
	<div>
    <Paragraph>
    If you don't enjoy eating out more than once or twice a day, San Francisco has some great food stores.
    Here are some of the most popular ones.
    </Paragraph>

    <Paragraph>
    <Link to="/san-francisco/food-stores">
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

export default foodStoresSanFrancisco;
