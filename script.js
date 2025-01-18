
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let Devloper = []
    arr.map((data)=>{
        if(data.profession === "developer"){
            const devConstructor = {
                id : data.id,
                name : data.name,
                age : data.age,
                profession : data.profession
            }
            Devloper.push(devConstructor);
        }
    })
    console.log(Devloper)
    Devloper.map((dev)=>{
        console.log(
            `id: ${dev.id} name : ${dev.name} age : ${dev.age} profession: ${dev.profession}`
        )
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let Devloper = []
    arr.forEach((data)=>{
        if(data.profession === "developer"){
            const devConstructor = {
                id : data.id,
                name : data.name,
                age : data.age,
                profession : data.profession
            }
            Devloper.push(devConstructor);
        }
    })
    console.log(Devloper)
    Devloper.map((dev)=>{
        console.log(
            `id: ${dev.id} name : ${dev.name} age : ${dev.age} profession: ${dev.profession}`
        )
    })
  }
  
  function addData() {
    //Write your code here, just console.log
        let newEmployee = {id:4, name:"susan", age:"20", profession:"intern"} 
        arr.push(newEmployee);
        console.log(arr)
         arr.map((dev)=>{
            console.log(
                `id: ${dev.id} name : ${dev.name} age : ${dev.age} profession: ${dev.profession}`
            )
        })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filterArr = arr.filter((data)=> data.profession !== "admin")
    console.log(filterArr)
    filterArr.map((dev)=>{
        console.log(
            `id: ${dev.id} name : ${dev.name} age : ${dev.age} profession: ${dev.profession}`
        )
    })
  }
  

  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 4, name: "Aarav", age: "30", profession: "developer" },
        { id: 5, name: "Meera", age: "26", profession: "admin" },
        { id: 6, name: "Riya", age: "32", profession: "manager" },
      ];
      arr = arr.concat(arr1);
      console.log(arr)      
      arr.map((dev)=>{
        console.log(
            `id: ${dev.id} name : ${dev.name} age : ${dev.age} profession: ${dev.profession}`
        )
    })
  }