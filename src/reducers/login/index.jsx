/**
 * Created by liliwen on 2017/1/29.
 */
'use strict';
import * as loginAction from '../../actions/login';

const initialState = {
    firstTime: true ,
    success: false ,
    isLogining: false ,
    response : null ,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginAction.NOW_IS_LOGINING:
            return {
                ...state,
                isLogining: true
            };
        case loginAction.LOGIN_RESULT:
            return {
                ...state,
                firstTime: false,
                success : action.success,
                response :action.response,
                isLogining: false
            };
        default:
            return state;
    }
};

export default loginReducer;