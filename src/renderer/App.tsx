import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';

// eslint-disable-next-line import/order
import { CProgressBar, CProgress, CContainer, CRow, CCol } from '@coreui/react';

const Hello = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3">
          <p />
          <CRow>
            <CCol xs={12}>
              <CProgress height={20} className="mb-3">
                <CProgressBar
                  color="warning"
                  variant="striped"
                  animated
                  value={25}
                >
                  25%
                </CProgressBar>
              </CProgress>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
