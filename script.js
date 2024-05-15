// Add JavaScript code here for interactive elements
		
// Open the side navigation menu

function openNav() {
  console.log(`The innerwidth is ${window.innerWidth} `)
    if (window.innerWidth <= 1300) {
          document.getElementById("mySidenav").style.width = "100%";

      } else {
          document.getElementById("mySidenav").style.width = "250px";
      }
  }

  // Close the side navigation menu
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }