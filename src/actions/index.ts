import { createTrivialAction } from "redux-trivial-actions";

export const openSideMenu = createTrivialAction("OPEN_SIDE_MENU");
export const closeSideMenu = createTrivialAction("CLOSE_SIDE_MENU");
export { action as demoRoutineOneAction } from "../routines/demoRoutineOne";
export { action as demoRoutineTwoAction } from "../routines/demoRoutineTwo";
export { action as SignUpAction } from "../routines/SignUp";
