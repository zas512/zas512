'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

const ParticlesWrapper = () => {
  return <ParticlesBackground />;
};

export default ParticlesWrapper; 