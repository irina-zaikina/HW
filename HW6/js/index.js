function Working(name, firstname, age, specialty, experience, salary, place) {
    var name = name;
    var firstname = firstname;
    var age = age;
    var specialty = specialty;
    var experience = experience;
    var salary = salary;
    var place = place;
}
Working.prototype.setName = function (value){
    this.name = value;
}
Working.prototype.getName = function(){
    return this.name;
}

Working.prototype.setFirstname = function (value){
    this.firstname = value;
}
Working.prototype.getFirstname = function(){
    return this.firstname;
}

Working.prototype.setAge = function (value){
    this.age = value;
}
Working.prototype.getAge = function(){
    return this.age;
}
Working.prototype.setSpecialty = function (value){
    this.specialty = value;
}
Working.prototype.getSpecialty = function(){
    return this.specialty;
}
Working.prototype.setExperience = function (value){
    this.experience = value;
}
Working.prototype.getExperience = function(){
    return this.experience;
}
Working.prototype.setSalary= function (value){
    this.salary = value;
}
Working.prototype.getSalary = function(){
    return this.salary;
}

Working.prototype.setPlace= function (value){
    this.place = value;
}
Working.prototype.getPlace = function(){
    return this.place;
}

function WorkTransport (name, firstname, age, specialty, experience, salary, place, type)
{  
    Working.apply(this,arguments); 
    var type = type; 
}

WorkTransport.prototype = Object.create(Working.prototype);
WorkTransport.prototype.constructor = WorkTransport;

WorkTransport.prototype.setType = function(value){
    if (value <= 0){
        throw new Error ("Error");
    }
    this.type = value;
}
WorkTransport.prototype.getType = function(){
    return this.type = value;
}
WorkTransport.prototype.getObj = function(){
    return { 
        name: this.getName(),
        firstname: this.getFirstname(),
        age: this.getAge(),
        specialty: this.getSpecialty(),
        experience : this.getExperience (),
        salary: this.getSalary(),
        place: this.getPlace(),
        type: this.getType()           
   };

}
   
    function WorkFactory (name, firstname, age, specialty, experience, salary, place)
    {  
       Working.apply(this, arguments); 
       var position = position; 
    }    
    WorkFactory.prototype = Object.create(Working.prototype);
    WorkFactory.prototype.constructor = WorkFactory;

    WorkFactory.prototype.setPosition = function (value){
        if (value <= 0){
            throw new Error ("Error");
        }
        this.position = value;
    }
    WorkFactory.prototype.getPosition = function (){
        return this.position;
    }

    WorkFactory.prototype.getObj = function (){
        return{
            name: this.getName(),
            firstname: this.getFirstname(),
            age: this.getAge(),
            specialty: this.getSpecialty(),
            experience : this.getExperience (),
            salary: this.getSalary(),
            place: this.getPlace(),
            position: this.getPosition()   
        };
    }
