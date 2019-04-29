import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as errorActions from '../redux/error/actions'

function AlertMessage({error:{displayError}, actions}) {
  displayError && Swal.fire({
    title: 'Error!',
    text: 'We had an unexpected error',
    type: 'error',
    confirmButtonText: 'Ok'
  }).then(()=>{
    actions.hideErrorAction()
  })
  return false
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(errorActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage)

