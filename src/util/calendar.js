// 日期为完整日期
// 日期对象{date:new Date(),lunar:'初二',festival:'none'}
import solarTransformLunar from '@/util/solarTransformLunar';
import getTerm from '@/util/24solarTerms';

export default function getCalendarArrayByDate(selectDate) {
    let setSelectDate = new Date();
    setSelectDate.setFullYear(selectDate.year);
    setSelectDate.setMonth(selectDate.month);
    setSelectDate.setDate(selectDate.day);
    let date = new Date(setSelectDate); // date
    date.setDate(1);// 设置为月份第一天
    let week = date.getDay(); // 获取月份第一天的时间是星期几 0-6 -> 日-六
    let calendarArray = [[], [], [], [], []];
    let day = 0;
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 7; y++) {
            if (x === 0 && y < week) {
                let minus = new Date(date); // 重新初始化一个date,避免原始值被改变
                minus.setDate(y - week + 1);
                calendarArray[x][y] = getDateObjectByDate(minus, selectDate);
            } // 做天数减
            else {
                let sum = new Date(date); // 重新初始化一个date,避免原始值被改变
                sum.setDate(++day)
                calendarArray[x][y] = getDateObjectByDate(sum, selectDate);
            }// 做天数加
        }
    }
    return calendarArray;
}

function getDateObjectByDate(date, selectDate) {
    return {
        date: date,
        year: date.getFullYear(),
        month: {
            original: date.getMonth(),
            transform: date.getMonth() + 1
        },
        day: date.getDate(),
        week: {
            original: date.getDay(),
            transform: transformWeek(date.getDay())
        },
        lunar: solarTransformLunar(date.getFullYear(), date.getMonth(), date.getDate()),
        term: getTerm(date.getFullYear(), date.getMonth(), date.getDate()),
        type: (date.getMonth() + 1) === selectDate.month + 1 ? "info" : "error"
    };
}

function transformWeek(day) {
    switch (day) {
        case 0:
            return '日';
        case 1:
            return '一';
        case 2:
            return '二';
        case 3:
            return '三';
        case 4:
            return '四';
        case 5:
            return '五';
        case 6:
            return '六';
    }
}



