export default function AddressItemBox({
  address,
  error = false,
  loading = false,
}: {
  address?: {
    alias: string;
    zoneCode: string;
    mainAddress: string;
  };
  error?: boolean;
  loading?: boolean;
}) {
  const isLoading = !error && !address && loading;
  const hasError = error === true;
  const hasData = !error && address !== null && address !== undefined;

  return (
    <article className="py-4">
      <div className="flex items-start space-x-2">
        <span className="font-semibold text-sm">
          {hasError ? (
            <p className="text-red-500 text-xs">에러</p>
          ) : hasData ? (
            address.alias
          ) : (
            <span
              className={`bg-gray-200 rounded w-24 h-4 ${isLoading ? 'animate-pulse' : ''} inline-block`}
            />
          )}
        </span>
      </div>
      <div className="flex items-start gap-1 text-gray-600">
        {hasError ? (
          <p className="text-red-400 text-xs">데이터를 불러올 수 없음</p>
        ) : hasData ? (
          <>
            <p className="text-xs">({address.zoneCode})</p>
            <p className="text-xs ml-1">{address.mainAddress}</p>
          </>
        ) : (
          <>
            <span
              className={`bg-gray-200 rounded w-16 h-4 ${isLoading ? 'animate-pulse' : ''} inline-block mr-2`}
            />
            <span
              className={`bg-gray-200 rounded w-40 h-4 ${isLoading ? 'animate-pulse' : ''} inline-block`}
            />
          </>
        )}
      </div>
    </article>
  );
}
