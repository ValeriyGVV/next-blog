import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";



const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Header navigation">
        {/* <h1 className="site-title">Новий проект-блог</h1> */}
				<div className="site-header__left">
						{/* Logo  */}
						<Link className="brand" href="/">
						<Image className="brand__mark" src="/brand/book-logo@2x.png" alt="Logo" width={56} height={56} priority />
						<span className="brand__name">SupaBlog</span>
						</Link>
						<Link className="site-header__link" href="/">ГОЛОВНА</Link>
				</div>
				<div className="site-header__actions">

					<ThemeToggle />

					<Link className="button button--compact" href="/admin">*АДМІН*</Link>
				</div>	
      </nav>
    </header>
  );
};

export default Header;
// export default ThemeToggle;
