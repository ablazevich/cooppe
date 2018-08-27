// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import thingsToDo from "../../../../geojson/thingsToDo";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/things-to-do";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Things To Do";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Things To Do";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Things To Do";

const ThingsToDo = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={thingsToDo} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const thingsToDoMap = [ThingsToDo, url, title, back, titleTag, descriptionTag];

export default thingsToDoMap;
