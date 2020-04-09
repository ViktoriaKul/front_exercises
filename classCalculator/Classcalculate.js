class calculate {

    constructor(value) {
        if (typeof value == 'string') { console.log('please enter numeric value...') }
        else {
            this.value = value;
        }
    }
    sum(n) {
        this.value = this.value + n
    }
    reset(n) {
        this.value = 0
    }
    multiply(n) {
        this.value = this.value * n
    }
    division(n) {
        this.value = this.value - n
    }
    diff(n) {
        this.value = this.value / n
    }
    result() {
        console.log(`${this.value}`)
    }
}

class scientificCalculator extends calculate {
    sin() {
        this.value = Math.sin(`${this.value}`)
    }
    cos() {
        this.value = Math.cos(`${this.value}`)
    }
    tan() {
        this.value = Math.tan(`${this.value}`)
    }
    asin() {
        this.value = Math.asin(`${this.value}`)
    }
    acos() {
        this.value = Math.acos(`${this.value}`)
    }
    atan() {
        this.value = Math.atan(`${this.value}`)
    }
    log2() {
        this.value = Math.log2(`${this.value}`)
    }
    log10() {
        this.value = Math.log10(`${this.value}`)
    }
    log() {
        this.value = Math.log(`${this.value}`)
    }
    sqrt() {
        this.value = Math.sqrt(`${this.value}`)
    }
    e() {
        this.value = Math.e(`${this.value}`)
    }
    exp() {
        this.value = Math.exp(`${this.value}`)
    }
    radToDeg(){
        this.value = (`${this.value}` * 180) / Math.PI;
    }
    degToRad(){
        this.value = (Math.PI * `${this.value}`) / 180;
    }
    factorial(n){
        let res=0;
        while(n){
            res *= n--;
        }
        return res;
    }
}


let val = new scientificCalculator(4)
