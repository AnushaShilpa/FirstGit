// // question 1

// // 1: this as global scope

// // 2.this inside object

// // 3>this inside function

// // 4> this inside method

// // 5.thid inside construction

// // 6>this inside class





// /// global scope

// this.table='window table'
// console.log(this.table);

// ///this inside object
// let myRoom={
//   table:'my table'
// }
// console.log(myRoom.table);


// ///this inside method
// let myRoom={
//      table:'my table',
//      cleantable()
//      {
//         console.log(`cleaning ${this.table}`)
//      }
//    }
//   console.log(myRoom.cleantable());

//   //inside the class and in constructor

//   class myRoom
//   {
//      constructor(name)
//      {
//       this.name=name;
//      }
//      cleantable()
//           {
//              console.log(`cleaning ${this.name}`)
//           }
//   }

//   const myRoom1=new myRoom('my table');
//   myRoom1.cleantable();

//   // inside function

//   const cleanTable=function()
//   {
//     console.log(`cleaning ${this.table}`)
//   }

//   cleanTable.call(this);
//   cleanTable.call(myRoom);


  //question 3:

//   class student
//   {
//     static count=0; 
//     constructor(name,age, phno,marks)
//     {
//       this.name=name;
//       this.age=age;
//       this.phno=phno;
//       this.marks=marks;
//       student.countStudent();
//     }
//     static countStudent(){

        

//       return(student.count++); 
//     }
//     eligible()
//     {
//       if(this.marks>40)
//          console.log(`${this.name} eligible`);
//          else
//           console.log(`${this.name} is not eligble`);
//     }
//   };


// const anusha=new student('anusha',12,'1234567',45);
// const anu=new student('anu',12,'1234567',4);
// const anush=new student('anush',12,'1234567',100);
// const anushka=new student('anushka',12,'1234567',39);
// const anushree=new student('anushree',12,'1234567',40);
// console.log(student.countStudent());
// anusha.eligible();
// anu.eligible();
// anush.eligible();
// anushka.eligible();
// anushree.eligible();


//// fat arrow functions


// let square=(a)=> {return a*a};
// console.log(square(4))

class student
  {
    static count=0; 
    constructor(name,age, phno,marks)
    {
      this.name=name;
      this.age=age;
      this.phno=phno;
      this.marks=marks;
      student.countStudent();
    }
    static countStudent(){

        

      return(student.count++); 

  
    }

  setplacemant(minplacementage)
    {
      return (minmarks)=>
      {
        if(this.marks>minmarks && this.age>minplacementage)
          console.log(`${this.name} is ready for placement`)
        else
          console.log(`${this.name} is not ready fr placememnt`);
      }
    }
  };
  const anusha=new student('anusha',12,'1234567',39);
  const anu=new student('anu',30,'1234567',45);
  anusha.setplacemant(18)(40);
  anu.setplacemant(18)(40);
  
  

