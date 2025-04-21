import { ViewportBoundary } from 'next/dist/server/app-render/entry-base';
import React from 'react'
import Wave from 'react-wavify'

export default function Home() {
  return (
  <>
    <div>
     <p
  style={{
    position: 'fixed',
    bottom: '50vh',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '3rem',
    textAlign: 'center',
    fill: '#111111',
    margin: 0,
  }}
>
  Flux&apos;s Site :3
</p>

<p
  style={{
    position: 'fixed',
    bottom: '48vh',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '1rem',
    textAlign: 'center',
    fill: '#111111',
    margin: 0,
  }}
>
  <a href="https://www.figma.com/@fluxdesigns">figma</a> • 
  <a href="https://scratch.mit.edu/users/FluxDesign/">scratch</a> • 
  <a href="https://www.youtube.com/@flux.design">youtube</a>
</p>
</div>

    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#1B0645" />
          <stop offset="100%" stopColor="#0D0124" />
      </linearGradient>
    </defs>
  </svg>

      <Wave
        fill="url(#myGradient)"
        paused={false}
        style={{ display: 'flex',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          zIndex: -1,
          height: '80vh',
         }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
      />
    </div>
    <div>
      <Wave
        fill='#260B5B'
        paused={false}
        style={{ display: 'flex',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          zIndex: -2,
          height: '82vh',
         }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
      />
    </div>
    <div>
      <Wave
        fill='#543E80'
        paused={false}
        style={{ display: 'flex',
          position: 'fixed',
          bottom: 0,
          width: '100vw',
          zIndex: -3,
          height: '83vh',
         }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
      />
    </div>
<div className="p-4 bg-neutral-700 rounded-[42px] inline-flex justify-center items-center gap-4">
    <div className="w-24 h-24 bg-gradient-to-b from-neutral-400 to-neutral-600" />
    <div className="w-20 h-20 bg-gradient-to-b from-neutral-200 to-neutral-400" />
    <div className="w-2 h-2 bg-stone-700" />
    <div className="w-16 h-16 bg-stone-900" />
    <div className="w-16 h-16 bg-white/5" />
    <div className="w-14 h-14 bg-white/5" />
    <div className="w-12 h-12 bg-white/5" />
    <div className="w-9 h-9 bg-white/5" />
    <div className="w-6 h-6 bg-violet-600" />
    <div className="w-2 h-2 bg-yellow-900" />
    <div className="w-2 h-12 bg-stone-300" />
    <div className="w-1.5 h-1.5 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#B8B8B8_0%,_#999999_100%)]" />
    <div className="w-24 h-24 bg-white" />
    <div className="w-16 h-6 bg-violet-700" />
    <div className="w-16 h-12 bg-violet-700" />
    <div className="w-16 h-11 bg-violet-600" />
    <div className="w-24 h-24 bg-gradient-to-b from-white to-neutral-200" />
    <div className="w-20 h-20 bg-violet-500" />
    <div className="w-20 h-20 bg-violet-600" />
    <div className="w-9 h-5 bg-white" />
    <div className="w-6 h-6 bg-white" />
    <div className="w-3.5 h-3.5 bg-white" />
    <div className="w-6 h-3.5 bg-white" />
    <div className="w-3.5 h-5 bg-white" />
    <div className="w-3 h-4 origin-top-left rotate-180 bg-white" />
    <div className="w-24 h-24 bg-gradient-to-b from-neutral-50 to-stone-300" />
    <div className="w-20 h-20 bg-zinc-950/10" />
    <div className="w-20 h-20 bg-gradient-to-b from-sky-400 to-sky-300" />
    <div className="w-20 h-14 origin-top-left rotate-180 bg-white" />
    <div className="w-10 h-10 bg-neutral-300" />
    <div className="w-6 h-6 bg-neutral-300" />
    <div className="w-6 h-6 bg-zinc-100" />
    <div className="w-9 h-9 bg-blue-900/50 backdrop-blur-[2.35px]" />
    <div className="w-10 h-10 bg-zinc-100 backdrop-blur-[2.35px]" />
    <div className="w-24 h-24 bg-gradient-to-b from-teal-400 to-green-400" />
    <div className="w-16 h-14 bg-neutral-200" />
    <div className="w-16 h-14 bg-white" />
</div>
    </>
  );
}
