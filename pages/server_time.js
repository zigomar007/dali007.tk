$.ajax({
        type: "POST",
        data:"",
        url: "ajax-get-server-time.php",
        success: function(result){
                $("#time_div").html(result);
            }
        });