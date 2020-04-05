import React, { useState, useRef } from "react";
import verbs from "../data/verbs.json";
import Message from "../Message/Message";
import { getRandomVerb, randNumber, initHint } from "../utils";

interface IWriteParticiple {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  resetScore: () => void;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function WriteParticiple({
  setScore,
  resetScore,
  setReload,
}: IWriteParticiple) {
  const [verb, setVerb] = useState(verbs[getRandomVerb()]);
  const [messageStatus, setMessageStatus] = useState<
    "truth" | "wrong" | "ignore"
  >("ignore");
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState<string>(initHint(verb.participle));

  const refInput = useRef(null);

  const truth = (trigger: boolean) => {
    setMessageStatus("truth");

    if (!trigger) {
      setScore((s) => s + 1);
    }
  };

  const wrong = () => {
    setMessageStatus("wrong");
    resetScore();

    setHint((h) => {
      console.log(h, verb.participle);
      if (h === verb.participle) {
        return h;
      }

      let index = randNumber(h.length);

      while (h[index] !== "-") {
        console.log("recherche");
        index = randNumber(h.length);
      }

      return h.substr(0, index) + verb.participle[index] + h.substr(index + 1);
    });
  };

  const next = () => {
    const newVerb = verbs[getRandomVerb()];
    setMessageStatus("ignore");
    setVerb(newVerb);
    setReload(true);
    setHint(initHint(verb.participle));
    setInputValue("");
  };

  const title = (
    <span>
      Trouver la forme <strong>prétérit (passé)</strong>
    </span>
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const check = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === verb.participle) {
      truth(true);
    } else {
      wrong();
    }
  };

  return (
    <div className="content">
      <h2>{verb.base}</h2>
      <Message title={title} status={messageStatus} next={next} />
      <div className="hint">
        <small>indice:</small> {hint}
      </div>
      <form onSubmit={check} className="response">
        <input
          type="text"
          autoFocus
          ref={refInput}
          value={inputValue}
          onChange={handleChange}
        />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
}

export default WriteParticiple;
