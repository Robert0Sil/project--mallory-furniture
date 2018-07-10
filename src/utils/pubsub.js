import React from 'react';
// [Step - 0] Create pubsub library + export

class PubSub {
  constructor() {
    this._evtsRegister = {}
  }

  on(evtName, func){
    try {
        if (typeof evtName !== 'string')  {
        throw Error("1st arg passed to .on() must be a STRING")
      }

      if (typeof func !== 'function')  {
        throw Error("2nd arg passed to .on() must be a FUNCTION")
      }

      if(typeof this._evtsRegister[evtName] === "undefined"){
         this._evtsRegister[evtName] = [func]
      } else {
         this._evtsRegister[evtName] = [...this._evtsRegister[evtName], func ]
      }
    } catch (err) {
      console.log( err )
    }

  }

  trigger(evtName, data){
    const arrOfFuncs = this._evtsRegister[evtName] || []
    arrOfFuncs.forEach( (funcEl)=> funcEl(data) )
  }

}
let pubSub = new pubSub()

export default PubSub
