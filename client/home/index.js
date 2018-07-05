/**
 *  Created by daiwenjuan on 2018/7/4 22:32.
 */
import Plugin from '../common/Plugin'
import App from './App'
import key from './key'
import reducer from './reducer'

let plugin = new Plugin(key.ID)
plugin.setReducer(reducer)
plugin.registComponent(App)
export default plugin