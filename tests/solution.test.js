const { solution, data, weekDays } = require('../index');

test('Test if all weeks days are in output dictionary', () => {

    // calling solution functn with appropriate arguments
    const result = solution(data)

    weekDays.forEach( (item) => {

       const flag = Object.keys(result).includes(item);

       console.log(flag)
       if(!flag) {
            throw new Error('All Week days not present')
        }

    })

})