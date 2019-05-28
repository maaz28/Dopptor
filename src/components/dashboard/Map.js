import React from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import data from '../../data/world-50m-simplified.json'

export default function Map() {
  return (
    <ComposableMap width={400} height={300}>
      <ZoomableGroup>
        <Geographies geography={data}>
          {(geographies, projection) => geographies.map((geography, i) => (
            <Geography
              key={i}
              geography={geography}
              projection={projection}
              // onMouseMove={this.handleMove}
              // onMouseLeave={this.handleLeave}
              style={{
                default: {
                  fill: "#ECEFF1",
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none",
                },
                hover: {
                  fill: "#607D8B",
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none",
                },
                pressed: {
                  fill: "#FF5722",
                  stroke: "#607D8B",
                  strokeWidth: 0.75,
                  outline: "none",
                },
              }}
            />
          ))}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}
