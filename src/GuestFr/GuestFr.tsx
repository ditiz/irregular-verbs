import React, { useState } from "react";
import Choices from "../Choices/Choices";
import verbs from "../data/verbs.json";
import Message from "../Message/Message";
import { getRandomVerb } from "../utils";
import { VerbAttribute } from "../types";

interface IGuestFr {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  resetScore: () => void;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function GuestFr({ score, setScore, resetScore, setReload }: IGuestFr) {
  const [messageStatus, setMessageStatus] = useState<
    "truth" | "wrong" | "ignore"
  >("ignore");
  const [verb, setVerb] = useState(verbs[getRandomVerb()]);

  const truth = (trigger: boolean) => {
    setMessageStatus("truth");
    if (!trigger) {
      setScore((s) => s + 1);
    }
  };

  const wrong = () => {
    setMessageStatus("wrong");
    resetScore();
  };

  const next = () => {
    setMessageStatus("ignore");
    setVerb(verbs[getRandomVerb()]);
    setReload(true);
  };

  const title = (
    <span>
      Trouver la <strong>traduction</strong>
    </span>
  );

  return (
    <div className="content">
      <h2>{verb.base}</h2>
      <Message title={title} status={messageStatus} next={next} />
      <Choices
        verbResponse={verb}
        handleTruth={truth}
        handleWrong={wrong}
        score={score}
        use={VerbAttribute.fr}
      />
    </div>
  );
}

export default GuestFr;
