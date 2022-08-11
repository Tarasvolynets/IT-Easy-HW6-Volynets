class Human {
    constructor(height, width, name, date, gender, disability) {
        this.height = height;
        this.width = width;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = !!disability;
    }

    sayHi () {
        console.log( `Hello, my name ${this.name}`);
    }

    get getInfo () {
        const info = {
            height: this.height,
            width: this.width,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability,
        }
        console.log(info);
    }

    set setNewName (name) {
        this.name = name;
    }

    set setNewDisability (disability) {
        this.disability = disability;
    }
}
const firstHuman = new Human(180,75, 'Taras', new Date('1982,8,31'), 'male' ,'true');
console.log(firstMan, 'firstMan');
firstMan.getInfo;
console.log(firstMan.sayHi());
//--------1---------//

class FrontendDeveloper extends Human {
    constructor(height, weight, name, year, gender, disability, careerStart, previousCompanies,) {
        super(height, weight, name, year, gender, disability);
        this.careerStart = careerStart;
        this.previousCompanies = [
            {
                start: new Date(2021, 5, 5),
                end: new Date(2014, 7, 15),
                salaryPerMonth: 800,
                position: 'middle',
                companyName: 'Oracle',
            }, {
                start: new Date(2014, 7, 16),
                end: new Date(2018, 3, 15),
                salaryPerMonth: 900,
                position: 'junior',
                companyName: 'FedEx',
            }, {
                start: new Date(2018, 3, 16),
                end: new Date(2022, 8, 3),
                salaryPerMonth: 1000,
                position: 'senior',
                companyName: 'FM_Logistics',
            }
        ];
    }
sayHello() {
        console.log(`${super.sayHi()},я Фронтенд разработчик. Работаю с ${this.careerStart}`);
    }

    allSalary() {
        let allSalaryInCompany;
        this.previousCompanies.forEach((el) => {
            let allMonthInYears = (el.end.getFullYear() - el.start.getFullYear()) * 12;
            let allWorkMonth = allMonthInYears + (el.end.getMonth() - el.start.getMonth());

            allSalaryInCompany = allWorkMonth * el.salaryPerMonth;

        })
        console.log(allSalaryInCompany, 'Деньги заработаные за всю карьеру');
    }

    get searchCompany() {
        let nameCompany = prompt('Введите имя компании ', 'FedEx');
        this.previousCompanies.filter((el) => {
            if (el.companyName === nameCompany) {
                console.log((el));
            }
        });
    }

    setNewCompany(newCompany) {
        this.previousCompanies.push(newCompany);
        console.log(this.previousCompanies);
    }

}

const firstDeveloper = new FrontendDeveloper(190, 100, 'Mario', new Date('1980-02-20'), 'male', true, new Date('2012-05-05'));
console.log(firstDeveloper);
firstDeveloper.sayHello();
firstDeveloper.allSalary();
firstDeveloper.searchCompany;
let newWork = {
    start: new Date(),
    end: new Date(),
    salaryPerMonth: 900,
    position: 'junior',
    companyName: 'UPS',
}
firstDeveloper.setNewCompany(newWork);
//--------2------//
class Builder extends Human {
    constructor(name, ageOfBirth, weight, height, gender, invalid,buildLocation, setOfTools, workSpeed) {
        super(name, ageOfBirth, weight, height, gender, invalid);

        this.buildLocation = buildLocation;
        this.setOfTools =  setOfTools;
        this.workSpeed = workSpeed;
    }
    buildHouse () {
        let buildDay = +prompt('Введите количество м2','100');
        let hourTime = (buildDay * this.workSpeed) / 60;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (hourTime < 24) {
            console.log(`На стройку уйдет ${hourTime} часов !`);
        }else if (hourTime >= 24 && hourTime <= 168) {
            day = (hourTime / 24).toString();

            hourTime = day[2] || 0;

            console.log(`На стройку уйдет ${parseInt(day)} дней и ${hourTime} часов!`);
        } else if (hourTime >= 168 && hourTime < 730) {
            week = (hourTime / 168).toString();

            day = week[2];
            hourTime = week[3];
            console.log(`На стройку уйдет ${parseInt(week)} недель, ${day} дней и ${hourTime} часов!`);
        } else if ( hourTime >= 730 && hourTime < 8760) {
            month = (hourTime / 730).toString();
            week = month[2];
            day = month[3];
            hourTime = month[4];

            console.log(`На стройку уйдет ${parseInt(month)} месяцев, ${week} недель, ${day} дней и ${hourTime} часов!`);
        } else  {
            year = (hourTime / 8760).toString()
            month = year[2];
            week = year[3];
            day = year [4];
            hourTime = year[5];
            console.log(`На стройку уйдет ${parseInt(year)} лет, ${month} месяцев, ${week} недель, ${day} дней и ${hourTime} часов!`);
        }

    }

}

let firstBuilder = new Builder
('Luigi',new Date (1989, 5, 10), 86,170,'male','false','Kharkiv',['Рога','Копыта'],90)

console.log(firstBuilder);
firstBuilder.buildHouse()