// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import indian from "../../../../geojson/indian";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/indian";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Indian Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in Where To Stay Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in Where To Stay Map Description Tag";

const Indian = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={indian} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const indianMap = [Indian, url, title, back, titleTag, descriptionTag];

export default indianMap;
