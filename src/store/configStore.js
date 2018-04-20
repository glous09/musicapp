import {createStore} from 'redux';
import { createReadStream } from 'fs';


const configureStore=()=>{
    return createStore(rootReducer)
}


export default configureStore;