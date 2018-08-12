// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import highEnd from "../../../../geojson/highEnd";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/high-end";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "High End Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in Where To Stay Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in Where To Stay Map Description Tag";

const HighEnd = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={highEnd} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const highEndMap = [HighEnd, url, title, back, titleTag, descriptionTag];

export default highEndMap;
