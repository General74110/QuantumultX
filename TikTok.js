#TikTok18.21

hostname = *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com

(?<=_region=)CN(?=&) url 307 JP
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
