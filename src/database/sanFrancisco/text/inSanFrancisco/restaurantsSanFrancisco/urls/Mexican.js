// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import mexican from "../../../../geojson/mexican";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/mexican";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Mexican Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Mexican Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Mexican Restaurants";

const Mexican = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={mexican} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const mexicanMap = [Mexican, url, title, back, titleTag, descriptionTag];

export default mexicanMap;
