import omelette from "./assets/image-omelette.jpeg";
function App() {
  return (
    <>
      <main className="font-outfit text-[1rem] text-stone-600 bg-[#F3E5D8] desk:flex desk:flex-col desk:justify-center desk:items-center min-h-screen">
        <section className="bg-white desk:max-w-[45rem] desk:h-auto desk:rounded-xl ">
          <img
            src={omelette}
            alt="Recipe Image"
            className="desk:rounded-2xl desk:m-8 desk:max-w-[41rem]"
          />
          <div className="flex flex-col items-start justify-start gap-5 p-8 ">
            <h1 className="font-young-serif text-[2.5rem] leading-10 text-stone-900">
              Simple Omelette Recipe
            </h1>
            <p className="text-stone-150">
              An easy quick dish, perfect for any meal. This classic omelette
              combines beaten eggs cooked to perfection, optionally filled with
              your choice of cheese, vegetable, or meats.
            </p>
            <div className="flex flex-col items-start justify-start w-full gap-1 p-5 bg-rose-50 rounded-xl">
              <h2 className="  font-semibold text-rose-800 text-[1.2rem]">
                Preparation time
              </h2>
              <ul className="p-1 space-y-2">
                <li className="flex flex-row items-center gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <p>
                    <strong>Total</strong>: Approximately 10 minutes
                  </p>
                </li>

                <li className="flex flex-row items-center gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <p>
                    <strong>Preparation</strong>: 5 minutes
                  </p>
                </li>

                <li className="flex flex-row items-center gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <p>
                    <strong>Cooking</strong>: 5 minutes
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4 pb-8 border-gray-300 border-b-1">
              <h2 className="text-[hsl(14_45%_36%)] text-[2rem]">
                Ingredients
              </h2>
              <ul className="flex flex-col gap-2 p-1">
                <li className="flex items-center justify-start gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <span>2-3 large eggs</span>
                </li>
                <li className="flex items-center justify-start gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <span>Salt, to taste</span>
                </li>
                <li className="flex items-center justify-start gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <span>Pepper, to taste</span>
                </li>
                <li className="flex items-center justify-start gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <span>1 tablespoon of butter or oil</span>
                </li>
                <li className="flex items-center justify-start gap-8">
                  <span className="rounded-full size-1 bg-stone-900"></span>
                  <span>
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 pb-4 border-gray-300 border-b-1">
              <h2 className="text-[hsl(14_45%_36%)] text-[2rem]">
                Instructions
              </h2>
              <ol className="flex flex-col gap-2 list-decimal  p-4 pl-5 marker:text-[hsl(14_45%_36%)] marker:font-bold">
                <li className="pl-3">
                  <strong>Beat the eggs</strong>: In a bowl, beat the eggs with
                  a pinch of salt and pepper until they are all mixed. You can a
                  tablespoon of water or milk for a fluffier texture.
                </li>
                <li className="pl-3">
                  <strong>Heat the pan</strong>: Place a non'stick frying pan
                  over medium heat and add butter or oil.
                </li>
                <li className="pl-3">
                  <strong>Cook the omelette</strong>: Once the butter is melted
                  and bubbling, pour in the eggs. Tilt the pan to ensure the
                  eggs evenly coat the surface.
                </li>
                <li className="pl-3">
                  <strong>Add filling (optional)</strong>: When the eggs begin
                  to set at the edges but are still slighty runny in the middle,
                  sprinkle your chose fillings over one half of the omelette.
                </li>
                <li className="pl-3">
                  <strong>Fold and serve</strong>: As the omelette continues to
                  cook, carefully lift one edge and fold it over the fillings.
                  Let it cook for another minute, the slide it onto a plate.
                </li>
                <li className="pl-3">
                  <strong>Enjoy</strong>:Serve hot, with additional salt and
                  pepper if needed.
                </li>
              </ol>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4 pb-4 ">
              <h2 className="text-[hsl(14_45%_36%)] text-[2rem]">Nutrition</h2>
              <p className="text-stone-150">
                The table bellow shows nutritional values per serving without
                the additional fillings.
              </p>

              <div className="flex w-full gap-20 pb-3 pl-10 border-gray-300 border-b-1 desk:space-x-40">
                <span className="w-15"> Calories</span>
                <span>
                  <strong class="text-[hsl(14_45%_36%)] ">277kcal</strong>
                </span>
              </div>
              <div className="flex w-full gap-20 pb-3 pl-10 border-gray-300 border-b-1 desk:space-x-40">
                <span className="w-15"> Carbs</span>
                <span>
                  <strong class="text-[hsl(14_45%_36%)] ">0g</strong>
                </span>
              </div>
              <div className="flex w-full gap-20 pb-3 pl-10 border-gray-300 border-b-1 desk:space-x-40">
                <span className="w-15">Protein</span>
                <span>
                  <strong class="text-[hsl(14_45%_36%)] ">20g</strong>
                </span>
              </div>
              <div className="flex gap-20 pb-3 pl-10 desk:space-x-40">
                <span className="w-15"> Fat</span>
                <span>
                  <strong class="text-[hsl(14_45%_36%)] ">22g</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
