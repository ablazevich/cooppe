// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import seafood from "../../../../geojson/seafood";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/seafood";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Seafood Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Seafood Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Seafood Restaurants";

const Seafood = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={seafood} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const seafoodMap = [Seafood, url, title, back, titleTag, descriptionTag];

export default seafoodMap;
