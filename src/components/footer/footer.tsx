import Link from 'next/link';
import Image from 'next/image';

import classes from './footer.module.scss';
import facebookIcon from '/public/assets/icons/facebook.svg';
import instagramIcon from '/public/assets/icons/instagram.svg';

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
        <a className={classes.instagram} href='#'>
          <Image src={instagramIcon} width={24} height={24} alt='instagram' />
        </a>
        <a className={classes.facebook} href='#'>
          <Image src={facebookIcon} width={24} height={24} alt='facebook' />
        </a>
      </div>
    </footer>
  );
};

export default Header;
