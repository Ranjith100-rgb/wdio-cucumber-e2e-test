let x="abc";

class Person
{
  constructor(name,address)
  {
    this.name=name;
    this.address=address;
  
  }

  details()
    {
      
      console.log("Hi how are you");
    }

}

const p1=new Person(x,'xyz');
console.log(p1.name);
