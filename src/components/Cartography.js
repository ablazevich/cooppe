// React
import React, { Component } from "react";

// Pigeon
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";

// Glamorous
import glamorous from "glamorous";

const MapContainer = glamorous.div({
  width: "100%",
  overflowX: "hidden",
  margin: "50px 0 0 0"
});

const H2 = glamorous.h2({
  margin: "0",
  padding: "10px 0 5px 0"
});

class Cartography extends Component {
  constructor(props) {
    super(props);
    var popUpArrayVar = [];
    this.props.geojson.markers.map(item =>
      popUpArrayVar.push(item.properties.popUp)
    );
    this.state = {
      marker: this.props.markerImg,
      markersArray: this.props.geojson.markers,
      popUpArray: popUpArrayVar,
      zoomHandler: this.props.zoom,
      viewportWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize() {
    this.setState({
      viewportWidth: window.innerWidth
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <MapContainer>
        <H2>{this.props.title}</H2>
        <Map
          defaultCenter={[
            this.props.geojson.center[0],
            this.props.geojson.center[1]
          ]}
          zoom={this.state.zoomHandler}
          width={this.state.viewportWidth}
          height={window.innerHeight - 137}
          zoomOnMouseWheel={true}
          mouseWheelMetaText={"use mouse wheel to zoom"}
          onClick={() => {
            var popUpArrayVar = [];
            this.state.popUpArray.map(() => {
              popUpArrayVar.push(false);
            });
            this.setState({ popUpArray: popUpArrayVar });
          }}
        >
          {this.state.markersArray.map((item, index) => {
            var imgId = index;
            return (
              <Overlay
                key={index}
                anchor={[
                  this.state.markersArray[index].geometry.coordinates[0],
                  this.state.markersArray[index].geometry.coordinates[1]
                ]}               
              >
                <div>
                  <img
                    src={this.state.marker}
                    alt="map marker"
                    id={imgId}
                    onClick={() => {
                      var popUpArrayVar = [];                   
                      this.state.popUpArray.map((currentItem, currentIndex) => {
                        if (currentIndex !== imgId) {
                          popUpArrayVar.push(false);
                        } else {
                          popUpArrayVar.push(true);
                        }
                      });
                      this.setState({ popUpArray: popUpArrayVar });
                    }}
                    style={{
                      width: "22px",
                      position: "absolute",
                      height: "40px",
                      transformOrigin: "center bottom",
                      transform:
                        this.state.popUpArray[index] === false
                          ? "translate(-45%, -85%)"
                          : "translate(-45%, -85%) scale(1.05)",
                      cursor: "pointer"
                    }}
                  />
                </div>               
              </Overlay>
                );
              })}
              {this.state.markersArray.map((item, index) => {
              var imgId = index;
              return (
              <Overlay
                key={index}
                anchor={[
                  this.state.markersArray[index].geometry.coordinates[0],
                  this.state.markersArray[index].geometry.coordinates[1]
                ]}  
              >
                <div
                  style={{
                    position: "absolute",
                    width: "200px",
                    bottom: "40px",
                    left: "-100px",
                    wordBreak: "keep-all",
                    boxSizing: "border-box",
                    padding: "15px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    cursor: "default",
                    textAlign: "center",
                    display:
                      this.state.popUpArray[index] === false ? "none" : "inline"
                  }}
                >
                  <a 
                    href={this.state.markersArray[index].properties.link} 
                    target="_blank"
                    id={imgId}
                    onClick={() => {
                      var popUpArrayVar = [];                   
                      this.state.popUpArray.map((currentItem, currentIndex) => {
                        if (currentIndex !== imgId) {
                          popUpArrayVar.push(false);
                        } else {
                          popUpArrayVar.push(true);
                        }
                      });
                      this.setState({ popUpArray: popUpArrayVar });
                    }}
                  >
                    <div>
                      {this.state.markersArray[index].properties.tag}
                    </div>
                  </a>
                </div>
              </Overlay>
              );
            })}    
        </Map>
      </MapContainer>
    );
  }
}

export default Cartography;
