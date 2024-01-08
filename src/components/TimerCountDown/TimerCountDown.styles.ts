import { createUseStyles } from "react-jss";

const getStyles = {
    minutesAndSeconds: {
        display: "flex",
        marginLeft: "17px"
    },
    minutes: {
        width: "95px",
    },
    seconds: {
        width: "105px",
    },
    milisecs: {
        width: "120px",
    },
};
export default createUseStyles(getStyles);