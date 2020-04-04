import React, { useState, useEffect } from "react";
import GuestPast from "../GuestPast/GuestPast";
import { randNumber } from "../utils";
import GuestFr from "../GuestFr/GuestFr";

interface IRandomVerbProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  resetScore: () => void;
}

/* <GuestPast
score={score}
setScore={setScore}
resetScore={resetScore}
setReload={setReload}
/>,
<GuestFr
score={score}
setScore={setScore}
resetScore={resetScore}
setReload={setReload}
/>, */

function RandomVerb({ score, setScore, resetScore }: IRandomVerbProps) {
  const [reload, setReload] = useState(false);
  const [elements, setElements] = useState<JSX.Element[]>([
    <GuestPast
      score={score}
      setScore={setScore}
      resetScore={resetScore}
      setReload={setReload}
    />,
    <GuestFr
      score={score}
      setScore={setScore}
      resetScore={resetScore}
      setReload={setReload}
    />,
  ]);

  const [render, setRender] = useState<JSX.Element>(
    elements[randNumber(elements.length)]
  );

  useEffect(() => {
    if (reload) {
      setElements([
        <GuestPast
          score={score}
          setScore={setScore}
          resetScore={resetScore}
          setReload={setReload}
        />,
        <GuestFr
          score={score}
          setScore={setScore}
          resetScore={resetScore}
          setReload={setReload}
        />,
      ]);
    }
  }, [setElements, score, reload, resetScore, setScore]);

  useEffect(() => {
    setRender(elements[randNumber(elements.length)]);
  }, [elements, setRender]);

  return render;
}

export default RandomVerb;
