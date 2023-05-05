
export const Question8 = () => {
  return (
    <section className="question">
      <h2>Question 8</h2>
      <div className="question-content">
        <strong>Instructions</strong>
        <div className="question-instructions">
          My colleague has told me that their software is perfect and has no bugs,
          and therefore it is unecessary for them to hash passwords because their database will never get leaked.

          <div>Assume, for the sake of argument, that the software is, in fact, perfect with no issues. Do you agree with my colleague's assessment? Why or why not? Be sure to provide specific examples.</div>
        </div>
        <hr />
        <div className="solution-section">
          <p>They definitely still need to use a hashing algorithm. 
          Even if the data will never get leaked, it wouldn't be safe because if someone gets access to the hardware, then the thief would easily be able to take the passwords.
          It would be much safer if the passwords were hashed, because then if someone got ahold of the hardware, we would be able to let users know in advance that the data was breached.
          The reason for not doing it is generally out of laziness as well, because performance is hardly impacted when you hash passwords.
          </p>
        </div>
      </div>
    </section>
  )
}