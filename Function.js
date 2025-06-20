function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

  function myFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName("li");

    let hasVisible = false;
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName("a")[0];
      const txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        hasVisible = true;
      } else {
        li[i].style.display = "none";
      }
    }

    ul.style.display = hasVisible ? "block" : "none";
  }

  function showList() {
    document.getElementById("myUL").style.display = "block";
  }

  function hideListDelayed() {
    setTimeout(() => {
      document.getElementById("myUL").style.display = "none";
    }, 200); // Delay to allow clicks
  }


 function validateForm() {
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const country = document.getElementById("country").value;
  const subject = document.getElementById("subject").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(firstName)) {
    alert("First name must contain only letters and spaces.");
    return false;
  }
  if (!nameRegex.test(lastName)) {
    alert("Last name must contain only letters and spaces.");
    return false;
  }
  if (country === "") {
    alert("Please select a country.");
    return false;
  }
  if (subject.length < 10) {
    alert("Subject must be at least 10 characters long.");
    return false;
  }

  return true;
} 