import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../atoms/Loading'

const Home = React.lazy(() => import('../pages/Home'))
const ViewBlog = React.lazy(() => import('../components/Blog/ViewBlog'))

const RouteHome = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      } />
      <Route path='artikel/:slug' element={
        <Suspense>
          <ViewBlog fallback={<Loading />} />
        </Suspense>
      } />
    </Routes>
  )
}

export default RouteHome