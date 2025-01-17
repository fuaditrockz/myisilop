import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function Header({
  title,
  isHome,
}: {
  title: string;
  isHome?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="w-screen flex flex-row justify-center items-center min-h-14 bg-black border-b-1 border-slate-600">
      <div className="w-full h-full px-5 flex flex-row justify-between items-center text-center">
        <div className="flex flex-row items-center min-w-10">
          {!isHome && (
            <Button
              onPress={() => router.push("/")}
              isIconOnly
              className="p-0 bg-transparent"
            >
              <span className="icon-[material-symbols--arrow-back] size-5 text-white"></span>
            </Button>
          )}
        </div>
        <h1 className="text-white text-lg font-bold">{title}</h1>
        <div className="w-10"></div>
      </div>
    </div>
  );
}
