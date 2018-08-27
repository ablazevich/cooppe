// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import attractionsFartherAway from "../../../../geojson/attractionsFartherAway";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/attractions-farther-away";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Attractions Farther Away";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Attractions Farther Away";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Attractions Farther Away";

const AttractionsFartherAway = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={attractionsFartherAway} zoom={7} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const attractionsFartherAwayMap = [AttractionsFartherAway, url, title, back, titleTag, descriptionTag];

export default attractionsFartherAwayMap;
