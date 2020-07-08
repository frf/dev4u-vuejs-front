<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md">
            <AppItemList v-bind:items="prefixes" title="Prefixos" v-on:deleteItem="deletePrefix" v-on:addItem="addPrefix"></AppItemList>
          </div>
          <div class="col-md">
            <AppItemList v-bind:items="sufixes" title="Sufixos" v-on:deleteItem="deleteSufix" v-on:addItem="addSufix"></AppItemList>
          </div>
        </div>
        <br />
        <h5>Domínios: <span class="badge badge-info">{{domains.length}}</span></h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="domain in domains"
                v-bind:key="domain"
              >
                <div class="row">
                  <div class="col-md">{{domain.name}}</div>
                  <div class="col-md text-right">
                    <a
                      type="button"
                      v-bind:href="domain.checkout"
                      target="_blank"
                      class="btn btn-info"
                    ><span class="fa fa-shopping-cart"></span></a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppItemList from "./AppItemList";

export default {
	name: "app",
	components: {
		AppItemList
	},
	data: function () {
		return {
			prefixes: ["Air", "Jet", "Flight"],
			sufixes: ["Hub", "Station", "Smart"]
		};
	},
	methods: {
		addPrefix (prefix) {
			this.prefixes.push(prefix);
		},
		addSufix (sufix) {
			this.sufixes.push(sufix);
		},
		deletePrefix (prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
		},
		deleteSufix (sufix) {
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
		},
	},
	computed: {
		domains () {
			const domains = [];
			for (const prefix of this.prefixes) {
				for (const sufix of this.sufixes) {
					const name = prefix + sufix;
					const url = name.toLowerCase();
					domains.push({
						name: name,
						checkout: `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`
					});
				}
			}
			return domains;
		}
	}
};
</script>
<style scoped>
</style>>