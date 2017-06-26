<template>
    <div >
    	<div v-for="owner in owners"  class="media activity-item">
			    <ul class="collection">
						<li class="collection-item">Name: {{owner.Name}} / Email: {{owner.Email}}</li>
					</ul>   
			</div>
    </div>   
</template>


<script>
import RequestsService from '../services/requestsService.js'
export default {  
  data () {
    return {
      owners : []
    }
  }, 
   beforeCreate () {
 		 RequestsService
              .getOwnersByCompanyId(this.$route.params.companyId) 
                .then(response =>{
                  this.owners = response
              })
  			 } 
	}

</script>