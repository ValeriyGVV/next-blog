import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <span className="meta">© 2026 SupaBlog </span>
      <nav className="site-footer__links" aria-label="Footer navigation">
        <Link href="/">Замітки</Link>
        <Link href="/admin">Адмінка</Link>
      </nav>
    </footer>
  );
};

export default Footer;
