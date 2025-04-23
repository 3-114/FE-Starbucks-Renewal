import EventNav from '@/components/layout/navs/EventNav';
import {
  getEventNavData,
  getEventImageList,
} from '@/actions/event-service/nav';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const NavData = await getEventNavData();
  const { category = '' } = await searchParams;
  const matchedCategory =
    category === '' || category === '전체'
      ? NavData[0].eventUuid
      : (NavData.find((item) => item.eventName === category)?.eventUuid ??
        NavData[0].eventUuid);

  const eventImageList = await getEventImageList(matchedCategory);
  console.log(eventImageList);
  return (
    <>
      <EventNav NavData={NavData} />
      <div>좋은선택</div>
    </>
  );
}
