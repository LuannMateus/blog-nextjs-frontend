import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { SettingsStrapi } from '../../model/SettingsStrapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo.url}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footerHtml} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};