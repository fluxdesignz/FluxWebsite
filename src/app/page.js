import { ViewportBoundary } from 'next/dist/server/app-render/entry-base';
import React from 'react'
import Wave from 'react-wavify'

export default function Home() {
  return (
  <>
    <div>
      <p
      style={{
        fill:'#111111',
        position: 'fixed',
        bottom: '50vh',
        fontSize: '3rem',
        textAlign: 'center',
        width: '100vw'
      }}
      >freaky ahh website</p>
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
