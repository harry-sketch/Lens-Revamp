import Image from "next/image";

const InitImage = () => (
  <div className="flex items-center my-10 gap-6">
    {Array.from({ length: 2 }).map((_, i) => (
      <Image
        alt={`welcome image-${i + 1}`}
        src={`/images/landing/${i + 1}.png`}
        width={350}
        height={300}
        loading="lazy"
        quality={100}
      />
    ))}
  </div>
);

export default InitImage;
