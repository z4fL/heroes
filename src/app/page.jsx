const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mt-14 mb-12">
      <h1 className="text-[10rem] text-color-accent text-center font-tungsten mt-20">
        HEROES
      </h1>
      <div>
        <button className="btn btn--light min-w-52 text-lg">
          <span className="btn__inner">
            <span className="btn__slide"></span>
            <span className="btn__content">All Heroes</span>
          </span>
        </button>
      </div>
      <section className="flex items-center px-20 relative w-full h-[85rem]">
        <div className="border border-color-accent h-full w-full">
          <h2 className="text-center text-7xl uppercase font-bebas text-color-white">
            all heroes
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Page;
