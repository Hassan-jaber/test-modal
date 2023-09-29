
// Get references to the elements
const toggleButton = document.querySelector('.dropdown-toggle');
const overlay = document.querySelector('.overlay-bg');

// Function to toggle the overlay
function toggleOverlay() {
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'block';
  }
}

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent the click event from propagating to the document
  toggleOverlay();
});

// Add a click event listener to the document to close the overlay
document.addEventListener('click', function () {
  overlay.style.display = 'none'; // Hide the overlay when anything on the page is clicked
});


// ---------------------------

function openTap(tap, tapname) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tapname).style.display = "block";
  tap.currentTarget.className += " active";
}

// ---------------------------
// Js Code For Display '.empty' div if no content in '.my-connections-list'

let my_groups = document.querySelector("#my-groups .my-groups-list")
let empty = document.querySelector(".empty")

if(my_groups.children.length == 0){
  my_groups.appendChild(empty)
  empty.style.display="flex"
}



// ----------------------------------------------
// Check if the page has a vertical scrollbar
function hasVerticalScrollbar() {
  return document.body.scrollHeight > window.innerHeight;
}

function toggleFooterDisplay() {
  const footer = document.querySelector(".footer");
  if (hasVerticalScrollbar()) {
    footer.style.display = "flex";
  } else {
    footer.style.display = "none";
  }
}

// Check for vertical scrollbar when the page loads
window.addEventListener("load", toggleFooterDisplay);

// Attach click event listeners to elements with the .tablinks class
let tablinksBtns = document.querySelectorAll('.tablinks');
tablinksBtns.forEach((tab) => {
  tab.addEventListener("click", toggleFooterDisplay);
});


//-------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function() {
//   // Your code here, including adding event listeners
//   var element = document.getElementById('create-group');
//   if (element) {
//     element.addEventListener('click', function() {
//       // Store a word in localStorage
//       localStorage.setItem('modalTriggerWord', 'openModal');
      
//       // Redirect to the page with the modal content
//       window.location.href = '../Profile-Groups-Joined/joined.html';
//     });
//   }
// });

// --------------------------------------------------------------------------------------

const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Display the selected image in the preview
            imagePreview.src = event.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    } else {
        // Clear the preview if no file is selected
        imagePreview.src = '#';
    }
});

//-----------------------------------------------------------------------------------------------

// Get references to the HTML elements
const personalPhotoInput = document.getElementById('personalPhoto');
const personalPhotoPreview = document.getElementById('personal-photo');

// Add an event listener to the input for file selection
personalPhotoInput.addEventListener('change', function () {
    const selectedFile = personalPhotoInput.files[0];

    if (selectedFile) {
        // Create a FileReader to read the selected image
        const reader = new FileReader();

        reader.onload = function (event) {
            // Set the selected image as the source of the preview image
            personalPhotoPreview.src = event.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    } else {
        // Clear the preview image if no file is selected
        personalPhotoPreview.src = '../images/personal-photo.png';
    }
});


// ----------------------------------------------------------------------------------------------

let inviteMembersBtn = document.querySelector(".invite-members-btn-1")
let inviteMembersSection = document.querySelector(".invite-members-section")
let assignAdminBtn = document.querySelectorAll(".assign-admin-btn")
inviteMembersBtn.addEventListener(("click"),_=>{
  inviteMembersBtn.style.display="none"
  inviteMembersSection.style.display="block"
})

assignAdminBtn.forEach((el)=>{
  el.addEventListener(('click'),_=>{
    el.textContent = "Assigned as Admin"
    el.classList.add("assign-admin-btn-active")
  })
})

function updateListItemCount() {
  const membersList = document.querySelector('.members-list');
  const numOfInvite = document.querySelector(".num-of-Invite");
  
  if (membersList && numOfInvite) {
      const listItemCount = membersList.querySelectorAll('li').length;
      numOfInvite.textContent = listItemCount;
  }
}

// Function to remove a single list item when clicking on 'fa-xmark'
const xmarkElements = document.querySelectorAll('.fa-xmark');
xmarkElements.forEach((xmarkElement) => {
  xmarkElement.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from propagating further
      const liElement = this.closest('li');
      if (liElement) {
          liElement.remove();
          updateListItemCount(); // Update the count after removal
      }
  });
});

// Function to remove all list items when clicking on 'remove-all-members-btn'
const removeAllButton = document.querySelector('.remove-all-members-btn');
removeAllButton.addEventListener('click', function () {
  const membersList = document.querySelector('.members-list');
  if (membersList) {
      membersList.innerHTML = ''; // Removes all list items
      updateListItemCount(); // Update the count after removal
  }
});

// Initial count
updateListItemCount();
