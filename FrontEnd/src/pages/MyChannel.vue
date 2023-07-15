<template>
  <div class="content">
    <div class="container-fluid">
          <div class="row" style="margin-bottom: 2rem ">        
        
        <div class="col-md-4">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link btn btn-success" href="#">{{ stateNode }}<span class="badge badge-light">{{this.info.peers_count}} peers</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Well Balanced <span class="badge badge-secondary"></span></a>
              </li>
            </ul>
            <p>
              BTC: 0.0007655 / USD: 23.41
            </p>
            <p>
              Total active Channels: {{ this.info.num_active_channels }}
            </p>
            <h1>
              {{ this.info.capacity }} sats
            </h1>
            

            <div class="progress" style="margin-bottom: 3%;">
              <div class="progress-bar w-75 progress-bar-striped progress-bar-animated bg-success"></div>
            </div>
            <p>
              105 payments
            </p>
          </div>
            
            <div class="col-md-4">
          <div class="card">
            
            <div class="card-body">
              <p class="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Alias: <span><strong> {{ this.info.alias }} </strong></span></li>
                  <li class="list-group-item">Network: <span><strong> Signet</strong></span></li>
                  <li class="list-group-item">Version: <span><strong> 0.221</strong></span></li>
                  </ul>
              </p>
            </div>
            <div class="card-footer">
              pubkey address: {{ this.info.public_key }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active"><h3>Node Balances</h3></a>
            <div class="list-group-item">
              <h6 class="list-group-item-heading">Lightning Network <em style="font-weight: 100;">{{ this.info.capacity }} sats</em></h6>
            </div>
            <div class="list-group-item">
              <h6 class="list-group-item-heading">Bitcoin Network <em style="font-weight: 100;">{{ this.info.chain_balance }} sats</em></h6>
            </div>
            <div class="list-group-item justify-content-between">
            </div> <a href="#" class="list-group-item list-group-item-action active justify-content-between">total balance: </a>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-8">
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active"><h6>Channels</h6></a>
              <div class="list-group-item">
                List of all the channels known by this node
              </div>
              <div id="chart">
                <apexchart ref="mychart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
  import API from 'src/api.js'
  import VueApexCharts from 'vue-apexcharts'

  export default {
    components: {
      apexchart: VueApexCharts
    },
    
    data () {
      return {        
        series: [
        {
          name: 'Local',
          data: []
        }, 
        {
          name: 'Remote',
          data: []
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
          categories: [],
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
      stateNode: 'Offline',
      info: {
          alias:'',
          peers_count: 0,
          public_key: '',
          is_synced_to_chain: false,
          is_synced_to_graph: false,
          capacity: 0,
          chain_balance: 0,
          balance: 0,
          num_active_channels: 0,
        },
      channels:[

      ]
      }
    },
    
    mounted() {
        
    },

    methods: {
    async getData() {
      try {
        let response = await API.get('http://192.168.137.228:3000/api/getInfo')
        .then(response => {
          this.info.alias = response.data.alias;
          this.info.peers_count = response.data.peers_count;
          this.info.public_key = response.data.public_key;
          this.info.is_synced_to_chain = response.data.is_synced_to_chain;
          this.info.is_synced_to_graph = response.data.is_synced_to_graph;
          this.getNodeInfo(this.info.public_key);
          if(this.info.is_synced_to_chain == true && this.info.is_synced_to_graph == true){
            this.stateNode = 'Online';
          } else{
              this.stateNode = 'Offline';
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getNodeInfo(key) {
      try {
        console.log('http://192.168.137.228:3000/api/getNodoInfo/'+key);
        let response = await API.get('http://192.168.137.228:3000/api/getNodoInfo/'+key)        
        .then(response => {
          this.info.capacity = response.data.capacity;
          console.log(response.data.capacity);
          this.info.channel_count = response.data.channel_count;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getChainBalance() {
      try {
        let response = await API.get('http://192.168.137.228:3000/api/getChainBalance/')
        .then(response => {
          this.info.chain_balance = response.data.chain_balance;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getChannels() {
      try {
            let response = await API.get('http://192.168.137.228:3000/api/getChannels/')
            .then(response => {
              let channels = response.data.channels;
              console.log(channels);
              for(const i in channels){
                      console.log(channels[i].capacity);
                      this.chartOptions.xaxis.categories.push(channels[i].id);
                      this.series[0].data.push(channels[i].local_balance);
                      this.series[1].data.push(channels[i].remote_balance);
                  }
                  this.$refs.mychart.updateSeries([
                      {
                        name: 'Local',
                        data: this.series[0].data,
                      }, 
                      {
                        name: 'Remote',
                        data: this.series[1].data,
                      }],
                   true, true);
              });
          } catch (error) {
            console.log(error);
          }
    },
  },


  created() {
    this.getData();
    this.getChainBalance();
    this.getChannels();
  },
  }
</script>
<style>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center 
}
</style>
