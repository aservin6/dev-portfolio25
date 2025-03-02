export default function Overlay() {
  return (
    <>
      <div className="backgroundMesh fixed top-0 left-0 -z-10 h-screen w-screen" />
      <div className="noiseFilter pointer-events-none fixed top-0 left-0 z-20 h-screen w-screen" />
    </>
  );
}
