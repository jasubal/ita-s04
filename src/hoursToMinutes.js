// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

    function string2Minutes(strtime) {
      //let substringH = 'h ';
      //let substringM = 'min';
      let min = '';
      let hour = '';
      let durationMinutes = 0;
      if (strtime.includes('h')) {
        hour = strtime.split('h')[0];
        //console.log("HOUR included");
      }
      if (strtime.includes('min')) {
        min = strtime.split(' ')[1].split('min')[0];
        //console.log("MINS included");
      }
      durationMinutes = Number(hour) * 60 + Number(min);
      //console.log(title+" =>  "+hour+"h "+min+"min = "+durationMinutes);
      //console.log(filmName+" "+durationMinutes+" minutes");
      //durationMinutesString = durationMinutes.toString();
      durationMinutes = Number(durationMinutes);
      return durationMinutes;
    }
  // should return a new array, not update the original one
    let result = movies;
    result.map(function(el) {
      el.duration = string2Minutes(el.duration);
      //el.duration = string2Minutes(el.duration, el.title);
    });
    console.log("EXERCICE 7->", result);
    return result;

  }
