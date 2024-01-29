import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = value => {
    setSelectedValue(value);
    console.log(value);
    setIsLoading(true);
  };

  useEffect(() => {
    const getDataByRegion = async () => {
      const countries = await fetchByRegion(selectedValue);
      setCountries(countries);
      setIsLoading(false);
    };
    getDataByRegion();
  }, [selectedValue]);
  return (
    <Section>
      <Container>
        <SearchForm handleSelect={handleSelect} />
        {isLoading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
