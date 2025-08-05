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
// create filter
function filterTasks(type) {
    let tasks = document.getElementById("listContainer").getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
        let li = tasks[i];
        let checkbox = li.getElementsByTagName("input")[0];

        if (type === "all") {
            li.style.display = "";
            } else {
            li.style.display = "none";
            }
        } 
         if (type === "complete") {
            li.style.display = "";
            } else {
            li.style.display = "none";
            }
         if (type === "incomplete") {
           li.style.display = "";
            } else {
            li.style.display = "none";
            }    
    
}
// connect the filter button 
document.getElementById("filterAll").addEventListener("click", function () {
    filterTasks("all");
});
document.getElementById("filterComplete").addEventListener("click", function () {
    filterTasks("complete");
});
document.getElementById("filterIncomplete").addEventListener("click", function () {
    filterTasks("incomplete");
});
