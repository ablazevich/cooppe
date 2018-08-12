// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import unionSquare from "../../../../geojson/unionSquare";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/union-square";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Union Square Hotels";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in Where To Stay Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in Where To Stay Map Description Tag";

const UnionSquare = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={unionSquare} zoom={17} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const unionSquareMap = [UnionSquare, url, title, back, titleTag, descriptionTag];

export default unionSquareMap;
