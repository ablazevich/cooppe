// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import foodStores from "../../../../geojson/foodStores";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/food-stores";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Food Stores";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Food Stores";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Food Stores";

const FoodStores = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={foodStores} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const foodStoresMap = [FoodStores, url, title, back, titleTag, descriptionTag];

export default foodStoresMap;
