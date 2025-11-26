class Phone {
    constructor(brand,model,#password){

        batteryLevel = 100

        this.brand = brand
        this.model = model
        this#password = #password
    }
    makeCall(number){
       batteryLevel-5
        return `calling ${number}`
    }
   
    charge(){
        batteryLevel = 100
        return `phone fully charged`
    }



    unlock(password){
        if (password === this.#password){
            return true
        }

        
       

}

class iPhone {

}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { Phone, iPhone };
