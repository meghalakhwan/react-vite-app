/*
const useGreetList = (person) => {
return `Hii, How are you ${person}`
};

export default useGreetList
*/

// ?  Example 2

const useGreetList = (persons) => {
 console.log(persons);
 let myoutput = [];
 persons.map((val)=> {
    myoutput.push(`hii how are you ${val}`);
 });
 return myoutput;
}

export default useGreetList;
