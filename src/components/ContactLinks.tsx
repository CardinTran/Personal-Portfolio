import { identity } from '../data/identity';
import './ContactLinks.css';

export function ContactLinks() {
  return (
    <ul className="contact-links" aria-label="Contact">
      {identity.links.map((link) => (
        <li key={link.label}>
          <a href={link.href}>
            {link.label === 'Email' ? link.display : link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
