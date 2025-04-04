let action = {
    type : "INCREASE"
}

// const reducerFunction = (state , action) => {
//     if (action.type === 'DECREASE') {
//         return state + 1
//     }
//     if (action.type === 'INCREASE') {
//         return state - 1
//     }
//     return state
// }

// console.log(reducerFunction(5,action))


// const reducerFunction = (state , action) => {
//     switch (action.type) {
//         case 'DECREASE':
//             return state + 1;
//             break;
//         case 'INCREASE':
//             return state - 1;
//             break;
//         default:
//             return state
//     }
// }


const reducerFunction = (state , action) => {
    switch (action.type) {
        case 'DECREASE':
            return  {...state , count : state.count - 1};
            break;
        case 'INCREASE':
            return {...state , count : state.count + 1};
            break;
        default:
            return state
    }
}

let result = reducerFunction({count:5},action)

// console.log(result)

const user = {
    name:"Ali",
    age:34,
    score: 12124
}

// console.log(user)

// let newUser = {...user , name : "Ahmad"}

// console.log(newUser)
// console.log(user)











