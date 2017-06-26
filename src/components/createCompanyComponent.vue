<template>

  <div>
    <div class="jumbotron">
      <div  class="container">
       <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Name" id="first_name" type="text" class="validate" v-model='company.Name'>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s3">
              <input placeholder="City" id="first_name" type="text" class="validate" v-model='company.City'>
            </div>
            <div class="input-field col s3">
              <input placeholder="Country" id="first_name" type="text" class="validate" v-model='company.Country'>
            </div>
            <div class="input-field col s3">
              <input placeholder="Email" id="first_name" type="text" class="validate" v-model='company.Email'>
            </div>
          </div>
            <div class="row">
              <div class="input-field col s3">
                <input placeholder="Address" id="first_name" type="text" class="validate" v-model='company.Address'>
              </div>
                <div class="input-field col s3">
                <input placeholder="Phone" id="first_name" type="text" class="validate" v-model='company.Phone'>
              </div>
                <div class="col s3">
                <button  v-on:click="submitCompany(company)" type="button" class="btn btn-primary"> Create </button>
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

export default {

  data () {
    return {
      company : {
          'Name' : '',
          'Address' : '',
          'Country' : '',
          'City' :  '',
          'Email' : '',
          'Phone' : ''
      }
    }
  }, 
   methods: {
      submitCompany(company) {
          if(company.Name == "" && company.Address == "" &&company.Country == "" && company.City == "" && company. Email == "" && company.Phone == "" )
          {
              alert('Please, No field can be empty')
          }else{
                RequestsService
                    .createCompany(company)
                    .then(respose =>{
                        this.companyList = respose
                        alert('The company were created')
                        document.location.href = "#";
                    })
              }
            }
     }
  
}
</script>