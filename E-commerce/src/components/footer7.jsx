import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { cn } from "cn";
import logoImage from "../assets/ChatGPT Image Sep 25, 2026, 08_42_36 PM.png";

const defaultProps = {
  logo: {
    src: logoImage,
    alt: "Peedika",
    title: "Peedika",
    url: "#",
  },
  description: "Finely crafted blocks built with Shadcn UI.",
 
  socialLinks: [
    { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/adithyan_gireeshkumar/", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "https://x.com/Aadi_NG", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/adithyan-gireeshkumar-0b4015412/", label: "LinkedIn" },
    { icon: <FaGithub className="size-5" />, href: "https://github.com/adithyan-gireeshkumar", label: "GitHub" },
  ],
  copyright: "© 2026 Peedika.shop . All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions" },
    { name: "Privacy Policy" },
  ],
};

const Footer7 = (props) => {
  const {
    logo,
    sections,
    description,
    socialLinks,
    copyright,
    legalLinks,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32 bg-gray-100", className)}>
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo?.url}>
                <img
                  src={logo?.src}
                  alt={logo?.alt}
                  title={logo?.title}
                  className="h-7 dark:invert"
                />
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks?.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections?.slice(0, 3).map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks?.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
