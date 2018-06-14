 var myChart = echarts.init(document.getElementById('main'));  
        option = {  
    title: {  
        
        
        sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',  
        left: 'center',  
        top: 'top'  
    },  
   /* tooltip: {  
        trigger: 'item',  
        formatter: function (params) {  
            var value = (params.value + '').split('.');  
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')  
                    + '.' + value[1];  
            return params.seriesName + '<br/>' + params.name + ' : ' + value;  
        }  
    },*/  
    visualMap: {  
        min: 0,  
        max: 0,  
        text:['High','Low'],  
        realtime: false,  
        calculable: false, 
        show: false, 
        color: ['#ccc','#346cb6','lightskyblue']  
    },  
    series: [  
        {  
            name: 'World Population (2010)',  
            type: 'map',  
            mapType: 'world',  
            roam: false, //禁止地图缩放和平移 
            itemStyle:{  
                emphasis:{label:{show:true}}  
            },
            zoom:1.1,  
            data:[    
                {name: 'Argentina', value: 40374.224},  
                {name: 'Australia', value: 22404.488},  
                {name: 'Austria', value: 8401.924},   
                {name: 'Belgium', value: 10941.288},   
                {name: 'Brazil', value: 195210.154},   
                {name: 'Canada', value: 34126.24},  
                {name: 'Switzerland', value: 7830.534},  
                {name: 'China', value: 1359821.465},   
                {name: 'Germany', value: 83017.404},  
                {name: 'Denmark', value: 5550.959},    
                {name: 'Spain', value: 46182.038},  
                {name: 'Finland', value: 5367.693},   
                {name: 'France', value: 63230.866},    
                {name: 'Indonesia', value: 240676.485},  
                {name: 'India', value: 1205624.648}, 
                {name: 'Iceland', value: 318.042},  
                {name: 'Israel', value: 7420.368},  
                {name: 'Italy', value: 60508.978},   
                {name: 'Japan', value: 127352.833},  
                {name: 'Kazakhstan', value: 15921.127},    
                {name: 'Korea', value: 51452.352},
                {name: 'Dem. Rep. Korea', value: 1.468},   
                {name: 'Sri Lanka', value: 20758.779},   
                {name: 'Mexico', value: 117886.404},   
                {name: 'Mongolia', value: 2712.738}, 
                {name: 'Malaysia', value: 28275.835},   
                {name: 'Netherlands', value: 16615.243},  
                {name: 'Norway', value: 4891.251},  
                {name: 'New Zealand', value: 4368.136},
                {name: 'Nigeria', value: 159707.78},  
                {name: 'Poland', value: 38198.754},    
                {name: 'Portugal', value: 10589.792},   
                {name: 'Russia', value: 21861.476},    
                {name: 'Sweden', value: 9382.297},   
                {name: 'Thailand', value: 66402.316},
                {name: 'Kenya', value: 40909.194},   
                {name: 'Turkey', value: 72137.546}, 
                {name: 'Egypt', value: 78075.705},
                {name: 'Uganda', value: 33987.213},
                {name: 'Tanzania', value: 44973.33},  
                {name: 'United States', value: 312247.116},
                {name: 'United Kingdom', value: 62066.35},
                {name: 'Ireland', value: 4467.561},    
                {name: 'Vietnam', value: 89047.397}   
            ]  
        }  
    ]  
};  
 myChart.setOption(option);  
  