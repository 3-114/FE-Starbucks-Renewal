export default function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value.toLocaleString()}원</span>
    </div>
  );
}
