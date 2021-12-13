import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { rootState } from "../store";
import { Button } from "antd";

import { asyncAdd } from "../store/actions";

interface ItemProps {
  count: number;
  asyncAdd: (n: number) => void;
}

const Item2: FC<ItemProps> = (props) => {
  const { count, asyncAdd } = props;

  const jianFun = useCallback(() => {
    asyncAdd(1);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Button type="primary" onClick={jianFun}>
        异步+3
      </Button>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return { ...state.test };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  asyncAdd: () => asyncAdd(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item2);
