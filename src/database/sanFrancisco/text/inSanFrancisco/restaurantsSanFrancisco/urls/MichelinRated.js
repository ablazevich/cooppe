// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import michelinRated from "../../../../geojson/michelinRated";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/michelin-rated";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Michelin Rated Restaurants";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Michelin Rated Restaurants";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Michelin Rated Restaurants";

const MichelinRated = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={michelinRated} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const michelinRatedMap = [MichelinRated, url, title, back, titleTag, descriptionTag];

export default michelinRatedMap;
