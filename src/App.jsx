import './App.css';
import styled from 'styled-components';
import Title from './components/Title';
import Accordion from './components/Accordion';
import faqs from './data/faqs.json';

function App() {
  return (
    <AppContainer>
      <Title />
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          faq={faq}
        />
      ))}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 32px 56px 0px rgba(80, 0, 118, 0.1);
  width: 279px;
  @media (min-width: 768px) {
    width: 520px;
    padding: 40px;
  }
`;
export default App;
