import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To <br />
       Sylvester Chepape's Portfolio
     </SectionTitle>
     <SectionText>
    Bsc in Computer Science and Statistics recent graduate seeking for software engineering
    internship full-time at SovTech campany . analytical by nature, detail-oriented,and passionate
    about coding and technology in general with strong computer science fundamental. Outgoing
    personality and related easily with all levels of co-worker and customers.Reliable self-starter that
    can be counted on to meet deadlines.

     </SectionText>
     <Button onClick={() => window.location ="https://www.github.com"}>Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;