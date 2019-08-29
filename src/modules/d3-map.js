import * as d3 from 'd3'
import * as topojson from 'topojson'

const D3MAP = {}

D3MAP.renderMap = function(){
	var margin = {top: 0, right: 0, bottom: 0, left: 0},
	            width = 960 - margin.left - margin.right,
	            height = 500 - margin.top - margin.bottom;

	var color = d3.scaleThreshold()
	    .domain([10000,100000,500000,1000000,5000000,10000000,50000000,100000000,500000000,1500000000])
	    .range(["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)","rgb(33,113,181)","rgb(8,81,156)","rgb(8,48,107)","rgb(3,19,43)"]);

	var path = d3.geoPath();

	var svg = d3.select("body")
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height)
	            .append('g')
	            .attr('class', 'map');

	var g = svg.append("g")

	var projection = d3.geoMercator()
	                   .scale(130)
	                   .translate( [width / 2, height / 1.5]);

	var path = d3.geoPath().projection(projection);

	const zoom = d3.zoom()
	    .scaleExtent([1, 40])
	    .translateExtent([[0,0], [width, height]])
	    .extent([[0, 0], [width, height]])
	    .on("zoom", function (){
	    g.attr("transform", d3.event.transform);
	});

	svg.call(zoom);

	Promise.all([
	    d3.json("assets/maps/world_countries.json"),
	    d3.json("assets/maps/china.json"),
	    d3.tsv("assets/data/world_population.tsv"),
	])
	.then(ready)
	.catch(err=>{
		console.log('d3 data fetching err', err)
	})

	function ready(values) {
		var [data, china, population] = values
	  var populationById = {};

	  population.forEach(function(d) { populationById[d.id] = +d.population; });
	  data.features.forEach(function(d) { d.population = populationById[d.id] });

	  //add china features into world map
	  data.features = data.features.concat(china.features)

	  g
	    .attr("class", "countries")
	    .selectAll("path")
	    .data(data.features)
	    .enter().append("path")
	      .attr("d", path)
	      .style("fill", function(d) { return color(populationById[d.id]); })
	      .style('stroke', 'white')
	      .style('stroke-width', 1.5)
	      .style("opacity",0.8)
	      // tooltips
	        .style("stroke","white")
	        .style('stroke-width', 0.3)
	        .on('mouseover',function(d){
	          d3.select(this)
	            .style("opacity", 1)
	            .style("stroke","white")
	            .style("stroke-width",1);
	        })
	        .on('mouseout', function(d){
	          d3.select(this)
	            .style("opacity", 0.8)
	            .style("stroke","white")
	            .style("stroke-width",0.3);
	        });

	  svg.append("path")
	      .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
	      .attr("class", "names")
	      .attr("d", path);
	}
}

export default D3MAP