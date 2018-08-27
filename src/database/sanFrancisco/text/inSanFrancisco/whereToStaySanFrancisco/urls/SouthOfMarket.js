// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import southOfMarket from "../../../../geojson/southOfMarket";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/south-of-market";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "South of Market Hotels";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "South of Market Hotels";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "South of Market Hotels";

const SouthOfMarket = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={southOfMarket} zoom={15} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const southOfMarketMap = [SouthOfMarket, url, title, back, titleTag, descriptionTag];

export default southOfMarketMap;
