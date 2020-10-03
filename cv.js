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
  let events = tabletop.sheets("Events").all();
  let software = tabletop.sheets("Software").all();
  let skills = tabletop.sheets("Skills").all();
  let education = tabletop.sheets("Education").all();
  let publications = tabletop.sheets("Publications").all();

  //Sort by year of composition
  works.sort(function(a, b) {
    if (a["Year of Composition"] > b["Year of Composition"]) {
      return -1;
    } else return 1
  });
  works.forEach(function(element) {
    debug(element);
    if (element["Piece Title"] != "") {
      document.getElementById("listOfWorks").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"] + "</span>" + "<span class=pieceDate>" + " (" + element["Year of Composition"] + ") </span> <span> for " + element["Forces"] + " </span></div>";
      if (element["Featured"] == "1") {
        document.getElementById("hilightedReasearch").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Piece Title"] + "</span><br><div class=cvDescription>" + element["Description"].replace(/-/g, "&#8209") + "</div></div>"
      }

    }


  });
  performances.sort(function(a, b) {

    var dateA = new Date(Date.parse(a["Date"]));
    var dateB = new Date(Date.parse(b["Date"]));
    if (dateA > dateB) {
      return -1;
    } else return 1
  });

  performances.forEach(function(element) {
    debug(element);
    if (element["Piece Title"] != "" && element["Reading"] != 1) {
      document.getElementById("performances").innerHTML += "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Date"] + " </div>" + "<div style=\"display: inline-block; text-align:left \"><span class=pieceDate><i>" + element["Piece"] + "</i></span> <span> for " + element["Festival/ Event"] + " </span> at " + element["Venue"] + "<br>" + element["Performers"] + "</div></div>";

    } else if (element["Reading"] == 1) {



      document.getElementById("readings").innerHTML += "<div class=cvItem style= \" vertical-align: text-top; display: flex\"><div class=performanceDate>" + element["Date"] + " </div>" + "<div style=\"display: inline-block; text-align:left \"><span class=pieceDate><i>" + element["Piece"] + "</i></span> <span> read by " + element["Performers"] + "</div></div>";
    }


  });

  conferences.sort(function(a, b) {
    if (a["Year"] > b["Year"]) {
      return -1;
    } else return 1
  });
  conferences.forEach(function(element) {
    debug(element);
    if (element["Conference"] != "") {
      var confrence = "<div class=cvItem><span class=titleEmphasis>" + element["Conference"] + " " + element["Year"] + "</span>" + "<span>";
      if (element["Location"] !== "") {
        confrence += " at " + element["Location"] + " </span>"
      }
      confrence += " for " + element["Piece"] + "</div>";
      document.getElementById("conferences").innerHTML += confrence
    }
  });
  mentors.forEach(function(element) {
    debug(element);
    if (element["Mentor"] != "") {
      document.getElementById("mentors").innerHTML += "<div class=cvItem><span>" + element["Mentor"] + " " + element["Dates"] + "</span>" + "</div>";

    }
  });
  masterclasses.forEach(function(element) {
    debug(element);
    if (element["Mentor"] != "") {
      document.getElementById("masterclasses").innerHTML += "<div class=cvItem><span>" + element["Mentor"] + " " + element["Date"] + "</span>" + "</div>";

    }
  });

  software.forEach(function(element) {
    debug(element);
    if (element["Name"] != "") {
      document.getElementById("software").innerHTML += "<div class=cvItem><span class=titleEmphasis><a target = _blank href=" + element["Link"] + ">" + element["Name"] + "</a></span> <br><div class=cvDescription>" + element["Description"] + "</div>" + "</div>";
    }
  });
  specialization.forEach(function(element) {
    debug(element);
    if (element["Name"] != "") {
      document.getElementById("researchSpecialization").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Name"] + "</span><br><div class=cvDescription>" + element["Description"] + "</div></div>";
    }
  });
  skills.forEach(function(element) {
    debug(element);
    if (element["Skill"] != "") {
      document.getElementById("skills").innerHTML += "<div class=cvItem><span>" + element["Skill"] + "</span>" + "</div>";

    }
  });


  education.forEach(function(element) {
    debug(element);
    if (element["Institution"] != "") {
      if (element["In Progress"] == 0) {
        document.getElementById("education").innerHTML += "<div class=cvItem>" + element["Degree"] + " from " + element["Institution"] + " " + element["Start"] + " - " + element["End"] + "; GPA: " + element["GPA"] + "</div>";
      } else {
        document.getElementById("education").innerHTML += "<div class=cvItem>" + element["Degree"] + " from " + element["Institution"] + " " + element["Start"] + " - current";
      }
    }
  });

  events.forEach(function(element) {
    debug(element);
    if (element["Event Name"] != "") {
      document.getElementById("workedEvents").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Event Name"] + " " + element["Role"] + "</span>: " + element["Description"] + "</div>";

    }
  });

  workExperience.forEach(function(element) {
    debug(element);
    if (element["Job"] != "" && element["Important"] == 1) {
      document.getElementById("workExperience").innerHTML += "<div class=cvItem><span class=titleEmphasis>" + element["Job"] + ": </span> " + element["Dates"] + "<br> " + element["Description"] + "</div>";

    }
  });

  publications.forEach(function(element) {
    debug(element);
    if (element["Title"] != "") {
      document.getElementById("publication").innerHTML += "<div class=cvItem><span class=titleEmphasis><a url=" + element["url"] + ">" + element["Title"] + "</a>: </span> " + "published in " + element["Journal"] + " " + element["Date"] + " as " + element["Role"] + "<br> " + element["Description"] + "</div>";
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