document.getElementById('add-border').addEventListener("click",function(){
    const container = document.getElementById("friend-container");
    container.style.border = "3px solid red"
});
document.getElementById('add-background').addEventListener("click",function(){
    const friends = document.getElementsByClassName("friend");
    for(const friend of friends){
        friend.style.backgroundColor = "lightblue"
    }
})
let count = 4;
document.getElementById("add-friend").addEventListener("click",function(){
    count++
    const container = document.getElementById("friend-container");
    const addFrined = document.createElement("div");
    addFrined.innerHTML = `<h3 class="friend-name">Friend-${count}</h3>
    <p>Lorem, ipsum.</p>`
    addFrined.classList.add("friend")
    container.appendChild(addFrined)
    console.log(addFrined)
})