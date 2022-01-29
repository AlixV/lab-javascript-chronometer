
class Chronometer {
  constructor() {
    
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(callback) {
    //method to kepp on track time by running a function in a 1sc interval
    // will increment the amount of sec stored in the property currentTime by 1.
   
    // this.currentTime += 1
     // way to run chrono
     // if callback if function execute it 
    //  if (typeof callback === 'function'){ 
      // printTime(this.computeTwoDigitNumbers(this.getMinutes()),this.computeTwoDigitNumbers(this.getSeconds())) 
    // }
    this.intervalId = setInterval(()=>{
      if(typeof callback === 'function')callback()
      this.currentTime +=1
   }, 1000)
  }


  getMinutes() {
    //return this.currentTime/60 | 0
    return Math.floor(this.currentTime / 60)
  }


  //return the number of seconds that have passed after 
  //the start of the current minute; modulo dear friend !
  getSeconds() {
    // to have a value between 00 and 59. prevent to go out.
    // same as Math.floor(this.currentTime % 60);
    return this.currentTime %60
  }

  computeTwoDigitNumber(value) {
    //let result = value.toString()
    //if(result.lenght === 1) result = '0' + result //'05'
    //return result  NE FONCTIONNE PAS :'(
    // return String(value).length === 2 ? String(value) : '0' + value
    if(value.toString().length < 2 )
    return `0${value.toString()}`
  else  
    return value.toString()
    
  }

  stop() { 
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ':' + seconds
    //return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
