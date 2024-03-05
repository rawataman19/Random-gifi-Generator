import { Random } from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen w-full  flex flex-col background bg-repeat">
      <h1 className="my-6 mx-auto py-2 text-rounded-md bg-white bg w-10/12 text-center text-3xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col sm:flex-row item-center gap-16 w-full lg:justify-center ">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

