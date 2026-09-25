import { cn } from "cn";
import { Button } from "@/components/ui/button";

const defaultProps = {
  heading: "Developed by Adithyan Gireeshkumar",
  description:
    "I am a passionate developer with expertise in building modern applications . I am from CUSAT. I specialize in React, Django and REST APIs, and I am always eager to learn and explore new technologies. Feel free to connect with me on social media or check out my projects on GitHub.",
  
  image: {
    src: "https://media.licdn.com/dms/image/v2/D5603AQFGoUOIfVSKvg/profile-displayphoto-scale_400_400/B56Z_sK3GNH0Ak-/0/1786373699126?e=1792022400&v=beta&t=7BUsXubGfSIquMlCAy9o7NQjGlN3yq3BTdV6iRDk87c",
    alt: "Shadcnblocks section preview in the explorer",
  },
};

const Feature2 = (props) => {
  const { heading, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32 bg-[#ffb579] mb-0", className)}>
      <div className="container mb-0">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-square w-full ml-3 rounded-lg border border-border object-cover"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.secondary ? (
                <Button variant="outline" render={<a href={buttons.secondary.url} target="_blank" rel="noreferrer" />} nativeButton={false}>{buttons.secondary.text}</Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature2 };
