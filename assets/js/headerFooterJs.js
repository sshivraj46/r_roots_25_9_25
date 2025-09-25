function toggleNav(){
    let CList=document.getElementById("menubtn").classList;
    if(CList.contains('fa-bars-staggered'))
    {
        CList.replace('fa-bars-staggered',"fa-xmark")
    }
    else
    {
        CList.replace("fa-xmark",'fa-bars-staggered')
    }
}