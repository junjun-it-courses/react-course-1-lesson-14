// Void Type
// For function result:
const greetUser = (): void => {
    alert("Hello, nice to see you!");
};

// For 'greetUser'
// Error: Type '() => void' is not assignable to type 'void'
// const greetUser: void = () => {
//     alert("Hello, nice to see you!");
// };