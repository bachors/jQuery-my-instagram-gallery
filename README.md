jQuery-my-instagram-gallery
===========================

Create your own instagram gallery on your website

<h1>Usage:</h1>
<h3>CSS</h3>
<pre>&lt;!-- My instagram gallery --&gt;
&lt;link type="text/css" rel="stylesheet" href="my-instagram-gallery.css" /&gt;
&lt;!-- Fancybox --&gt;
&lt;link type="text/css" rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"/&gt;</pre>
<h3>JS</h3>
<pre>&lt;!-- jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;
&lt;!-- My instagram gallery --&gt;
&lt;script src="my-instagram-gallery.js"&gt;&lt;/script&gt;
&lt;!-- Fancybox --&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"&gt;&lt;/script&gt;</pre>
<h1>Example Setting:</h1>
<h3>HTML</h3>
<pre>&lt;div class="demo"&gt;&lt;/div&gt;</pre>
<h3>jQuery</h3>
My Instagram Gallery:
<pre>$(document).ready(function(){
    $(".demo").myig(
        ins_id = 503807090, // your user_id
        ins_count = 10, // Count of media to return
        ins_token = '141970.467ede5.edbc9c37472d41b790e1db8948793f11' // your token
    );
});</pre>
Fancybox:
<pre>$(document).ready(function(){    
    $(".myig_popup").fancybox({
        openEffect : 'fade',
        closeEffect : 'fade'
    });
});</pre>
<h2>New instagram API 2016</h2>
<p>Now access token is limited to 500 requests per hour.<br>
You can get your acces token here: http://instagramwordpress.rafsegat.com/docs/get-access-token/ this works for me.</p>
<p><a href="http://ibacor.com/tools/social-media-user-id-finder">Find your instagram user_id ?</a></p>
<p><a href="http://ibacor.com/demo/jquery-my-instagram-gallery/">DEMO</a></p>
