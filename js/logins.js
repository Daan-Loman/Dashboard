        const xjaar = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        const yjaar = ['100', '70', '90', '70', '85', '60', '75', '60', '90', '80', '110', '100'];
        const xmaand = ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        const ymaand = ['80', '120', '105', '110', '95', '105', '90', '100', '80', '95', '70', '120'];
        const xuur = ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00'];
        const yuur = ['60', '80', '65', '130', '80', '105', '90', '130', '70', '115', '60', '130'];
        
        
        
        
        // Teken de grafiek
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        // ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        data: {
            labels: xjaar,
                    datasets: [{
                        label: 'Aantal logins',
                        data: yjaar,
                        backgroundColor: "rgba(168, 54, 155, 0.05)",
                        borderColor: 'rgba(168, 54, 155,1)',
                        borderWidth: 1
                        }]
                    },
                options:{
                    aspectRatio: 3.3,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        titleMarginBottom: 10,
                        titleFontColor: '#6e707e',
                        titleFontSize: 14,
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        intersect: false,
                        mode: 'index',
                        caretPadding: 10
                    },
                    scales: {
                      xAxes: [{
                        gridLines: {
                          display: false,
                          drawBorder: false
                        }
                      }],
                      yAxes: [{
                        gridLines: {
                          color: "rgb(234, 236, 244)",
                          zeroLineColor: "rgb(234, 236, 244)",
                          drawBorder: false,
                          autoSkip: true,
                          borderDash: [2],
                          zeroLineBorderDash: [2]
                        },
                        ticks: {
                          autoSkip: true,
                          maxTicksLimit: 5
                        }
                      }],
                    }
                }
    })
        
    
        // Buttons
    
        function perUur() {
                chart.data.datasets[0].data = yuur;
                chart.data.labels = xuur;
                chart.update();
              };
        
        function perMaand() {
            chart.clear();
                chart.data.datasets[0].data = ymaand;
                chart.data.labels = xmaand;
                chart.update();
              };
        
        function perJaar() {
                chart.data.datasets[0].data = yjaar;
                chart.data.labels = xjaar;
                chart.update();
              };


