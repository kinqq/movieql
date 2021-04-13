import axios from "axios";
import Timetable from "comcigan-parser";

const timetable = new Timetable();

export const getTimetable = async (weekday) => {
    await timetable.init();
    await timetable.setSchool("덕이중학교");
    const result = await timetable.getTimetable();
    console.log(result["2"]["10"]);
    return result["2"]["10"][weekday];
};
