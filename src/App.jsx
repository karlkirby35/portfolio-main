import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

export default function App() {
  const location = useLocation();
  useRevealOnScroll([location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
    </Routes>
  );
}
