import Image from 'next/image';

interface EventImage {
  eventUrl: string;
  eventUrlIndex?: number;
}

export default function ImageList({
  eventImages,
}: {
  eventImages: EventImage[];
}) {
  return (
    <div className="w-full flex flex-col gap-4">
      {eventImages.map((img, i) => (
        <div key={i} className="relative w-full aspect-video">
          <Image
            src={img.eventUrl}
            alt={`event-image-${i}`}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
            priority
          />
        </div>
      ))}
    </div>
  );
}
