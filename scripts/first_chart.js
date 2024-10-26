Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Starfruit','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Mike and Bob\'s house'
      }
    },
    series: [{
      name: 'Mike',
      data: [6, 1, 0, 4]
    }, {
      name: 'Bob',
      data: [6, 5, 7, 3]
    }]
  });