function Working(name, firstname, age, specialty, experience, salary, /*gender,*/ place) {
    var name = name;
    var firstname = firstname;
    var age = age;
    var specialty = specialty;
    var experience = experience;
    var salary = salary;
   /* var gender = gender;*/
    var place = place;

    this.setName = function (value) {
        name = value;
    }
    this.getName = function () {
        return name;
    }
   this.setFirstname = function (value) {
        firstname = value;
    }
    this.getFirstname = function () {
        return firstname;
    }

    this.setAge = function (value) {
        age = value;
    }
    this.getAge = function () {
        return age;
    }

    this.setSpecialty = function (value) {
        specialty = value;
    }
    this.getSpecialty = function () {
        return specialty;
    }
    
    this.setExperience = function (value) {
        experience = value;
    }
    this.getExperience = function () {
        return experience;
    }
    this.setSalary = function (value) {
        salary = value;
    }
    this.getSalary = function () {
        return salary;
    }
    /*this.setGender = function (value) {
        gender = value;
    }
    this.getGender = function () {
        return gender;
    }*/
    this.setPlace = function (value) {
        place = value;
    }
    this.getPlace = function () {
        return place;
    }

} 
    function WorkTransport (name, firstname, age, specialty, experience, salary, /*gender,*/ place, type)
     {  
        Working.apply(this,[name, firstname, age, specialty, experience, salary, /*gender,*/ place]); 
        var type = type; 

        this.setType = function (value) {

            type = value;
        }
        this.getType = function () {
            return type;
        }

        this.getObj = function () {
            return { 
                        name: this.getName(),
                        firstname: this.getFirstname(),
                        age: this.getAge(),
                        specialty: this.getSpecialty(),
                        experience : this.getExperience (),
                        salary: this.getSalary(),
                        /*gender: this.getGender(),*/
                        place: this.getPlace(),
                        type: this.getType()           
                   };
        }
    }
    
    function WorkFactory (name, firstname, age, specialty, experience, salary,/* gender,*/ place)
    {  
       Working.apply(this,[name, firstname, age, specialty, experience, salary,/* gender,*/ place]); 
       var position = position; 

       this.setPosition = function (value) {

        position = value;
       }
       this.getPosition = function () {
        return position;
       }


       this.getObj = function () {
           return { 
                       name: this.getName(),
                       firstname: this.getFirstname(),
                       age: this.getAge(),
                       specialty: this.getSpecialty(),
                       experience : this.getExperience (),
                       salary: this.getSalary(),
                     /*  gender: this.getGender(),*/ 
                       place: this.getPlace(),
                       position: this.getPosition()             
                  };
       }
   }