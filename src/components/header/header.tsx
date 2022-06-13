import Link from 'next/link';
import Image from 'next/image';

import classes from './header.module.scss';

/**
 * main header
 * nav panel & user notification / info
 * @returns header
 */
const Header = () => {
  const defaultUser = 'Yuliia Herasymova';

  return (
    <header className={classes.header}>
      <div className={classes.panel__nav}>
        <div className={classes.logo}>
          <Link href='/'>Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/users'>Users</Link>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <Link href='/about-us'>About us</Link>
            </li>
            <li>
              <Link href='/absent-books'>Absent books</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.panel__info}>
        <Image
          src='/assets/icons/notifications.svg'
          width={30}
          height={30}
          alt='notification'
        />
        <div className={classes.user}>{defaultUser}</div>
      </div>
    </header>
  );
};

export default Header;
