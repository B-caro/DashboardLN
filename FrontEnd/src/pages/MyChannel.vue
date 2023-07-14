<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-chart text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Data</p>
              <h4 class="card-title">None</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Data
            </div>
          </stats-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import API from 'src/api.js'

  export default {
    components: {
    },
    
    data () {
      return {
        info: []
      }
    },
    
    mounted() {
 
    }
  }
</script>
<style>

</style>
