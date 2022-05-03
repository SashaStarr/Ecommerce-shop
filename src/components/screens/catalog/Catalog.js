import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/httpHook';
import {
    itemsFetching,
    itemsFetched,
    itemsFetchingError,
} from "./CatalogSlice"
import { useEffect, useCallback } from 'react';

const Catalog = () => {

    //getItems
    const fetchItems = (request) => (dispatch) => {
        dispatch(itemsFetching());
        request("http://localhost:3001/MyBd")
            .then(data => dispatch(itemsFetched(data)))
            .catch(() => dispatch(itemsFetchingError()))
    }
    const itemsLoadingStatus = useSelector(state => state.items.itemsLoadingStatus);
    const items = useSelector(state => state.items.items);
    console.log(items)
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchItems(request));
    }, []);

    if (itemsLoadingStatus === "loading") {
        return <div>Loading...</div>;
    } else if (itemsLoadingStatus === "error") {
        return <h5>Error</h5>
    }

    return (
        <div>Hi</div>
    )
}

export default Catalog