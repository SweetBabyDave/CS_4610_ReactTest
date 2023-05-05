import { useEffect, useState } from "react"

export const Question5 = () => {
  const [random, setRandom] = useState(Math.random() * 10);
  const [userNum, setUserNum] = useState("");
  const [evalNum, setEvalNum] = useState<number | undefined>(undefined);
  useEffect(() => {

  });
  return (
    <section className="question">
      <h2>Question 5</h2>
      <div className="question-content">
        <strong>Instructions</strong>
        <div className="question-instructions">
          It is common to do something when the page first loads - build me some UI that does the following
          <ol>
            <li>When the page first loads generate a random number and display it on the screen</li>
            <li>
              Give me a text input that allows me to type ether a + or -
              followed by a number
              <ol type="a">
                <li>For example: "+1", "-2", "+10", "-19.2"</li>
                <li>Don't worry about handling bad inputs for this questions</li>
              </ol>
            </li>
            <li>Give me a button I can push that says "Evaluate"</li>
            <li>
              When I push the button parse the expression I typed in and either
              add or subtract the value from the
              random number that was generated and display replace the number on the screen with the result.
            </li>
            <li>Give me a button to generate a new random number.</li>
          </ol>
          <div>Be sure to follow unidirectional dataflow!</div>
          Hint: you will need a useEffect hook.
        </div>
        <hr />
        <div className="solution-section">
          <p>Random Number</p>
          {random}
          <button onClick={() => setRandom(Math.random() * 10)}>New Random Num</button>
          <p>Input a Number</p>
          <input
          type="text"
          value = {userNum}
          onChange={e => setUserNum(e.target.value)}></input>
          <button
          onClick={() => setEvalNum(parseFloat(userNum) + random)}>
          Evaluate
          </button>
          {evalNum}
        </div>
      </div>
    </section>
  )
}