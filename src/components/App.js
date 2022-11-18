import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quote from "./Quote";

function App() {
  const appInfo = {
    title: "Quote of the Day",
    author: "Byul Kim",
    copyright: new Date().getFullYear(),
  };

  useEffect(() => {
    document.title = `${appInfo.title} - Home`;
  }, [appInfo.title]);

  return (
    <div className="App">
      <div className="App-header">
        <Header title={appInfo.title} />
        <Quote />
        <Footer copyright={appInfo.copyright} author={appInfo.author} />
      </div>
    </div>
  );
}

export default App;
