import { ComposableMap, Geographies, Geography, ZoomableGroup, Annotation, Sphere, Graticule, Marker } from "react-simple-maps";
import {memo} from "react";
import deaths from "../utils/deaths";
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const newWorld = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m-simplified.json"
const us = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const asia = "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json"
const india = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-districts.json"
const World = ({setTooltipContent}) => {
    const randomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
    return(
    <div>
      <ComposableMap 
            projectionConfig={{
            rotate: [-60, 0, 0],
            scale: 100
            }}
            data-tip=""
        >
          <ZoomableGroup zoom={8} center={[80,20]} maxZoom={200}>
        <Geographies geography={newWorld}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo}
            onMouseEnter={() => {
                const { NAME } = geo.properties;
                setTooltipContent(`${NAME}`)
                deaths(NAME).then(cases=>{
                   setTooltipContent(`${NAME} - ${cases}`)
                  })
                ;
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              stroke="#000000"
              style={{
                default: {
                  fill: "whitesmoke",
                  outline: "none"
                },
                hover: {
                  fill: randomColor(),
                  outline: "none"
                },
                pressed: {
                    outline: "none"
                }
              }}
            />)
          }
        </Geographies>
        {/* <Marker coordinates={[83.4323, 27.6866]}>
        <circle r={0.8} fill="#7033ff" />
      </Marker>
          <Annotation
            subject={[83.4323,27.6866]}
            dx={0}
            dy={-100}
            curve={-1}
            connectorProps={{
              stroke: "#7033ff",
              strokeWidth: 1,
              strokeLinecap: "round",
            }}
          >
            <text  textAnchor="start" alignmentBaseline="end" fill="#101010">
              {"I'm here !!!"}
            </text>
          </Annotation> */}
          </ZoomableGroup>
      </ComposableMap>
    </div>
    );
}

export default memo(World);