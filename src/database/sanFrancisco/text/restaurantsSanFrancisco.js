// React
import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Style
import { Paragraph, A } from "../../textStyle";

const restaurantsSanFrancisco = (
  <div>
    <h3>Inexpensive ($)</h3>
    <Paragraph>
      <A href="http://www.alimentosf.com/" target="_blank" rel="noopener noreferrer">Alimento</A>,{" "}
      <A href="http://www.arizmendibakery.com/" target="_blank" rel="noopener noreferrer">Arizmendi Bakery</A>,{" "}
      Art's Cafe,{" "}
      Cafe Bunn Mi,{" "}
      Chabaa Thai Cuisine,{" "}
      Cholo Soy (Peruvian),{" "}
      Cordon Bleu,{" "}
      Eddie's Cafe (Soul Food),{" "}
      <A href="http://www.farmtablesf.com/" target="_blank" rel="noopener noreferrer">farm : table</A>,{" "}
      <A href="http://www.frenabakery.com/" target="_blank" rel="noopener noreferrer">Frena Bakery</A>{" "}(Kosher),{" "}
      <A href="http://www.eatatfreshroll.com/" target="_blank" rel="noopener noreferrer">Freshroll Vietnamese Rolls &#38; Bowls</A>,{" "}
      <A href="http://www.goldenboypizza.com/" target="_blank" rel="noopener noreferrer">Golden Boy Pizza</A>,{" "} 
      Golden Star Vietnamese Restaurant,{" "}
      Good Mong Kok Bakery (Chinese),{" "} 
      Hai Ky Mi Gia,{" "}
      <A href="http://hotsauceandpanko.com/" target="_blank" rel="noopener noreferrer">Hot Sauce and Panko To Go</A>,{" "}
      <A href="http://www.hrdcorp.com/" target="_blank" rel="noopener noreferrer">HRD</A>,{" "}
      <A href="http://www.oceanbeachdeli.com/" target="_blank" rel="noopener noreferrer">Kawika's Ocean Beach Deli</A>,{" "}
      <A href="http://kevinnoodlehouse.com/" target="_blank" rel="noopener noreferrer">Kevin's Noodle House</A>{" "}(Vietnamese),{" "} 
      Lime Tree Southeast Asian Kitchen,{" "}
      <A href="http://www.louscafesf.com/" target="_blank" rel="noopener noreferrer">Lou's Cafe</A>,{" "}
      <A href="https://www.milkbeansf.com/" target="_blank" rel="noopener noreferrer">Milkbean</A>,{" "} 
      Mission Banh Mi (Deli),{" "}
      <A href="http://www.muraccis.com/" target="_blank" rel="noopener noreferrer">Muracci's</A>,{" "}
      <A href="http://nickscrispytacos.com/" target="_blank" rel="noopener noreferrer">Nick's Crispy Tacos</A>{" "}(Mexican),{" "}
      Oasis Grill,{" "}
      <A href="http://www.pakwanrestaurant.com/" target="_blank" rel="noopener noreferrer">Pakwan Restaurant</A>,{" "} 
      Rhea's Deli &#38; Market,{" "}
      <A href="http://www.rosamundesausagegrill.com/" target="_blank" rel="noopener noreferrer">Rosamunde Sausage Grill</A>,{" "}
      Saigon Sandwich,{" "}
      <A href="http://www.shanghaidumplingking.com/" target="_blank" rel="noopener noreferrer">Shanghai Dumpling King</A>{" "}(Dim Sum),{" "}
      Sing Sing Sandwich Shop,{" "}
      <A href="http://www.sunrisedeli.net/" target="_blank" rel="noopener noreferrer">Sunrise Deli</A>{" "}(Mediterranean),{" "}
      <A href="http://superduperburgers.com/" target="_blank" rel="noopener noreferrer">Super Duper Burgers</A>,{" "}
      <A href="http://www.tacoreasf.com/" target="_blank" rel="noopener noreferrer">Tacorea</A>,{" "}
      <A href="http://www.theboysdeli.com/" target="_blank" rel="noopener noreferrer">The Boy's Deli</A>,{" "}
      <A href="http://www.hailthechairman.com/" target="_blank" rel="noopener noreferrer">The Chairman</A>{" "}(Taiwanese),{" "}
      The Codmother Fish and Chips,{" "}
      <A href="http://flyingfalafel.com/" target="_blank" rel="noopener noreferrer">The Flying Falafel</A>,{" "}
      <A href="http://thoroughbreadandpastry.com/" target="_blank" rel="noopener noreferrer">Thorough Bread &#38; Pastry</A>,{" "}
      <A href="http://tommysjoynt.com/" target="_blank" rel="noopener noreferrer">Tommy's Joynt</A>,{" "}
      <A href="http://tonyscoalfired.com/" target="_blank" rel="noopener noreferrer">Tony's Coal-Fired Pizza and Slice House</A>,{" "}
      <A href="http://www.trulymedsf.com/" target="_blank" rel="noopener noreferrer">Truly Mediterranean</A>,{" "}
      <A href="http://www.tselogs.com/" target="_blank" rel="noopener noreferrer">Tselogs</A>{" "}(Filipino),{" "}
      <A href="http://www.turtletowersf.com/" target="_blank" rel="noopener noreferrer">Turtle Tower SF</A>{" "}(Vietnamese),{" "}
      <A href="http://volcanocurry.blogspot.com/" target="_blank" rel="noopener noreferrer">Volcano</A>{" "}(Japanese),{" "}
      Wooly Pig Cafe,{" "}
      Yamo{" "}
      and{" "}
      <A href="http://zapizzasf.com/" target="_blank" rel="noopener noreferrer">Za Pizza</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/inexpensive">
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

    <h3>Moderately Expensive ($$)</h3>
    <Paragraph>
      <A href="https://www.abvsf.com/" target="_blank" rel="noopener noreferrer">ABV</A>{" "}(American),{" "}
      <A href="http://akikosrestaurant.com/" target="_blank" rel="noopener noreferrer">Akiko’s Restaurant</A>{" "}(Japanese),{" "}
      <A href="http://www.ameliewinebar.com/" target="_blank" rel="noopener noreferrer">Am&#233;lie</A>{" "}(French),{" "}
      <A href="http://www.caffebaonecci.com/" target="_blank" rel="noopener noreferrer">Baonecci Ristorante</A>{" "}(Italian),{" "}
      <A href="http://www.barbaccosf.com/" target="_blank" rel="noopener noreferrer">Barbacco</A>{" "}(Italian),{" "}
      <A href="http://belgasf.com/" target="_blank" rel="noopener noreferrer">Belga</A>,{" "}
      <A href="http://www.bellatrattoriasf.com/" target="_blank" rel="noopener noreferrer">Bella Trattoria</A>{" "}(Italian),{" "}
      <A href="http://thebuenavista.com/index1.html" target="_blank" rel="noopener noreferrer">Buena Vista Cafe</A>,{" "}
      <A href="http://www.burmasuperstar.com/301-clement-st-san-francisco/" target="_blank" rel="noopener noreferrer">Burma Superstar</A>,{" "}
      <A href="http://www.burmesekitchen.com/" target="_blank" rel="noopener noreferrer">Burmese Kitchen</A>,{" "}
      <A href="http://catheadsbbq.com/" target="_blank" rel="noopener noreferrer">CatHead’s BBQ</A>,{" "}
      <A href="http://causwells.com/" target="_blank" rel="noopener noreferrer">Causwells</A>{" "}(American),{" "}
      <A href="http://chezmamansf.com/" target="_blank" rel="noopener noreferrer">Chez Maman</A>,{" "}
      <A href="http://www.donpistos.com/" target="_blank" rel="noopener noreferrer">Don Pisto’s</A>{" "}(Mexican),{" "}
      <A href="http://fogharbor.com/" target="_blank" rel="noopener noreferrer">Fog Harbor Fish House</A>,{" "}
      <A href="http://www.frescasf.com/" target="_blank" rel="noopener noreferrer">Fresca</A>{" "}(Peruvian),{" "}
      <A href="https://www.giordanobros.com/" target="_blank" rel="noopener noreferrer">Giordano Bros</A>{" "}(Sandwiches),{" "}
      <A href="https://hogislandoysters.com/" target="_blank" rel="noopener noreferrer">Hog Island Oyster Co</A>,{" "}
      <A href="http://www.hogwashsf.com/" target="_blank" rel="noopener noreferrer">Hogwash</A>,{" "}
      <A href="http://www.hopsandhominy.com/" target="_blank" rel="noopener noreferrer">Hops &#38; Hominy</A>,{" "}
      Hunan Home’s Restaurant (Chinese),{" "}
      Il Pollaio (Italian),{" "}
      <A href="http://indianparadoxsf.com/" target="_blank" rel="noopener noreferrer">Indian Paradox</A>,{" "}
      <A href="http://www.izakayasozai.com/" target="_blank" rel="noopener noreferrer">Izakaya Sozai</A>{" "}(Japanese),{" "}
      <A href="https://kasaindian.com/" target="_blank" rel="noopener noreferrer">Kasa Indian Eatery</A>,{" "}
      <A href="http://www.kitchenistanbulsf.com/" target="_blank" rel="noopener noreferrer">Kitchen Istanbul</A>{" "}(Turkish),{" "}
      <A href="http://kitchenstorysf.com/" target="_blank" rel="noopener noreferrer">Kitchen Story</A>{" "}(American),{" "}
      <A href="http://www.lafusion-sf.com/index.html" target="_blank" rel="noopener noreferrer">La Fusi&#243;n</A>,{" "}
      <A href="http://lersros.com/" target="_blank" rel="noopener noreferrer">Lers Ros</A>{" "}(Thai),{" "}
      <A href="http://www.limonrotisserie.com/" target="_blank" rel="noopener noreferrer">Limon Rotisserie</A>,{" "}
      <A href="http://www.littleskilletsf.com/" target="_blank" rel="noopener noreferrer">Little Skillet</A>{" "}(Soul Food),{" "}
      <A href="http://marlowesf.com/" target="_blank" rel="noopener noreferrer">Marlowe</A>{" "}(American),{" "}
      <A href="http://nopalitosf.com/" target="_blank" rel="noopener noreferrer">Nopalito</A>{" "}(Mexican),{" "}
      <A href="http://parada22.com/" target="_blank" rel="noopener noreferrer">Parada 22</A>,{" "}
      <A href="https://pizzetta211.com/" target="_blank" rel="noopener noreferrer">Pizzetta 211</A>,{" "}
      <A href="http://www.ragazzasf.com/" target="_blank" rel="noopener noreferrer">Ragazza</A>,{" "}
      <A href="http://roamburgers.com/" target="_blank" rel="noopener noreferrer">Roam Artisan Burgers</A>,{" "}
      <A href="http://www.roosterandrice.com/" target="_blank" rel="noopener noreferrer">Rooster &#38; Rice</A>,{" "} 
      Ryoko’s (Japanese),{" "}
      San Tung (Chinese),{" "}
      <A href="http://www.sanraku.com/" target="_blank" rel="noopener noreferrer">Sanraku</A>{" "}(Japanese),{" "}
      <A href="http://skoolsf.com/" target="_blank" rel="noopener noreferrer">Skool</A>,{" "}
      <A href="https://www.sottomaresf.com/" target="_blank" rel="noopener noreferrer">Sotto Mare</A>{" "}(Italian),{" "}
      <A href="http://www.souvlasf.com/location/hayes-valley/" target="_blank" rel="noopener noreferrer">Souvla</A>{" "}(Greek),{" "}
      <A href="http://www.starbellysf.com/" target="_blank" rel="noopener noreferrer">Starbelly</A>{" "}(American),{" "}
      <A href="https://www.strawsf.com/" target="_blank" rel="noopener noreferrer">Straw</A>{" "}(American),{" "}
      <A href="http://www.suppenkuche.com/" target="_blank" rel="noopener noreferrer">Suppenk&#252;che</A>{" "}(German),{" "}
      Swan Oyster Depot,{" "}
      <A href="http://johncolins.com/takoba-sushi/" target="_blank" rel="noopener noreferrer">Takoba SF</A>{" "}(Japanese),{" "}
      <A href="http://alembicsf.com/" target="_blank" rel="noopener noreferrer">The Alembic</A>{" "}(American),{" "}
      <A href="http://www.tacoshopsf.com/" target="_blank" rel="noopener noreferrer">The Taco Shop at Underdog’s</A>{" "}(Mexican),{" "}
      <A href="http://www.tropisueno.com/" target="_blank" rel="noopener noreferrer">Tropisue&#241;o</A>{" "}(Mexican),{" "}
      <A href="http://www.trounormandsf.com/" target="_blank" rel="noopener noreferrer">Trou Normand</A>,{" "}
      <A href="http://woodhousefish.com/" target="_blank" rel="noopener noreferrer">Woodhouse Fish Company</A>{" "}
      and{" "}
      <A href="http://www.zerozerosf.com/" target="_blank" rel="noopener noreferrer">Zero Zero</A>{" "}(Italian).
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/moderate">
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

    <h3>Expensive ($$$)</h3>
    <Paragraph>
      <A href="https://www.a16pizza.com/" target="_blank" rel="noopener noreferrer">A 16</A>{" "}(Pizza),{" "}
      <A href="http://absinthe.com/" target="_blank" rel="noopener noreferrer">Absinthe Brasserie &#38; Bar</A>,{" "}
      <A href="http://www.albonarestaurant.com/" target="_blank" rel="noopener noreferrer">Albona Ristorante Istriano</A>{" "}(Italian),{" "}
      Allegro Romano (Italian),{" "}
      <A href="http://www.anchoroysterbar.com/" target="_blank" rel="noopener noreferrer">Anchor Oyster Bar</A>,{" "}
      <A href="http://barcrudo.com/" target="_blank" rel="noopener noreferrer">Bar Crudo</A>,{" "}
      <A href="http://www.bellotasf.com/" target="_blank" rel="noopener noreferrer">Bellota</A>,{" "}
      <A href="http://bistrocentralparcsf.com/" target="_blank" rel="noopener noreferrer">Bistro Central Parc</A>{" "}(French),{" "}
      <A href="http://www.boboquivaris.com/" target="_blank" rel="noopener noreferrer">Bobo's</A>{" "}(Steakhouse),{" "}
      <A href="http://www.bouchesf.com/" target="_blank" rel="noopener noreferrer">Bouche</A>{" "}(French),{" "}
      <A href="http://cafeclaude.com/" target="_blank" rel="noopener noreferrer" >Cafe Claude</A>{" "}(French), 
      Cafe Jacqueline (French),{" "} 
      <A href="https://www.chapeausf.com/" target="_blank" rel="noopener noreferrer">Chapeau!</A>{" "}(French),{" "}
      <A href="http://cotognasf.com/" target="_blank" rel="noopener noreferrer">Cotogna</A>{" "}(Italian),{" "}
      <A href="http://crabhouse39.com/" target="_blank" rel="noopener noreferrer">Crab House</A>{" "}(Seafood),{" "}
      <A href="http://www.delfinasf.com/" target="_blank" rel="noopener noreferrer">Delfina</A>{" "}(Pizza),{" "}
      DOSA on Fillmore (Indian),{" "}
      <A href="http://www.epicsteak.com/" target="_blank" rel="noopener noreferrer">EPIC Steak</A>,{" "}
      <A href="http://www.espetus.com/" target="_blank" rel="noopener noreferrer">Espetus Brazilian Steak House</A>,{" "}
      <A href="http://www.fireflysf.com/" target="_blank" rel="noopener noreferrer">Firefly Restaurant </A>{" "} (American),{" "}
      <A href="http://gitanerestaurant.com/" target="_blank" rel="noopener noreferrer">Gitane</A>,{" "}
      <A href="http://greensrestaurant.com/" target="_blank" rel="noopener noreferrer">Greens Restaurant</A>{" "}(Vegetarian),{" "}
      <A href="http://hillstonerestaurant.com/locations/sanfrancisco/" target="_blank" rel="noopener noreferrer">Hillstone</A>{" "}(American),{" "}
      House of Prime Rib (American),{" "}
      <A href="http://www.isarestaurant.com/" target="_blank" rel="noopener noreferrer">Isa Restaurant</A>{" "}(French),{" "}
      <A href="https://kokkari.com/" target="_blank" rel="noopener noreferrer">Kokkari Estiatorio</A>{" "}(Greek),{" "}
      <A href="http://www.sushikoo.com/" target="_blank" rel="noopener noreferrer">Koo</A>{" "}(Japanese),{" "}
      <A href="http://lamarsf.com/" target="_blank" rel="noopener noreferrer">La Mar Cebicher&#237;a Peruana</A>,{" "}
      <A href="http://lycsf.com/" target="_blank" rel="noopener noreferrer">Liholiho Yacht Club</A>,{" "}
      <A href="http://www.ardoisesf.com/" target="_blank" rel="noopener noreferrer">L’ardoise Bistro</A>{" "}(French),{" "}
      <A href="http://www.mathildesf.com/" target="_blank" rel="noopener noreferrer">Mathilde French Bistro</A>,{" "}
      <A href="http://nopasf.com/" target="_blank" rel="noopener noreferrer">Nopa</A>{" "}(American),{" "}
      <A href="http://www.ozumo.com/" target="_blank" rel="noopener noreferrer">Ozumo</A>{" "}(Japanese),{" "}
      <A href="http://parktavernsf.com/" target="_blank" rel="noopener noreferrer">Park Tavern</A>{" "}(American),{" "}
      <A href="http://www.perbaccosf.com/" target="_blank" rel="noopener noreferrer">Perbacco</A>{" "}(Italian),{" "}
      <A href="http://plajrestaurant.com/" target="_blank" rel="noopener noreferrer">Pl&#228;j Scandinavian Restaurant &#38; Bar</A>,{" "}
      <A href="http://revelrybistro.com/" target="_blank" rel="noopener noreferrer">Revelry Bistro</A>,{" "}
      <A href="http://www.richtablesf.com/" target="_blank" rel="noopener noreferrer">Rich Table</A>{" "}(American),{" "}
      <A href="https://www.roysrestaurant.com/locations/ca/san-francisco" target="_blank" rel="noopener noreferrer">Roy’s Restaurant</A>,{" "}
      <A href="https://salthousesf.com/" target="_blank" rel="noopener noreferrer">Salt House</A>{" "}(American),{" "}
      <A href="http://www.samsgrillsf.com/" target="_blank" rel="noopener noreferrer">Sam's Grill &#38; Seafood Restaurant</A>,{" "}
      <A href="http://scomas.com/" target="_blank" rel="noopener noreferrer">Scoma’s Restaurant</A>,{" "}
      <A href="http://www.sevenhillssf.com/" target="_blank" rel="noopener noreferrer">Seven Hills</A>,{" "}
      <A href="http://stonesthrowsf.com/" target="_blank" rel="noopener noreferrer">Stones Throw</A>{" "}(American),{" "}
      <A href="http://www.tadichgrill.com/" target="_blank" rel="noopener noreferrer">Tadich Grill</A>,{" "}
      <A href="http://thanhlongsf.com/" target="_blank" rel="noopener noreferrer">Thanh Long</A>,{" "}
      <A href="http://www.thehse.com/" target="_blank" rel="noopener noreferrer">The House</A>{" "}(Asian Fusion),{" "} 
      The Richmond (American),{" "}
      <A href="http://www.slanteddoor.com/" target="_blank" rel="noopener noreferrer">The Slanted Door</A>,{" "}
      <A href="http://www.tongaroom.com/" target="_blank" rel="noopener noreferrer">Tonga Room &#38; Hurricane Bar</A>{" "}(Asian Fusion),{" "}
      <A href="http://townhallsf.com/" target="_blank" rel="noopener noreferrer">Town Hall</A>{" "}(American),{" "}
      <A href="http://trestlesf.com/" target="_blank" rel="noopener noreferrer">Trestle</A>{" "}(American),{" "}
      <A href="http://www.tsubasasf.com/" target="_blank" rel="noopener noreferrer">Tsubasa Sushi</A>{" "}(Japanese),{" "}
      <A href="http://www.waterbarsf.com/" target="_blank" rel="noopener noreferrer">Waterbar</A>,{" "}
      <A href="http://wayfaretavern.com/"target="_blank"rel="noopener noreferrer">Wayfare Tavern</A>{" "}(American) and{" "}
      <A href="http://www.yanksing.com/home.php" target="_blank" rel="noopener noreferrer">Yank Sing</A>{" "}(Dim Sum).
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/expensive">
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

    <h3>High End ($$$$)</h3>
    <Paragraph>
      <A href="http://www.alexanderssteakhouse.com/" target="_blank" rel="noopener noreferrer">Alexander’s Steakhouse</A>,{" "}
      <A href="http://sushiansf.com/" target="_blank" rel="noopener noreferrer">An Japanese Restaurant</A>,{" "}
      <A href="http://www.boulevardrestaurant.com/" target="_blank" rel="noopener noreferrer">Boulevard</A>{" "}(American),{" "}
      <A href="http://www.farallonrestaurant.com/" target="_blank" rel="noopener noreferrer">Farallon</A>{" "}(Seafood),{" "}
      <A href="http://www.harrisrestaurant.com/" target="_blank" rel="noopener noreferrer">Harris’ Restaurant</A>{" "}(Steakhouse),{" "}
      <A href="http://hinatasf.com/" target="_blank" rel="noopener noreferrer">Hinata</A>{" "}(Japanese),{" "}
      <A href="http://www.ijjisf.com/" target="_blank" rel="noopener noreferrer">Ijji Sushi</A>{" "}(Japanese),{" "}
      Jai Yun (Chinese),{" "}
      <A href="http://www.jardiniere.com/" target="_blank" rel="noopener noreferrer">Jardiniere</A>,{" "}
      <A href="http://chefkhai.com/" target="_blank" rel="noopener noreferrer">Khai</A>{" "}(Vietnamese),{" "}
      <A href="http://kissseafoodsf.com/" target="_blank" rel="noopener noreferrer">Kiss Seafood</A>,{" "}
      <A href="http://kusakabe-sf.com/" target="_blank" rel="noopener noreferrer">KUSAKABE</A>{" "}(Japanese),{" "}
      <A href="http://www.lafolie.com/" target="_blank"rel="noopener noreferrer">La Folie</A>{" "}(French),{" "}
      <A href="http://www.maruyasf.com/" target="_blank" rel="noopener noreferrer">Maruya</A>{" "}(Japanese),{" "}
      <A href="http://www.nightbirdrestaurant.com/" target="_blank" rel="noopener noreferrer">Nightbird</A>{" "}(American),{" "}
      <A href="http://ossosteakhouse.com/" target="_blank" rel="noopener noreferrer">Osso Steakhouse</A>,{" "}
      <A href="http://www.ritzcarlton.com/en/hotels/california/san-francisco/dining/parallel-37" target="_blank" rel="noopener noreferrer">Parallel 37</A>{" "}(American),{" "}
      <A href="http://www.petitcrenn.com/" target="_blank" rel="noopener noreferrer">Petit Crenn</A>{" "}(French){" "}
      and{" "}
      <A href="http://www.rokaakor.com/" target="_blank" rel="noopener noreferrer">Roka Akor</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/high-end">
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

    <h3>Michelin Rated</h3>
    <Paragraph>
      <A href="https://www.benusf.com/" target="_blank" rel="noopener noreferrer">Benu</A>{" "}(&#9733;&#9733;&#9733;),{" "}
      <A href="http://quincerestaurant.com/" target="_blank" rel="noopener noreferrer">Quince</A>{" "}(&#9733;&#9733;&#9733;),{" "}
      <A href="http://www.saisonsf.com/" target="_blank" rel="noopener noreferrer">Saison</A>{" "}(&#9733;&#9733;&#9733; American),{" "}
      <A href="http://www.acquerello.com/" target="_blank" rel="noopener noreferrer">Acquerello</A>{" "}(&#9733;&#9733; Italian),{" "}
      <A href="https://www.ateliercrenn.com/" target="_blank" rel="noopener noreferrer">Atelier Crenn</A>{" "}(&#9733;&#9733; French),{" "}
      <A href="https://www.tajcamptonplace.com/dining/" target="_blank" rel="noopener noreferrer">Taj Campton Place</A>{" "}(&#9733;&#9733;),{" "}
      <A href="http://coirestaurant.com/" target="_blank" rel="noopener noreferrer">Coi</A>{" "}(&#9733;&#9733;),{" "}
      <A href="https://www.lazybearsf.com/" target="_blank" rel="noopener noreferrer">Lazy Bear</A>{" "}(&#9733;&#9733; American),{" "}
      <A href="https://www.alsplacesf.com/" target="_blank" rel="noopener noreferrer">Al's Place</A>{" "}(&#9733;),{" "}
      <A href="http://astersf.com/food/" target="_blank" rel="noopener noreferrer">Aster</A>{" "}(&#9733; American),{" "}
      <A href="http://www.californiossf.com/" target="_blank" rel="noopener noreferrer">Californios</A>{" "}(&#9733;),{" "}
      <A href="http://www.commonwealthsf.com/" target="_blank" rel="noopener noreferrer">Commonwealth</A>{" "}(&#9733; American),{" "}
      <A href="http://garydanko.com/" target="_blank" rel="noopener noreferrer">Gary Danko</A>{" "}(&#9733;),{" "}
      <A href="http://hashirisf.com/" target="_blank" rel="noopener noreferrer">Hashiri</A>{" "}(&#9733; Japanese),{" "}
      <A href="http://www.junisf.com/" target="_blank" rel="noopener noreferrer">j&#363;-ni</A>{" "}(&#9733; Japanese),{" "}
      <A href="http://www.keikoanobhill.com/" target="_blank" rel="noopener noreferrer">Keiko &#224; Nob Hill</A>{" "}(&#9733;),{" "}
      <A href="http://kinkhao.com/" target="_blank" rel="noopener noreferrer">Kin Khao</A>{" "}(&#9733; Thai),{" "}
      <A href="http://www.lordstanleysf.com/" target="_blank" rel="noopener noreferrer">Lord Stanley</A>{" "}(&#9733;),{" "}
      <A href="http://lucewinerestaurant.com/index.php" target="_blank" rel="noopener noreferrer">Luce</A>{" "}(&#9733; American),{" "}
      <A href="https://www.michaelmina.net/" target="_blank" rel="noopener noreferrer">Michael Mina</A>{" "}(&#9733; American),{" "}
      <A href="http://misterjius.com/" target="_blank" rel="noopener noreferrer">Mister Jiu's</A>{" "}(&#9733; Chinese),{" "}
      <A href="http://mouradsf.com/" target="_blank" rel="noopener noreferrer">Mourad</A>{" "}(&#9733;),{" "}
      <A href="http://nicosf.com/" target="_blank" rel="noopener noreferrer">Nico</A>{" "}(&#9733;),{" "}
      <A href="http://www.octavia-sf.com/" target="_blank" rel="noopener noreferrer">Octavia</A>{" "}(&#9733; American),{" "}
      <A href="http://www.omakasesf.com/" target="_blank" rel="noopener noreferrer">Omakase</A>{" "}(&#9733; Japanese),{" "}
      <A href="https://www.sonsanddaughterssf.com/" target="_blank" rel="noopener noreferrer">Sons &#38; Daughters</A>{" "}(&#9733; American),{" "}
      <A href="http://spqrsf.com/" target="_blank" rel="noopener noreferrer">SPQR</A>{" "}(&#9733; Italian),{" "}
      <A href="http://www.sprucesf.com/" target="_blank" rel="noopener noreferrer">Spruce</A>{" "}(&#9733; American),{" "}
      <A href="http://statebirdsf.com/" target="_blank" rel="noopener noreferrer">State Bird Provisions</A>{" "}(&#9733;),{" "}
      <A href="https://theprogress-sf.com/" target="_blank" rel="noopener noreferrer">The Progress</A>{" "}(&#9733; American) 
      and{" "}
      <A href="http://www.sushiwakosf.com/" target="_blank" rel="noopener noreferrer">Wako</A>{" "}(&#9733; Japanese).
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/michelin-rated">
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

    <h3>American New ($$)</h3>
    <Paragraph>
      <A href="https://www.abvsf.com/" target="_blank" rel="noopener noreferrer">ABV</A>,{" "}
      <A href="http://www.birbawine.com/" target="_blank" rel="noopener noreferrer">Birba</A>,{" "}
      <A href="http://causwells.com/" target="_blank" rel="noopener noreferrer">Causwells</A>,{" "}
      <A href="http://www.crepevine.com/" target="_blank" rel="noopener noreferrer">Crepevine Restaurant</A>,{" "}
      Eight AM,{" "}
      <A href="http://www.ellassanfrancisco.com/" target="_blank" rel="noopener noreferrer">Ella’s American Kitchen</A>,{" "}
      <A href="http://620-jones.com/" target="_blank" rel="noopener noreferrer">Jones</A>,{" "}
      <A href="http://kitchenstorysf.com/" target="_blank" rel="noopener noreferrer">Kitchen Story</A>,{" "}
      <A href="http://marlowesf.com/" target="_blank" rel="noopener noreferrer">Marlowe</A>,{" "}
      <A href="http://www.missionbeachcafesf.com/" target="_blank" rel="noopener noreferrer">Mission Beach Cafe</A>,{" "}
      Mymy,{" "}
      <A href="http://outerlandssf.com/" target="_blank" rel="noopener noreferrer">Outerlands</A>,{" "}
      <A href="http://picniconthird.com/" target="_blank" rel="noopener noreferrer">Picnic on Third</A>,{" "}
      <A href="http://www.saucesf.com/" target="_blank" rel="noopener noreferrer">Sauce</A>,{" "}
      <A href="http://www.starbellysf.com/" target="_blank" rel="noopener noreferrer">Starbelly</A>,{" "}
      <A href="https://www.strawsf.com/" target="_blank" rel="noopener noreferrer">Straw</A>,{" "}
      <A href="http://alembicsf.com/" target="_blank" rel="noopener noreferrer">The Alembic</A>{" "}
      and{" "}
      <A href="http://www.thetipsypigsf.com/" target="_blank" rel="noopener noreferrer">The Tipsy Pig</A>.
    </Paragraph>
    
    <h3>American New ($$$)</h3>
    <Paragraph>
      <A href="http://cockscombsf.com/" target="_blank" rel="noopener noreferrer">Cockscomb</A>,{" "}
      <A href="http://www.fireflysf.com/" target="_blank" rel="noopener noreferrer">Firefly Restaurant</A>,{" "}
      <A href="http://hillstonerestaurant.com/locations/sanfrancisco/" target="_blank" rel="noopener noreferrer">Hillstone</A>,{" "}
      <A href="http://nopasf.com/" target="_blank" rel="noopener noreferrer">Nopa</A>,{" "}
      <A href="http://parktavernsf.com/" target="_blank" rel="noopener noreferrer">Park Tavern</A>,{" "}
      <A href="https:/www.richtablesf.com/" target="_blank" rel="noopener noreferrer">Rich Table</A>,{" "}
      <A href="https://salthousesf.com/" target="_blank" rel="noopener noreferrer">Salt House</A>,{" "}
      <A href="http://statebirdsf.com/" target="_blank" rel="noopener noreferrer">State Bird Provisions</A>,{" "}
      <A href="http://stonesthrowsf.com/" target="_blank" rel="noopener noreferrer">Stones Throw</A>,{" "} 
      The Richmond,{" "}
      <A href="http://townhallsf.com/" target="_blank" rel="noopener noreferrer">Town Hall</A>{" "}
      and{" "}
      <A href="http://trestlesf.com/" target="_blank" rel="noopener noreferrer">Trestle</A>.
    </Paragraph>
    
    <h3>American Traditional ($$)</h3>
    <Paragraph>
      <A href="http://www.barneyshamburgers.com/" target="_blank" rel="noopener noreferrer">Barney’s Gourmet Hamburgers</A>,{" "}
      <A href="http://www.brickhousesf.com/" target="_blank" rel="noopener noreferrer">Brickhouse Cafe</A>,{" "}
      <A href="http://www.burgerbarsf.com/" target="_blank" rel="noopener noreferrer">Burger Bar</A>,{" "}
      Dottie’s True Blue Cafe,{" "}
      Eats,{" "}
      <A href="https://hollowcow.com/" target="_blank" rel="noopener noreferrer">Hollow Cow</A>,{" "}
      <A href="http://www.hopwaterdistribution.com/" target="_blank" rel="noopener noreferrer">Hopwater Distribution</A>,{" "}
      <A href="https://www.marengosf.com/" target="_blank" rel="noopener noreferrer">Marengo on Union</A>,{" "}
      <A href="http://melsdrive-in.com/" target="_blank" rel="noopener noreferrer">Mel’s Drive-In</A>,{" "}
      <A href="http://mosgourmethamburgers.com/" target="_blank" rel="noopener noreferrer">Mo’s Grill</A>,{" "}
      Orphan Andy’s,{" "}
      <A href="http://pscsf.com/" target="_blank" rel="noopener noreferrer">Pork Store Cafe</A>,{" "}
      <A href="http://www.redfordsf.com/" target="_blank" rel="noopener noreferrer">Redford</A>,{" "}
      <A href="http://www.stacksrestaurant.com/HP_static.html" target="_blank" rel="noopener noreferrer">Stacks</A>,{" "}
      <A href="http://www.sweetmaplesf.com/" target="_blank" rel="noopener noreferrer">Sweet Maple</A>,{" "}
      <A href="http://theamericansf.com/" target="_blank" rel="noopener noreferrer">The American Grilled Cheese Kitchen</A>,{" "}
      <A href="https://www.beachchalet.com/" target="_blank" rel="noopener noreferrer">The Beach Chalet Brewery &#38; Restaurant</A>{" "}
      and{" "}
      <A href="http://www.thelodgesf.com/" target="_blank" rel="noopener noreferrer">The Lodge on Haight</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/american">
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

    <h3>Chinese ($)</h3>
    <Paragraph>
      Delicious Dim Sum,{" "} 
      Good Luck Dim Sum,{" "}
      Good Mong Kok Bakery,{" "}
      <A href="http://gourmetcarousel.net/" target="_blank" rel="noopener noreferrer">Gourmet Carousel</A>, 
      Hunan Cafe 2,{" "}
      Kung Food,{" "}
      New D &#38; A Cafe,{" "}
      New Golden Daisy,{" "}
      <A href="http://www.redjaderestaurant.com/" target="_blank" rel="noopener noreferrer">Red Jade</A>, 
      Sam Wo Restaurant,{" "} 
      Sun Kwong Restaurant,{" "} 
      Wok Shop Cafe,{" "} 
      Wok Station{" "} 
      and{" "}
      Yan’s Kitchen.
    </Paragraph>
    
    <h3>Chinese ($$)</h3>
    <Paragraph>
      Boiling Hot Pot,{" "}
      <A href="http://dragonbeaux.com/" target="_blank" rel="noopener noreferrer">Dragon Beaux</A>,{" "}    
      <A href="http://www.hunanhomesrestaurant.com/" target="_blank" rel="noopener noreferrer">Hunan Home’s Restaurant</A>,{" "} 
      IPOT,{" "}
      <A href="http://www.lhklounge.com/" target="_blank" rel="noopener noreferrer">Lai Hong Lounge</A>,{" "}
      <A href="http://rnglounge.com/" target="_blank" rel="noopener noreferrer"> R&#38;G Lounge</A>,{" "}
      San Tung,{" "}
      Sichuan Home {" "}and{" "}
      Terra Cotta Warrior.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/chinese">
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

    <h3>Indian ($$)</h3>
    <Paragraph>
      <A href="http://www.august1five.com/" target="_blank" rel="noopener noreferrer">August 1 Five</A>,{" "}
      <A href="http://cafechaatsf.com/delivery.html" target="_blank" rel="noopener noreferrer">Chaat Corner</A>,{" "}
      <A href="http://curryleafinsf.com/" target="_blank" rel="noopener noreferrer">Curry Leaf</A>,{" "}
      <A href="http://greatindiasf.com/" target="_blank" rel="noopener noreferrer">Great India</A>,{" "}
      <A href="http://holykitchensf.us/" target="_blank" rel="noopener noreferrer">Holy Kitchen</A>,{" "}
      <A href="http://www.indiaclayoven.com/" target="_blank" rel="noopener noreferrer">India Clay Oven</A>,{" "}
      <A href="http://www.indianovensf.com/" target="_blank" rel="noopener noreferrer">Indian Oven</A>,{" "}
      <A href="http://indianparadoxsf.com/" target="_blank" rel="noopener noreferrer">Indian Paradox</A>,{" "}
      <A href="https://kasaindian.com/" target="_blank" rel="noopener noreferrer">Kasa Indian Eatery</A>,{" "}
      <A href="https://www.keevasf.com/" target="_blank" rel="noopener noreferrer">Keeva Indian Kitchen</A>,{" "}
      <A href="http://littledelhisf.us/" target="_blank" rel="noopener noreferrer">Little Delhi</A>,{" "}
      <A href="http://masaladosasf.us/" target="_blank" rel="noopener noreferrer">Masala Dosa</A>,{" "}
      <A href="http://melasf.com/" target="_blank" rel="noopener noreferrer">Mela Tandoori Kitchen</A>,{" "}
      <A href="http://www.newdelhirestaurant.com/" target="_blank" rel="noopener noreferrer">New Delhi Restaurant</A>,{" "}
      <A href="http://www.sfnewa.com/" target="_blank" rel="noopener noreferrer">Newa</A>,{" "}
      <A href="http://northindiasf.com/" target="_blank" rel="noopener noreferrer">North India Restaurant</A>,{" "}
      <A href="http://www.omindiancuisinesf.com/" target="_blank" rel="noopener noreferrer">Om Indian Cuisine</A>,{" "} 
      <A href="http://www.redchillisf.com/" target="_blank" rel="noopener noreferrer">Red Chilli</A>,{" "}
      <A href="http://www.saffrongrillsf.com/" target="_blank" rel="noopener noreferrer">Saffron Grill</A>,{" "}
      <A href="http://starindiarestaurant.com/" target="_blank" rel="noopener noreferrer">Star India Restaurant</A>,{" "}
      <A href="http://taraindian.com/" target="_blank" rel="noopener noreferrer">Tara Indian Cuisine</A>,{" "}
      <A href="https://www.urbancurry.com/" target="_blank" rel="noopener noreferrer">Urban Curry Restaurant</A>{" "}
      and{" "}
      <A href="http://vivagoaindiancuisine.com/" target="_blank" rel="noopener noreferrer">Viva Goa</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/indian">
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

    <h3>Italian ($$)</h3>
    <Paragraph>
      <A href="http://www.apertosf.com/" target="_blank" rel="noopener noreferrer">Aperto Restaurant</A>,{" "}
      <A href="http://www.caffebaonecci.com/" target="_blank" rel="noopener noreferrer" >Baonecci Ristorante</A>,{" "}
      <A href="http://www.barbaccosf.com/" target="_blank" rel="noopener noreferrer">Barbacco</A>,{" "}
      <A href="http://www.bellatrattoriasf.com/" target="_blank" rel="noopener noreferrer">Bella Trattoria</A>,{" "}
      <A href="http://www.caffemacaroni.com/" target="_blank" rel="noopener noreferrer">Caffe Macaroni</A>,{" "}
      <A href="http://cioppinos.letseat.at/" target="_blank" rel="noopener noreferrer">Cioppino’s</A>,{" "}
      <A href="http://www.delarosasf.com/" target="_blank" rel="noopener noreferrer">Delarosa</A>,{" "}
      <A href="http://finoristorante.com/" target="_blank" rel="noopener noreferrer">Fino Ristorante &#38; Bar</A>,{" "}
      <A href="http://franchinosf.com/"target="_blank" rel="noopener noreferrer">Franchino</A>, 
      Il Pollaio,{" "}
      <A href="http://inovinosf.com/" target="_blank" rel="noopener noreferrer">InoVino</A>,{" "}
      <A href="http://www.mamas-sf.com/" target="_blank" rel="noopener noreferrer">Mama’s On Washington Square</A>,{" "}
      <A href="http://nobhillcafe.com/" target="_blank" rel="noopener noreferrer">Nob Hill Cafe</A>,{" "}
      Piccolo Forno,{" "}
      <A href="https://www.sottomaresf.com/" target="_blank" rel="noopener noreferrer">Sotto Mare</A>,{" "}
      <A href="http://www.thestinkingrose.com/sf/index.html" target="_blank" rel="noopener noreferrer">The Stinking Rose</A>,{" "}
      <A href="http://www.tommasos.com/" target="_blank" rel="noopener noreferrer">Tommaso’s Ristorante Italiano</A>,{" "}
      <A href="http://www.trattoriacontadina.com/" target="_blank" rel="noopener noreferrer">Trattoria Contadina</A>,{" "}
      <A href="http://www.zerozerosf.com/" target="_blank" rel="noopener noreferrer">Zero Zero</A>{" "}
      and{" "}
      <A href="http://www.etuttoqua.com/no_flash.php" target="_blank" rel="noopener noreferrer">&#200; Tutto Qua</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/italian">
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

    <h3>Japanese ($$)</h3>
    <Paragraph>
      <A href="http://akikosrestaurant.com/" target="_blank" rel="noopener noreferrer">Akiko’s Restaurant</A>,{" "}
      <A href="http://www.delicasf.com/" target="_blank" rel="noopener noreferrer">Delica</A>,{" "}
      <A href="http://www.domosf.com/" target="_blank" rel="noopener noreferrer">Domo</A>,{" "}
      <A href="https://ebisusushi.com/" target="_blank" rel="noopener noreferrer">Ebisu</A>, 
      Eiji,{" "}
      <A href="https://elephantsushi.com/" target="_blank" rel="noopener noreferrer">Elephant Sushi</A>,{" "}
      <A href="https://www.ginzasanfrancisco.com/" target="_blank" rel="noopener noreferrer">Ginza Sushi &#38; Sake</A>, 
      Hot Zushi,{" "}
      <A href="http://www.izakayasozai.com/" target="_blank" rel="noopener noreferrer">Izakaya Sozai</A>,{" "}
      <A href="https://www.katanayausa.com/" target="_blank" rel="noopener noreferrer">Katana-Ya</A>,{" "} 
      Marufuku Ramen,{" "}
      <A href="http://mensho.tokyo/" target="_blank" rel="noopener noreferrer">Mensho Tokyo</A>,{" "}
      <A href="http://www.nabesf.com/" target="_blank" rel="noopener noreferrer">Nabe</A>,{" "}
      <A href="http://narasf.com/" target="_blank" rel="noopener noreferrer">Nara Restaurant &#38; Sake Bar</A>,{" "} 
      Okina Sushi,{" "}
      Ryoko’s,{" "} 
      Saiwaii Ramen,{" "}
      <A href="http://www.sanraku.com/" target="_blank" rel="noopener noreferrer">Sanraku</A>,{" "}
      Shizen Vegan Sushi Bar &#38; Izakaya,{" "}
      <A href="http://sushibistro.com/" target="_blank" rel="noopener noreferrer">Sushi Bistro</A>, 
      Sushi Zone,{" "}
      <A href="https://www.sushirrito.com/" target="_blank" rel="noopener noreferrer">Sushirrito</A>, 
      Suzu Noodle House,{" "}
      <A href="http://johncolins.com/takoba-sushi/" target="_blank" rel="noopener noreferrer">Takoba SF</A>,{" "}
      <A href="http://www.tanpoposf.com/" target="_blank" rel="noopener noreferrer">Tanpopo</A>,{" "}
      Wayo Sushi and{" "}
      <A href="http://www.warakuus.com/" target="_blank" rel="noopener noreferrer">Waraku</A>.
      </Paragraph>
    
    <h3>Japanese ($$$)</h3>
    <Paragraph>
      <A href="http://www.sushikoo.com/" target="_blank" rel="noopener noreferrer">Koo</A>, 
      Okoze Sushi,{" "}
      <A href="http://www.ozumo.com/" target="_blank" rel="noopener noreferrer">Ozumo</A>,{" "}
      <A href="http://akaisarusf.com/" target="_blank" rel="noopener noreferrer">Saru Sushi Bar</A>, 
      Tekka Japanese Restaurant,{" "}
      <A href="http://www.tsubasasf.com/" target="_blank" rel="noopener noreferrer">Tsubasa Sushi</A>{" "}
      and{" "}
      <A href="http://www.zushipuzzle.com/" target="_blank" rel="noopener noreferrer">Zushi Puzzle</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/japanese">
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

    <h3>Mexican ($)</h3>
    <Paragraph>
      El Castillito,{" "}
      El Rinc&#243;n Yucateco,{" "}
      Gordo Taqueria,{" "}
      <A href="http://nickscrispytacos.com/" target="_blank" rel="noopener noreferrer">Nick’s Crispy Tacos</A>,{" "}
      <A href="http://smpanchovilla.com/" target="_blank" rel="noopener noreferrer">Pancho Villa Taqueria</A>,{" "}
      <A href="http://www.panuchossf.com/" target="_blank" rel="noopener noreferrer">Panucho’s</A>,{" "}
      <A href="http://www.taquerialacumbre.com/" target="_blank" rel="noopener noreferrer">Taqueria La Cumbre</A>{" "}
      and{" "}
      <A href="http://www.taquerialoscoyotes.com/" target="_blank" rel="noopener noreferrer">Taqueria Los Coyotes</A>.
    </Paragraph>
    
    <h3>Mexican ($$)</h3>
    <Paragraph>
      <A href="http://www.colibrimexicanbistro.com/" target="_blank" rel="noopener noreferrer">Colibri Mexican Bistro</A>,{" "}
      <A href="http://www.donpistos.com/" target="_blank" rel="noopener noreferrer">Don Pisto’s</A>,{" "}
      <A href="https://www.garaje475.com/" target="_blank" rel="noopener noreferrer">Garaje</A>,{" "}
      Garajito,{" "}
      <A href="http://gracias-madre.com/" target="_blank" rel="noopener noreferrer">Gracias Madre</A>,{" "}
      <A href="http://nopalitosf.com/" target="_blank" rel="noopener noreferrer">Nopalito</A>,{" "}
      <A href="http://www.padrecitosf.com/" target="_blank" rel="noopener noreferrer">Padrecito</A>,{" "}
      Poc-Chuc,{" "}
      Puerto Alegre,{" "}
      <A href="http://www.sfregalito.com/" target="_blank" rel="noopener noreferrer">Regalito Rosticeria</A>,{" "}
      <A href="http://tacolicious.com/" target="_blank" rel="noopener noreferrer">Tacolicious</A>,{" "}
      The Castro Republic,{" "}
      <A href="http://www.thelittlechihuahua.com/" target="_blank" rel="noopener noreferrer">The Little Chihuahua</A>,{" "}
      <A href="http://www.tacoshopsf.com/" target="_blank" rel="noopener noreferrer">The Taco Shop At Underdog’s</A>,{" "}
      <A href="http://sabormexicano.com/" target="_blank" rel="noopener noreferrer">Tlaloc Sabor Mexicano</A>,{" "}
      <A href="http://tressf.com/" target="_blank" rel="noopener noreferrer"> Tres Tequila Lounge &#38; Mexican Kitchen</A>{" "}
      and{" "}
      <A href="http://www.tropisueno.com/" target="_blank" rel="noopener noreferrer">Tropisue&#241;o</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/mexican">
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

    <h3>Pizza ($$)</h3>
    <Paragraph>
      <A href="http://arinell-pizza.com/" target="_blank" rel="noopener noreferrer">Arinell Pizza</A>,{" "}
      <A href="http://www.caffebaonecci.com/" target="_blank" rel="noopener noreferrer">Baonecci Ristorante</A>,{" "}
      <A href="http://www.calzonesf.com/" target="_blank" rel="noopener noreferrer">Calzone’s</A>,{" "}
      <A href="http://www.sfcapos.com/" target="_blank" rel="noopener noreferrer">Capo’s Chicago Pizza</A>,{" "}
      <A href="http://www.carmelpizzaco.com/" target="_blank" rel="noopener noreferrer">Carmel Pizza Company</A>,{" "}
      <A href="http://www.delarosasf.com/" target="_blank" rel="noopener noreferrer">Delarosa</A>,{" "}
      <A href="http://www.gasparespizzeria.com/" target="_blank" rel="noopener noreferrer">Gaspare’s Pizza House &#38; Italian Restaurant</A>,{" "}
      Il Casaro Pizzeria &#38; Mozzarella Bar,{" "}
      <A href="https://www.littlestarpizza.com/" target="_blank" rel="noopener noreferrer">Little Star Pizza</A>,{" "}
      <A href="http://www.luisaspizzapasta.com/" target="_blank" rel="noopener noreferrer">Luisa’s Pizza And Pasta</A>,{" "}
      <A href="http://www.montesacrosf.com/" target="_blank" rel="noopener noreferrer">Montesacro Pinseria-Enoteca</A>,{" "}
      Pasquale’s Pizza,{" "}
      <A href="http://www.paulinespizza.com/" target="_blank" rel="noopener noreferrer">Pauline’s Pizza &#38; Wine Bar</A>, 
      Pazzia Restaurant &#38; Pizzeria,{" "}
      Piccolo Forno,{" "}
      <A href="http://www.tommasos.com/" target="_blank"rel="noopener noreferrer">Tommaso’s Ristorante Italiano</A>,{" "}
      <A href="http://tonyspizzanapoletana.com/" target="_blank" rel="noopener noreferrer">Tony’s Pizza Napoletana</A>,{" "}
      <A href="http://www.unclevitos.com/" target="_blank" rel="noopener noreferrer">Uncle Vito’s Pizza</A>,{" "}
      <A href="http://www.uvaenoteca.com/" target="_blank" rel="noopener noreferrer">Uva Enoteca</A>,{" "}
      Victor’s Pizza{" "}and{" "}
      <A href="http://www.zerozerosf.com/" target="_blank" rel="noopener noreferrer">Zero Zero</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/pizza">
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

    <h3>Seafood ($$)</h3>
    <Paragraph>
      <A href="http://aliotos.com/" target="_blank" rel="noopener noreferrer">Alioto’s Restaurant</A>,{" "}
      <A href="http://www.caffebaonecci.com/" target="_blank" rel="noopener noreferrer">Baonecci Ristorante</A>,{" "}
      <A href="http://www.cliffhouse.com/home/index.html" target="_blank" rel="noopener noreferrer">Bistro At The Cliff House</A>,{" "}
      <A href="http://www.caffesportsf.com/" target="_blank" rel="noopener noreferrer">Caffe Sport</A>,{" "}
      <A href="http://cioppinos.letseat.at/" target="_blank" rel="noopener noreferrer">Cioppino’s</A>,{" "}
      <A href="http://fogharbor.com/" target="_blank" rel="noopener noreferrer">Fog Harbor Fish House</A>,{" "}
      <A href="http://www.greateasternsf.com/" target="_blank" rel="noopener noreferrer">Great Eastern Restaurant</A>,{" "}
      <A href="https://hogislandoysters.com/" target="_blank" rel="noopener noreferrer">Hog Island Oyster Co</A>,{" "}
      <A href="http://missionstreetoysterbarsf.com/" target="_blank" rel="noopener noreferrer">Mission Street Oyster Bar &#38; Seafood Restaurant</A>,{" "}
      <A href="http://originaljoessf.com/" target="_blank" rel="noopener noreferrer">Original Joe’s</A>,{" "}
      <A href="http://www.pacificcafesf.com/" target="_blank" rel="noopener noreferrer">Pacific Cafe</A>,{" "}
      <A href="https://pacificcatch.com/locations/sf-chestnut-st/" target="_blank" rel="noopener noreferrer">Pacific Catch</A>,{" "}
      <A href="http://pier23cafe.com/" target="_blank" rel="noopener noreferrer">Pier 23 Cafe</A>,{" "}
      <A href="http://piermarket.com/" target="_blank" rel="noopener noreferrer">Pier Market Seafood Restaurant</A>,{" "}
      <A href="http://www.ploufsf.com/" target="_blank" rel="noopener noreferrer">Plouf</A>,{" "}
      <A href="http://www.ppqcrab.com/" target="_blank" rel="noopener noreferrer">PPQ Dungeness Island</A>,{" "}
      <A href="http://rnglounge.com/" target="_blank" rel="noopener noreferrer">R&#38;G Lounge</A>,{" "}
      <A href="http://skoolsf.com/" target="_blank" rel="noopener noreferrer">Skool</A>,{" "}
      <A href="https://www.sottomaresf.com/" target="_blank" rel="noopener noreferrer">Sotto Mare</A>, 
      Swan Oyster Depot,{" "}
      <A href="http://www.thestinkingrose.com/sf/index.html" target="_blank" rel="noopener noreferrer">The Stinking Rose</A>,{" "}
      <A href="http://www.tommasos.com/" target="_blank" rel="noopener noreferrer">Tommaso’s Ristorante Italiano</A>,{" "}
      <A href="http://woodhousefish.com/" target="_blank" rel="noopener noreferrer">Woodhouse Fish Company</A>{" "}
      and{" "}
      <A href="http://www.zandyrestaurant.com/en/index.html?srccode=yelp_track" target="_blank" rel="noopener noreferrer">Z &#38; Y Restaurant</A>.
    </Paragraph>
    
    <h3>Seafood ($$$)</h3>
    <Paragraph>
      <A href="http://anchorandhopesf.com/" target="_blank" rel="noopener noreferrer">Anchor &#38; Hope</A>,{" "}
      <A href="http://www.anchoroysterbar.com/" target="_blank" rel="noopener noreferrer">Anchor Oyster Bar</A>,{" "}
      <A href="http://barcrudo.com/" target="_blank" rel="noopener noreferrer">Bar Crudo</A>,{" "}
      <A href="http://www.bellotasf.com/" target="_blank" rel="noopener noreferrer">Bellota</A>,{" "}
      <A href="http://crabhouse39.com/" target="_blank" rel="noopener noreferrer">Crab House</A>,{" "}
      <A href="http://www.franciscancrabrestaurant.com/" target="_blank" rel="noopener noreferrer">Franciscan Crab Restaurant</A>,{" "}
      <A href="http://lamarsf.com/" target="_blank" rel="noopener noreferrer">La Mar Cebicher&#237;a Peruana</A>,{" "}
      <A href="http://lycsf.com/" target="_blank" rel="noopener noreferrer">Liholiho Yacht Club</A>,{" "}
      <A href="http://scomas.com/" target="_blank" rel="noopener noreferrer">Scoma’s Restaurant</A>,{" "}
      <A href="http://www.sevenhillssf.com/" target="_blank" rel="noopener noreferrer">Seven Hills</A>,{" "}
      <A href="http://www.tadichgrill.com/" target="_blank" rel="noopener noreferrer">Tadich Grill</A>,{" "}
      <A href="http://thanhlongsf.com/" target="_blank" rel="noopener noreferrer">Thanh Long</A>{" "}
      and{" "}
      <A href="http://www.waterbarsf.com/" target="_blank" rel="noopener noreferrer">Waterbar</A>.
    </Paragraph>
    <Paragraph>
    <Link to="/san-francisco/seafood">
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

    <h3>Steakhouses ($$$)</h3>
    <Paragraph>
      <A href="http://www.alfredssf.com/" target="_blank" rel="noopener noreferrer">Alfred’s Steakhouse</A>,{" "}
      <A href="http://www.boboquivaris.com/" target="_blank" rel="noopener noreferrer">Bobo’s</A>,{" "}
      <A href="http://bobs-steakandchop.com/" target="_blank" rel="noopener noreferrer">Bob’s Steak &#38; Chop House</A>,{" "}
      <A href="http://www.epicsteak.com/" target="_blank" rel="noopener noreferrer">EPIC Steak</A>,{" "}
      <A href="http://www.espetus.com/" target="_blank" rel="noopener noreferrer">Espetus Brazilian Steak House</A>,{" "}
      <A href="https://fogodechao.com/" target="_blank" rel="noopener noreferrer">Fogo de Ch&#227;o Brazilian Steakhouse</A>,{" "}
      House of Prime Rib,{" "}
      <A href="https://www.izzyssteaks.com/" target="_blank" rel="noopener noreferrer">Izzy’s Steak &#38; Chop House</A>,{" "}
      <A href="https://hotel.marineclub.org/" target="_blank" rel="noopener noreferrer">Leatherneck Steakhouse</A>,{" "}
      
      <A href="http://www.rokaakor.com/" target="_blank" rel="noopener noreferrer">Roka Akor</A>{" "}
      and{" "}
      <A href="https://www.roysrestaurant.com/" target="_blank" rel="noopener noreferrer">Roy’s Restaurant</A>.
      </Paragraph>
      <Paragraph>
      <Link to="/san-francisco/steakhouses">
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

export default restaurantsSanFrancisco;
