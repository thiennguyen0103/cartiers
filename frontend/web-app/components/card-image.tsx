import Image from "next/image";
import { useState } from "react";

type CardImageProps = {
  imageUrl: string;
};

function CardImage({ imageUrl }: CardImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="aspect-h-10 aspect-w-16 w-full">
      <Image
        src={imageUrl ?? ""}
        alt="image"
        fill
        className={`w-full rounded-tl-md rounded-tr-md object-cover duration-700 ease-in-out group-hover:opacity-75 ${
          isLoading
            ? "scale-105 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}

export default CardImage;
