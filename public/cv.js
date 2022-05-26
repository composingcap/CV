var publicSpreadsheetUrl = '';
var debugFlag = false;


const sheets = {}

sheets.specialization = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=0&single=true&output=csv" }
sheets.works = { url : "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=0&single=true&output=csv"}
sheets.performances = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1924786898&single=true&output=csv" };
sheets.conferences = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1181248242&single=true&output=csv" };
sheets.masterclasses = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=906997110&single=true&output=csv" };
sheets.mentors = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1203896364&single=true&output=csv" };
sheets.workExperience = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1558159829&single=true&output=csv" };
sheets.events = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1039253499&single=true&output=csv" };
sheets.software = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=905593686&single=true&output=csv" };
sheets.skills = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1622997103&single=true&output=csv" };
sheets.education = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1758269460&single=true&output=csv" };
sheets.papers = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1067307712&single=true&output=csv" };
sheets.workshopsAndTalks = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=380427488&single=true&output=csv" };
sheets.recordings = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1799471077&single=true&output=csv" };
sheets.radio = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1734921203&single=true&output=csv" };
sheets.awards = { url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmdN-Hzc_qhdheDrCZyOaIaA30w9nwqjujs-RnZqQpOaZQMpm04zJ0kCf9ljrlsEdiWk5X9MwLZqn8/pub?gid=1874619668&single=true&output=csv" };

function init() {
    if (document.getElementById("isRendered").innerHTML != "1") {

        let keys = Object.keys(sheets)

        keys.forEach(key => {
            value = sheets[key];
            Papa.parse(value.url, {
                before: () => { },
                download: true,
                header: true,
                complete: (results) => {
                    sheets[key]["data"] = results.data;
                    //console.log(key);
                }

            });
        });
        setTimeout(showInfo, 5000);
    }
}

let infoPosted = false
function showInfo() {
    console.log("showing info...")
    if (!infoPosted){
    try {
        let specialization = sheets.specialization.data;
        let works = sheets.works.data;
        let performances = sheets.performances.data;
        let conferences = sheets.conferences.data;
        let masterclasses = sheets.masterclasses.data;
        let mentors = sheets.mentors.data;
        let workExperience = sheets.workExperience.data;
        let events = sheets.events.data;
        let software = sheets.software.data;
        let skills = sheets.skills.data;
        let education = sheets.education.data;
        let papers = sheets.papers.data;
        let workshopsAndTalks = sheets.workshopsAndTalks.data;
        let recordings = sheets.recordings.data;
        let radio = sheets.radio.data;
        let awards = sheets.awards.data;



        let awardsDiv = document.getElementById("awards");
        awards.forEach(function (element) {
            awardsDiv.innerHTML += "<div class=cvItem><span class=titleEmphasis>"+ element["Name"] + " "+ element["Year"] + ":</span> " + element["Prize"] + "</div>"; 

        });


        works.sort(function (a, b) {
            if (a["Year of Composition"] > b["Year of Composition"]) {
                return -1;
            } else return 1
        });
        var highlightsDiv = document.getElementById("highlightedWorks");
        works.forEach(function (element) {
       
            if (element["Piece Title"] != "" &&element["Ignore"]!=1) {
                if (element["Featured"] == "1") {
                    if (highlightsDiv != undefined) {
                        entry = "<div class=cvItem><span class=titleEmphasis>"
                        if (element["Youtube"] != "") {
                            entry += "<a target=_blank href=" + element["Youtube"]+">"+element["Piece Title"]+"</a>";
                        }
                        else if (element["Soundcloud"] != ""){
                            entry += "<a target=_blank  href=" + element["Soundcloud"] + ">" + element["Piece Title"] + "</a>";
                        }
                        else {
                            entry += element["Piece Title"];

                        }
                        if (element["Commissioned"] == 1) {
                            if (highlightsDiv.getAttribute("commissionStar") == "no") { }
                            else { entry += "<sp>*</sp>" };
                        }
                        entry += "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span>";
                        if (highlightsDiv.getAttribute("description") == 'yes') {
                            if (element["CV Description"] != "")  {
                                entry += "</span><br><div class=cvDescription>" + element["CV Description"].replace(/-/g, "&#8209") + "</div>";
                            }
                            else {
                                entry += "</span><br><div class=cvDescription>" + element["Description"].replace(/-/g, "&#8209") + "</div>";
                            }
                        }
                        entry += "</div>";
                        highlightsDiv.innerHTML += entry;
                    }
                } else {
                    entry = "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"];
                    if (element["Commissioned"] == 1) {
                        entry += "<sp>*</sp>";
                    }
                    entry += "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span></div>";
                    if (document.getElementById("listOfWorks") != undefined) {
                        document.getElementById("listOfWorks").innerHTML += entry;
                    }
                }
                if (document.getElementById("completeWorks") != undefined) {
                    entry = "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"];
                    if (element["Commissioned"] == 1) {
                        entry += "<sp>*</sp>";
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
            console.log(element);

            debug(element);
            if (element["Piece"]  != ""){
                let work = works.find(obj => {

                    return obj["Piece Title"] === element["Piece"];
                    
                });
                console.log(work)
                if (work == undefined || work["Ignore"]==1) return;

            }
            if (element["Piece"] != "" && element["Reading"] != 1) {
                if (element["Juried"] == 1) {
                    //entry += "<sup>*</sup>";
                    perfomanceDiv = document.getElementById("highlightedPerformances");

                } else {
                    perfomanceDiv = document.getElementById("performances");
                }



                if (perfomanceDiv != undefined) {
                    var entry = "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Date"];

                    entry += " </div> <div style=\"display: inline-block; text-align:left \"><span class=pieceDate>"

                    if (element["Movement"] != ""){
                        entry += "'" + element["Movement"] +"' from ";
                    }
                    entry += "<i>" + element["Piece"];



                    entry += "</i></span> <span> | " + element["Festival/ Event"]+ " </span> ";
                    if (element["Venue"] != ""){
                        entry += "<span> at " + element["Venue"] +"</span>";
                    }
                    if (perfomanceDiv.getAttribute("performers") == "yes" && element["Performers"] != "") {
                        entry += "<br>" + element["Performers"] + "</div>"
                    }
                    entry += "</div>";
                    if (perfomanceDiv != null) {
                        perfomanceDiv.innerHTML += entry;
                    }
                    if (document.getElementById("completePerformances") != undefined) {
                        document.getElementById("completePerformances").innerHTML += entry;
                    }
                }

            } else if (element["Reading"] == 1) {
                if (document.getElementById("readings") != undefined) {

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
        if (document.getElementById("mentors") != undefined) {
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
                if (document.getElementById("masterclasses") != undefined) {
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
                if (softwareDiv.getAttribute("resume") == "true") {
                    if (element["UseInResume"] != "1") {
                        return
                    }
                }
                if (element["Name"] != "") {
                    softwareDiv.innerHTML += "<div class=cvItem>"
                    if (softwareDiv.getAttribute("resume") == "true"){
                        softwareDiv.innerHTML += "<span class=titleEmphasis><a target = _blank href=" + element["Link"] + ">" + element["Name"] + " (" + element["Date"] + ")-</a> </span> " + element["ShortDescription"];

                    }
                    else {
                        softwareDiv.innerHTML += "<span class=titleEmphasis><a target = _blank href=" + element["Link"] + ">" + element["Name"] + " (" + element["Date"] + ")-</a> </span> " + "<span>"+element["Type"]+"</span>";

                        if (element["ShowDescription"] == 1) {

                            softwareDiv.innerHTML += " <div class=cvDescription>" + element["Description"] + "</div>";
                        }
                    }
                }
                softwareDiv.innerHTML += "</div>";
            });
        }
        /*specialization.forEach(function(element) {
          debug(element);
          if (element["Name"] != "") {
            document.getElementById("researchSpecialization").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Name"] + "</span><br><div class=cvDescription>" + element["Description"] + "</div></div>";
          }
        });*/
        var skillsDiv = document.getElementById("skills");
        if (skillsDiv != undefined) {
            skills.forEach(function (element) {
                debug(element);
                if (element["Skill"] != "") {
                    var entry = "<div class=cvItem><span>" + element["Skill"];
                    if (element["Level"] == 3) {
                        entry += "<sup>*</sup>"
                    } else if (element["Level"] == 2) {
                        entry += "<sup>+</sup>"
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
                    entry = "<div class=cvItem> <b>" + element["Degree"] + " from " + element["Institution"] + ":</b> " + element["End"];
                } else {
                    entry = "<div class=cvItem> <b>" + element["Degree"] + " from " + element["Institution"] + ":</b> August " + element["End"] + " (confirmed)";
                }
                if (element["Studied With"] != "") {
                    entry += "<br><span style=\" margin-left : 10px \">Studied with: " + element["Studied With"] + "</span>";
                }
                if (document.getElementById("education") != undefined) {
                    document.getElementById("education").innerHTML += entry + "</div>";
                }
            }
        });

        events.forEach(function (element) {
            debug(element);
            if (element["Event Name"] != "") {
                if (document.getElementById("workedEvents") != undefined) {
                    var entry = "<div class=cvItem><span class=titleEmphasis><i>" + element["Event Name"] + "</i> " + element["Role"];
                    if (document.getElementById("workedEvents").getAttribute("description") == 'yes') {
                        entry += "</span><br><div class=cvDescription>" + element["Description"] + "</div>";
                    }
                    entry += "</div>";

                    document.getElementById("workedEvents").innerHTML += entry;
                }

            }
        });

        workExperience.forEach(function (element) {
            debug(element);
            if (element["Job"] != "" && element["Important"] == 1) {

                entry = "<div class=cvItem><span class=titleEmphasis>" + element["Job"] + ": </span> " + element["Dates"] + "<br><div class=cvDescription>"
                if (softwareDiv.getAttribute("resume") == "true") {
                    entry += " " + element["ShortDescription"]; 
                }
                    else{
                    entry += " " + element["Description"]; 
                    }

                if(element["Superviser"] != "" && element["Superviser"] != undefined){
                    entry += "<br>Supervisor: "  + element["Superviser"] + " | " + element["Contact"];
                }
                entry += "</div></div>";
                if (document.getElementById("jobs") != undefined) {
                    document.getElementById("jobs").innerHTML += entry;
                }
                
                if (element["Research"] == 1) {
                    if (document.getElementById("reasearchExperience") != undefined) {
                        document.getElementById("reasearchExperience").innerHTML += entry;
                    }
                }
                else if (element["Teaching"] == 1) {
                    if (document.getElementById("teachingExperience") != undefined) {
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
                if (element["url"] != "") {
                    entry += "<a href=" + element["url"] + ">" + element["Title"] + "</a>: </span> "
                }
                else {
                    entry += element["Title"] + ":</span> "
                }
                if (element["Published"] == 1) {
                    entry += "published in " + element["Journal"] + " " + element["Date"] + " - " + element["Role"];
                }
                else {
                    entry += "written " + element["Date"];
                }
                //entry += "<br> <div class=cvDescription>" + element["Description"] + "</div></div>";
                if (document.getElementById("publication") != undefined) {
                    document.getElementById("publication").innerHTML += entry;
                }
            }

        });


        
        document.getElementById("cv").style.display = "block";
        document.getElementById("wait").style.display = "none";
        document.getElementById("isRendered").innerHTML = "1";
        infoPosted = true;
    }
    
    catch(error) {
        console.error(error);
        setTimeout(showInfo, 250)
    };
}
//
}


window.addEventListener('DOMContentLoaded', init);





function debug(message) {
    if (debugFlag) {

        console.log(message);
    }
}