import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ budget, width, height }) => {
  const [data, setData] = useState([]);
  const svgRef = useRef();

  useEffect(() => {
    if (budget) {
      d3.selectAll("svg > *").remove();
      const result = budget[0].map((key, index) => ({
        label: [key],
        value: budget[1][index],
      }));
      setData(result);
    }
  }, [budget]);


  useEffect(() => {
    if (!data || data.length === 0) return;
     
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

      // Create an array of labels for the color domain
    const labels = data.map((d) => d.label);
      svg.selectAll("*").remove()

    // Use a predefined color scheme for the chart
    // const colorScale = d3.scaleOrdinal().domain(labels).range(d3.schemeCategory10);
    const colorScale = d3.scaleOrdinal().domain(labels).range(['orangered', 'lightgreen', 'purple', 'fuchsia', 'cyan', 'gold', 'skyblue','yellow','green']);

    const pie = d3.pie().value((d) => d.value);
    const data_ready = pie(data);

    const radius = Math.min(width, height) / 2;
    const arc = d3.arc().innerRadius(radius * 0.5).outerRadius(radius * 0.8);

    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => colorScale(d.data.label[0]))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add polylines and labels
    const outerArc = d3.arc().innerRadius(radius * 0.9).outerRadius(radius * 0.9);

    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .enter()
      .append('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr('points', (d) => {
        const posA = arc.centroid(d);
        const posB = outerArc.centroid(d);
        const posC = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        posC[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        return [posA, posB, posC];
      });

    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
      .text((d) => d.data.label[0])
      .attr('transform', (d) => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style('text-anchor', (d) => (d.startAngle + (d.endAngle - d.startAngle) / 2 < Math.PI ? 'start' : 'end'))
      .attr('fill', 'black');
  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default DonutChart;
