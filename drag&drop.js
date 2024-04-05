var listitems=document.getElementsByClassName("list")
var rightbox=document.getElementById("right")
var leftbox=document.getElementById("left")
for(list of listitems){
    list.addEventListener("dragstart",function(e){
        var selected=e.target

        rightbox.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        rightbox.addEventListener("drop",function(e){
            rightbox.appendChild(selected)
            selected=null
        })
        leftbox.addEventListener("dragover",function(e){
            e.preventDefault()
        })
        leftbox.addEventListener("drop",function(e){
            leftbox.appendChild(selected)
            selected=null
        })

    })
}