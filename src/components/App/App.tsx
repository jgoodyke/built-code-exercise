import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from '../../routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import styles from '../../styles/app.module.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <div>
                Welcome to the Built Blog
                <Container className={styles.pageContainer}>
                    <AppRouter />
                </Container>
            </div>
        </BrowserRouter>
    </QueryClientProvider>
);

export default App;
