import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import backgroundImage from "../../assets/hero.png";

const PatternPlaceholder = () => {
  return (
    <div
      className="relative z-10 flex h-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container">
          <div className="mx-auto m-0 flex max-w-5xl flex-col items-center gap-6 text-center color-[#3b1c00]">
            <Badge variant="secondary">Peedika.shop</Badge>
            <div className="max-w-3xl">
              <h1 className="mb-6 text-[72px] font-extrabold leading-none tracking-[-2px] text-[#3b1c00]">
  Peedika
</h1>
            </div>
            <p className="mb-5 text-2xl font-semibold text-[#7d4700]">
              Everything you need, in one place.Smart choices. Better prices. Delivered to your door
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Button className="mt-4 rounded-[6px] border-0 bg-white px-[50px] py-3 text-[rgb(187,87,6)] cursor-pointer hover:bg-[rgb(40, 21, 5)] gap-2  ">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PatternPlaceholder };
