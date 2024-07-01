//Editing Notes: 
// To edit (change, remove or add) a page, edit the corresponding arrays below. The Array starts at page 0 and the docs page will always display them in order (0, info, verifytemp,...). 
// To Add a new third page, put your new Page ID after "info". 
// If you add a page or remove one, also add/remove the pagename in the array below for the corresponding model. 


//Edit Me:
      //Page ID per Model
      const v0pages = new Array("0", "info", "verifytemp", "verifyheater", "v0motor", "xyendstop", "v0homing", "v000", "v0endstop", "pid", "v0bedscrews", "initial", "finish");
      const v1pages = new Array("0", "info", "verifytemp", "verifyheater", "v1motor", "xyendstop", "v1homing",  "bedlocating" ,"point00", "zendstop",  "probecheck", "pid", "ztilt", "initial", "finish" );
      const v2pages = new Array("0", "info", "verifytemp", "verifyheater", "v2motor", "xyendstop", "v2homing", "bedlocating", "point00", "zendstop", "probecheck", "pid", "qgl", "initial", "finish" );
      const vswpages = new Array("0", "info", "verifytemp", "verifyheater", "vswmotor", "5");
   

      //Page names per Model
      const v0pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "0 Point", "Z-Endstop", "PID Tuning", "Bed Leveling", "Initial Setup", "Finish Line" );
      const v2pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Bed Locating", "0 Point", "Z Endstop", "Probe Check", "PID Tuning", "Quad Gantry Level", "Initial Setup", "Finish Line" );
      const v1pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Bed Locating", "0 Point", "Z Endstop", "Probe Check", "PID Tuning", "Z-Tilt", "Initial Setup", "Finish Line" );
      const vswpagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Z-Endstop", "PID Tuning", "Bed Screw", "Initial Setup", "Finish Line" );
 













 ///// DON'T EDIT BELOW HERE /////    
let params = new URLSearchParams(window.location.search);
let modelparam = params.get('model');
let interfaceparam = params.get("interface");
let probeparam = params.get("probe");
var currentstep = parseInt(params.get("step")); 
let lastpage = currentstep - 1;
//Custom Variables  

//check current url params and act accordingly
function checkstatus() { 
  sidebar();


  if (interfaceparam == "mainsail") {
    $(document).ready(function(){
      $(".mainsailclass").show();
      $(".octoprintclass").hide();
    });
  } else if (interfaceparam == "octoprint") {
    $(document).ready(function(){
      $(".mainsailclass").hide();
      $(".octoprintclass").show();
    });
  }

  if (probeparam == "inductive") {
    $(document).ready(function(){
      $(".inductiveclass").show();
      $(".dockableclass").hide();
      $(".tapclass").hide();
    });
  } else if (probeparam == "dockable") {
    $(document).ready(function(){
      $(".inductiveclass").hide();
      $(".dockableclass").show();
      $(".tapclass").hide();
    });
  } else if (probeparam == "tap") {
    $(document).ready(function(){
      $(".inductiveclass").hide();
      $(".dockableclass").hide();
      $(".tapclass").show();
    });
  }






  if (modelparam != "v0") {
    $(document).ready(function(){
       document.getElementById("ProbeSelect").style.display = "block";
    });
  }

    //unblock buttons on page 1 and block on page 0
    if (currentstep == 0) {
      document.getElementById("button-next").style.display="none";
      document.getElementById("button-prev").style.display="none";
      document.getElementById("button-start").style.display="block";
      document.getElementById("progressdiv").style.display="none";
      document.getElementById("0").style.display="block";
    } else {
      document.getElementById("button-next").style.display="block";
      document.getElementById("button-prev").style.display="block";
      document.getElementById("button-start").style.display="none";
      document.getElementById("progressdiv").style.display="block";
      document.getElementById("0").style.display="none";
    }

 



  if (modelparam == "v0") {
    model = v0pages;
    printermodel = "V0";
    
    maxprogress = v0pages.length;
  } else if(modelparam == "v1") {
    model = v1pages; 
    printermodel = "V1/Trident";
    
    maxprogress = v1pages.length;
  } else if(modelparam == "v2") {
    model = v2pages;
    printermodel = "V2";
    
    
    maxprogress = v2pages.length;
  } else if(modelparam == "vsw") {
    model = vswpages;
    printermodel = "Switchwire";
    maxprogress = vswpages.length;
    
  }

  //Set printermodel
  document.getElementById("printermodel").innerHTML = printermodel;


  

  //unhide page
  currentpage = model[currentstep];
  if(currentpage == "finish") {
    document.getElementById("button-next").style.display="none";
  }
  document.getElementById(currentpage).style.display="block";


  //update progressbar 
  currentwidth = 100/ (maxprogress -1);
  progressbar.style.width= (currentwidth * currentstep) + "%";
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;


  


}

//set interface parameter
function setinterfaceparam() {
  if (document.getElementById("mainsailos").checked) {
    params.set('interface', 'mainsail');
    params.set('step', "1");
  } else if(document.getElementById("octoprint").checked){
    params.set('interface', 'octoprint');
    params.set('step', "1");

    
  }
} 

//set Probe parameter
function setprobeparam() {
  if (document.getElementById("inductive").checked) {
    params.set('probe', 'inductive');
  } else if(document.getElementById("dockable").checked){
    params.set('probe', 'dockable');
  } else if(document.getElementById("tap").checked){
    params.set('probe', 'tap');  
  }
} 


//show and hide octoprint warning
function showoctowarning() {
    document.getElementById("octowarning").style.display = "block";
}

function hideoctowarning() {
    document.getElementById("octowarning").style.display = "none";
}



//move between pages 



function start() {
  setinterfaceparam();
  setprobeparam();
  window.location.search = params;
  
}


function newpage() {
  nextpage = currentstep + 1;
  console.log(nextpage);
  params.set('step', nextpage);
  window.location.search = params;
}


function prevpage() { 
  previouspage = currentstep - 1;
  console.log(previouspage);
  params.set('step', previouspage);
  window.location.search = params;

}



function sidebar () {
  $( ".nav-list" ).empty();
  var step = 0;

  $( ".nav-list" ).append("<li><a href="+"/"+">Back to the Docs</a></li><br>");
  $( ".nav-list" ).append("<li><a href="+"/build/startup"+">Back to the Model Selection</a></li><br>");
  $( ".nav-list" ).append("<h2 class=" + "'" + "whitetext" +"'" + "color=red;>Table of Contents:</h2>");

  if (modelparam == "v0") 
  $.each(v0pages, function(key, page){
      $( ".nav-list" ).append("<li>"+"<a href="+"?model=v0&step="+step+""+">"+v0pagename[step]+"</a>"+"</li>");
      step++ 
  }) 
  else if (modelparam == "v2")
  $.each(v2pages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=v2&step="+step+""+">"+v2pagename[step]+"</a>"+"</li>");
    step++
  }) 
  else if (modelparam == "v1") 
  $.each(v1pages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=v1&step="+step+""+">"+v1pagename[step]+"</a>"+"</li>");
    step++
  }) 
  else if (modelparam == "vsw") 
  $.each(vswpages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=vsw&step="+step+""+">"+vswpagename[step]+"</a>"+"</li>");
    step++
  })



  // highlight current step
    var highlightstep = parseInt(params.get("step")); 
    highlightstep += 6;
    selector = "ul li:nth-child("+ highlightstep +")"
    $( selector ).prepend( "&#8594; " );
    $( selector ).css("font-weight", "bold");
    $( selector ).css("font-style", "oblique");
   
}

