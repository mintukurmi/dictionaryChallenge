
// test data OR input dictionary
const data = {
    "2020-01-01": 4,
    // "2020-01-02": 4,
    "2020-01-03": 6,
    // "2020-01-04": 8,
    "2020-01-05": 2,
    "2020-01-06": -6,
    "2020-01-07": 2,
    "2020-01-08": -4
}

// week days array
const weekDays = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', "Sat"];

// solution function def
const solution = (D) => {
    
    const output = {};

    for (var key in D) {
    
        // checking if dictionary key is in the range 1970-01-01 to 2100-01-01
        if (!(new Date(key) > new Date('1970-01-01') || new Date(key) < new Date('2100-01-01'))){
            
            throw new Error('Dictionary key out of range')
        }

        let day = weekDays[new Date(key).getDay()];
        
        // checking if the value is on the range -1000000 & 1000000
        if (D[key] < -1000000 || D[key] > 1000000) {
            throw new Error('Dictionary value out of range')
        }

        output[day] = D[key]
        
    }

    for (i=0; i < weekDays.length; i++) {
        
        // checking if all 7 days exists in output dictionary
       const flag = Object.keys(output).includes(weekDays[i])
    
       // if a day not exists we are setting the mean of prev and next days 
       if(!flag) {
           
        let temp;

        // Calculating the mean value a/c to a specific day
        switch(weekDays[i]) {
               
            // since we'll have atleast Sun and Mon we can eliminate then
            // we would calculate mean from Tue-Sat 

            case "Tue": temp = (output['Mon'] + output['Wed']) / 2

            case "Wed": temp = (output['Tue'] + output['Thu']) / 2

            case "Thu": temp = (output['Wed'] + output['Fri']) / 2

            case "Fri": temp = (output['Thu'] + output['Sat']) / 2

            case "Sat": temp = (output['Fri'] + output['Sun']) / 2

           }

           // updating output dictionary with missing days
           output[weekDays[i]] = temp 

       }
       
    } 

    return output
}


// ftn call
// console.log(solution(data))

module.exports = { solution, data, weekDays }