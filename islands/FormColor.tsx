import { useState } from "preact/hooks";

function FormColor() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColorList([...colorList, color]);
    console.log(`El color ingresado es: ${color}`);
  };

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        class="flex justify-center flex-col items-center my-8 border border-solid border-gray-500 rounded-lg p-5"
      >
        <label>
          Ingresa un color:
          <input
            class="m-4 text-center w-40 border border-solid border-gray-500 rounded-lg"
            type="text"
            value={color}
            onChange={handleInputChange}
            placeholder="red"
          />
        </label>
        <button
          class="border border-solid border-black rounded-lg w-20 bg-gray-200 "
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div class="flex justify-center flex-col items-center bg-orange-200 bg-black border border-solid border-black rounded-lg">
        <ul>
          {colorList.map((color) => (
            <li class="text-center font-bold text-2xl" style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormColor;
