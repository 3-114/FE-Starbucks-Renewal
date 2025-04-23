import EventCarousel from '@/components/feature/carousels/EventCarousel';
import MainView from '@/components/View/MainView';
import { getEventImageList, getEventNavData } from '@/actions/event-service';

export default async function Page() {
  const NavData = await getEventNavData();

  const imageMapList = await Promise.all(
    NavData.map(async ({ eventUuid, eventName }, idx) => {
      const imageList = await getEventImageList(eventUuid);
      const filtered = imageList.filter((img) => img.eventUrlIndex === 0);

      return {
        id: idx,
        imgUrl: filtered[0]?.eventUrl ?? '',
        eventName,
      };
    })
  );

  const eventData = imageMapList.filter((item) => item.imgUrl);

  return (
    <main className="space-y-16 mb-16">
      <EventCarousel eventData={eventData} />
      <MainView MainTagData={NavData} />
    </main>
  );
}
