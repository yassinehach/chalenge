import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
}  from 'react-router-dom'

import RootLayout from './layouts/RootLayout';
import Home, {cityLoader} from './pages/Home';
import Create from './pages/Create';
import List from './pages/PropList';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} loader={cityLoader}/>
        <Route path='create' element={<Create/>}/>
        <Route path='list' element={<List/>}/>
      {/* <Route index element={<Dashboard />} loader={taskLoader}/>
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} /> */}
    </Route>
  )
)

function App() {
    return(
        <RouterProvider router={router}/>
    )
}

export default App;