<template>

  <div  v-if="company != ''">
    <div class="jumbotron">
      <div  class="container">
       <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.Name'>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s3">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.City'>
            </div>
            <div class="input-field col s3">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.Country'>
            </div>
            <div class="input-field col s3">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.Email'>
            </div>
          </div>
            <div class="row">
              <div class="input-field col s3">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.Address'>
              </div>
                <div class="input-field col s3">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" v-model='company.Phone'>
              </div>
                <div class="col s3">
                <button  v-on:click="submitCompany(company)" type="button" class="btn btn-primary"> Update </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
							<div class="profile-info-right">
								<ul class="nav nav-pills nav-pills-custom-minimal custom-minimal-bottom">
									<li ><a href="#activities"  v-on:click="changeActivity('listownersactivity')" data-toggle="tab">List All Owners</a></li>
									<li class="active"><a href="#yourdesc" v-on:click="changeActivity('createownersactivity')"data-toggle="tab">Create Owners</a></li>
								</ul>
                <div class="tab-content">
                <div class="tab-pane fade in active" id="activities">
                    <listOwnersComponent v-if="activities == 'listownersactivity'"></listOwnersComponent>
                    <createOwnersComponent v-if="activities == 'createownersactivity'"></createOwnersComponent>
                </div>
                </div>  
							</div>
						</div>
            </div>
        </form>        
        </div>
      </div>
     </div> 
  </div>
</template>


<script>
import RequestsService from '../services/requestsService.js'
import createOwnersComponent from './createOwnersComponent'
import listOwnersComponent from './listOwnersComponent'

export default {
  components: {
    createOwnersComponent,
    listOwnersComponent
  },
  data () {
    return {
      company : '',
      activities : 'createownersactivity'   
    }
  }, 
   beforeCreate () {
       RequestsService
            .getCompany(this.$route.params.companyId)
              .then(respose =>{
                  this.company = respose
        })

   },
   methods: {
      changeActivity(activity) {
        this.activities = activity
      },
      submitCompany(company) {
           RequestsService
              .uploadCompany(company) 
                .then(respose =>{
                  alert('upload succesfull')
                })
      }
     }
  
}
</script>