import Home from './Home';
import { connect } from 'react-redux';

import { getNoteRequest } from 'config/library/redux/store/Home/action';

const mapStateToProps = (state: 
    { 
        Home: { note: any; }; 
    }) => {
    return{
        Note: state.Home.note
    }
}

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, {
    getNoteRequest
})(Home);