import { createUseStyles } from "react-jss";

const getStyles = {
    actions: {
        display: "flex",
        justifyContent: "center",
        marginTop: "15px"
    },
    pauseBtn: {
        marginRight: "10px"
    },
    resetBtn: {
        // marginRight: "10px"
    },
};
export default createUseStyles(getStyles);