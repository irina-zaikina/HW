function Working(name, firstname, age, specialty, experience, salary, gender, place,position) {
    var name = name;
    var firstname = firstname;
    var age = age;
    var specialty = specialty;
    var experience = experience;
    var salary = salary;
    var gender = gender;
    var place = place;
    var position = position;

    this.setName = function (value) {
        name = value;
    }
    this.setFirstName = function (value) {
        firstname = value;
    }
    this.setAge = function (value) {
        age = value;
    }
    this.setSpecialty = function (value) {
        specialty = value;
    }
    this.setExperience = function (value) {
        experience = value;
    }
    this.setSalary = function (value) {
        salary = value;
    }
    this.setGender = function (value) {
        gender = value;
    }
    this.setPlace = function (value) {
        place = value;
    }
    this.setPosition = function (value) {
        position = value;
    }
    
    function WorkTransport (name, firstname, age, specialty, experience, salary, gender, place, type)
     {  
        Working.apply(this,[name, firstname, age, specialty, experience, 
        salary, gender, place]); 
        var type = value; 

        this.setType = function (value) {

            type = value;
        }

        this.getObj = function () {
            return { 
                        name: this.getName(),
                        firstname: this.getFirstname(),
                        age: this.getAge(),
                        specialty: this.getSpecialty(),
                        experience : this.getExperience (),
                        salary: this.getSalary(),
                        gender: this.getGender(),
                        place: this.getPlace(),
                        type: this.getType()              
                   };
        }
     }