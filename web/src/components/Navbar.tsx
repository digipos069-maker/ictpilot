import Logo from './Logo';

export default function Navbar() {
  return (
    <>
{/* TopNavBar */}
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-background/80 dark:bg-background/80 backdrop-blur-lg border-b border-outline-variant/20">
<Logo />
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#">Markets</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#">AI Signal</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#">Journal</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#">News</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" href="#">Education</a>
</div>
<button className="bg-[#032EA1] text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all hover:brightness-110">
            Sign up
        </button>
</nav>
    </>
  );
}
