/**
 * Created by jason on 11/20/16.
 */


/**
 <div class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <a href="#"><img src="http://pingendo.github.io/pingendo-bootstrap/assets/placeholder.png" class="img-circle img-responsive"></a>
            </div>
            <div class="col-md-9 text-center">

            </div>
        </div>
    </div>
 </div>

 **/


function listMembers() {

    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://api.github.com/orgs/WorldwideChristianComputerClub/members',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

    jQuery.each(json, function (i, val) {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        var formatedLoginName = capitalizeFirstLetter(val['login']);
        var member = " \
        <div class='section'> \
            <div class='container'> \
                <div class='row' align='center'> \
                    <div class='col-md-3'> \
                        <a href='#'><img height=20% src='" + val['avatar_url'] + "class='img-circle img-responsive'></a> \
                    </div> \
                    <div class='col-md-9 text-center'><h1>" +
                        formatedLoginName + "</h1><br> \
                    </div> \
                </div> \
            </div> \
        </div> \ ";
        var div = document.getElementById('public-members');
        div.innerHTML += member;
        console.log(val["login"])
    });

}