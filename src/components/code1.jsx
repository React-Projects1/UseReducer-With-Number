import React, { useContext } from "react";
import { x1 } from "../App";
import { x2 } from "../App";

function Code1() {
  const a = useContext(x1);
  const b = useContext(x2);
  return (
    <div>
      {/* <x1.Consumer>
        {(a) => {
          return (
            <x2.Consumer>
              {(b) => {
                return (
                  <h2>
                    {a} {b}
                  </h2>
                );
              }}
            </x2.Consumer>
          );
        }}
      </x1.Consumer> */}

      <p>
        {a} {b}
      </p>
    </div>
  );
}

export default Code1;
