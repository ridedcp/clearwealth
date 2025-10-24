import { useLocation, useNavigate } from 'react-router-dom';

export default function LocaleSwitcher({ lang }) {
  const nav = useNavigate();
  const loc = useLocation();
  const toggle = () => {
    const to = lang === 'es' ? loc.pathname.replace(/^\/es/, '/en') : loc.pathname.replace(/^\/en/, '/es');
    nav(to);
  };
  return <button onClick={toggle} className="px-3 py-2 text-sm border rounded">{lang==='es'?'EN':'ES'}</button>;
}
