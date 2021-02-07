var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1rPLq7UXWx3WdyaVV2bT-6i_VrcrNHCuAr362LMvk5mU/edit?usp=sharing';
var debugFlag = false;

var works = {};


function init() {
    if (document.getElementById("isRendered").innerHTML != "1") {
        Tabletop.init({
            key: publicSpreadsheetUrl,
            callback: showInfo
        })
    }
}

function showInfo(data, tabletop) {
    let specialization = tabletop.sheets("Reasearch Specilization").all();
    let works = tabletop.sheets("Works").all();
    let performances = tabletop.sheets("Performances").all();
    let conferences = tabletop.sheets("Conferences").all();
    let masterclasses = tabletop.sheets("Masterclasses").all();
    let mentors = tabletop.sheets("Mentors").all();
    let workExperience = tabletop.sheets("Work Experience").all();
    let events = tabletop.sheets("Professional Service").all();
    let software = tabletop.sheets("Software").all();
    let skills = tabletop.sheets("Skills").all();
    let education = tabletop.sheets("Education").all();
    let papers = tabletop.sheets("Papers").all();
    let workshopsAndTalks = tabletop.sheets("Talks and Workshops").all();
    let recordings = tabletop.sheets("Recording Releases").all();
    let radio = tabletop.sheets("Radio Play").all();
    //Sort by year of composition
    works.sort(function (a, b) {
        if (a["Year of Composition"] > b["Year of Composition"]) {
            return -1;
        } else return 1
    });
    var highlightsDiv = document.getElementById("highlightedWorks");
    works.forEach(function (element) {
        debug(element);
        if (element["Piece Title"] != "") {
            if (element["Featured"] == "1") {
                if (highlightsDiv != undefined) {
                    entry = "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"];
                    if (element["Commissioned"]==1){
                        entry+="<sp>*</sp>";
                    }
                    entry += "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span>";
                    entry += "</span><br><div class=cvDescription>" + element["Description"].replace(/-/g, "&#8209") + "</div></div>";
                    highlightsDiv.innerHTML += entry;
                }
            } else {
                 entry= "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"];
                 if (element["Commissioned"]==1){
                        entry+="<sp>*</sp>";
                    }
                    entry += "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span></div>";
               if (document.getElementById("listOfWorks") != undefined){
                document.getElementById("listOfWorks").innerHTML += entry;
               }
            }
            if (document.getElementById("completeWorks") != undefined){
                entry= "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"];
                 if (element["Commissioned"]==1){
                        entry+="<sp>*</sp>";
                    }
                    entry += "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span></div>";
                document.getElementById("completeWorks").innerHTML += entry;
               
            }


        }


    });
    //Performances
    var perfomanceDiv;
    performances.sort(function (a, b) {

        var dateA = new Date(Date.parse(a["Date"]));
        var dateB = new Date(Date.parse(b["Date"]));
        if (dateA > dateB) {
            return -1;
        } else return 1
    });

    performances.forEach(function (element) {
        debug(element);
        if (element["Piece Title"] != "" && element["Reading"] != 1) {
            if (element["Juried"] == 1) {
                //entry += "<sup>*</sup>";
                perfomanceDiv = document.getElementById("highlightedPerformances");

            } else {
                perfomanceDiv = document.getElementById("performances");
            }
            
            
            
            
            var entry = "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Date"];

            entry += " </div> <div style=\"display: inline-block; text-align:left \"><span class=pieceDate><i>" + element["Piece"];



            entry += "</i></span> <span> for " + element["Festival/ Event"] + " </span> at " + element["Venue"] + "<br>" + element["Performers"] + "</div></div>";
            if (perfomanceDiv != null) {
            perfomanceDiv.innerHTML += entry;
            }
            if(document.getElementById("completePerformances") != undefined){
                document.getElementById("completePerformances").innerHTML += entry;
            }

        } else if (element["Reading"] == 1) {
            if(document.getElementById("readings") != undefined){

            document.getElementById("readings").innerHTML += "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Date"] + " </div>" + "<div style=\"display: inline-block; text-align:left \"><span class=pieceDate><i>" + element["Piece"] + "</i></span> <span> read by " + element["Performers"] + "</div></div>";
            }
        }
        


    });
    recordings.sort(function (a, b) {

        var dateA = new Date(Date.parse(a["Release Date"]));
        var dateB = new Date(Date.parse(b["Release Date"]));
        if (dateA > dateB) {
            return -1;
        } else return 1
    });
    recordings.forEach(function (element) {
        debug(element);
        if (element["Title"] != "") {


            selectedDiv = document.getElementById("recordings");

            if (selectedDiv != null) {
                
        
            var entry = "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Release Date"] + "</div>";

            entry += " <div style=\"display: inline-block; text-align:left \"><span class=pieceDate><b>" + element["Title"] + "</b> - <i>" + element["Piece"] + "</i></span>";

            if (element["Performers"] != "") {
                entry += "<br>" + element["Performers"];
            }


            selectedDiv.innerHTML += entry;
            }

        }
    });
    radio.sort(function (a, b) {

        var dateA = new Date(Date.parse(a["Play Date"]));
        var dateB = new Date(Date.parse(b["Play Date"]));
        if (dateA > dateB) {
            return -1;
        } else return 1
    });
    radio.forEach(function (element) {
        debug(element);
        if (element["Title"] != "") {


            selectedDiv = document.getElementById("radio");

            if (selectedDiv != null) {

            var entry = "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Play Date"] + "</div>";

            entry += " <div style=\"display: inline-block; text-align:left \"><span class=pieceDate><b>" + element["Show"] + " on " + element["Station"] + "</b> - <i>" + element["Piece"] + "</i></span>";

            if (element["Performers"] != "") {
                entry += "<br>" + element["Performers"];
            }


            selectedDiv.innerHTML += entry;

        }
        }
    });

    //Confrences 
    var confrenceDiv = document.getElementById("conferences");
    if (confrenceDiv != undefined) {
        conferences.sort(function (a, b) {
            if (a["Year"] > b["Year"]) {
                return -1;
            } else return 1
        });
        conferences.forEach(function (element) {
            debug(element);
            if (element["Conference"] != "") {
                var confrence = "<div class=cvItem><span class=titleEmphasis>" + element["Conference"] + " " + element["Year"] + "</span>" + "<span>";
                if (element["Location"] !== "") {
                    confrence += " at " + element["Location"] + " </span>"
                }
                confrence += " for " + element["Piece"] + "</div>";
                confrenceDiv.innerHTML += confrence
            }
        });
    }
    if (document.getElementById("mentors")!= undefined){
    mentors.forEach(function (element) {
        debug(element);
        if (element["Mentor"] != "") {
            document.getElementById("mentors").innerHTML += "<div class=cvItem><span>" + element["Mentor"] + " " + element["Dates"] + "</span>" + "</div>";

        }
    });
    }
    masterclasses.forEach(function (element) {
        debug(element);
        if (element["Mentor"] != "") {
            if (document.getElementById("masterclasses")!=undefined){
            document.getElementById("masterclasses").innerHTML += "<div class=cvItem><span>" + element["Mentor"] + " " + element["Date"] + "</span>" + "</div>";
            }

        }
    });
    //Software
    var softwareDiv = document.getElementById("software");
    if (softwareDiv != undefined) {
        software.sort(function (a, b) {

            var dateA = new Date(Date.parse(a["Date"]));
            var dateB = new Date(Date.parse(b["Date"]));
            if (dateA > dateB) {
                return -1;
            } else return 1
        });
        software.forEach(function (element) {
            debug(element);
            if (element["Name"] != "") {
                softwareDiv.innerHTML += "<div class=cvItem><span class=titleEmphasis><a target = _blank href=" + element["Link"] + ">" + element["Name"] + " (" + element["Date"] + ")</a></span> <br><div class=cvDescription>" + element["Description"] + "</div>" + "</div>";
            }
        });
    }
    /*specialization.forEach(function(element) {
      debug(element);
      if (element["Name"] != "") {
        document.getElementById("researchSpecialization").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Name"] + "</span><br><div class=cvDescription>" + element["Description"] + "</div></div>";
      }
    });*/
    var skillsDiv = document.getElementById("skills");
    if(skillsDiv !=undefined){
    skills.forEach(function (element) {
        debug(element);
        if (element["Skill"] != "") {
            var entry = "<div class=cvItem><span>" + element["Skill"];
            if (element["Level"] == 3) {
                entry += "<sup>*</sup>"
            } else if (element["Level"] == 2) {
                entry += "<sup>†</sup>"
            }
            entry += "</span>" + "</div>";
            skillsDiv.innerHTML += entry;

        }

    });
    }


    education.forEach(function (element) {
        debug(element);
        if (element["Institution"] != "") {
            var entry;
            if (element["In Progress"] == 0) {
                 entry = "<div class=cvItem>" + element["Degree"] + " from " + element["Institution"] + " " + element["End"] + "; GPA: " + element["GPA"];
            } else {
                entry = "<div class=cvItem>" + element["Degree"] + " from " + element["Institution"] + " " + element["Start"] + " - current";
            }
            if(element["Studied With"] != ""){
                entry+= "<br><span style=\" margin-left : 10px \">Studied with: "+  element["Studied With"]+"</span>";
            }
            if (document.getElementById("education") != undefined){
            document.getElementById("education").innerHTML += entry + "</div>";
            }
        }
    });

    events.forEach(function (element) {
        debug(element);
        if (element["Event Name"] != "") {
            if (document.getElementById("workedEvents") != undefined){
            document.getElementById("workedEvents").innerHTML += "<div class=cvItem><span class=titleEmphasis><i>" + element["Event Name"] + "</i> " + element["Role"] + "</span><br><div class=cvDescription>" + element["Description"] + "</div></div>";
            }

        }
    });

    workExperience.forEach(function (element) {
        debug(element);
        if (element["Job"] != "" && element["Important"] == 1) {
            
             entry= "<div class=cvItem><span class=titleEmphasis>" + element["Job"] + ": </span> " + element["Dates"] + "<br> <div class=cvDescription>" + element["Description"] + "</div></div>";
            if (element["Reasearch"] == 1){
                if (document.getElementById("reasearchExperience") != undefined){
            document.getElementById("reasearchExperience").innerHTML += entry;
                }
            }
            else if (element["Teaching"] == 1){
                if (document.getElementById("teachingExperience") != undefined){
             document.getElementById("teachingExperience").innerHTML += entry;  
                }
            }
        }
    });

    workshopsAndTalks.forEach(function (element) {
        debug(element);
        if (element["Event"] != "") {
            var entry = "<div class=cvItem><span class=titleEmphasis>" + element["Type"] + " - " + element["Event"];
            if (element["Group"] != "") {
                entry += " for " + element["Group"];
            }
            entry += ": </span> " + element["Date"];

            var workshopsAndTalks = document.getElementById("workshopsAndTalks");
            if (workshopsAndTalks != null) {
                workshopsAndTalks.innerHTML += entry;
            }

        }
    });

    papers.forEach(function (element) {
        debug(element);
        if (element["Title"] != "") {
            entry = "<div class=cvItem><span class=titleEmphasis>"
            if (element["url"] != ""){
                entry += "<a href=" + element["url"] + ">" + element["Title"] + "</a>: </span> " 
            }
            else{
                entry += element["Title"] +":</span> " 
            }
            if (element["Published"]==1){
               entry += "published in " + element["Journal"] + " " + element["Date"] + " - " + element["Role"];
            }
            else{
                entry +=  "written "+ element["Date"] ;
            }
            //entry += "<br> <div class=cvDescription>" + element["Description"] + "</div></div>";
            if (document.getElementById("publication") != undefined){
            document.getElementById("publication").innerHTML += entry;
            }
        }

    });


    document.getElementById("cv").style.display = "block";
    document.getElementById("isRendered").innerHTML = "1";

}

window.addEventListener('DOMContentLoaded', init);





function debug(message) {
    if (debugFlag) {

        console.log(message);
    }
}
