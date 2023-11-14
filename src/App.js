import React from 'react';
import CoursesBiz from './components/CoursesBiz';
import Courses from './components/Courses';
import CoursesLife from './components/CoursesLife';
import CourseView from './components/CourseView';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import CourseviewLife from './components/CourseviewLife';
import CourseviewBiz from './components/CourseviewBiz';
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/courseview' element={<CourseView/>}></Route>
      <Route path='/courseview-lifestyle' element={<CourseviewLife/>}></Route>
      <Route path='/courseview-business' element={<CourseviewBiz/>}></Route>
      <Route path='/tech' exact Component={Courses}/>
      <Route path='/business' exact Component={CoursesBiz}/>
      <Route path='/lifestyle' exact Component={CoursesLife}/>
      <Route path='/*' exact Component={NotFound}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;

