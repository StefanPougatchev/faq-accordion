/* eslint-disable react/prop-types */
import styled from 'styled-components';
import minusLogo from '../assets/svgs/icon-minus.svg';
import plusLogo from '../assets/svgs/icon-plus.svg';
import { useState } from 'react';

const Accordion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { answer, question } = faq;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <AccordionContainer>
      <QuestionContainer>
        <span>{question}</span>
        {isOpen ? (
          <Img
            src={minusLogo}
            alt='minus'
            onClick={() => handleToggle()}
          />
        ) : (
          <Img
            src={plusLogo}
            alt='plus'
            onClick={() => handleToggle()}
          />
        )}
      </QuestionContainer>
      {isOpen && <AnswerContainer>{answer}</AnswerContainer>}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  align-self: stretch;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const AnswerContainer = styled.div`
  align-self: stretch;
  color: var(--Pale-Purple, #8b6990);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  align-self: stretch;
  color: var(--Dark-Purple, #301534);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export default Accordion;
