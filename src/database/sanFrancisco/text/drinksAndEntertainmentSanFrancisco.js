// React
import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Style
import { Paragraph, A } from "../../textStyle";

const drinksAndEntertainmentSanFrancisco = (
	<div>
    <h3>Coffee and Tea</h3>
    <Paragraph> 
      Beanstalk Cafe,{" "}
      <A href="http://coffee.caffetrieste.com/" target="_blank" rel="noopener noreferrer">Caffe Trieste</A>,{" "}
      <A href="http://www.castro-coffee.com/default.asp" target="_blank" rel="noopener noreferrer">Castro Coffee Company</A>,{" "}
      Chapter 2 Coffee,{" "}
      <A href="http://www.contrabandcoffeeroasters.com/" target="_blank" rel="noopener noreferrer">Contraband Coffee Bar</A>,{" "}
      <A href="http://www.fivestartruffles.com/" target="_blank" rel="noopener noreferrer">Five Star Truffles Co.</A>,{" "}
      Fresh Brew Coffee,{" "}
      <A href="https://www.graffeo.com/" target="_blank" rel="noopener noreferrer">Graffeo Coffee Roasting Company</A>,{" "}
      Hole In The Wall Coffee,{" "}
      Iron Horse Coffee Bar,{" "}
      <A href="http://www.javabeachcafe.com/" target="_blank" rel="noopener noreferrer">Java Beach Cafe</A>,{" "}
      Rise &#38; Grind,{" "}
      <A href="https://www.saintfrankcoffee.com/" target="_blank" rel="noopener noreferrer">Saint Frank Coffee</A>,{" "}
      <A href="https://www.spikescoffee.com/" target="_blank" rel="noopener noreferrer">Spike’s Coffees &#38; Teas</A>,{" "}
      Un Cafecito,{" "}
      YakiniQ Cafe and{" "}
      <A href="http://zo11coffee.com/" target="_blank" rel="noopener noreferrer">Zo11 Coffee</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/coffee-tea">
      <FlatButton
        style={{
          backgroundColor: "lightgrey",
          fontWeight: "500"
        }}
      >
        MAP
      </FlatButton>
    </Link>
    </Paragraph>
    <h3>Bars and Pubs</h3>
    <Paragraph>
      <A href="https://www.abvsf.com/" target="_blank" rel="noopener noreferrer">ABV</A>{" "}(Cocktails),{" "}
      <A href="http://www.bar587.com/" target="_blank" rel="noopener noreferrer">Bar 587</A>{" "}(Cocktails),{" "}
      <A href="https://blackhammerbrewing.com/" target="_blank" rel="noopener noreferrer">Black Hammer Brewing</A>,{" "}
      <A href="http://blackbirdbar.com/" target="_blank" rel="noopener noreferrer">Blackbird</A>,{" "}
      <A href="http://www.bloodhoundsf.com/" target="_blank" rel="noopener noreferrer">Bloodhound</A>{" "}(Cocktails),{" "}
      <A href="http://www.bluxomewinery.com/" target="_blank" rel="noopener noreferrer">Bluxome Street Winery</A>,{" "}
      <A href="http://www.bodegasf.com/" target="_blank" rel="noopener noreferrer">Bodega</A>,{" "}
      Bow Bow Cocktail Lounge,{" "}
      Buddha Lounge (Dive bar),{" "}
      CC's Cocktails,{" "}
      <A href="http://comstocksaloon.com/" target="_blank" rel="noopener noreferrer">Comstock Saloon</A>,{" "}
      Durty Nelly’s (Pub),{" "}
      <A href="http://www.fatangelsf.com/" target="_blank" rel="noopener noreferrer">Fat Angel</A>,{" "}
      <A href="http://hawthornsf.com/" target="_blank" rel="noopener noreferrer">Hawthorn</A>{" "}(Cocktails),{" "}
      <A href="http://www.hobsonschoice.com/" target="_blank" rel="noopener noreferrer">Hobson’s Choice</A>,{" "}
      <A href="http://www.hopwaterdistribution.com/" target="_blank" rel="noopener noreferrer">Hopwater Distribution</A>{" "}(Beer),{" "}
      <A href="http://www.thehouseofshields.com/" target="_blank" rel="noopener noreferrer">House of Shields</A>,{" "}
      <A href="http://www.hosbootlegtavern.com/" target="_blank" rel="noopener noreferrer">Ho’s Bootleg Tavern</A>{" "}(Sports bar),{" "}
      <A href="http://www.lipolounge.com/" target="_blank" rel="noopener noreferrer">Li Po Cocktail Lounge</A>,{" "}
      <A href="http://www.liquidgoldsf.com/" target="_blank"rel="noopener noreferrer">Liquid Gold</A>{" "}(Beer),{" "}
      <A href="http://localeditionsf.com/" target="_blank" rel="noopener noreferrer" >Local Edition</A>{" "}(Cocktails),{" "}
      <A href="http://www.mikkellerbar.com/" target="_blank" rel="noopener noreferrer">Mikkeller Bar</A>,{" "}
      <A href="http://mrtipplessf.com/" target="_blank" rel="noopener noreferrer">Mr Tipple’s Recording Studio</A>{" "}(Cocktails),{" "}
      <A href="http://www.novelasf.com/" target="_blank" rel="noopener noreferrer">Novela</A>{" "}(Cocktails),{" "}
      <A href="http://www.pacificcocktailsf.com/" target="_blank" rel="noopener noreferrer">Pacific Cocktail Haven</A>,{" "}
      <A href="https://www.robberbaronsf.com/" target="_blank" rel="noopener noreferrer">robberbaron</A>{" "}(Wine),{" "}
      Specs' Twelve Adler Museum Cafe,{" "}
      <A href="http://www.stookeysclubmoderne.com/" target="_blank" rel="noopener noreferrer">Stookey’s Club Moderne</A>{" "}(Cocktails),{" "}
      <A href="http://sugarloungesf.com/" target="_blank" rel="noopener noreferrer">Sugar Lounge</A>{" "}(Cocktails),{" "}
      <A href="http://alembicsf.com/" target="_blank" rel="noopener noreferrer">The Alembic</A>,{" "}
      <A href="http://www.blackhorselondon.com/" target="_blank" rel="noopener noreferrer">The Black Horse London Pub</A>,{" "}
      <A href="http://flytrapsf.com/" target="_blank" rel="noopener noreferrer">The Fly Trap</A>,{" "}
      <A href="http://www.thehiddenvine.com/" target="_blank" rel="noopener noreferrer">The Hidden Vine</A>{" "}(Wine),{" "}
      <A href="http://theinterval.org/" target="_blank" rel="noopener noreferrer">The Interval At Long Now</A>{" "}(Cocktails),{" "}
      <A href="http://monkskettle.com/" target="_blank" rel="noopener noreferrer">The Monk’s Kettle</A>,{" "}
      <A href="http://www.thepagebar.com/" target="_blank" rel="noopener noreferrer">The Page</A>,{" "}
      The Saloon (Dive bar),{" "}
      <A href="http://www.thesocialstudysf.com/" target="_blank" rel="noopener noreferrer">The Social Study</A>{" "}(Wine),{" "}
      <A href="http://thesycamoresf.com/" target="_blank" rel="noopener noreferrer">The Sycamore</A>,{" "}
      <A href="http://www.topsyssf.com/" target="_blank" rel="noopener noreferrer">Topsy’s Fun House</A>{" "}(Cocktails),{" "}
      <A href="http://www.toronado.com/" target="_blank" rel="noopener noreferrer">Toronado Pub</A>{" "}
      and{" "}
      <A href="http://www.zeitgeistsf.com/" target="_blank" rel="noopener noreferrer">Zeitgeist</A>{" "}(Dive bar).
    </Paragraph>   
    <Paragraph>
    <Link to="/san-francisco/bars-pubs">
      <FlatButton
        style={{
          backgroundColor: "lightgrey",
          fontWeight: "500"
        }}
      >
        MAP
      </FlatButton>
    </Link>
    </Paragraph>
    <h3>Clubs and Lounges</h3>
    <Paragraph>
      <A href="https://audiosf.com/" target="_blank" rel="noopener noreferrer">Audio Discotech</A>,{" "}
      <A href="http://www.bimbos365club.com/" target="_blank" rel="noopener noreferrer">Bimbo’s 365 Club</A>,{" "}
      <A href="http://www.boomboomroom.com/tickets-schedule/" target="_blank" rel="noopener noreferrer">Boom Boom Room</A>,{" "}
      <A href="http://www.brunossf.com/" target="_blank" rel="noopener noreferrer">Bruno's</A>,{" "}
      <A href="http://www.sfcatclub.com/" target="_blank" rel="noopener noreferrer">Cat Club</A>,{" "}
      <A href="http://www.clubdeluxe.co/" target="_blank" rel="noopener noreferrer">Club Deluxe</A>,{" "}
      <A href="https://www.dnalounge.com/" target="_blank" rel="noopener noreferrer">DNA Lounge</A>,{" "}
      <A href="http://www.thedoubledutch.com/" target="_blank" rel="noopener noreferrer" >Double Dutch</A>,{" "}
      <A href="http://www.elbo.com/" target="_blank" rel="noopener noreferrer">Elbo Room</A>,{" "}
      <A href="http://www.harlotsf.com/" target="_blank" rel="noopener noreferrer">Harlot</A>,{" "}
      <A href="https://sf.infusionlounge.com/" target="_blank" rel="noopener noreferrer">Infusion Lounge</A>,{" "}
      <A href="http://www.mercer-sf.com/" target="_blank" rel="noopener noreferrer">Mercer</A>,{" "}
      <A href="http://mezzaninesf.com/" target="_blank" rel="noopener noreferrer">Mezzanine</A>,{" "}
      <A href="http://www.monarchsf.com/" target="_blank" rel="noopener noreferrer">Monarch</A>,{" "}
      <A href="http://mrsmithssf.com/" target="_blank" rel="noopener noreferrer">Mr Smith’s</A>,{" "}
      <A href="http://www.rickshawstop.com/" target="_blank" rel="noopener noreferrer">Rickshaw Stop</A>,{" "}
      <A href="http://www.rubyskye.com/" target="_blank" rel="noopener noreferrer">Ruby Skye</A>,{" "}
      <A href="http://templesf.com/" target="_blank" rel="noopener noreferrer">Temple Nightclub</A>,{" "}
      The Comet Club,{" "}
      The EndUp,{" "}
      <A href="http://www.grandnightclub.com/" target="_blank" rel="noopener noreferrer">The Grand</A>{" "}
      and{" "}
      <A href="http://www.theindependentsf.com/" target="_blank" rel="noopener noreferrer">The Independent</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/clubs-lounges">
      <FlatButton
        style={{
          backgroundColor: "lightgrey",
          fontWeight: "500"
        }}
      >
        MAP
      </FlatButton>
    </Link>
    </Paragraph>
  </div>
	);

export default drinksAndEntertainmentSanFrancisco;
