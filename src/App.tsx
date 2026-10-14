import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Building from "@/components/Building";
import Videos from "@/components/Videos";
import Events from "@/components/Events";
import Talk from "@/components/Talk";


export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:px-5 focus:py-3 focus:text-[13px] focus:font-medium"
        style={{ background: "var(--pa-green)", color: "#fff" }}
      >
        Skip to content
      </a>


      <div className="relative z-10">
        <main id="main">
          <Hero />
          <About />
          <Story />
          <Building />
          <Videos />
          <Events />
          <Talk />
        </main>
      </div>
    </>
  );
}
