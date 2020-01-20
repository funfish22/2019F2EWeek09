import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = (state: 
    { 
        Home: { note: any; }; 
    }) => {
    return{
        Note: state.Home.note
    }
}

export default connect(mapStateToProps)(Home);