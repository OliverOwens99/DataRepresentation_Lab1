// Part 3 of the lab part 1
const myArr = ["hi","my name is","oliver"];
const task ="Owens";

// Part 2 of Exercise 3 make an arrow fucntion to add to athe array 
let addTask = (task)=>{

    let length = myArr.push(task);

    console.log("Item "+ task + "been added to the array");

    return length;

}



//Part 3 of Exercise 3 list over all of the elements


let listAllTasks =()=>{
    myArr.forEach((item)=>{

        console.log(item);
    });

}

//Part 4 delete from the array 


let deleteTask =(task)=>{

    let index = myArr.indexOf(task);
    if (index >-1 ) {
        myArr.splice(index,1);
        console.log("Item"+ task +" has been removed from the array" );

    }else{
        console.log("Item"+ task +" was not found in array" );
    }

    return myArr.length;
}

// function calls
addTask(task);

console.log(myArr +" "+ myArr.length);

listAllTasks();

deleteTask("Owens");
