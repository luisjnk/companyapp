<template>
<div class="chef app-pages app-section">
		<div v-if="companyList != ''" class="container">
			<div class="pages-title">
				<h3>Companys</h3>
			</div>
      <div class="col s3">
           <button  v-on:click="add()" type="button" class="btn btn-primary"> Add new company </button>
      </div>
      </p>
      <div class="entry" v-for="company in companyList" v-on:click="click(company.Id)">
				<img src="img/chef1.png" alt="">
				<div class="content">
					<h5>{{company.Name}}</h5>
          </br>
					<p><span>Address:</span> <a href="">{{company.Address}}</a></p>
          <p><span>Contact:</span> <a href="">{{company.Phone}}</a></p>
          <p><span>City:</span> <a href="">{{company.City}}</a></p>
          <p><span>Country:</span> <a href="">{{company.Country}}</a></p>
				</div>
			</div>
     </div>
     <div v-else class="slider-slick app-pages">
        <div class="slider-entry">     
          <div class="overlay"></div>
          <div class="caption">
            <div class="container">
              <h2>Don't have companys yet</h2>
              <p>Please add some companies</p>
  
            </div>
          </div>
        </div>
    </div>
   </div>    
  
	<!-- end offers -->

 </template>

<script>
import RequestsService from '../services/requestsService.js'

import router from '../router'
export default {
  name: 'hello',
  data () {
    return {
      companyList : []
    }
  },
  methods: {
      click(Id) {
        console.log(Id)
       router.push({ name: 'company', params: { companyId: Id }})
      },
      add() {
        router.push('companyCreate')
      }
     },
   beforeCreate () {
        console.log('aqui')
        RequestsService
            .getCompanies()
              .then(respose =>{
                this.companyList = respose
              })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
