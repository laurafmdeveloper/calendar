import {CHANELS} from './chanels'

class TimerService{
    constructor(timerinterface,pubsub){
        this.timerinterface = timerinterface
        this.pubsub = pubsub;
        this._handler = null;
    }
    init(){    // cada segundo cambia la hora ( se subscribe)
        this._handler = this.timerinterface.setInterval(()=>{
            this.pubsub.emit(CHANELS.CHANGE_DATE, new Date())
        },1000)        
    }
    dispose(){  // se dessubscribe
        this._handler && this.timerinterface.clearInterval(this._handler) 
    }
}

export default function getTimer(timerinterface,pubsub){
    return new TimerService(timerinterface,pubsub)
}