import {Dispatcher} from 'flux'

class AppDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            actionType : 'VIEW_ACTION',
            payload : action
        })
    }
}

const dispatcher = new AppDispatcher();

export default dispatcher;
