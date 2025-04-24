import Image from 'next/image';
import { Fragment } from 'react';

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
    <Fragment>
      {eventImages.map((img, i) => (
        <div key={i} className="relative w-full">
          <Image
            src={img.eventUrl}
            alt={`event-image-${i}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      ))}
    </Fragment>
  );
}
