// components/Card.tsx

type CardProps = {
  title: string;
  summary: string;
};

export default function Card({ title, summary }: CardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-300 text-sm mt-2">{summary}</p>
    </div>
  );
}
