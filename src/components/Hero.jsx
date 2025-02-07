export default function Hero() {
  return (
    <section className="w-full h-[600px] bg-gradient-to-br from-[rgb(0,20,137)] to-[rgb(0,181,226)] border-b-[9px] border-b-[rgb(212,93,0)]">
      <div className="grid grid-cols-1 items-center px-16 h-full text-white md:grid-cols-2">
        <div className="flex flex-col gap-2 md:pr-2">
          {/* Ajustement avec translate-y responsive */}
          <h1 className="text-7xl font-bold transform md:translate-x-6 md:-translate-y-9 sm:translate-y-0 font-museo">
            Parole de chien
          </h1>
          <p className="text-3xl text-white font-semibold transform md:translate-x-16 md:-translate-y-7 sm:translate-y-0 font-museo">
            Des chiens pour créer des liens
          </p>
        </div>
        <div>
          <img src="1.png" alt="chien" className="max-h-[600px]" />
        </div>
      </div>
    </section>
  );
}
