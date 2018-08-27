// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import moderate from "../../../../geojson/moderate";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/moderate";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Moderately Expensive Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Moderately Expensive Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Moderately Expensive Restaurants";

const Moderate = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={moderate} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const moderateMap = [Moderate, url, title, back, titleTag, descriptionTag];

export default moderateMap;
