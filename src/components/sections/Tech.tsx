import { useEffect, useState } from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const Tech = () => {
  const isMobile = useIsMobile();

  // Show every alternate tech ball on mobile to reduce
  // simultaneous WebGL contexts (Android context-limit issue)
  const visibleTechnologies = isMobile
    ? technologies.filter((_, index) => index % 2 === 0)
    : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechnologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
