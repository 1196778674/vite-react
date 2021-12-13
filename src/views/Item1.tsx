import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { rootState } from "../store";
import { Button } from "antd";

import { jian } from "../store/actions";

interface ItemProps {
  count: number;
  jian: (n: number) => void;
}

const Item1: FC<ItemProps> = (props) => {
  const { count, jian } = props;

  const jianFun = useCallback(() => {
    jian(1);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Button type="primary" onClick={jianFun}>
        减
      </Button>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return { ...state.test };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  jian: (num: number) => jian(num),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item1);
