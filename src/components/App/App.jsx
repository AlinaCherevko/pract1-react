import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
        {/* <Route /> */}
      </Route>
    </Routes>
  );
};
