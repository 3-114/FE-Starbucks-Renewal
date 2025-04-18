export default function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex justify-between mb-2 font-semibold">
      <p>{label}</p>
      <p>{value.toLocaleString()}원</p>
    </div>
  );
}
