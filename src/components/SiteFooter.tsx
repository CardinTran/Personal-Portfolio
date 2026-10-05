import { identity } from '../data/identity';
import { ContactLinks } from './ContactLinks';
import './SiteFooter.css';

export function SiteFooter() {
  return (
    <footer className="sheet site-footer" aria-labelledby="contact-heading">
      <h2 id="contact-heading">03 · Contact</h2>
      <div>
        <p className="site-footer__name">{identity.name}</p>
        <ContactLinks />
      </div>
    </footer>
  );
}
