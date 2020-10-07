import store from './store'
import {bindActionCreators} from "redux";

import {Action as AppAction} from './app/redux'

const {dispatch} = store;

const appActions = bindActionCreators(AppAction.Creators.updateState, dispatch);



export default appActions;