import { FC, ReactNode } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: ReactNode;
  type: 'internal' | 'external';
  styling: 'button' | 'link';
  isNavLink?: boolean;
}

const Link: FC<LinkProps> = function Link({
  to,
  isNavLink,
  type,
  styling,
  children,
}) {
  if (isNavLink) {
    return <NavLink to={to}>{children}</NavLink>;
  }

  if (type === 'internal') {
    return (
      <RouterLink to={to} className={styling}>
        {children}
      </RouterLink>
    );
  }
  return (
    <a href={to} target="_blank" rel="noreferrer" className={styling}>
      {children}
    </a>
  );
};

export default Link;
