import { useState } from "react";
import "./scss/App.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const defaultMarkdown = `\
# freecodecamp Solutions:
## Build a markdown previewer
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

**This is an example of Bolded Text**
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="box">
          <div className="box__container">
            <textarea
              name="editor"
              id="editor"
              value={markdownText}
              onChange={(e) => setMarkdownText(e.target.value)}
            ></textarea>
            <div id="preview">
              <ReactMarkdown>{markdownText}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
