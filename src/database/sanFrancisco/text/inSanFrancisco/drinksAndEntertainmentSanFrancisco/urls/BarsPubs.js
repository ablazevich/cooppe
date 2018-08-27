// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import barsPubs from "../../../../geojson/barsPubs";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/bars-pubs";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Bars and Pubs";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Bars and Pubs";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Bars and Pubs";

const BarsPubs = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={barsPubs} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const barsPubsMap = [BarsPubs, url, title, back, titleTag, descriptionTag];

export default barsPubsMap;
