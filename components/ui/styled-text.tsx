import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: ["400"] });

export default function StyledText({
  text,
  isDoubleLines = true,
}: {
  text: string;
  isDoubleLines?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      {isDoubleLines && <div className="h-1 w-24 bg-orange-600" />}
      <h2 className={`${kaushan.className} text-2xl text-orange-600`}>
        {text}
      </h2>
      <div className="h-1 w-24 bg-orange-600" />
    </div>
  );
}
