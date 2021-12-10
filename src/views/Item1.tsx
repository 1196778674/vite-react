import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { rootState } from "../store";
import { Dispatch } from "redux";
import { IUser, IUserActionType } from "../store/reducer/user";
import { Button } from "antd";

type Item1Props = {
  user: { name: string };
  initName?: (name: string) => void;
};

const Item1: FC<Item1Props> = (props) => {
  const {
    user: { name },
    initName,
  } = props;

  const InitFun = useCallback(() => {
    initName && initName("普通用户");
  }, []);

  return (
    <div>
      {name}
      <br />
      <Button type="primary" onClick={InitFun}>
        Init
      </Button>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return { ...state.user };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initName: (name: string) => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { name },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Item1);
