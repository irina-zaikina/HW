var fermArray = [];
var spruceArray = [];
var latestId = 0;

function midFunc(){
    alert('midFunc');
    if (!latestId) 
        latestId = 1;
    else 
        latestId++;
    return latestId;
}

function Plant(name, description, species, plant_class, application, discoverer){
  
    var id = midFunc();
    
    var name = name;
    var description = description;
    var species = species;
    var plant_class = plant_class;
    var application = application;
    var discoverer = discoverer;

    this.setName = function(value){
        name = value;
    }

    this.getName = function(){
        return name;
    }

    this.setDescription = function(value){
        description = value;
    }

    this.getDescription = function(){
        return description;
    }

    this.setSpecies = function(value){
        species = value;
    }

    this.getSpecies = function(){
        return species;
    }

    this.setPlantClass = function(value){
        plant_class = value;
    }

    this.getPlantClass = function(){
        return plant_class;
    }

    this.setApplication = function(value){
        application = value;
    }

    this.getApplication = function(){
        return application;
    }

    this.setDiscoverer = function(value){
        discoverer = value;
    }

    this.getDiscoverer = function(){
        return discoverer;
    }

    this.getId = function(){
        return id;
    }
}

function fernClass(name, description, species, plant_class, application, discoverer, age, place_of_growth){
    Plant.apply(this, [name, description, species, plant_class, application, discoverer]);

    var age = age;
    var place_of_growth = place_of_growth;

    var type = 'fern';

    this.setAge = function(value){
        age = value;
    }

    this.getAge = function(){
        return age;
    }

    this.setPlaceOfGrowth = function(value){
        place_of_growth = value;
    }

    this.getPlaceOfGrowth = function(){
        return place_of_growth;
    }

    this.getType = function(){
        return type;
    }

    this.getObj = function () {
        return { 
            id: this.getId(),
            name: this.getName(),
            description: this.getDescription(),
            species: this.getSpecies(),
            plant_class: this.getPlantClass(),
            application: this.getApplication(),
            discoverer: this.getDiscoverer(),
            age: this.getAge(),
            place_of_growth: this.getPlaceOfGrowth(), 
            type: this.getType()  
               };
    }
}

function spruceClass(name, description, species, plant_class, application, discoverer, hazard_class,
                inflorescence_class, habitat){
    Plant.apply(this, [name, description, species, plant_class, application, discoverer]);
    
    var hazard_class = hazard_class;
    var inflorescence_class = inflorescence_class;
    var habitat = habitat;
    var type = 'spruce';

    this.setHazardClass = function(value){
        hazard_class = value;
    }

    this.getHazardClass = function(){
        return hazard_class;
    }

    this.setInflorescenceClass = function(value){
        inflorescence_class = value;
    }

    this.getInflorescenceClass = function(){
        return inflorescence_class;
    }

    this.setHabitat = function(value){
        habitat = value;
    }

    this.getHabitat = function(){
        return habitat;
    }

    this.getType = function(){
        return type;
    }

    this.getObj = function () {
        return { 
            id: this.getId(),
            name: this.getName(),
            description: this.getDescription(),
            species: this.getSpecies(),
            plant_class: this.getPlantClass(),
            application: this.getApplication(),
            discoverer: this.getDiscoverer(),
            hazard_class: this.getHazardClass(),
            inflorescence_class: this.getInflorescenceClass(),
            habitat: this.getHabitat(), 
            type: this.getType()  
               };
    }
}

function openForm() {
//    alert('Now you need enter data!');
    checkFern();
//    $(".overlay").fadeToggle("fast");
    document.getElementById('fernForm').style.display='block';
}

$(".close").click(function(e){
    e.preventDefault();
    $(".overlay").fadeToggle("fast");
});

$(".closeEdit").click(function(e){
    e.preventDefault();
    $(".overlayEdit").fadeToggle("fast");
});

function closeForm(){
    alert('Close Form Alert!');
    document.getElementById('fernForm').style.display='none';
}

function updateForm(){
    alert('Update Form!');

    document.getElementById('nameArray').innerHTML = null;
    
    document.getElementById('editForm').style.display='block';
    document.getElementById('editLabel').innerHTML = 'Edit plant';

    var e = document.getElementById('nameArray');

    for (var i = 0; i < fermArray.length; i++)
    {
        var option = document.createElement('option');
        option.innerHTML = fermArray[i].name;
        option.keys = fermArray[i].id;
        e.appendChild(option); 
    }

    for (var i = 0; i < spruceArray.length; i++)
    {
        var option = document.createElement('option');
        option.innerHTML = spruceArray[i].name;
        e.appendChild(option);
    }
}

function deleteForm(){
    alert('Delete Form!');

    document.getElementById('editForm').style.display='block';
    document.getElementById('editLabel').innerHTML = 'Delete plant';
}

function onPrepareInfo(){
    alert('Prepare to send information!');

    var allCount = fermArray.length + spruceArray.length;

    if(fermArray.length >= 1)
        console.log(JSON.stringify(fermArray));
        
    if(spruceArray.length >= 1)
        console.log(JSON.stringify(spruceArray));
        
        var obj = JSON.parse(JSON.stringify(fermArray));

        for(var i = 0; i < obj.length; i++)
        {
            if(obj[i].type == 'fern')
                console.log('This is Fern object');
            else if(obj[i].type == 'spruce')
                console.log('This is Spruce object');
            else
                console.log('This is Other object');
        }

    alert('Prepare for sending ' + allCount + ' objects');
}

function onReceiveInfo(){
    
}

function submitFormfunc(){
    if(document.getElementById('spruceFields').hidden == false)
        addSpruce();
        
    if(document.getElementById('fernFields').hidden == false)
        addFern();   

    document.getElementById('fernForm').style.display='none';

    document.getElementById('formPlant').reset();
}

function submitFormEditfunc(){

    console.log('Submit Edit form');
    console.log(document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].value);
    console.log(document.getElementById("nameArray").options[document.getElementById("nameArray").selectedIndex].keys);
}

function checkFern(){
    document.getElementById('fernFields').hidden             = false;
    document.getElementById('spruceFields').hidden             = true;
    document.getElementById("spruceRB").checked = false;
}

function checkSpruce(){
    document.getElementById('spruceFields').hidden             = false;
    document.getElementById('fernFields').hidden             = true;
    document.getElementById("fernRB").checked = false;
}

function addFern(){  

    var fernObj1 = new fernClass();
    fernObj1.setName(document.getElementById('username').value);
    fernObj1.setDescription(document.getElementById('description').value);
    fernObj1.setSpecies(document.getElementById('species').value);
    fernObj1.setPlantClass(document.getElementById('plant_class').value);
    fernObj1.setApplication(document.getElementById("application").options[document.getElementById("application").selectedIndex].value);
    fernObj1.setDiscoverer(document.getElementById('discoverer').value);
    fernObj1.setAge(document.getElementById('age').value);
    fernObj1.setPlaceOfGrowth(document.getElementById('place_of_growth').value);

    fernObj1 = fernObj1.getObj();

    console.log('New Fern = ');
    console.log(fernObj1);

    console.log(JSON.stringify(fernObj1));
    fermArray.push(fernObj1);

    for(var i = 0; i < fermArray.length; i++){
        console.log(fermArray[i]);
    }

    alert('fermArray.length = ' + fermArray.length);
}

function addSpruce(){  
    var spruceObj1 = new spruceClass();
    spruceObj1.setName(document.getElementById('username').value);
    spruceObj1.setDescription(document.getElementById('description').value);
    spruceObj1.setSpecies(document.getElementById('species').value);
    spruceObj1.setPlantClass(document.getElementById('plant_class').value);
    spruceObj1.setApplication(document.getElementById("application").options[document.getElementById("application").selectedIndex].value);
    spruceObj1.setDiscoverer(document.getElementById('discoverer').value);
    spruceObj1.setHazardClass(document.getElementById('hazard_class').value);
    spruceObj1.setInflorescenceClass(document.getElementById('inflorescence_class').value);
    spruceObj1.setHabitat(document.getElementById('habitat').value);

    spruceObj1 = spruceObj1.getObj();
/*
   var spruceObj1 = new spruceClass(
      document.getElementById('username').value,
      document.getElementById('description').value,
      document.getElementById('species').value,
      document.getElementById('plant_class').value,
      document.getElementById("application").options[document.getElementById("application").selectedIndex].value,
      document.getElementById('discoverer').value,
      document.getElementById('hazard_class').value,
      document.getElementById('inflorescence_class').value,
      document.getElementById('habitat').value
  );
*/
  spruceArray.push(spruceObj1);
 
  for(var i = 0; i < spruceArray.length; i++){
      console.log(spruceArray[i]);
      console.log(spruceArray[i].id);
  }

  alert('spruceArray.length = ' + spruceArray.length);
}

$('#formPlant').submit(function(e){
    e.preventDefault();
});

$('#formEdit').submit(function(e){
    e.preventDefault();
});


function clearTable(){
    for (var i = document.getElementById('tableData').getElementsByTagName('tr').length -1; i; i--) {
        document.getElementById('tableData').deleteRow(i);
        }
}


function addFernDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
    data.forEach((d, i) => {
      var tr = nl.insertRow(i);
      Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
        
        if(j != (Object.keys(d).length - 1))
        {
            var cell = tr.insertCell(j);
            cell.innerHTML = d[k]; // Assign object values to cells
        }     
      });
      nl.appendChild(tr);
    })
  }

  function addSpruceDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
    data.forEach((d, i) => {
      var tr = nl.insertRow(i);
      Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
        var cell;
        if(j != (Object.keys(d).length - 1))
        {
            if(j >= 7)
            {
                if(j == 7)
                {
                    cell = tr.insertCell(j);
                    cell.innerHTML = "";    
                    cell = tr.insertCell(j+1);
                    cell.innerHTML = "";
                    cell = tr.insertCell(j+2);
                    cell.innerHTML = d[k];
                }
                else{
                    cell = tr.insertCell(j+2);
                    cell.innerHTML = d[k];
                }
            } 
            else
            {
                cell = tr.insertCell(j);
                cell.innerHTML = d[k];
            }
        }
      });
      nl.appendChild(tr);
    })
  }

function onViewTable(){
    clearTable();
    if(document.getElementById('tableView').style.display == 'block')
        document.getElementById('tableView').style.display = 'none';
    else
        document.getElementById('tableView').style.display = 'block';

    if(fermArray.length >= 1)
        addFernDataToTbody(document.querySelector("#tableView tbody"), fermArray);
    if(spruceArray.length >= 1)
        addSpruceDataToTbody(document.querySelector("#tableView tbody"), spruceArray);

    console.log(JSON.stringify(fermArray));
    console.log(JSON.stringify(spruceArray));

    console.log(JSON.parse(JSON.stringify(fermArray)));
    console.log(JSON.parse(JSON.stringify(spruceArray)));
}

var openNewForm = document.getElementById('buttonCreate');
var openEditForm = document.getElementById('buttonUpdate');
var openDeleteForm = document.getElementById('buttonDelete');
var viewTable = document.getElementById('buttonView');
var sendInfo = document.getElementById('buttonPrepare');

var submitForm = document.getElementById('buttonSubmit');
var cancelForm = document.getElementById('buttonCancel');

var submitEditForm = document.getElementById('buttonSubmitEdit');

var fernRadio = document.getElementById('fernRB');
var spruceRadio = document.getElementById('spruceRB');

openNewForm.addEventListener('click', openForm);
openEditForm.addEventListener('click', updateForm);
openDeleteForm.addEventListener('click', deleteForm);
viewTable.addEventListener('click', onViewTable);
sendInfo.addEventListener('click', onPrepareInfo);

submitForm.addEventListener('click', submitFormfunc);
cancelForm.addEventListener('click', closeForm);

submitEditForm.addEventListener('click', submitFormEditfunc);

fernRadio.addEventListener('click', checkFern);
spruceRadio.addEventListener('click', checkSpruce);