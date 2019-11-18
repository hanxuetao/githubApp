import Types from '../types';
import DataStore from '../../common/DataStore';

export function onLoadPopularData(StoreName, url) {
    return dispatch => {
        dispatch({type:Types.POPULAR_REFRESH, StoreName:StoreName});
        let dataStore = new DataStore();
        dataStore.fetchData(url)
            .then(data => {
                handleData(dispatch, StoreName, data, url)
            })
            .catch(error => {
                console.log(error);
                dispatch({type:Types.LOAD_POPULAR_FAIL, StoreName, error});
            })
    }
};

function handleData(dispatch, storeName, data, url) {
    dispatch({
        type: Types.LOAD_POPULAR_SUCCESS,
        items: data && data.data,
        storeName,
    })
}
