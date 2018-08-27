// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import clubsLounges from "../../../../geojson/clubsLounges";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/clubs-lounges";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Clubs and Lounges";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Clubs and Lounges";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Clubs and Lounges";

const ClubsLounges = (
  <div>
    <Paragraph>
      <div>
        <Cartography geojson={clubsLounges} zoom={13} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const clubsLoungesMap = [ClubsLounges, url, title, back, titleTag, descriptionTag];

export default clubsLoungesMap;
