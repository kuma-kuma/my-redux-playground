import { parseMarkDownText, addMemo} from './actions/actions'
import memoApp from'./reducers/reducers'
import { createStore } from 'redux'

let store = createStore(memoApp)