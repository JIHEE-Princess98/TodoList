import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'
import store from './store'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
)
