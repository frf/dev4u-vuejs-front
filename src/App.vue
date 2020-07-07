<template>
  <div>
    <div id="slogan" class="text-center">
      <h1>Dev4u</h1>
      <br>
      <h6 class="text-secondary">Aplicação para cadastro de desenvolvedores.</h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>Prefixo <span class="badge badge-info">{{prefixes.length}}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
                    {{prefix}}
                  </li>
                </ul>
                 <br>
                <input type="text" class="form-control" placeholder="Prefixo">
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>Sufixo <span class="badge badge-info">{{sufixes.length}}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
                    {{sufix}}
                  </li>
                </ul>
                <br>
                <input type="text" class="form-control" placeholder="Prefixo">
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div class="card">
          <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item" v-for="domain in domains" v-bind:key="domain">
                  {{domain}}
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

export default {
  name: 'app',
  data: function () {
    return {
      prefixes: ['Air','Jet','Flight'],
      sufixes: ['Hub','Station','Smart'],
      domains: ['AirHub','AirStation','JetHub','JetStation','JetMart']
    }
  }
}
</script>

<style>
  #slogan {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  #main {
    background-color: #f1f1f1;
    padding-top: 30px;
    padding-bottom: 30px;
  }
</style>
