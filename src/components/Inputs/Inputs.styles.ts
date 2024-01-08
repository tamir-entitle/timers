import { createUseStyles } from "react-jss";

const getStyles = {
    inputsWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        borderTop: "1px solid #8080806b",
        width: "300px",
        "& > :first-child": {
            marginTop: "15px"
          }

    },
    label: {
        margin: "5px 0",
        width: "150px",
        display: "flex",
        justifyContent: "space-between"
    },
    labelText: {
        marginRight: "15px"
    },
    input: {
        width: "50px"
    },
    addTimerBtn: {
        marginTop: "20px"
    },
};
export default createUseStyles(getStyles);