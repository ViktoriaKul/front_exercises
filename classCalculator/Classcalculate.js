class calculate {
    
    constructor (value){
        if (typeof value == 'string'){console.log('please enter numeric value...')}
        else{
        this.value = value;
        }
    }
    sum(n){
        this.value = this.value + n 
    }
    reset(n){
        this.value = 0
    }
    multiply(n){
        this.value = this.value * n 
    }
    division(n){
        this.value = this.value - n 
    }
    diff(n){
        this.value = this.value / n 
    }
    result(){
        console.log(`${this.value}`)
    }
}