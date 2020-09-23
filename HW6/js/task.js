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
                  obj.setPosition(element.value);
                break;  
                case 'type':
                  obj.setType(element.value);
                break; 

          }
      }   

  return JSON.stringify(obj.getObj());
  }  

  document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("mainForm");
    var addButton = document.getElementById("add");
    var updButton = document.getElementById("upd");
    var delButton = document.getElementById("del");
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
          console.log(jsonData);
          xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              alert(this.responseText);
              form.dispatchEvent(new Event('submit'));
              onRead();
            }
          });

          xhr.open("POST", "http://localhost:2403/working/");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(jsonData);
    
        });

          updButton.addEventListener('click', function (e) {
          e.preventDefault();
          var jsonData = toJSONString(form);
          console.log(jsonData);
          xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
    
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              console.log(this.responseText);
              onRead();
            }
          });
          xhr.open("PUT", "http://localhost:2403/working/"+document.getElementById("id").value);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(jsonData);
        });

        delButton.addEventListener('click', function (e) {
          e.preventDefault();
          xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
    
          xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              console.log(this.responseText);
              onRead();
            }
          });
          xhr.open("DELETE", "http://localhost:2403/working/"+document.getElementById("id").value);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send();
        });

        onRead();

      });
    })();

    function onRead() {
      xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
    
      xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
              result=JSON.parse(this.response);
              var resultTBody=document.createElement('tbody');
              result.map(function(nthWorking){
                  resultTBody.appendChild(parseWorkingToTableRow(nthWorking));
              });
    
              var table=document.getElementById('rTBody').parentElement;
              table.replaceChild(resultTBody,document.getElementById('rTBody'));
              resultTBody.id='rTBody';
              console.log('success');
          }
      });
    
      xhr.open("GET", "http://localhost:2403/working/");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
    }

    function parseWorkingToTableRow(Works){
      var row=document.createElement('tr');
      var id=document.createElement('th');

      id.innerText=Works['id'];
      row.appendChild(id);
      
        var name=document.createElement('td');
        name.innerText=Works['name'];
        row.appendChild(name);
      
        var firstname=document.createElement('td');
        firstname.innerText=Works['firstname'];
        row.appendChild(fieldofstudy);

      var age=document.createElement('td');
      age.innerText=Works['age'];
      row.appendChild(age);
    
      var specialty =document.createElement('td');
      specialty.innerText=Works['specialty'];
      row.appendChild(specialty);

      var experience =document.createElement('td');
      experience.innerText=Works['experience'];
      row.appendChild(experience);
    
      var salary =document.createElement('td');
      salary.innerText=Works['salary'];
      row.appendChild(salary);
  
    return row;
  }



