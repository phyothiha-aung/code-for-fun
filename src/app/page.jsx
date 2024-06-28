import RotateAnimation from "../components/RotateAnimation";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <div className="flex p-16 gap-5">
        <div className="relative">
          <div className="sticky top-[64px]">
            <RotateAnimation duration={2.5} rotation={270} />
          </div>
        </div>
        <div className="bg-red-500 h-[1000px] grow"></div>
      </div>
      <div className="bg-yellow-300 h-[300px]" />
    </main>
  );
}
