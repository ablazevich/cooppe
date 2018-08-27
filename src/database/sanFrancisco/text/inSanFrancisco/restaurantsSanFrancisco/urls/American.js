// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import american from "../../../../geojson/american";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/american";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "American New and Traditional Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "American New and Traditional Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "American New and Traditional Restaurants";

const American = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={american} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const americanMap = [American, url, title, back, titleTag, descriptionTag];

export default americanMap;
