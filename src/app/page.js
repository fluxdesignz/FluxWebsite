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
    </>
  );
}
