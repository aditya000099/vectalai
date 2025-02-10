function LightStreak() {
  return (
    <div className="relative h-screen w-full bg-zinc-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-800 via-zinc-900 to-black opacity-50"></div>

      {/* Light Streak */}
      <div className="absolute top-0 left-0 w-[200px] h-[500px] bg-gradient-to-b from-[rgba(255,200,100,0.1)] to-transparent blur-3xl transform rotate-[-20deg] origin-top-left"></div>

      {/* Content (Optional - for demonstration) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl">
        Content Here
      </div>
    </div>
  );
}

export default LightStreak;
