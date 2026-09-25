import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Price, PriceValue } from "@/components/shadcnblocks/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PRODUCTS_LIST = [
  {
    name: "Fresh Coconut",
    image: {
      src: "https://images.unsplash.com/photo-1581375321224-79da6fd32f8e",
      alt: "Fresh coconut",
    },
    link: "/products/fresh-coconut",
    description: "Fresh coconut sourced from Kerala.",
    price: {
      regular: 80,
      currency: "INR",
    },
    badge: {
      text: "Fresh",
    },
  },

  {
    name: "Kerala Banana",
    image: {
      src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
      alt: "Kerala banana",
    },
    link: "/products/kerala-banana",
    description: "Fresh and naturally ripened Kerala bananas.",
    price: {
      regular: 60,
      sale: 50,
      currency: "INR",
    },
    badge: {
      text: "Sale",
    },
  },

  {
    name: "Coconut Oil",
    image: {
      src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
      alt: "Coconut oil",
    },
    link: "/products/coconut-oil",
    description: "Pure coconut oil for cooking and daily use.",
    price: {
      regular: 220,
      currency: "INR",
    },
  },

  {
    name: "Traditional Rice",
    image: {
      src: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      alt: "Rice",
    },
    link: "/products/traditional-rice",
    description: "Traditional Kerala rice varieties.",
    price: {
      regular: 120,
      currency: "INR",
    },
  },

  {
    name: "Spice Pack",
    image: {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
      alt: "Indian spices",
    },
    link: "/products/spice-pack",
    description: "A selection of aromatic Kerala spices.",
    price: {
      regular: 180,
      sale: 149,
      currency: "INR",
    },
    badge: {
      text: "Popular",
    },
  },

  {
    name: "Banana Chips",
    image: {
      src: "https://images.unsplash.com/photo-1623238913973-21e45cced554",
      alt: "Banana chips",
    },
    link: "/products/banana-chips",
    description: "Crispy traditional Kerala banana chips.",
    price: {
      regular: 100,
      currency: "INR",
    },
  },
];

const ProductList1 = ({
  className
}) => {
  return (
    <section className={cn("py-8", className)}>
      <div className="container">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {PRODUCTS_LIST.map((item, index) => (
            <ProductCard key={`product-list-1-card-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({
  name,
  description,
  link,
  image,
  badge,
  price
}) => {
  const { regular, sale, currency } = price;

  return (
    <Link
  to={link}
  className="block h-full w-full transition-opacity hover:opacity-80"
>
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
          {badge && (
            <Badge
              style={{
                backgroundColor: badge.color,
              }}
              className="absolute start-4 top-4"
            >
              {badge.text}
            </Badge>
          )}
        </CardHeader>
       <CardContent className="flex h-full flex-col gap-2 p-3">
          <CardTitle className="text-sm font-semibold sm:text-base">{name}</CardTitle>
          <CardDescription className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
            {description}
          </CardDescription>
          <div className="mt-auto">
            <Price onSale={sale != null} className="text-lg font-semibold">
              <PriceValue price={sale} currency={currency} variant="sale" />
              <PriceValue
                price={regular}
                currency={currency}
                variant="regular"
              />
            </Price>
          </div>
        </CardContent>
      </Card>
    </Link >
  );
};

export { ProductList1 };
