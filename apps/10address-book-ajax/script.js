'use strict';

$(document).ready(function() { //1 & ready
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(response) {
        response.forEach(function(user){
          var str = $('<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>'+ user.last_name +'</td><td><a href="#" data-id="' + user.id + '">' + 'view</a></td></tr>');
          $('tbody').append(str);


         var url =  'https://reqres-api.herokuapp.com/api/users/';
        }); //response
      } //success line
    }); //ajax line


    $.ajax('https://reqres-api.herokuapp.com/api/users/1', {
      success: function(user) {
          var str = $('<h3>' + user.first_name  + ' ' + user.last_name +  '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p>' + '<img src="' + user.avatar + '">' + '</div>');
          $('#details').append(str);

        } //success line
      }); //ajax line */

      $('tbody').click(function (event){
                 event.preventDefault();
          });

}); //1 & ready



//      var url =  'https://reqres-api.herokuapp.com/api/users/' + users.id;
//      console.log(url);
//        $(this).data('id');
//        console.log(this);
    // $('#details').append(url);
