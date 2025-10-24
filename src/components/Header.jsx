import { NavLink } from 'react-router-dom';
import LocaleSwitcher from './LocaleSwitcher';
import { t } from '../i18n';

export default function Header({ lang }) {
  const base = `/${lang}`;
  const nav = [
    { to: `${base}/`, label: t(lang,'nav.home') },
    { to: `${base}/blog`, label: t(lang,'nav.blog') },
    { to: `${base}/sobre-mi`, label: t(lang,'nav.about') },
    { to: `${base}/contacto`, label: t(lang,'nav.contact') }
  ];
  return (
    <header style={{borderBottom:'1px solid #e5e7eb'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 20px'}}>
        <NavLink to={`${base}/`} className="text-xl font-bold">ClearWealth</NavLink>
        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive})=> isActive?'text-blue-600':'text-gray-700'}>
              {n.label}
            </NavLink>
          ))}
          <LocaleSwitcher lang={lang} />
        </nav>
      </div>
    </header>
  );
}
