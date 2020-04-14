import dispatcher from '../LotteryDispatcher'

class LotteryActions{

    generatePicks(min, max, pickCnt){
        dispatcher.handleViewAction({
            actionType : 'LOTTERY_PICK_GENERATION',
            payload : {
                min : min,
                max : max,
                pickCnt : pickCnt,
            }
        });
    }

}

export default new LotteryActions();
