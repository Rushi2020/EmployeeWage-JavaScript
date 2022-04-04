//  Uc5 Max hrs in months
const ABSENT=0;
const FULL_TIME=1;
const PART_TIME=2;
const PART_TIME_HR=4;
const FULL_TIME_HR=8;
const EMP_WAGE_PER_HR=20;
const NO_OF_WORKING_DAYS=20;
const MAX_HOURS_IN_MONTH = 160;

let totalEmpHrs=0;
let totalWorkingDays = 0;

while( totalWorkingDays<NO_OF_WORKING_DAYS && totalEmpHrs<=MAX_HOURS_IN_MONTH){

    let employeecheck=Math.floor(Math.random()*10)%3;
    let empHR  = getWorkHr(employeecheck);
    totalEmpHrs += empHR;
    totalWorkingDays++
    }
    
    function getWorkHr(employeecheck)
    {
        switch(employeecheck){

            case PART_TIME:
                return PART_TIME_HR;
                break;
    
            case FULL_TIME:
                return FULL_TIME_HR;
                break;
    
            case ABSENT:
                return 0;
                break;
    
                default:
                    return 0;
                    break;
        }

      

    }
    let Emp_Wage = totalEmpHrs * EMP_WAGE_PER_HR;
    console.log("Total working Days:" + totalWorkingDays + " Total Hrs:" +  totalEmpHrs + " Emp Wage:" + Emp_Wage); 
    
