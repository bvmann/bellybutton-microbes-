    function start(){
    d3.json("data/samples.json").then((data)=>{
   // console.log(data)
    var names = data.names;
    //console.log(names)
    var dropDown= d3.select("#selDataset");
    dropDown.selectAll("option")
        .data(names)
        .enter()
        .append("option")
        .text(function(d) {
            return `${d}`
        });
    });
};
    function optionChanged(x){
        //console.log(x);
        d3.json("data/samples.json").then((data)=>{
            var samples= data.samples;
            //console.log(samples)
            var participant =  samples.filter(specimen => specimen.id==x);
            //console.log(participant)
           
            var values0 = participant.map(s => s.sample_values);
            var otu_id0= participant.map(s=>s.otu_ids);
            var otu_labels0 = participant.map(s=>s.otu_labels);
            //console.log(values0[0])
            var values = values0[0].slice(0,10);
            var otu_id =otu_id0[0].slice(0,10);
            var otu_labels=otu_labels0[0].slice(0,10);
            var otu_identity = otu_id.map(id => id.toString()).reverse();
           
            console.log (otu_id)
            console.log(values)
            console.log(otu_identity)
            console.log(otu_labels)
           
           plots(otu_identity,values,otu_labels);
        });
    }

    function plots (otu_identity,values,otu_labels){
                   
            var trace1 = [{
                type: 'bar',
                y:otu_identity,
                
                x:values.reverse(),     
                text:otu_labels,
                marker: {
                    color: "green",
                    width: 10
                    
                },
                orientation: "h"
            }];
            ;
            var hbar = {
                 
                margin : { t: 50, l: 100},
                
                yaxis: {
                    title : "OTU ID's",
                    type : "category"
                    
                    
                    
                }
            }
            
            Plotly.newPlot('bar', trace1,hbar);

            var = pie 

            
        };    

    
start();