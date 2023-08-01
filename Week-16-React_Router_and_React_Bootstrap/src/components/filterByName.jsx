//Function to filter tasks by name
export default function filterByName(name, array) {
    return array.filter((obj) => obj.name === name);
   }