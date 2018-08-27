// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import steakhouses from "../../../../geojson/steakhouses";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/steakhouses";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Steakhouses";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Steakhouses";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Steakhouses";

const Steakhouses = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={steakhouses} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const steakhousesMap = [Steakhouses, url, title, back, titleTag, descriptionTag];

export default steakhousesMap;
