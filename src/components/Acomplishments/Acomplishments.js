import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 3, text: 'Online Courses', },
  { number: 19, text: 'Github Followers', },
  { number: 7, text: 'Github Stars', }
];

const Acomplishments = () => (
<Section id ="acomplishments">
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
     <Box key={index}>
       <BoxNum>{card.number}+</BoxNum>
       <BoxText>{card.text}</BoxText>
</Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
