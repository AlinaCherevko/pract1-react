import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [result, setResult] = useState([]);
  const { countryId } = useParams();

  useEffect(() => {
    const detDetails = async () => {
      const result = await fetchCountry(countryId);
      setResult(result);
    };

    detDetails();
  }, [countryId]);
  return (
    <Section>
      <Container>
        <CountryInfo {...result}></CountryInfo>
      </Container>
    </Section>
  );
};
