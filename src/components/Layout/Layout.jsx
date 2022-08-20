import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer, NavContainer, NavLinkItem } from './Layout.styled';
import Loader from 'components/Loader';

const navLinkItem = [
  { href: '/', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

const Layout = () => {
  return (
    <AppContainer>
      <NavContainer>
        {navLinkItem.map(({ href, text }) => (
          <NavLinkItem to={href} key={href}>
            {text}
          </NavLinkItem>
        ))}
      </NavContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};

export default Layout;
