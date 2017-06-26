import Vue from 'vue'
import axios from 'axios'

export default {
    
  getCompanies() {
    const request = axios .get(process.env.APIURL + 'findall')
    console.log(process.env.APIURL + 'findall')
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
   getCompany(Id) {
    const request = axios .get(process.env.APIURL + Id)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    createOwner(owner) {
        console.log(process.env.APIOWNERSURL);
        const request = axios .post(process.env.APIOWNERSURL + 'create', owner)
        return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    getOwnersByCompanyId(Id) {
    const request = axios .get(process.env.APIOWNERSURL + Id)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    createCompany(company) {
    const request = axios.post(process.env.APIURL + 'create', company)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    uploadCompany(company){
    const request = axios.post(process.env.APIURL + 'update', company)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    }
}