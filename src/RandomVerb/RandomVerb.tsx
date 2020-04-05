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
  const [elements] = useState<JSX.Element[]>([
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
      setRender(elements[randNumber(elements.length)]);
      setReload(false);
    }
  }, [elements, setRender, score, reload]);

  return render;
}

export default RandomVerb;
