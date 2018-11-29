import { connect } from "react-redux";
import Component from "./index";
import * as Actions from "../../../actions";


const mapDispatchToProps = (dispatch: any) => {
  console.log(123123);
  return {
    onSubmitForm: (values: any) => {
        dispatch(Actions.SignUpAction(values));
      }
    };
};

export default connect(null, mapDispatchToProps)(Component);
