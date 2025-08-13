document.getElementById("submitButt").addEventListener("click",function(){
    // create the task list 
    let input = document.getElementById("textInput").value;
    let perantContener = document.createElement("li");
    let childContener = document.createTextNode(input);
    perantContener.appendChild (childContener);
    document.getElementById("listContainer").appendChild(perantContener);
// create button delete for each element
    let perantButton = document.createElement("button");
    let childButton = document.createTextNode ("delete");
    perantButton.appendChild(childButton);
    perantButton.addEventListener("click", function () {
    perantContener.remove();
    });
    perantContener.appendChild(perantButton);
    // create checkbox
    let myCheckBoxParent = document.createElement("input");
    myCheckBoxParent.type = "checkbox";
    myCheckBoxParent.checked = true
    perantContener.appendChild(myCheckBoxParent);
   
    document.getElementById("textInput").value = "";    
});
