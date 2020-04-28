import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Image from 'gatsby-image';

const useIconsData = (): { sun: any; moon: any } => {
  const data = useStaticQuery(graphql`
      query {
          sun: file(relativePath: { eq: "sun.png" }) {
              childImageSharp {
                  fixed(width: 32, height: 32) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
          moon: file(relativePath: { eq: "moon.png" }) {
              childImageSharp {
                  fixed(width: 32, height: 32) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `);

  return { sun: data.sun, moon: data.moon };
};


const ThemeButton: React.FC = () => {
  const { sun, moon } = useIconsData();

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any): React.ReactElement => {
        const isDark = theme === 'dark';
        const onToggleClick = (): void => toggleTheme(isDark ? 'light' : 'dark');

        return (
          <div onClick={onToggleClick}>
            <Image
              fixed={isDark ? sun.childImageSharp.fixed : moon.childImageSharp.fixed}
              alt={'theme switch'}
              style={{
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                margin: '0',
              }}
            />
          </div>
        );
      }}
    </ThemeToggler>
  );
};

export default ThemeButton;