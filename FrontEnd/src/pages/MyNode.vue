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
              Total active Channels: {{ this.info.channel_count }}
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
                  <li class="list-group-item">Alias: <span><strong> {{ info.alias }} </strong></span></li>
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
            </div> <a href="#" class="list-group-item list-group-item-action active justify-content-between">total balance: 0.825568 sats</a>
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
              <div class="list-group-item">
                <!-- List of Channels-->
                <div id="accordion" class="width:100%">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="badge badge-success" style="margin-right: 5%">Active</span>
                      <span>Channel id</span>
                      <span style="font-weight: 100; color: dimgray;">Total Capacity: 2315 sats</span> 
                      </button>
                    </h5>
                    </div>
                  
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Collapsible Group Item #2
                      </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Collapsible Group Item #3
                      </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    <div>
                      <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
                    </div>
                    </div>
                  </div>
                  </div>
                <!--_ends List of Channels -->
              </div>
          </div>
          <div id="chart">
            <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
      stateNode: 'Offline',
      info: {
          alias:'02ae6c44bd950330fc109b29536484dcf107729581db2ec95124d9a1661e8cf508',
          peers_count: 0,
          public_key: '',
          is_synced_to_chain: false,
          is_synced_to_graph: false,
          capacity: 0,
          channel_count: 0,
          chain_balance: 0,
        }
      }
    },
    
    mounted() {
        
    },

    methods: {
    async getData() {
      try {
        let response = await API.get('http://192.168.55.67:3000/api/getInfo')
        .then(response => {
          this.info.alias = response.data.alias;
          this.info.peers_count = response.data.peers_count;
          this.info.public_key = response.data.public_key;
          this.info.is_synced_to_chain = response.data.is_synced_to_chain;
          this.info.is_synced_to_graph = response.data.is_synced_to_graph;
          this.getNodeInfo(response.data.public_key);
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
        let response = await API.get('http://192.168.55.67:3000/api/getNodoInfo/'+key)
        .then(response => {
          this.info.capacity = response.data.capacity;
          this.info.channel_count = response.data.channel_count;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getChainBalance() {
      try {
        let response = await API.get('http://192.168.55.67:3000/api/getChainBalance/')
        .then(response => {
          this.info.chain_balance = response.data.chain_balance;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
    this.getNodeInfo();
    this.getChainBalance();
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
