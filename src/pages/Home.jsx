import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const result = await fetchByRegion('europe');
      setCountry(result);
    };
    fn();
  }, []);

  return (
    <Section>
      <Container>
        {country.length > 0 && <CountryList countries={country} />}
      </Container>
    </Section>
  );
};
