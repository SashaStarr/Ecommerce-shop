import { configureStore } from '@reduxjs/toolkit';
import items from '../components/screens/catalog/CatalogSlice'

const store = configureStore({
    reducer: { items },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;