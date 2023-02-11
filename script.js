<script>
    function getLocation(name) {

      var address = document.getElementById("address").value;

      document.getElementById("map").src = "https://maps.google.com/maps?q=" + address + "&output=embed";
    }

function fun() {
      document.getElementById("list-wrapper").innerHTML += "<li>Item</li>";
    }
  </script>