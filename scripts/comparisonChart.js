let width = 0.50 * innerWidth
let height = 500
let padding = 100 // Change padding to margins

let xScale, yScale, xAxis, yAxis

let svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

function generateGraph() {
    svg.selectAll("*").remove()
    generateOpData()
    xScale = d3.scaleLinear()
        .domain([0, d3.max(opData, function(d) {
            return d[0]
        })])
        .range([padding, width - padding * 2])

    yScale = d3.scaleLinear()
        .domain([0, d3.max(opData, function(d) {
            return d[1]
        })])
        .range([height - padding, padding])

    svg.selectAll("circle")
        .data(opData)
        .enter()
        .append("circle")
        .attr("fill", "teal")
        .attr("cx", function(d) {
            return xScale(d[0])
        })
        .attr("cy", function(d) {
            return yScale(d[1])
        })
        .attr("r", 5)

    xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(5); // .tickValues(arr) allows for placing ticks at specific values
//  .tickFormat(formatAsPercentage); x-values will be listed as percentages

    yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5);

    svg.append("g") // "g" being a 'group element' which are used used to group other elements
        .attr("class", "axis") // Assign this element to the 'axis' class
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
}

function resetGraph() { svg.selectAll("*").remove() }