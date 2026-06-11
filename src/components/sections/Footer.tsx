import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type TSocialLink = {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type TNavLink = {
  label: string;
  href: string;
};

// ─── Icons (inline SVG — no extra dependency) ─────────────────────────────────

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.74-8.855L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LeetCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125 2.227 5.361 5.361 0 00.trimmed 2.063 5.307 5.307 0 001.46 1.746c.354.279.739.523 1.146.726.407.204.833.37 1.274.494.44.125.892.21 1.347.254.456.045.915.05 1.374.017a5.408 5.408 0 001.364-.254 5.425 5.425 0 001.283-.611l.098-.065 4.917-3.245a1.374 1.374 0 00.388-1.906l-.026-.038a1.374 1.374 0 00-1.906-.388l-4.819 3.184a2.642 2.642 0 01-.645.308 2.624 2.624 0 01-.688.126 2.646 2.646 0 01-.686-.054 2.64 2.64 0 01-.639-.236 2.657 2.657 0 01-.537-.403 2.635 2.635 0 01-.394-.548 2.635 2.635 0 01-.225-.646 2.645 2.645 0 01-.044-.691 2.636 2.636 0 01.154-.68 2.61 2.61 0 01.364-.625l3.854-4.126 5.406-5.788a1.374 1.374 0 00-.048-1.942A1.374 1.374 0 0013.483 0zm-2.866 12.815a1.374 1.374 0 00-1.373 1.374 1.374 1.374 0 001.373 1.373H18.1a1.374 1.374 0 001.374-1.373 1.374 1.374 0 00-1.374-1.374z" />
  </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const socialLinks: TSocialLink[] = [
  { name: "GitHub",   url: "https://github.com/DHANOOP-P",        icon: GithubIcon   },
  { name: "LinkedIn", url: "www.linkedin.com/in/dhanoop-p-852667315|",   icon: LinkedInIcon },
  { name: "Email",    url: "dhanoopp6@gmail.com",          icon: MailIcon     },
];

const navLinks: TNavLink[] = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Education",  href: "#education"  },
  { label: "Contact",    href: "#contact"    },
];

// ─── Component ────────────────────────────────────────────────────────────────

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 w-full overflow-hidden bg-[#050816]">
      {/* top border gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-40" />

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-16">
        <div className="flex flex-col items-center gap-10">

          {/* Name / brand */}
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.8)}
            className="flex flex-col items-center gap-2 text-center"
          >
            <a
              href="#hero"
              className="text-[28px] font-black tracking-tight text-white transition-opacity hover:opacity-80"
            >
              <span className="text-[#915EFF]">DHANOOP-P</span>
            </a>
            <p className="text-secondary text-[13px] tracking-widest uppercase">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            variants={fadeIn("up", "spring", 0.2, 0.8)}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary hover:text-white text-[14px] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.8)}
            className="flex items-center gap-5"
          >
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-secondary transition-all duration-200 hover:border-[#915EFF]/60 hover:bg-[#915EFF]/10 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Bottom row */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 0.8)}
            className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row"
          >
            <p className="text-secondary text-[13px]">
              © {year} YourName. All rights reserved.
            </p>
            <p className="text-secondary text-[13px]">
              Built with{" "}
              <span className="text-[#915EFF]">React</span>
              {" · "}
              <span className="text-[#915EFF]">Three.js</span>
              {" · "}
              <span className="text-[#915EFF]">Framer Motion</span>
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;