import { createUseStyles } from "react-jss";

export default createUseStyles({
    timerAndActionsWrapper: {
        fontFamily: "'Orbitron', sans-serif",
        marginTop: "20px",
    },
    timerWrapper: {
        fontSize: "55px",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        padding: "10px",
        boxShadow: "0 0 5px grey",
        marginBottom: "10px",
        borderRadius: "35px",
        width: "340px",
        transition: "box-shadow 0.3s ease"
    },
    timerWrapperRed: {
        boxShadow: "0 0 15px red",
    },
    isOver: {
        fontSize: "24px",
        textAlign: "center",
        marginTop: "10px"
    }
});