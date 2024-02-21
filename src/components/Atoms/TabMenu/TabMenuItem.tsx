export default function TabMenuItem({ label }: { label: string }) {
  return (
    <div className="cursor-pointer px-4 py-2 mx-2  hover:bg-[#0CAF60] rounded-md">
      {label}
    </div>
  );
}
