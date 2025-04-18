import EventCarousel from '@/components/feature/carousels/EventCarousel';
import MainView from '@/components/View/MainView';

import { dummyEventData } from '@/data/EventData';
import { MainTagData } from '@/data/NavData';

export default function page() {
  return (
    <main className="space-y-16 mb-16">
      <EventCarousel eventData={dummyEventData} />
      <MainView MainTagData={MainTagData} />
    </main>
  );
}
