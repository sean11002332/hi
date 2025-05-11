import { useState } from "react"

import { GuestbookPage, StartScreen } from "./pages"

const App = () => {
  const [start, setStart] = useState(false);

  return start ? (
    <GuestbookPage />
  ) : (
    <StartScreen onStart={() => setStart(true)} />
  );
}

export default App
