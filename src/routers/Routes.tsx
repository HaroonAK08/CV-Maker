import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  
import PersonalDetails from '../pages/PersonalDetails';
import Template1 from '../pages/Templates/Template1';
import Template2 from '../pages/Templates/Template2';
import Template3 from '../pages/Templates/Template3';
import Template4 from '../pages/Templates/Template4';
import Template5 from '../pages/Templates/Template5';

// import Generate from '../pages/Generate';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<PersonalDetails />} />
          <Route path="/template1" element={<Template1 />} />
          <Route path="/template2" element={<Template2 />} />
          <Route path="/template3" element={<Template3 />} />
          <Route path="/template4" element={<Template4 />} />
          <Route path="/template5" element={<Template5 />} />

         {/* <Route path="/generate" element={<Generate />} />   */}


      </Routes>
    </Router>
  );
};

export default AppRoutes;
