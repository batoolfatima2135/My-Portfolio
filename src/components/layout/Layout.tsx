import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Particles from "../ParticleBackground/Particles";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-full relative">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={20000}
          particleSpread={10}
          speed={0.01}
          moveParticlesOnHover
          particleBaseSize={50}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={0.5}
        />
        <Outlet />
      </div>
    </>
  );
}
