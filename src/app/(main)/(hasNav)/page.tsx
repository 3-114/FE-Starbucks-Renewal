import EventCarousel from '@/components/feature/carousels/EventCarousel';
import MainView from '@/components/View/MainView';
import { getEventNavData } from '@/actions/event-service';

import { dummyEventData } from '@/data/EventData';

export default async function page() {
  const NavData = await getEventNavData();

  return (
    <main className="space-y-16 mb-16">
      <EventCarousel eventData={dummyEventData} />
      <MainView MainTagData={NavData} />
    </main>
  );
}
