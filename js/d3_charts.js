d3.csv("./data/data_dep.csv", function (error, data) {
    if (error) {
        console.error('Error getting or parsing the data.');
        throw error;
    }

    var svgTarget = d3.select("#chart1 svg");
    var chart = bubbleChart(svgTarget).strength(-50);

    d3.select('#chart1').datum(data).call(chart);

});



function bubbleChart(svgTarget) {
    var strength = -5,
        range = [5, 50],
        maxRadius = 6,
        columnForColors = "COBERTURA",
        columnForRadius = "POBLACION";



    function chart(selection) {
        var data = selection.datum();
        var svg = svgTarget;
        // var div = selection,
        //     svg = div.selectAll('svg');
        // svg.attr('width', width).attr('height', height);

        // svg.attr("height", h)
        //     .attr("width", w);

        var tooltip = selection
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("color", "white")
            .style("padding", "8px")
            .style("background-color", "#626D71")
            .style("border-radius", "6px")
            .style("text-align", "center")
            .style("font-family", "monospace")
            .style("width", "400px")
            .text("");


        var simulation = d3.forceSimulation(data)
            .force("charge", d3.forceManyBody().strength([strength]))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            // .force('collision', d3.forceCollide().radius(function(d) {
            //     return d.radius
            // }))
            // .force('charge', d3.forceManyBody().strength(5))
            // .force('center', d3.forceCenter(width / 2, height / 2))
            // .force('collision', d3.forceCollide().radius(function(d) {
            //     return d.radius
            // }))
            .on("tick", ticked);

        function ticked(e) {
            node.attr("cx", function(d) {
                return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });
        }


        var min = d3.min(data, function (d) {return +d[columnForColors]});
        var max = d3.max(data, function (d) {return +d[columnForColors]});

        // var colorCircles = d3.scaleOrdinal(d3.schemeCategory10);
        var colorCircles = d3.scaleSequential(d3.interpolateRdYlBu)
            .domain([min, max]);

        var min2 = d3.min(data, function (d) {return +d[columnForRadius]});
        var max2 = d3.max(data, function (d) {return +d[columnForRadius]});

        var scaleRadius = d3.scaleSqrt()
            .domain([min2, max2])
            .range(range);

        // var scaleRadius = d3.scaleLinear().domain([d3.min(data, function(d) {
        //     return +d[columnForRadius];
        // }), d3.max(data, function(d) {
        //     return +d[columnForRadius];
        // })]).range([5, 18]);

        var width = parseInt(svgTarget.style("width").slice(0, -2));
        var height = parseInt(svgTarget.style("height").slice(0, -2));

        var node = svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr('r', function(d) {
                return scaleRadius(d[columnForRadius])
            })
            .style("fill", function(d) {
                return colorCircles(d[columnForColors])
            })
            .attr('transform', 'translate(' + [0, height / 2] + ')')
            // .attr('transform', 'translate(-50%, -50%)')
        // .on("mouseover", function(d) {
        //     tooltip.html(d[columnForColors] + "<br>" + d.title + "<br>" + d[columnForRadius] + " hearts");
        //     return tooltip.style("visibility", "visible");
        // })
        // .on("mousemove", function() {
        //     return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
        // })
        // .on("mouseout", function() {
        //     return tooltip.style("visibility", "hidden");
        // });
    }

    // chart.width = function(value) {
    //     if (!arguments.length) {
    //         return width;
    //     }
    //     width = value;
    //     return chart;
    // };
    //
    // chart.height = function(value) {
    //     if (!arguments.length) {
    //         return height;
    //     }
    //     height = value;
    //     return chart;
    // };

    chart.strength = function (value) {
        if (!arguments.length) {
            return strength;
        }
        strength = value;
        return chart;
    };

    chart.columnForColors = function(value) {
        if (!arguments.columnForColors) {
            return columnForColors;
        }
        columnForColors = value;
        return chart;
    };

    chart.columnForRadius = function(value) {
        if (!arguments.columnForRadius) {
            return columnForRadius;
        }
        columnForRadius = value;
        return chart;
    };

    return chart;
}