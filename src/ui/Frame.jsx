export default function Frame() {
  return (
    <div className="fixed top-0 left-0 h-full w-full">
      <div className="absolute top-2 left-2 h-7 w-7 border-t-2 border-l-2 border-zinc-800 md:top-5 md:left-5 md:h-10 md:w-10"></div>
      <div className="absolute top-2 right-2 h-7 w-7 border-t-2 border-r-2 border-zinc-800 md:top-5 md:right-5 md:h-10 md:w-10"></div>
      <div className="absolute bottom-2 left-2 h-7 w-7 border-b-2 border-l-2 border-zinc-800 md:bottom-5 md:left-5 md:h-10 md:w-10"></div>
      <div className="absolute right-2 bottom-2 h-7 w-7 border-r-2 border-b-2 border-zinc-800 md:right-5 md:bottom-5 md:h-10 md:w-10"></div>
    </div>
  );
}
