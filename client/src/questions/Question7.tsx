
export const Question7 = () => {
  return (
    <section className="question">
      <h2>Question 7</h2>
      <div className="question-content">
        <strong>Instructions</strong>
        <div className="question-instructions">
          Explain to me in one paragraph in your own words what password hashing is, and why we do it?
          Give me an example of how you might implement it in TypeScript.
        </div>
        <hr />
        <div className="solution-section">
          {/* Write your UI here */}
          <p>It's where you take a password and use a hashing algorithm to put it into undecipherable numbers, letters, and symbols. 
          We do it so if data is leaked, it is a lot more difficult to obtain the actual password, as hackers cannot use the algorithm to go back to the original password.
          They can only guess the password from the text. 
          </p>
<pre>
  {`
  import express, { Application, Request, Response } from 'express';
  import bcrypt from 'bcrypt';
  const app: Application = express();
  const port = parseInt(process.env.PORT??'3000')

  app.post('/password', async (req: Request, res: Response) => {
    const { password } = req.body;

  const hashPass = await bcrypt.hash(password, 5);
  // After this you can actually do something with the password, but this is how you hash it.

  app.listen(port, () => {
    console.log(Listening on port:// Place variable port here, hard to do in pre tag);
  });`}
</pre>
        </div>
      </div>
    </section>
  )
}