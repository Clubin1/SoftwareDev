var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var schools = response.schools;

            var output = '';

            for(let i = 0;i < schools.length;i++){
            output += `
            <div class="card-total">
                <div class="card">
                    <h1 class="school-name">${schools[i].name}</h1>
                    <p class="school-welcome">Welcome: ${schools[i].welcome}</p>   
                    <p class="school-mission">Mission: ${schools[i].mission}</p>   
                    <p class="school-values">Values: ${schools[i].values}</p>  
            </div> 
                </div>`
            }            
        }
            document.getElementById('school').innerHTML = output;
          };
      xhttp.open("GET", "people.json", true);
      xhttp.send();

    /* SEEKER FUNCTION */
     if (!RegExp.escape) {
       RegExp.escape = function (s) {
         return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
       };
     }
     
    jQuery(function(){
      var $rows = $('.card');
      $('#seeker').keyup(function () {
        var regex =  new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
        $rows.hide().filter(function () {
          var text = $(this).children(".school-name").text().replace(/\s+/g, ' ');
          return regex.test(text)
        }).show();
      });
    });

