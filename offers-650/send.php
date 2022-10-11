<!DOCTYPE html>
<html lang="ru">

<head>
  <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '789158904996897');
fbq('track', 'PageView');
fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=789158904996897&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cпасибо!</title>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <style>
    html {
      font-size: 20.833333vw;
      overflow-x: hidden;
      height: 100vh;
      background: #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 481px) {
      html {
        font-size: 100px;
      }
    }

    body {
      font-family: "Roboto", sans-serif;
      max-width: 480px;
      overflow-x: hidden;
      -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      margin: auto;
    }

    .main {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 0.16rem;
      padding: 0.25rem 0.27rem;
    }

    

    .sweet-title {
      font-size: 0.2rem;
      text-align: center;
      padding: 30px 10px;
    }
  </style>
  
  <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(83376475, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/83376475" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</head>



<?php
	/*
  $pixel = "789158904996897";
  $website = "https://fb-arenda.com";
	$token = "EAAWlzVUVPjEBAGGll8aCSDpiBoLP5kTtoDO21VU8ZAKrZCbfiHss3XZCdM5GDDGl8O2dIZB4SabLSEKEssNoMiRjZBMrYxGo2c5UD4CO4iOZBlzeVXZCawgrksCcwd3j4Vt485SeoFUiiwtsAMa3cr4NRjTGkJsmdhrbWZCvZAFINNLdQoWFHhXJlqckuRStFWsMZD";
	$proxy_address = "";
	$proxy_userpass = "";

	$data_in[] = array(
		"event_name" => "Lead",
		"event_time" => $_SERVER['REQUEST_TIME'],
		"event_source_url" => $website,
		"action_source" => "website",
		"user_data" => array(
		  "client_ip_address" => $_SERVER['REMOTE_ADDR'],
		  "client_user_agent" => $_SERVER['HTTP_USER_AGENT']
		  )
		);
	$data = array(
	  "data" => $data_in
	  );
	  
	$url = "https://graph.facebook.com/v11.0/". $pixel. "/events?access_token=". $token;
	$post = curl_init();
	curl_setopt_array($post, array(
		CURLOPT_URL => $url,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_POST => true,
		CURLOPT_HTTPPROXYTUNNEL => true,
		CURLOPT_PROXYUSERPWD => $proxy_userpass,
		CURLOPT_PROXY => $proxy_address,
		CURLOPT_POSTFIELDS => http_build_query($data)
	));
	
	$r = curl_exec($post);
	*/
	$notionkey = "secret_BbrJIUSKyirNANiZFxA9FDoXvbsQV4JTySEN8vNZ8il";
	$database_id = "f2d781b4231444dea821788e493dd64e";
	$name = $_POST['name'];
	$login = $_POST['login']; 
	$password = $_POST['password'];
	$contact = $_POST['contact'];
	$referral = $_POST['referral'];
	$phone = $_POST['phone'];
	
	$data = array (
    "parent" => array(
        "database_id" => $database_id),
    "properties" => array(
        "Name" => array(
            "title" => array(array(
                "text" => array(
                    "content" => $name
                    )))),
        "Login" => array(
            "rich_text" => array(array(
                "text" => array(
                    "content" => $login
                    )))),
        "Password" => array(
            "rich_text" => array(array(
                "text" => array(
                    "content" => $password
                    )))),
        "Contact" => array(
            "rich_text" => array(array(
                "text" => array(
                    "content" => $contact
                    )))),
        "Referral" => array(
            "rich_text" => array(array(
                "text" => array(
                    "content" => $referral
                    )))),
        "Phone" => array(
            "phone_number" => $phone
            )
    ));
	$body = json_encode($data);
	$url = "https://api.notion.com/v1/pages";
	
	function n_post ($url, $body, $notionkey)
	{
    $post = curl_init();
    $headers = array(
    'Authorization: Bearer '.$notionkey,
    'Notion-Version: 2021-05-13',
    'Content-Type: application/json',
    );
    curl_setopt_array($post, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
    	CURLOPT_POST => true,
    	CURLOPT_HTTPHEADER => $headers,
    	CURLOPT_POSTFIELDS => $body
    ));
	
    return curl_exec($post);
	}
	
	$r = n_post($url, $body, $notionkey);
?>


<body>
  <div class="sweet-text-hidden ">
    <div class="sweet-title">спасибо за отправку,мы свяжемся с вами в ближайшее время</div>

  </div>
</body>
</html>


