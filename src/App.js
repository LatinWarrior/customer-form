import { Route, Routes } from 'react-router-dom';

import { CustomerList } from './pages/CustomerList';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <div className='App'>
            <main>
                <section>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/customers' element={<CustomerList />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </section>
            </main>
        </div>
    );
}

export default App;
