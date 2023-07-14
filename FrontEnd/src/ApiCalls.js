import VueApexCharts from 'vue-apexcharts'

  export default {
    components: {
      apexchart: VueApexCharts
    },
    
    data () {
      return {        
        series: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21]
        }, 
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          stackType: '100%'
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: '100% Stacked Bar'
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        },
      },
      info: {
          alias:'',
          peers_count: 0,
          public_key: '',
        }
      }
    },
    
    mounted() {
        API.get('http://192.168.55.67:3000/api/getInfo')
        .then(response => {
          this.info.alias = response.data.alias;
          this.info.peers_count = response.data.peers_count;
          this.info.public_key = response.data.public_key;
          console.log(this.info); 
        });
    }
  }