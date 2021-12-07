import React, { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import * as d3 from "d3";


function idioma() {
  let idioma = navigator.language || navigator.userLanguage;
  let variable = "Power usage (KwH) - Today"
  if (idioma.startsWith("es")) {
    variable = "Uso de poder (KwH) - Hoy";
  } 
  return variable
}

function Stats(props) {
    const d3graph = useRef(null);

    const tWidth = 500;
    const tHeight = 500;
    const radius = 180;

    const svg = d3
      .select(d3graph.current)
      .attr("width", tWidth)
      .attr("height", tHeight)
      .append("g")
      .attr("transform", `translate(${tWidth / 2}, ${tHeight / 2})`);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -radius - 30)
      .attr("text-anchor", "middle")
      .style("font-size", "20px")
      .text(idioma());

    const pieData = d3.pie().value((d) => d.powerUsage.value)(props.rooms);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);
    const colors = d3.scaleOrdinal().range(d3.schemeAccent);

    // tooltip
    const tooldiv = d3
      .select("#chartD3")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "pink");

    svg
      .append("g")
      .selectAll("path")
      .data(pieData)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colors(i))
      .attr("stroke", "white")
      .on("mousemove", function (e) {
        tooldiv
          .style("top", e.pageY - 30 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(
            `${d.data.name}: ${d.data.powerUsage.value} ${d.data.powerUsage.unit}`
          );
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });

  return (
    <div>
      <h2 style={{ textAlign: "left"}}>
        <FormattedMessage id="Stats" />
      </h2>
      <div id="grafica">
        <svg ref={d3graph}></svg>
      </div>
    </div>
  );
}

export default Stats;