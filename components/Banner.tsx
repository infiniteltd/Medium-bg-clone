function Banner() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{" "}
          is a place to write, read, and connect
        </h1>
        <h2>
          It&#39;s easy and free to post your thinking on any topic and connect
          with millions of readers.
        </h2>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://rb.gy/6g2n77"
        alt="medium"
      />
    </div>
  );
}

export default Banner;
