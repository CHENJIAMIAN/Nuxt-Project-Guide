/**************
 *生成guid
 *
 **************/
function CreadGuid() {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    const uuid = s.join('');
    return uuid;
}
/**************
 *将js格式转换为常用的yyyy-MM-dd,yyyy-MM-dd HH:mm:ss等格式
 *
 **************/
function Formate(date, fmt) {
    const temp = new Date(date);
    const o = {
        'M+': temp.getMonth() + 1, // 月份
        'd+': temp.getDate(), // 日
        'H+': temp.getHours(), // 小时
        'm+': temp.getMinutes(), // 分
        's+': temp.getSeconds(), // 秒
        'q+': Math.floor((temp.getMonth() + 3) / 3), // 季度
        'S': temp.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (temp.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
    return fmt;
}

function formateCoord(cellValue) {
    return Number(cellValue).toFixed(10);
}
// 导航菜单排序
function moduleAndMenuSort2(data) {
    const obj = {};
    const arr = [];
    const sortData = [];
    for (let i = 0, len = data.length; i < len; i++) {
        arr.push(data[i].OrderNo);
        obj[data[i].OrderNo] = (data[i]);
    }
    // 按模块排序
    arr.sort().forEach(index => {
        sortData.push(obj[index]);
    });
    sortData.map((cur) => {
        const children = cur.Children;
        if (children && children.length > 1) {
            for (let i = 0; i < children.length; i++) {
                for (let j = 0; j < children.length - 1 - i; j++) {
                    if (children[j].OrderNo > children[j + 1].OrderNo) {
                        [children[j], children[j + 1]] = [children[j + 1], children[j]];
                    }
                }
            }
        }
    }, [])
    return sortData;
}

function wktToCoord(cellValue) {
    if (cellValue) {
        return cellValue.substr(5).replace('(', '').replace(')', '').split(' ').toString();
    }
}

function getCurrentDate(type) {
    const timeStr = '-';
    const curDate = new Date();
    const curYear = curDate.getFullYear(); // 获取完整的年份(4位,1970-????)
    const curMonth = curDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
    const curDay = curDate.getDate(); // 获取当前日(1-31)
    const curWeekDay = curDate.getDay(); // 获取当前星期X(0-6,0代表星期天)
    const curHour = curDate.getHours(); // 获取当前小时数(0-23)
    let curMinute = curDate.getMinutes(); // 获取当前分钟数(0-59)
    if (curMinute < 10) {
        curMinute = '0' + curMinute;
    }
    let curSec = curDate.getSeconds(); // 获取当前秒数(0-59)
    if (curSec < 10) {
        curSec = '0' + curSec;
    }
    const Current = curYear + timeStr + curMonth + timeStr + curDay + ' ' + curHour + ':' + curMinute + ':' + curSec;

    if (type == 'currentStartDate') {
        // 当天的零点
        // const startH  = curDate.getHours(0);
        // const startM  = curDate.getMinutes(0);
        // const startS  = curDate.getSeconds(0);

        let startH = 0;
        let startM = 0;
        let startS = 0;
        const currentStart = curYear + timeStr + curMonth + timeStr + curDay + ' ' + startH + ':' + startM + ':' + startS;
    }


    if (type == 'oneWeekDate') {
        // 前一周
        const oneweekdate = new Date(curDate - 7 * 24 * 3600 * 1000);
        const y = oneweekdate.getFullYear();
        const m = oneweekdate.getMonth() + 1;
        const d = oneweekdate.getDate();
        const day = oneweekdate.getDay();
        const h = oneweekdate.getHours();
        let min = oneweekdate.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        let s = oneweekdate.getSeconds();
        if (s < 10) {
            s = '0' + s;
        }
        const OneWeek = y + timeStr + m + timeStr + d + ' ' + h + ':' + min + ':' + s;
    }
    if (type == 'eightHourDate') {
        // 前一周
        let eightHourDate = new Date(curDate - 8 * 60 * 60 * 1000);
        const y = eightHourDate.getFullYear();
        const m = eightHourDate.getMonth() + 1;
        const d = eightHourDate.getDate();
        const day = eightHourDate.getDay();
        const h = eightHourDate.getHours();
        let min = eightHourDate.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        let s = eightHourDate.getSeconds();
        if (s < 10) {
            s = '0' + s;
        }
        eightHourDate = y + timeStr + m + timeStr + d + ' ' + h + ':' + min + ':' + s;
    }

    if (type == 'preOneDay') {
        // 前一周
        const oneweekdate = new Date(curDate - 24 * 3600 * 1000);
        const y = oneweekdate.getFullYear();
        const m = oneweekdate.getMonth() + 1;
        const d = oneweekdate.getDate();
        const day = oneweekdate.getDay();
        const h = oneweekdate.getHours();
        let min = oneweekdate.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        let s = oneweekdate.getSeconds();
        if (s < 10) {
            s = '0' + s;
        }
        const OneDay = y + timeStr + m + timeStr + d + ' ' + h + ':' + min + ':' + s;
    }

    if( type == 'preFiveMinutes'){
        // 前2min
        const preFiveMinutes = new Date( curDate - 5 * 60 * 1000);
        const year = preFiveMinutes.getFullYear();
        const mon = preFiveMinutes.getMonth() + 1;
        const today = preFiveMinutes.getDate();
        const hour = preFiveMinutes.getHours();
        let minute = preFiveMinutes.getMinutes();
        if (minute < 10) {
            minute = '0' + minute;
        }
        let second = preFiveMinutes.getSeconds();
        if (second < 10) {
            second = '0' + second;
        }
        const FiveMinutes = year + timeStr + mon + timeStr + today + ' ' + hour + ':' + minute + ':' + second;
    }

    if (type == 'preOneHour') {
        // 前2min
        const preOneHour = new Date(curDate - 60 * 60 * 1000);
        const year = preOneHour.getFullYear();
        const mon = preOneHour.getMonth() + 1;
        const today = preOneHour.getDate();
        const hour = preOneHour.getHours();
        let minute = preOneHour.getMinutes();
        if (minute < 10) {
            minute = '0' + minute;
        }
        let second = preOneHour.getSeconds();
        if (second < 10) {
            second = '0' + second;
        }
        const OneHour = year + timeStr + mon + timeStr + today + ' ' + hour + ':' + minute + ':' + second;
    }

    if (type == 'oneWeekDate') {
        return OneWeek;
    } else if (type == 'preOneDay') {
        return OneDay;
    } else if (type == 'currentStartDate') {
        return currentStart;
    }else if(type == 'preFiveMinutes'){
        return FiveMinutes;
    } else if (type == 'eightHourDate') {
        return eightHourDate;
    } else if (type == 'preOneHour') {
        return OneHour;
    } else {
        // 默认Current
        return Current;
    }
}


/**
 *节流函数
 *
 * @param {*} fun
 * @param {*} delay
 * @returns
 */
function throttle(fun, delay) {
    let last, deferTimer
    return function (args) {
        const that = this
        const _args = arguments
        const now = +new Date()
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function () {
                last = now
                fun.apply(that, _args)
            }, delay)
        } else {
            last = now
            fun.apply(that, _args)
        }
    }
}


export {
    CreadGuid,
    Formate,
    formateCoord,
    wktToCoord,
    moduleAndMenuSort2,
    getCurrentDate,
    throttle
};