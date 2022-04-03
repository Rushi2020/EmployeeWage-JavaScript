//   uc 3
const ABSENT=0;
const FULL_TIME=1;
const PART_TIME=2;
const PART_TIME_HR=4;
const FULL_TIME_HR=8;
const EMP_WAGE_PER_HR=20;

let empHR=0;
let employeecheck = Math.floor(Math.random()*10)%3;

let empHr = getWorkHr(employeecheck);

// console.log(Emp_Wage);

function getWorkHr(employeecheck){

    switch(employeecheck){

        case PART_TIME:
            empHR=PART_TIME_HR;
            break;

        case FULL_TIME:
            empHR=FULL_TIME_HR;
            break;

        case ABSENT:
            empHR=0;
            break;

            default:
                empHR=0;
                break;
    }
    let Emp_Wage = empHR * EMP_WAGE_PER_HR;

    console.log("empHR: "+ empHR +", Emp_Wage: " + Emp_Wage); 
}
// console.log(Emp_Wage)