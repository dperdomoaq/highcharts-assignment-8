Highcharts.chart('container', {

    title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
    },

    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1970 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1970
        }
    },

    series: [{
        name: 'Difference in deaths',
        data: [
            2071,2217,2166,2086,1485,1720,1660,2156,2259,2282,2156,1732,1391,1454,1558,1559,1194,1409,805,1769,2213,2354,2073,2566,2762,2666,2037,1815,2194,2114,2685,1429,1410,1336,1916,1964,1937,1276,1363,1467,2652,2694,2882,2951,2901,2809,2720,2807,2655,2756,3709,3588,3650

        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});