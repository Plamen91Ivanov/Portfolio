function toggleProjects() {
    var divProjects = document.getElementById("projects");
    var algorithmVisualizer = document.getElementById("algorithmVisualizer");
    var eShop = document.getElementById("eShop");
    var doctorInformation = document.getElementById("doctorInformation");
    var forestBath = document.getElementById("forestBath");
    var background = document.getElementById("project");

    if (divProjects.style.display === "") {
      divProjects.style.display = "none";
    }
    if (divProjects.style.display === "none") {
      divProjects.style.display = "inline-block";
    } else {
      divProjects.style.display = "none";
      algorithmVisualizer.style.display = "none";
      eShop.style.display = "none";
      doctorInformation.style.display = "none";
      forestBath.style.display = "none";
      background.style.display = "none";
    }
}
function toggleBackground() {
  var background = document.getElementById("project");
  background.style.display = "block"
}
function toggleAlgorithmVisualizer() {
  toggleBackground();
  var divProject = document.getElementById("algorithmVisualizer");
  var eShop = document.getElementById("eShop");
  var doctorInformation = document.getElementById("doctorInformation");
  var forestBath = document.getElementById("forestBath");
  var about = document.getElementById("about");

  about.style.display = "none";
  eShop.style.display = "none";
  doctorInformation.style.display = "none";
  forestBath.style.display = "none";

    if (divProject.style.display === "") {
      divProject.style.display = "none";
    }
    if (divProject.style.display === "none") {
      divProject.style.display = "block";
    } else {
      divProject.style.display = "none";
    }
}
function toggleEShop() {
  toggleBackground();
  var divProject = document.getElementById("eShop");
  var algorithmVisualizer = document.getElementById("algorithmVisualizer");
  var doctorInformation = document.getElementById("doctorInformation");
  var forestBath = document.getElementById("forestBath");
  var about = document.getElementById("about");

  about.style.display = "none";
  algorithmVisualizer.style.display = "none";
  doctorInformation.style.display = "none";
  forestBath.style.display = "none";

    if (divProject.style.display === "") {
      divProject.style.display = "none";
    }
    if (divProject.style.display === "none") {
      divProject.style.display = "block";
    } else {
      divProject.style.display = "none";
    }
}
function toggleDoctorInformation() {
  toggleBackground();
  var divProject = document.getElementById("doctorInformation");
  var algorithmVisualizer = document.getElementById("algorithmVisualizer");
  var eShop = document.getElementById("eShop");
  var forestBath = document.getElementById("forestBath");
  var about = document.getElementById("about");

  about.style.display = "none";
  algorithmVisualizer.style.display = "none";
  eShop.style.display = "none";
  forestBath.style.display = "none";

    if (divProject.style.display === "") {
      divProject.style.display = "none";
    }
    if (divProject.style.display === "none") {
      divProject.style.display = "block";
    } else {
      divProject.style.display = "none";
    }
}
function toggleForestBath() {
  toggleBackground();
  var divProject = document.getElementById("forestBath");
  var algorithmVisualizer = document.getElementById("algorithmVisualizer");
  var eShop = document.getElementById("eShop");
  var doctorInformation = document.getElementById("doctorInformation");
  var about = document.getElementById("about");

  about.style.display = "none";
  algorithmVisualizer.style.display = "none";
  eShop.style.display = "none";
  doctorInformation.style.display = "none";

    if (divProject.style.display === "") {
      divProject.style.display = "none";
    }
    if (divProject.style.display === "none") {
      divProject.style.display = "block";
    } else {
      divProject.style.display = "none";
    }
}
function toggleAbout(){
  var about = document.getElementById("about");
  var algorithmVisualizer = document.getElementById("algorithmVisualizer");
  var eShop = document.getElementById("eShop");
  var doctorInformation = document.getElementById("doctorInformation");
  var forestBath = document.getElementById("forestBath");

  forestBath.style.display = "none";
  algorithmVisualizer.style.display = "none";
  eShop.style.display = "none";
  doctorInformation.style.display = "none";

  if (about.style.display === 'none') {
    about.style.display = 'block';
  }
  else {
    about.style.display = 'none';
  }
}

  