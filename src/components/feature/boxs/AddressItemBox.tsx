import { useNinjaFetch } from '@/hooks/useNinjaFetch';
import { fetchAddressdetail } from '@/actions/cart-service';

export default function AddressItemBox({
  uuid,
  isActive,
  prefetch = false,
}: {
  uuid: string;
  isActive: boolean;
  prefetch?: boolean;
}) {
  const {
    data: address,
    loading,
    error,
  } = useNinjaFetch(
    (signal) => fetchAddressdetail(uuid, signal),
    isActive || prefetch
  );

  return (
    <article className="py-4">
      <div className="flex items-start space-x-2">
        <p className="font-semibold text-sm">
          {loading ? (
            <span className="bg-gray-200 rounded w-24 h-4 animate-pulse inline-block" />
          ) : error ? (
            <span className="text-red-500 text-xs">에러</span>
          ) : address ? (
            address.name
          ) : null}
        </p>
      </div>
      <div className="flex items-start gap-0 text-gray-600">
        {loading ? (
          <>
            <span className="bg-gray-200 rounded w-16 h-4 animate-pulse inline-block mr-2" />
            <span className="bg-gray-200 rounded w-40 h-4 animate-pulse inline-block" />
          </>
        ) : error ? (
          <span className="text-red-400 text-xs">데이터를 불러올 수 없음</span>
        ) : address ? (
          <>
            <p>({address.zipcode})</p>
            <p>{address.addressLine}</p>
          </>
        ) : null}
      </div>
    </article>
  );
}
