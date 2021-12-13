import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { rootState } from "../store";
import { Button } from "antd";

import { add } from "../store/actions";

interface IHomeProps {
  count: number;
  add: (n: number) => void;
}

const Home: FC<IHomeProps> = (props) => {
  const { count, add } = props;

  const addFun = useCallback(() => {
    add(1);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Button type="primary" onClick={addFun}>
        加
      </Button>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return { ...state.test };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (num: number) => add(num),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
