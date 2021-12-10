import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { rootState } from "../store";
import { IUser, IUserActionType } from "../store/reducer/user";
import { Button } from "antd";

type HomeProps = {
  user: IUser;
  changeName?: (name: string) => void;
};

const Home: FC<HomeProps> = (props) => {
  const {
    user: { name },
    changeName,
  } = props;

  const changeNameFun = useCallback(() => {
    changeName && changeName("test");
  }, []);

  return (
    <div>
      {name}
      <br />
      <Button type="primary" onClick={changeNameFun}>
        change
      </Button>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return { ...state.user };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeName: (name: string) => {
    dispatch({
      type: IUserActionType.CHANGE,
      payload: { name },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
