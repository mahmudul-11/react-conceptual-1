import './LocalStorage.css'
const addToLoacalStorage = (id) =>{
    let exist = localStorage.getItem(id);
    
    
    if (exist){
        let amount = parseInt(exist) + 1;
       
        localStorage.setItem(id,amount);
        
    }
    else{
        
        localStorage.setItem(id,1);
        
    }
    // localStorage.setItem(id,1);
    // console.log(id);
}
export{addToLoacalStorage}