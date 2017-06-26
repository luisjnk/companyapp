<template>
    <div>
        <div class="media activity-item">
         <div class="form-group">
		        <label class="col-md-2 control-label">Name</label>
            <div class="col-md-10">
              <input v-model="owner.name" type="text" class="form-control" placeholder="Name">
            </div>
          </div>
        </div>
        <div class="form-group">
		      <label class="col-md-2 control-label">Email</label>
          <div class="col-md-10">
            <input v-model="owner.email" type="text" class="form-control" placeholder="Email">
          </div>
		    </div>
       <button  v-on:click="submit(owner)" type="button" class="btn btn-primary"> submit </button>
	</div>   
</template>


<script>
import RequestsService from '../services/requestsService.js'
export default {  
  data () {
    return {
      owner: {
          name : '',
          email : '',
          companyId : this.$route.params.companyId
      }
    }
  }, 
   methods: {
      submit(owner) {
        console.log(owner)
        if(owner.name == '' && owner.email == '') {
          alert("Please, owner can't be empty")
        }
        else{
          RequestsService
              .createOwner(owner) 
                .then(respose =>{
                  alert('The owner were created')
                })
          console.log(owner);
        }
     }
   }
}
</script>