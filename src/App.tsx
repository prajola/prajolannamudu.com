import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Building from "@/components/Building";
import Videos from "@/components/Videos";
import Inspiration from "@/components/Inspiration";
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
          {/* Videos sits with Building on purpose - it is the same
              subject ("KubeGraf, in motion"), so splitting them would
              break the product thread. Inspiration and Events then move
              from the work to the person and the world around it. */}
          <Videos />
          <Inspiration />
          <Events />
          <Talk />
        </main>
      </div>
    </>
  );
}
