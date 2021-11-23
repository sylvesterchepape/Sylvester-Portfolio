import React from 'react';
import { AiFillGithub, AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
   <LinkList>
   <LinkColumn>
   <LinkTitle>call</LinkTitle>
   <LinkItem href="Mobile:060-342-7576">060-342-7576</LinkItem>
   </LinkColumn>
   <LinkColumn>
   <LinkTitle>Email</LinkTitle>
   <LinkItem href="MailTo:chepapesylvester@gmail.com">chepapesylvester@gmail.com</LinkItem>
   </LinkColumn>
   </LinkList>
   <SocialIconsContainer>
<CompanyContainer>
<Slogan>Innovating one Project at a time</Slogan>
</CompanyContainer>
<SocialContainer>
<SocialIcons href="https://github.com/sylvesterchepape">
      <AiFillGithub size="3rem" />
 </SocialIcons>
  <SocialIcons href="https://twitter.com">
      <AiFillTwitterCircle size="3rem" />
  </SocialIcons>
  <SocialIcons href="https://www.instagram.com/chepapesylvester/">
      <AiFillInstagram size="3rem" />
  </SocialIcons>
  </SocialContainer>
</SocialIconsContainer>

   </FooterWrapper>
  );
};

export default Footer;
