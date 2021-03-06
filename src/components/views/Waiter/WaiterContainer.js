import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, pushToAPI, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  pushStatus: (tables, id) => dispatch(pushToAPI(tables, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
