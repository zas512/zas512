const BlackHole = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[52%] w-full h-full object-cover -z-10"
      style={{
        maskImage:
          "radial-gradient(circle at center, black 10%, rgba(0,0,0,0.5) 40%, transparent 50%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 10%, rgba(0,0,0,0.5) 40%, transparent 50%)",
      }}
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default BlackHole;
