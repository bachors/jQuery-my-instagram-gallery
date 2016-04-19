/******************************************************
* #### jQuery My Instagram Gallery v03 ####
* Coded by Ican Bachors 2014.
* http://ibacor.com/labs/jquery-my-instagram-gallery/
* Updates will be posted to this site.
******************************************************/

$.fn.myig = function(g, h, j) {
    var k = ($(this).attr("id") != null || $(this).attr("id") != undefined ? '#' + $(this).attr("id") : '.' + $(this).attr("class"));
    $(this).html('<div class="myig_profile"></div><div class="myig_gallery"></div>');
    myig_profile(k);
    myig_gallery(k, "");

    function myig_profile(c) {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + g + '/?access_token=' + j,
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(a) {
            var b = '';
            b += '<div class="user_pic">';
            b += '	<img src="' + a.data.profile_picture.replace(/\\/, "") + '" alt="" title="' + a.data.username + ' on instagram">';
            b += '</div>';
            b += '<p class="user_name"><a href="http://instagram.com/' + a.data.username + '" target="_BLANK">' + a.data.username + '</a></p>';
            b += '<p>Name: ' + a.data.full_name + '</p>';
            b += '<p>Bio: ' + a.data.bio + '</p>';
            b += '<p>Website: <a href="' + a.data.website + '" target="_BLANK">' + a.data.website + '</a></p>';
            b += '<p><strong>' + a.data.counts.media + '</strong> posts | <strong>' + a.data.counts.followed_by + '</strong> followers | <strong>' + a.data.counts.follows + '</strong> following</p>';
            $(c + ' .myig_profile').html(b)
        })
    }

    function myig_gallery(e, f) {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + g + '/media/recent/?access_token=' + j + '&count=' + h + '&max_id=' + f,
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(c) {
            var d = '';
            $.each(c.data, function(i, a) {
                var b = '';
                b += (c.data[i].caption == null || c.data[i].caption == undefined ? Date(c.data[i].created_time) : c.data[i].caption.text + ' - ' + Date(c.data[i].created_time));
                d += '<div class="user_gallery">';
                d += '	<a href="' + c.data[i].images.standard_resolution.url.replace(/\\/, "") + '" class="myig_popup" rel="myig_popup" title="' + b + '">';
                d += '		<img src="' + c.data[i].images.thumbnail.url.replace(/\\/, "") + '" alt="" title="' + b + '">';
                d += '	</a>';
                d += '</div>'
            });
            if (c.pagination.next_max_id != null && c.pagination.next_max_id != undefined) {
                d += '<div class="load_more"><span class="btn myig_more" data-next="' + c.pagination.next_max_id + '">MORE</span></div>'
            }
            $(e + ' .myig_gallery').append(d);
            $('.myig_more').click(function() {
                myig_gallery(e, $(this).data('next'));
                $(e + ' .load_more').remove();
                return false
            })
        })
    }
}
