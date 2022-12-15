import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            {/* const Layout = route.layout === HeaderOnly ? Fragment : DefaultLayout */}
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
