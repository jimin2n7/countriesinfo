import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent/MainContent';
import styled from 'styled-components'
import { ThemeContext } from './components/ThemeContext/ThemeContext';
import { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetail from './components/MainContent/CountryDetail/CountryDetail';

const AppContainer = styled.div`
  width: 100%;
`
const ContentContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`

function App() {
const {theme} = useContext(ThemeContext)

  return (
    <AppContainer className={theme}>
      <Router>
        <Header/>
        <ContentContainer>
			<Routes>
				<Route path='/' element={<MainContent/>}/>
        <Route path='/country/:countryName' element={<CountryDetail/>}/>
				<Route path='/region/:regionName' element={<MainContent/>}/>
        <Route path='/search/:nameValue' element={<MainContent/>}/>
			</Routes>
        </ContentContainer>
        <Footer/>
        <Routes>
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
