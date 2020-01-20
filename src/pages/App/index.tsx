import App from './App';
import { connect } from 'react-redux';

import { getNoteRequest } from 'config/library/redux/store/Home/action';

const mapStateToProps = () => {}

const mapDispatchToProps = (dispatch: any) => {
    return{
        getNoteRequest: () => {
            dispatch(getNoteRequest())
        }
    }
}

export default connect(null, mapDispatchToProps)(App);