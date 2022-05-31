import Link from 'next/link';
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
              <Link href='/about_us'>About us</Link>
            </li>
            <li>
              <Link href='/absent_books'>Absent books</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.panel__info}>
        <span className={classes.notification} />
        <div className={classes.user}>{defaultUser}</div>
      </div>
    </header>
  );
};

export default Header;
