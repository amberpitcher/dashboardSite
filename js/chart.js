// CHART COMPONENT

var ctx = document.getElementById("myChart").getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [28, 72],

             backgroundColor: [
                '#1c998a',
                'rgba(255,255,255,0.6)',
            ],

            hoverBorderColor: ['transparent', 'transpatent'],

            borderColor: ['transparent', 'transpatent'],
        }],
    },

    options:{
        cutoutPercentage: '70'
    }
});

Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = 25;
    ctx.font = fontSize + "px Lato";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    var text = "28%",
        textX = width / 2.26,
        textY = height / 1.85;

    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});