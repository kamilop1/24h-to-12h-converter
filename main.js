const out = (what) => {
    document.getElementById('main').innerHTML = "Result: " + what;
}
const minutes = (min) => {
    return (min < 10) ? "0" + min : min;
}
const calculate = () => {
    const input = document.getElementById("timeIn").value;
    const splitInput = input.split(":")
    const hour = splitInput[0];
    const minute = splitInput[1];
    if (hour == "" || minute == "" || hour > 23 || minute > 59) {
        out("Invalid input");
        return;
    }
    switch (hour) {
        
        case '00' || '0':
            out("12:" + minutes(minute) + " am");
            break;
        
        case '12':
            out("12:" + minutes(minute) + "pm");
            break;
        
        default:
            if (hour > 12) {
                out((hour - 12) + ":" + minutes(minute) + " pm");
            } else {
                out((hour) + ":" + minutes(minute) + " am")
            }
            break;
    }
}