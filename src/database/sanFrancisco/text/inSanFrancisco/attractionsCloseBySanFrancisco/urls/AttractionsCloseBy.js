// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import attractionsCloseBy from "../../../../geojson/attractionsCloseBy";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/attractions-close-by";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Attractions Close By";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Attractions Close By";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Attractions Close By";

const AttractionsCloseBy = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={attractionsCloseBy} zoom={9} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const attractionsCloseByMap = [AttractionsCloseBy, url, title, back, titleTag, descriptionTag];

export default attractionsCloseByMap;
