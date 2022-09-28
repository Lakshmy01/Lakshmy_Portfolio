import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Layout from './components/Layout'
import Loader from 'react-loaders'
/*import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard' */
import './App.scss'
function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
      {console.log(error)}
    </div>
  )
}
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const Home = React.lazy(() => import('./components/Home'))
function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Suspense
          fallback={
              <Loader type="pacman" />
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/*    <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
