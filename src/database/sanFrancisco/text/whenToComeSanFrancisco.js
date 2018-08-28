/// React component
import React from 'react';

import Table from '../../../components/Table';

import { Paragraph, A } from "../../textStyle";

const whenToComeSanFrancisco = 
<div>
<Paragraph>There are many events and conventions taking place every year in San Francisco. With close to 34,000 rooms in about 220 hotels, 15,000 or so attendees will start impacting rates. The weather, of course, should also be taken into consideration when making travel plans. San Francisco is a city with microclimates and sub-microclimates. Because of its topology and location temperature can vary by as much as 9 °F (5 °C) from block to block. Only a 30 min drive by car to the north, east or south often results in much higher temperatures. No matter when you visit always bring layers of clothing.</Paragraph>
<h3>Winter (December - February)</h3>
<Paragraph>Winter is a good time to save on your vacation because hotels normally slash their rates. Average temperatures are not extremely low, but the fog and chilly winds can make it seem much colder. It is also a time when the area experiences most rain. Events end conventions: January - <A href="http://www.sfsketchfest.com/" target="_blank">SF Sketchfest Comedy Festival</A>, <A href="https://www.specialtyfood.com/shows-events/winter-fancy-food-show/" target="_blank">Winter Fancy Food Show</A> (19,000 est. attendees) and <A href="http://spie.org/conferences-and-exhibitions/photonics-west" target="_blank">SPIE Photonic West</A> (20,000 est. attendees), February - <A href="http://www.gdconf.com/" target="_blank">GDC Game Developers Conference</A> (26,000 est. attendees).</Paragraph>
<h3>Spring (March - May)</h3>
<Paragraph>This is a pretty good time to visit. The weather is mild and the hotel prices have yet to rise. Events and conventions: March - <A href="http://www.sresproductions.com/events/st-patricks-day-festival/" target="_blank">St. Patrick's Day Parade and Festival</A>, April - <A href="http://www.sffilm.org/festival" target="_blank">San Francisco International Film Festival</A> and <A href="https://www.sfbeerfest.com/" target="_blank">San Francisco International Beer Festival</A>, May - <A href="http://baytobreakers.com/" target="_blank">Bay to Breakers</A> and <A href="http://www.carnavalsanfrancisco.org/" target="_blank">Carnaval San Francisco</A>.</Paragraph>
<h3>Summer (June - August)</h3>
<Paragraph>Despite the winds and chilly, damp fog combined with the rising hotel rates summer is the peak of tourism in the city and surrounding area. Events and conventions: June - <A href="http://www.sresproductions.com/events/north-beach-festival/" target="_blank">North Beach Festival</A> and <A href="http://www.sfpride.org/" target="_blank">San Francisco Pride</A>, July - <A href="http://www.sresproductions.com/events/fillmore-jazz-festival/" target="_blank">Fillmore Street Jazz Festival</A>, <A href="http://semiconwest.org/" target="_blank">SEMICON West</A> (31,000 est. attendees) and <A href="http://www.thesfmarathon.com/" target="_blank">The San Francisco Marathon</A>, August - <A href="https://www.sfoutsidelands.com/" target="_blank">Outside Lands Music Festival</A> and <A href="http://www.cdapresents.com/tabid/65/default.aspx" target="_blank">California Dental Association</A> (16,000 est. attendees).</Paragraph>
<h3>Fall (September - November)</h3>
<Paragraph>Most people consider fall to be the best time to visit. The weather is often warmer than during the summer, skies are sunny and clear while crowds are mostly gone. Events and conventions: September - <A href="http://www.sffringe.org/" target="_blank">San Francisco Fringe Festival</A>, <A href="http://www.sresproductions.com/events/ghirardelli-chocolate-festival/" target="_blank">Ghirardelli Square Chocolate Festival</A>, <A href="http://www.gsma.com/northamerica/events" target="_blank">GSMA Mobile World Congress</A> (45,000 est. attendees) and <A href="http://castrostreetfair.org/" target="_blank">Castro Street Fair</A>, October - <A href="https://www.oracle.com/openworld/index.html" target="_blank">Oracle OpenWorld</A> (60,000 est. attendees) and <A href="http://www.hardlystrictlybluegrass.com/2016/" target="_blank">Hardly Strictly Bluegrass</A>, November - <A href="https://www.salesforce.com/form/dreamforce/df17.jsp" target="_blank">Dreamforce</A> (60,000 est. attendees) and <A href="http://www.sfautoshow.com/" target="_blank">Annual International Auto Show</A> (30,000 est. attendees).</Paragraph>
<Table 
///	tableTitle = 'Average Annual Temperature in F and Rainfall In inch'
	tableHeader = {['F/inch','Jan','Feb', 'Mar', 'Apr', 'May', 'Jun']}
	tableData = {[
	  {
        average: 'High',
	  	january: 57,
	  	february: 60, 
	  	march: 62, 
	  	april: 63, 
	  	may: 64, 
	  	june: 66,
	  },						
	  {
        average: 'Low',
	  	january: 46,
	  	february: 47, 
	  	march: 49, 
	  	april: 49, 
	  	may: 51, 
	  	june: 53,					
	  },
        {
        average: 'Rain',
	  	january: 4.49,
	  	february: 4.45, 
	  	march: 3.27, 
	  	april: 1.46, 
	  	may: 0.71, 
	  	june: 0.16,					
	  }
	]}
/>
<Table 
	tableHeader = {['F/inch', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
	tableData = {[
	  {
        average: 'High',
	  	july: 67,
	  	august: 68,
	  	september: 70, 
	  	october: 69, 
	  	november: 63, 
	  	december: 57,					
	  },
	  {
        average: 'Low',
	  	july: 54,
	  	august: 55,
	  	september: 55, 
	  	october: 54, 
	  	november: 50, 
	  	december: 46,				
	  },
      {
        average: 'Rain',
	  	july: 0,
	  	august: 0.08,
	  	september: 0.2, 
	  	october: 1.1, 
	  	november: 3.15, 
	  	december: 4.57,
	  }
	]}
/>
<Table 
///	tableTitle = 'Average Annual Temperature in C and Rainfall in mm'
	tableHeader = {['C/mm','Jan','Feb', 'Mar', 'Apr', 'May', 'Jun']}
	tableData = {[
	  {
        average: 'High',
	  	january: 13.8,
	  	february: 15.7, 
	  	march: 16.6, 
	  	april: 17.3, 
	  	may: 17.9, 
	  	june: 19.1,
	  },						
	  {
        average: 'Low',
	  	january: 7.6,
	  	february: 8.6, 
	  	march: 9.2, 
	  	april: 9.6, 
	  	may: 10.6, 
	  	june: 11.6,					
	  },
        {
        average: 'Rain',
	  	january: 114,
	  	february: 113, 
	  	march: 83, 
	  	april: 37, 
	  	may: 18, 
	  	june: 4,					
	  }
	]}
/>
<Table 
	tableHeader = {['C/mm', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
	tableData = {[
	  {
        average: 'High',
	  	july: 19.2,
	  	august: 20.1,
	  	september: 21.2, 
	  	october: 20.7, 
	  	november: 17.3, 
	  	december: 13.9,					
	  },
	  {
        average: 'Low',
	  	july: 12.2,
	  	august: 12.8,
	  	september: 12.8, 
	  	october: 12.1, 
	  	november: 10.1, 
	  	december: 7.8,				
	  },
      {
        average: 'Rain',
	  	july: 0,
	  	august: 2,
	  	september: 5, 
	  	october: 28, 
	  	november: 80, 
	  	december: 116,
	  }
	]}
/>
</div>

export default whenToComeSanFrancisco
