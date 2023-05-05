import { Head } from "$fresh/runtime.ts";
import FormColor from "../islands/FormColor.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="flex justify-center flex-col items-center bg-orange-200">
        <h1 class="text-4xl font-bold">Listado de Colores</h1>
        <div>
          <FormColor />
        </div>
      </div>
    </>
  );
}
