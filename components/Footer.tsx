import { portfolioLinks } from "@/data/portfolio";
import { SmartLink } from "@/components/ui/SmartLink";

export function Footer() {
  return (
    <footer className="cinema-footer">
      <a href="#top" className="cinema-footer__name">Abdullah Ibrahim</a>
     <span>Python • Django • AI Builder • Media Engineer</span>
      <div><SmartLink href={portfolioLinks.email}>{portfolioLinks.email}</SmartLink><span>© {new Date().getFullYear()}</span></div>
    </footer>
  );
}
