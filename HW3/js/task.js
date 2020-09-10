(function () {
    function toJSONString(form) {
        var elements = from.querySelectorAll("input, select, textarea");
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
                /*case 'firstname':
                    obj.setFirstName(element.value);
                  break;                    
                  case 'gender':
                    obj.setGender(element.value);
                  break;   
                  case 'age':
                    obj.setAge(element.value);
                  break;   
                  case 'specialty':
                    obj.setSpecialty(element.value);
                  break;   
                  case 'experiencee':
                    obj.setExperiencee(element.value);
                  break;    
                  case 'salary':
                    obj.setSalary(element.value);
                  break;  
                  case 'place':
                    obj.setPlace(element.value);
                  break;  

                  case 'position':
                    obj.setPosition(element.value);
                  break;   */


            }
        }   

		return JSON.stringify(obj.getObj());
    }  
    
    document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("mainForm");
        var addButton = document.getElementById("add");
        var selectType = document.getElementById("typeClass");
      /*  var divpage = document.getElementById("divnop");
        var divsecond = document.getElementById("divnos");*/

       /* divpage.hidden = true; */

     selectType.addEventListener('change', function (e) {
          e.preventDefault();
  /* 
            if(selectType.value == "WorkTransport")
            {
                divpage.hidden = true;  
                divsecond.hidden = false;  
            }  
            else 
            {
                divpage.hidden = false;
                divsecond.hidden = true;  
            }  */     
        } 
        )

		addButton.addEventListener('click', function (e) {
            e.preventDefault();
            
			var json = toJSONString(form);
            var obj1 = JSON.parse(json);
            var tbody = document.getElementsByTagName("tbody")[0];
            var row = document.createElement("tr");

            tbody.appendChild(row);

            var td1 = document.createElement("td");

            row.appendChild(td1);

            td1.innerHTML = obj1.name;

           /* if (obj1.uom === 'second')    
              td5.innerHTML = obj1.numberofseconds;
            else
              td5.innerHTML = obj1.numberofpages;
            td6.innerHTML = obj1.uom;*/
          }, false);
          });

        })();