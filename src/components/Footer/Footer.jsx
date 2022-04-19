import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
// import FontAwesomeIcon from 'font-awesome';
import PortfolioContext from '../../context/context';
// import GithubButtons from '../GithubButtons/GithubButtons';
// import { FontAwesomeIcon } from 'fontawesome';
import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <>
                  <a
                    key={id}
                    href={url || ''}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'blog'} fa-inverse`} />
                    {/* <i className="fa-brands fa-blogger" /> */}
                  </a>
                </>
              );
            })}
          <a href="https://velog.io/@minsu8834">
            <img src="http://m.biyosekkai.com/img/icon_blog_w.png" alt="블로그"></img>
          </a>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()}
          <a href="https://github.com/minchodang" target="_blank" rel="noopener noreferrer">
            강민수
          </a>
        </p>

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  );
};

export default Footer;
