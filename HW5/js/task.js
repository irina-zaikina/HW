(function () {
  function toJSONString(form) {
      var elements = form.querySelectorAll("input, select, textarea");
      var obj;
      if( elements[0].value == "WorkTransport"){
          obj = new WorkTransport();
      }
      else if ( elements[0].value == "WorkFactory"){
          obj = new WorkFactory ();
      }
      else {
          return "";
      }
      for (var i = 1; i< elements.length; i++) {
          var element = elements[i];
          switch (element.name) {
              case 'name':
                  obj.setName(element.value);
                break;
                case 'firstname':
                  obj.setFirstname(element.value);
                break;     /*               
                case 'gender':
                  obj.setGender(element.value);
                break; */
                case 'age':
                  obj.setAge(element.value);
                break;   
                case 'specialty':
                  obj.setSpecialty(element.value);
                break;   
                case 'experience':
                  obj.setExperience(element.value);
                break;    
                case 'salary':
                  obj.setSalary(element.value);
                break;   /*
                case 'place':
                  obj.setPlace(element.value);
                break;  */
                case 'position':
                if(elements[0].value === 'WorkFactory')
                {                 
                  obj.setPosition(element.value);
                }
                break;  
                case 'type':
                if(elements[0].value === 'WorkTransport')
                {
                  obj.setType(element.value);
                }
                break; 

          }
      }   

  return JSON.stringify(obj.getObj());
  }  

  document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("mainForm");
        var addButton = document.getElementById("add");
        var selectType = document.getElementById("typeclass");
        var divtypet = document.getElementById("typet");
        var divposition = document.getElementById("positiont");

        divtypet.hidden = true; 
        divposition.hidden = false;

        selectType.addEventListener('change', function (e) {
          e.preventDefault();

            if(selectType.value == "WorkFactory")
            {
              divtypet.hidden = true;  
              divposition.hidden = false; 
            }  
            else 
            {
              divtypet.hidden = false;
              divposition.hidden = true;
            }       
        })

        addButton.addEventListener('click', function (e) {
          e.preventDefault();
          
          

          var json = toJSONString(form);

          var obj1 = JSON.parse(json);
          var tbody = document.getElementsByTagName("tbody")[0];
          var row = document.createElement("tr");


          tbody.appendChild(row);

          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          var td6 = document.createElement("td");
          /* var td7 = document.createElement("td");*/

          row.appendChild(td1);
          row.appendChild(td2);
          row.appendChild(td3);
          row.appendChild(td4);
          row.appendChild(td5);
          row.appendChild(td6);
         /*   row.appendChild(td7);*/

          td1.innerHTML = obj1.name;
          td2.innerHTML = obj1.firstname;
          td3.innerHTML = obj1.gender;
          td3.innerHTML = obj1.age;
          td4.innerHTML = obj1.specialty;
          td5.innerHTML = obj1.experience;
          td6.innerHTML = obj1.salary;

      }, false);
      


});

})();