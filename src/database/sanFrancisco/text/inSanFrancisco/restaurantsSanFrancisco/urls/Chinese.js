// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import chinese from "../../../../geojson/chinese";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/chinese";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Chinese Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in Where To Stay Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in Where To Stay Map Description Tag";

const Chinese = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={chinese} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const chineseMap = [Chinese, url, title, back, titleTag, descriptionTag];

export default chineseMap;
