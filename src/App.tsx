import React, { FC } from "react";
import { Button } from "antd";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  return (
    <div>
      <Button type="primary">test</Button>
    </div>
  );
};

export default App;
