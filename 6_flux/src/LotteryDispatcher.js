import {Dispatcher} from 'flux'

class LotteryDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            action : action
        })
    }
}

const dispatcher = new LotteryDispatcher();

export default  dispatcher;
