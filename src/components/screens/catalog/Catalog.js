import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/httpHook';
import {
    itemsFetching,
    itemsFetched,
    itemsFetchingError,
} from "./CatalogSlice"
import { useEffect } from 'react';
import Card from './card/Card';
import './Catalog.scss';
import Loading from '../../other/Loading';
import Alert from '../../other/Error'


const Catalog = () => {
    //getItems
    const { request } = useHttp();
    const fetchItems = (request) => (dispatch) => {
        dispatch(itemsFetching());
        request("http://localhost:3001/MyBd")
            .then(data => dispatch(itemsFetched(data)))
            .catch(() => dispatch(itemsFetchingError()))
    }
    useEffect(() => {
        dispatch(fetchItems(request));
    }, []);
    const itemsLoadingStatus = useSelector(state => state.items.itemsLoadingStatus);
    const items = useSelector(state => state.items.items.catalog);
    const dispatch = useDispatch();
    console.log(items)




    //error & loading
    if (itemsLoadingStatus === "loading") {
        return <Loading />;
    } else if (itemsLoadingStatus === "error") {
        return <Alert />
    } else {
        return (<div className="catalog">
            {items ? (
                items.map(({ id, ...props }) => <Card key={id} {...props}></Card>)
            ) : (<Loading />)}
        </div>
        )
    }
}

export default Catalog