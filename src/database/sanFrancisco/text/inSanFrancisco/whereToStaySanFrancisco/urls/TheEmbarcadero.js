// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import theEmbarcadero from "../../../../geojson/theEmbarcadero";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/the-embarcadero";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "The Embarcadero Hotels";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "The Embarcadero Hotels";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "The Embarcadero Hotels";

const TheEmbarcadero = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={theEmbarcadero} zoom={16} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const theEmbarcaderoMap = [TheEmbarcadero, url, title, back, titleTag, descriptionTag];

export default theEmbarcaderoMap;
