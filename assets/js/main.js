dataTables();
function dataTables() {
    $('.dataTable').dataTable()
}

navmenu();
function navmenu() {
    $('.btn-navmenu button').on('click', function() {
        $('body').toggleClass('act-navmenu');
    });

    $(".navmenu .sembunyi, .navmenu .tampil").click(function(event) {
        event.preventDefault();
        if($(this).hasClass("tampil")){
            $(this).removeClass("tampil");
            $(this).parent().children("ul").stop(true,true).slideUp("normal");
        } else {
            $(".navmenu .sembunyi.tampil").removeClass("tampil");
            $(this).addClass("tampil");
            $(".navmenu ul").filter(":visible").slideUp("normal");
            $(this).parent().children("ul").stop(true,true).slideDown("normal");
        }
    });

    $('.navmenu ul .active').closest('ul').css('display','block');

    $('.navmenu ul .active').closest('ul').parent().children('a').toggleClass('tampil');

}

n_wrap();
function n_wrap() {
    $('.n-wrap > li > a').on('click', function(e) {
        e.preventDefault();
    })    
}

logOut();
function logOut() {
    $('.logOut a').on('click', function(e) {
        e.preventDefault();
        let getUrl = $(this).attr('href');

        Swal.fire({
            icon: 'question',
            title: 'Apakah anda yakin?',
            text: 'Anda akan keluar dari akun ini.',
            showCancelButton: true,
            confirmButtonColor: '#ff0060',
            confirmButtonText: 'Keluar',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then(function(result) {
            if(result.value) {
                window.location.href = getUrl
            }
        })
    })
}