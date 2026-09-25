import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { cn } from "cn";

const Community2 = ({
  heading = "Connect Me",
  description = "Feel free to reach out to me.",

  socialLinks = [
    {
      icon: <FaXTwitter className="size-5" />,
      title: "Twitter",
      description: "Follow me on Twitter.",
      url: "https://x.com/Aadi_NG",
    },
    {
      icon: <FaLinkedin className="size-5" />,
      title: "LinkedIn",
      description: "Connect with me on LinkedIn.",
      url: "https://www.linkedin.com/in/adithyan-gireeshkumar-0b4015412/",
    },
    {
      icon: <FaGithub className="size-5" />,
      title: "Github",
      description: "connect with me on Github.",
      url: "https://github.com/adithyan-gireeshkumar",
    },
    {
      icon: <FaInstagram className="size-5" />,
      title: "Instagram",
      description: "Follow me on Instagram.",
      url: "https://www.instagram.com/adithyan_gireeshkumar/",
    },
  ],

  className
}) => {
  return (
    <section className={cn("py-32 bg-[#ffb579] mt-0", className)}>
      <div className="container mt-0">
        <h2 className="mb-5 ml-3 text-2xl font-semibold md:text-3xl">{heading}</h2>
        <p className="font-medium text-muted-foreground text-black md:text-xl ml-3">
          {description}
        </p>
        <div className="mt-10 ml-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="group rounded-md border border-border p-6"
              href={link.url}
            >
              <div className="flex items-center justify-between gap-4">
                {link.icon}
                <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <h3 className="mb-1 font-semibold">{link.title}</h3>
                <p className="text-sm text-black ">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community2 };
