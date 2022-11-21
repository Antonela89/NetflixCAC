export const logger = (msg, title = "LOG") => {
    if (process.env.REACT_APP_MODE === "PROD") {
        return;
    }

    console.log("-----------------------------");
    console.log(`[${title}]: ${msg}`);
    console.log("-----------------------------");
    };