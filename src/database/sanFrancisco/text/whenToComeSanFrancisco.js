/// React component
import React from 'react';

import Table from '../../../components/Table';

const whenToComeSanFrancisco = 
<div>
<div className="paragraph">There are many events and conventions taking place every year in San Francisco. With close to 34,000 rooms in about 220 hotels, 15,000 or so attendees will start impacting rates. The weather, of course, should also be taken into consideration when making travel plans. San Francisco is a city with microclimates and sub-microclimates. Because of its topology and location temperature can vary by as much as 9 °F (5 °C) from block to block. Only a 30 min drive by car to the north, east or south often results in much higher temperatures. No matter when you visit always bring layers of clothing.</div>
<h3>Winter (December - February)</h3>
<div className="paragraph">Winter is a good time to save on your vacation because hotels normally slash their rates. Average temperatures are not extremely low, but the fog and chilly winds can make it seem much colder. It is also a time when the area experiences most rain. Events end conventions: January - <a href="http://www.sfsketchfest.com/" target="_blank">SF Sketchfest Comedy Festival</a>, <a href="https://www.specialtyfood.com/shows-events/winter-fancy-food-show/" target="_blank">Winter Fancy Food Show</a> (19,000 est. attendees) and <a href="http://spie.org/conferences-and-exhibitions/photonics-west" target="_blank">SPIE Photonic West</a> (20,000 est. attendees), February - <a href="http://www.gdconf.com/" target="_blank">GDC Game Developers Conference</a> (26,000 est. attendees).</div>
<h3>Spring (March - May)</h3>
<div className="paragraph">This is a pretty good time to visit. The weather is mild and the hotel prices have yet to rise. Events and conventions: March - <a href="http://www.sresproductions.com/events/st-patricks-day-festival/" target="_blank">St. Patrick's Day Parade and Festival</a>, April - <a href="http://www.sffilm.org/festival" target="_blank">San Francisco International Film Festival</a> and <a href="https://www.sfbeerfest.com/" target="_blank">San Francisco International Beer Festival</a>, May - <a href="http://baytobreakers.com/" target="_blank">Bay to Breakers</a> and <a href="http://www.carnavalsanfrancisco.org/" target="_blank">Carnaval San Francisco</a>.</div>
<h3>Summer (June - August)</h3>
<div className="paragraph">Despite the winds and chilly, damp fog combined with the rising hotel rates summer is the peak of tourism in the city and surrounding area. Events and conventions: June - <a href="http://www.sresproductions.com/events/north-beach-festival/" target="_blank">North Beach Festival</a> and <a href="http://www.sfpride.org/" target="_blank">San Francisco Pride</a>, July - <a href="http://www.sresproductions.com/events/fillmore-jazz-festival/" target="_blank">Fillmore Street Jazz Festival</a>, <a href="http://semiconwest.org/" target="_blank">SEMICON West</a> (31,000 est. attendees) and <a href="http://www.thesfmarathon.com/" target="_blank">The San Francisco Marathon</a>, August - <a href="https://www.sfoutsidelands.com/" target="_blank">Outside Lands Music Festival</a> and <a href="http://www.cdapresents.com/tabid/65/default.aspx" target="_blank">California Dental Association</a> (16,000 est. attendees).</div>
<h3>Fall (September - November)</h3>
<div className="paragraph">Most people consider fall to be the best time to visit. The weather is often warmer than during the summer, skies are sunny and clear while crowds are mostly gone. Events and conventions: September - <a href="http://www.sffringe.org/" target="_blank">San Francisco Fringe Festival</a>, <a href="http://www.sresproductions.com/events/ghirardelli-chocolate-festival/" target="_blank">Ghirardelli Square Chocolate Festival</a>, <a href="http://www.gsma.com/northamerica/events" target="_blank">GSMA Mobile World Congress</a> (45,000 est. attendees) and <a href="http://castrostreetfair.org/" target="_blank">Castro Street Fair</a>, October - <a href="https://www.oracle.com/openworld/index.html" target="_blank">Oracle OpenWorld</a> (60,000 est. attendees) and <a href="http://www.hardlystrictlybluegrass.com/2016/" target="_blank">Hardly Strictly Bluegrass</a>, November - <a href="https://www.salesforce.com/form/dreamforce/df17.jsp" target="_blank">Dreamforce</a> (60,000 est. attendees) and <a href="http://www.sfautoshow.com/" target="_blank">Annual International Auto Show</a> (30,000 est. attendees).</div>
<Table 
	tableTitle = 'Average Annual Temperature in F/C and Rainfall in inch/mm'
	tableHeader = {['','January','February', 'March', 'April', 'May', 'Jun']}
	tableData = {[
	  {
        average: 'High',
	  	january: 5713.8,
	  	february: 6015.7, 
	  	march: 6216.6, 
	  	april: 6317.3, 
	  	may: 6417.9, 
	  	june: 6619.1,
	  },						
	  {
        average: 'Low',
	  	january: 467.6,
	  	february: 478.6, 
	  	march: 499.2, 
	  	april: 499.6, 
	  	may: 5110.6, 
	  	june: 5311.6,					
	  },
        {
        average: 'Rainfall',
	  	january: 4.49114,
	  	february: 4.45113, 
	  	march: 3.2783, 
	  	april: 1.4637, 
	  	may: 0.7118, 
	  	june: 0.164,					
	  }
	]}
/>
<Table 
	tableHeader = {['', 'July', 'August', 'September', 'October', 'November', 'December']}
	tableData = {[
	  {
        average: 'High',
	  	july: 6719.2,
	  	august: 6820.1,
	  	september: 7021.2, 
	  	october: 6920.7, 
	  	november: 6317.3, 
	  	december: 5713.9,					
	  },
	  {
        average: 'Low',
	  	july: 5412.2,
	  	august: 5512.8,
	  	september: 5512.8, 
	  	october: 5412.1, 
	  	november: 5010.1, 
	  	december: 467.8,				
	  },
      {
        average: 'Rainfall',
	  	july: 0,
	  	august: 0.082,
	  	september: 0.25, 
	  	october: 1.128, 
	  	november: 3.1580, 
	  	december: 4.57116,
	  }
	]}
/>
</div>

export default whenToComeSanFrancisco
