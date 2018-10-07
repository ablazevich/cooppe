// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import expensive from "../../../../geojson/expensive";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/expensive";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Expensive Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Expensive Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Expensive Restaurants";

const Expensive = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={expensive} zoom={13} markerImg={marker}/>
      </div>
    </Paragraph>
  </div>
);

const expensiveMap = [Expensive, url, title, back, titleTag, descriptionTag];

export default expensiveMap;
