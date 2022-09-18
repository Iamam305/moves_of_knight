import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { chessKnight2 } from "./KnightPosition2";

const boardBlocks = [
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [3, 8],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8],
];

function App() {
  const [count, setCount] = useState(0);
  const [possibleMoves, setPossibleMoves] = useState([]);
  console.log(possibleMoves);

  const getPossibleMoves = (i, j) => {
    setPossibleMoves(chessKnight2([i, j]));
  };

  return (
    <>

    <div className="bg-[url('https://img.freepik.com/free-photo/vintage-textured-watercolor-paper-background_53876-103939.jpg?w=1060&t=st=1663487768~exp=1663488368~hmac=bdf899c5710eabc7e60fa581deec284af4ad26edd4ce91383608e75c4430172c')] flex flex-col w-screen h-screen">

    <h2 className="text-stone-700 text-3xl font-bold p-2">Possible moves of the knight -
  
    </h2>
      <div className="flex flex-wrap w-[90vw] md:w-[90vh] aspect-square border border-black m-auto ">
        {" "}
        {boardBlocks.map((block) => (
          <div
            key={`${block[0]} ${block[1]}`}
            className={`basis-[12.5%] aspect-square backdrop-blur-sm opacity-95 ${
              (block[0] + block[1]) % 2 == 0 ? "bg-stone-600 " : "bg-stone-300"
            }`}
          >
          {console.log([block[0], block[1]])}

            <button
              className={`w-full h-full rounded-full flex justify-center focus:bg-green-500 ${ 
                possibleMoves.includes(JSON.stringify([block[0], block[1]]))
                  ? "bg-blue-500"
                  : ""
              } `}
              onClick={(e) => getPossibleMoves(block[0], block[1])}
            >
              
            </button>
          </div>
        ))}
      </div>

      
     <span className="text-lg block text-center font-bold">
      (click any block to find avilable move of knight)
      </span>
    </div>

    </>
  );
}

export default App;
