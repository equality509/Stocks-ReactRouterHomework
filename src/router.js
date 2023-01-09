import{
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Stocks from './pages/stocks';
import { priceLoader } from './loaders';




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
                <Route
                    path=''
                    element={<About/>}
                />
                <Route 
                    path='stocks'
                    element={<Dashboard/>}
                />
                <Route
                    path='stocks/:symbol'
                    element={<Stocks/>}
                    loader={priceLoader}
                    />
        </Route>
    )
);

export default router;