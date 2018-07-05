/**
 *  Created by daiwenjuan on 2018/7/5 21:41.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const EnhanceConnect = (mapStateToProps, actions) => (Component) => {
  const mapDispatchToProps = dispatch => bindActionCreators({...actions}, dispatch)
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
export default EnhanceConnect