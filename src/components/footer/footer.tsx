import Link from 'next/link';

import classes from './footer.module.scss';

/**
 * footer
 * nav panel & social media
 * @returns header
 */
const Header = () => {
  const defaultUser = 'Yuliia Herasymova';

  return (
    <footer className={classes.footer}>
      <div className={classes.panel__nav}>
        <div className={classes.logo}>
          <Link href='/'>Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/terms-and-conditions'>Terms and conditions</Link>
            </li>
            <li>
              <Link href='/about-us'>About us</Link>
            </li>
            <li>
              <Link href='/about-service'>About service</Link>
            </li>
            <li>
              <Link href='/privacy-policy'>Privacy policy</Link>
            </li>
            <li>
              <Link href='/support-service'>Support service</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.panel__social}>
        <a className={classes.instagram} href='#'></a>
        <a className={classes.facebook} href='#'></a>
      </div>
    </footer>
  );
};

export default Header;
