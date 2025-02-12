import LogoCarousel from "./_components/logo-carousel";
import NavBar from "./_components/navbar";
import ScrollContainer from "./_components/scroll-container";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center justify-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <ScrollContainer />
      </section>
      <LogoCarousel />
    </>
  );
}
