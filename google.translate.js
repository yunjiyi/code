(function(){var l=window['gtranslateSettings']||{};l=l[document['currentScript']['getAttribute']('data-gt-widget-id')]||l;if(l['default_language']==null){console['log']('gtranslateSettings\x20is\x20not\x20properly\x20initialized');return;}var O={'af':'Afrikaans','sq':'Albanian','am':'Amharic','ar':'Arabic','hy':'Armenian','az':'Azerbaijani','eu':'Basque','be':'Belarusian','bn':'Bengali','bs':'Bosnian','bg':'Bulgarian','ca':'Catalan','ceb':'Cebuano','ny':'Chichewa','zh-CN':'Chinese\x20(Simplified)','zh-TW':'Chinese\x20(Traditional)','co':'Corsican','hr':'Croatian','cs':'Czech','da':'Danish','nl':'Dutch','en':'English','eo':'Esperanto','et':'Estonian','tl':'Filipino','fi':'Finnish','fr':'French','fy':'Frisian','gl':'Galician','ka':'Georgian','de':'German','el':'Greek','gu':'Gujarati','ht':'Haitian\x20Creole','ha':'Hausa','haw':'Hawaiian','iw':'Hebrew','hi':'Hindi','hmn':'Hmong','hu':'Hungarian','is':'Icelandic','ig':'Igbo','id':'Indonesian','ga':'Irish','it':'Italian','ja':'Japanese','jw':'Javanese','kn':'Kannada','kk':'Kazakh','km':'Khmer','ko':'Korean','ku':'Kurdish\x20(Kurmanji)','ky':'Kyrgyz','lo':'Lao','la':'Latin','lv':'Latvian','lt':'Lithuanian','lb':'Luxembourgish','mk':'Macedonian','mg':'Malagasy','ms':'Malay','ml':'Malayalam','mt':'Maltese','mi':'Maori','mr':'Marathi','mn':'Mongolian','my':'Myanmar\x20(Burmese)','ne':'Nepali','no':'Norwegian','ps':'Pashto','fa':'Persian','pl':'Polish','pt':'Portuguese','pa':'Punjabi','ro':'Romanian','ru':'Russian','sm':'Samoan','gd':'Scottish\x20Gaelic','sr':'Serbian','st':'Sesotho','sn':'Shona','sd':'Sindhi','si':'Sinhala','sk':'Slovak','sl':'Slovenian','so':'Somali','es':'Spanish','su':'Sundanese','sw':'Swahili','sv':'Swedish','tg':'Tajik','ta':'Tamil','te':'Telugu','th':'Thai','tr':'Turkish','uk':'Ukrainian','ur':'Urdu','uz':'Uzbek','vi':'Vietnamese','cy':'Welsh','xh':'Xhosa','yi':'Yiddish','yo':'Yoruba','zu':'Zulu'},v={'af':'Afrikaans','sq':'Shqip','am':'አማርኛ','ar':'العربية','hy':'Հայերեն','az':'Azərbaycan\x20dili','eu':'Euskara','be':'Беларуская\x20мова','bn':'বাংলা','bs':'Bosanski','bg':'Български','ca':'Català','ceb':'Cebuano','ny':'Chichewa','zh-CN':'简体中文','zh-TW':'繁體中文','co':'Corsu','hr':'Hrvatski','cs':'Čeština‎','da':'Dansk','nl':'Nederlands','en':'English','eo':'Esperanto','et':'Eesti','tl':'Filipino','fi':'Suomi','fr':'Français','fy':'Frysk','gl':'Galego','ka':'ქართული','de':'Deutsch','el':'Ελληνικά','gu':'ગુજરાતી','ht':'Kreyol\x20ayisyen','ha':'Harshen\x20Hausa','haw':'Ōlelo\x20Hawaiʻi','iw':'עִבְרִית','hi':'हिन्दी','hmn':'Hmong','hu':'Magyar','is':'Íslenska','ig':'Igbo','id':'Bahasa\x20Indonesia','ga':'Gaeilge','it':'Italiano','ja':'日本語','jw':'Basa\x20Jawa','kn':'ಕನ್ನಡ','kk':'Қазақ\x20тілі','km':'ភាសាខ្មែរ','ko':'한국어','ku':'كوردی‎','ky':'Кыргызча','lo':'ພາສາລາວ','la':'Latin','lv':'Latviešu\x20valoda','lt':'Lietuvių\x20kalba','lb':'Lëtzebuergesch','mk':'Македонски\x20јазик','mg':'Malagasy','ms':'Bahasa\x20Melayu','ml':'മലയാളം','mt':'Maltese','mi':'Te\x20Reo\x20Māori','mr':'मराठी','mn':'Монгол','my':'ဗမာစာ','ne':'नेपाली','no':'Norsk\x20bokmål','ps':'پښتو','fa':'فارسی','pl':'Polski','pt':'Português','pa':'ਪੰਜਾਬੀ','ro':'Română','ru':'Русский','sm':'Samoan','gd':'Gàidhlig','sr':'Српски\x20језик','st':'Sesotho','sn':'Shona','sd':'سنڌي','si':'සිංහල','sk':'Slovenčina','sl':'Slovenščina','so':'Afsoomaali','es':'Español','su':'Basa\x20Sunda','sw':'Kiswahili','sv':'Svenska','tg':'Тоҷикӣ','ta':'தமிழ்','te':'తెలుగు','th':'ไทย','tr':'Türkçe','uk':'Українська','ur':'اردو','uz':'O‘zbekcha','vi':'Tiếng\x20Việt','cy':'Cymraeg','xh':'isiXhosa','yi':'יידיש','yo':'Yorùbá','zu':'Zulu'},c=l['default_language'],G=l['languages']||Object['keys'](O),r=l['alt_flags']||{},w=l['flag_size']||0x20,e=l['flags_location']||'https://cdn.gtranslate.net/flags/svg/',M=l['globe_size']||0x3c,S=l['globe_color']||'#66aaff',s=l['url_structure']||'none',P=l['custom_domains']||{},Z=l['horizontal_position']||'inline',g=l['vertical_position']||null,i=l['native_language_names']||![],X=l['detect_browser_language']||![],j=l['wrapper_selector']||'.gtranslate_wrapper',z=l['custom_css']||'',u=i&&v||O,m='.gt_container-'+Array['from']('globe'+j)['reduce'](function(T,E){return 0x0|0x1f*T+E['charCodeAt'](0x0);},0x0)['toString'](0x24),o='<!--\x20Google\x20Translate\x20-->',d='';function F(T){if(!r[T])return e+T+'.svg';else{if(r[T]=='usa')return e+'en-us.svg';else{if(r[T]=='canada')return e+'en-ca.svg';else{if(r[T]=='brazil')return e+'pt-br.svg';else{if(r[T]=='mexico')return e+'es-mx.svg';else{if(r[T]=='argentina')return e+'es-ar.svg';else{if(r[T]=='colombia')return e+'es-co.svg';else{if(r[T]=='quebec')return e+'fr-qc.svg';else return r[T];}}}}}}}}function K(T){var E='#';if(s=='sub_directory'){var p=(document['currentScript']['getAttribute']('data-gt-orig-url')||(location['pathname']['startsWith']('/'+x+'/')&&'/'+location['pathname']['split']('/')['slice'](0x2)['join']('/')||location['pathname']))+location['search']+location['hash'];E=T==c&&location['protocol']+'//'+location['hostname']+p||location['protocol']+'//'+location['hostname']+'/'+T+p;}else{if(s=='sub_domain'){var p=(document['currentScript']['getAttribute']('data-gt-orig-url')||location['pathname'])+location['search']+location['hash'],U=document['currentScript']['getAttribute']('data-gt-orig-domain')||location['hostname'];if(typeof P=='object'&&P[T])E=T==c&&location['protocol']+'//'+U+p||location['protocol']+'//'+P[T]+p;else E=T==c&&location['protocol']+'//'+U+p||location['protocol']+'//'+T+'.'+U['replace'](/^www\./,'')+p;}}return E;}var x=document['querySelector']('html')['getAttribute']('lang')||c;if(s=='none'){var C=document['cookie']['match']('(^|;)\x20?googtrans=([^;]*)(;|$)');x=C&&C[0x2]['split']('/')[0x2]||x;}if(!u[x])x=c;o+='<span\x20class=\x22gsatelites\x22>',G['forEach'](function(T){var E=document['createElement']('a');E['href']=K(T),E['classList']['add']('nturl','gsatelite'),x==T&&E['classList']['add']('gt-current-lang'),E['setAttribute']('data-gt-lang',T),E['title']=u[T],E['style']['width']=E['style']['height']=w+'px';var p=document['createElement']('img');p['setAttribute']('data-gt-lazy-src',F(T)),E['appendChild'](p),o+=E['outerHTML'];}),o+='</span><span\x20class=\x22gglobe\x22></span>',d+='.gglobe{background-image:url(\x22data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22'+encodeURIComponent(S)+'%22%20d%3D%22M15.624%2C1.028c-7.811%2C0-14.167%2C6.355-14.167%2C14.167c0%2C7.812%2C6.356%2C14.167%2C14.167%2C14.167%20c7.812%2C0%2C14.168-6.354%2C14.168-14.167C29.792%2C7.383%2C23.436%2C1.028%2C15.624%2C1.028z%20M28.567%2C15.195c0%2C0.248-0.022%2C0.49-0.037%2C0.735%20c-0.091-0.23-0.229-0.53-0.262-0.659c-0.048-0.196-0.341-0.879-0.341-0.879s-0.293-0.39-0.488-0.488%20c-0.194-0.098-0.341-0.342-0.683-0.536c-0.342-0.196-0.487-0.293-0.779-0.293c-0.294%2C0-0.585-0.391-0.928-0.586%20c-0.342-0.194-0.39-0.097-0.39-0.097s0.39%2C0.585%2C0.39%2C0.731c0%2C0.146%2C0.438%2C0.39%2C0.879%2C0.292c0%2C0%2C0.292%2C0.537%2C0.438%2C0.683%20c0.146%2C0.146-0.049%2C0.293-0.341%2C0.488c-0.293%2C0.194-0.244%2C0.146-0.392%2C0.292c-0.146%2C0.146-0.633%2C0.392-0.78%2C0.488%20c-0.146%2C0.097-0.731%2C0.39-1.023%2C0.097c-0.143-0.141-0.099-0.438-0.195-0.634c-0.098-0.195-1.122-1.707-1.61-2.389%20c-0.085-0.12-0.293-0.49-0.438-0.585c-0.146-0.099%2C0.342-0.099%2C0.342-0.099s0-0.342-0.049-0.585%20c-0.05-0.244%2C0.049-0.585%2C0.049-0.585s-0.488%2C0.292-0.636%2C0.39c-0.145%2C0.098-0.292-0.194-0.486-0.439%20c-0.195-0.243-0.391-0.537-0.439-0.781c-0.049-0.243%2C0.244-0.341%2C0.244-0.341l0.438-0.243c0%2C0%2C0.537-0.097%2C0.879-0.049%20c0.341%2C0.049%2C0.877%2C0.098%2C0.877%2C0.098s0.146-0.342-0.049-0.488c-0.194-0.146-0.635-0.39-0.83-0.341%20c-0.194%2C0.048%2C0.097-0.244%2C0.34-0.439l-0.54-0.098c0%2C0-0.491%2C0.244-0.638%2C0.293c-0.146%2C0.048-0.4%2C0.146-0.596%2C0.39%20c-0.194%2C0.244%2C0.078%2C0.585-0.117%2C0.683c-0.194%2C0.098-0.326%2C0.146-0.473%2C0.194c-0.146%2C0.049-0.61%2C0-0.61%2C0%20c-0.504%2C0-0.181%2C0.46-0.05%2C0.623l-0.39-0.476L18.564%2C8.88c0%2C0-0.416-0.292-0.611-0.389c-0.195-0.098-0.796-0.439-0.796-0.439%20l0.042%2C0.439l0.565%2C0.572l0.05%2C0.013l0.294%2C0.39l-0.649%2C0.049V9.129c-0.612-0.148-0.452-0.3-0.521-0.347%20c-0.145-0.097-0.484-0.342-0.484-0.342s-0.574%2C0.098-0.721%2C0.147c-0.147%2C0.049-0.188%2C0.195-0.479%2C0.292%20c-0.294%2C0.098-0.426%2C0.244-0.523%2C0.39s-0.415%2C0.585-0.608%2C0.78c-0.196%2C0.196-0.558%2C0.146-0.704%2C0.146%20c-0.147%2C0-0.851-0.195-0.851-0.195V9.173c0%2C0%2C0.095-0.464%2C0.047-0.61l0.427-0.072l0.713-0.147l0.209-0.147l0.3-0.39%20c0%2C0-0.337-0.244-0.094-0.585c0.117-0.164%2C0.538-0.195%2C0.733-0.341c0.194-0.146%2C0.489-0.244%2C0.489-0.244s0.342-0.292%2C0.683-0.634%20c0%2C0%2C0.244-0.147%2C0.536-0.245c0%2C0%2C0.83%2C0.732%2C0.977%2C0.732s0.683-0.341%2C0.683-0.341s0.146-0.438%2C0.098-0.585%20c-0.049-0.146-0.293-0.634-0.293-0.634s-0.146%2C0.244-0.292%2C0.439s-0.244%2C0.439-0.244%2C0.439s-0.683-0.047-0.731-0.193%20c-0.05-0.147-0.146-0.388-0.196-0.533c-0.047-0.147-0.438-0.142-0.729-0.044c-0.294%2C0.098%2C0.047-0.526%2C0.047-0.526%20s0.294-0.368%2C0.488-0.368s0.635-0.25%2C0.828-0.298c0.196-0.049%2C0.783-0.272%2C1.025-0.272c0.244%2C0%2C0.537%2C0.105%2C0.684%2C0.105%20s0.731%2C0%2C0.731%2C0l1.023-0.082c0%2C0%2C0.879%2C0.325%2C0.585%2C0.521c0%2C0%2C0.343%2C0.211%2C0.489%2C0.357c0.137%2C0.138%2C0.491-0.127%2C0.694-0.24%20C26.127%2C6.525%2C28.567%2C10.576%2C28.567%2C15.195z%20M5.296%2C7.563c0%2C0.195-0.266%2C0.242%2C0%2C0.732c0.34%2C0.634%2C0.048%2C0.927%2C0.048%2C0.927%20s-0.83%2C0.585-0.976%2C0.683c-0.146%2C0.098-0.536%2C0.634-0.293%2C0.487c0.244-0.146%2C0.536-0.292%2C0.293%2C0.098%20c-0.244%2C0.391-0.683%2C1.024-0.78%2C1.269s-0.585%2C0.829-0.585%2C1.122c0%2C0.293-0.195%2C0.879-0.146%2C1.123%20c0.033%2C0.17-0.075%2C0.671-0.16%2C0.877c0.066-2.742%2C0.989-5.269%2C2.513-7.336C5.26%2C7.55%2C5.296%2C7.563%2C5.296%2C7.563z%20M6.863%2C5.693%20c1.193-1.101%2C2.591-1.979%2C4.133-2.573c-0.152%2C0.195-0.336%2C0.395-0.336%2C0.395s-0.341-0.001-0.976%2C0.683%20C9.051%2C4.881%2C9.197%2C4.686%2C9.051%2C4.88S8.953%2C5.124%2C8.611%2C5.369C8.271%2C5.612%2C8.124%2C5.905%2C8.124%2C5.905L7.587%2C6.1L7.149%2C5.905%20c0%2C0-0.392%2C0.147-0.343-0.049C6.82%2C5.804%2C6.841%2C5.75%2C6.863%2C5.693z%20M12.709%2C6.831l-0.194-0.292L12.709%2C6.1l0.47%2C0.188V5.417%20l0.449-0.243l0.373%2C0.536l0.574%2C0.635l-0.381%2C0.292l-1.016%2C0.195V6.315L12.709%2C6.831z%20M19.051%2C11.416%20c0.114-0.09%2C0.487%2C0.146%2C0.487%2C0.146s1.219%2C0.244%2C1.414%2C0.39c0.196%2C0.147%2C0.537%2C0.245%2C0.635%2C0.392%20c0.098%2C0.146%2C0.438%2C0.585%2C0.486%2C0.731c0.05%2C0.146%2C0.294%2C0.684%2C0.343%2C0.878c0.049%2C0.195%2C0.195%2C0.683%2C0.341%2C0.927%20c0.146%2C0.245%2C0.976%2C1.317%2C1.268%2C1.805l0.88-0.146c0%2C0-0.099%2C0.438-0.196%2C0.585c-0.097%2C0.146-0.39%2C0.536-0.536%2C0.731%20c-0.147%2C0.195-0.341%2C0.488-0.634%2C0.731c-0.292%2C0.243-0.294%2C0.487-0.439%2C0.683c-0.146%2C0.195-0.342%2C0.634-0.342%2C0.634%20s0.098%2C0.976%2C0.146%2C1.171s-0.341%2C0.731-0.341%2C0.731l-0.44%2C0.44l-0.588%2C0.779l0.048%2C0.731c0%2C0-0.444%2C0.343-0.689%2C0.537%20c-0.242%2C0.194-0.204%2C0.341-0.399%2C0.537c-0.194%2C0.194-0.957%2C0.536-1.152%2C0.585s-1.271%2C0.195-1.271%2C0.195v-0.438l-0.022-0.488%20c0%2C0-0.148-0.585-0.295-0.78s-0.083-0.489-0.327-0.732c-0.244-0.244-0.334-0.438-0.383-0.586c-0.049-0.146%2C0.053-0.584%2C0.053-0.584%20s0.197-0.537%2C0.294-0.732c0.098-0.195%2C0.001-0.487-0.097-0.683s-0.145-0.684-0.145-0.829c0-0.146-0.392-0.391-0.538-0.537%20c-0.146-0.146-0.097-0.342-0.097-0.535c0-0.197-0.146-0.635-0.098-0.977c0.049-0.341-0.438-0.098-0.731%2C0%20c-0.293%2C0.098-0.487-0.098-0.487-0.391s-0.536-0.048-0.878%2C0.146c-0.343%2C0.195-0.732%2C0.195-1.124%2C0.342%20c-0.389%2C0.146-0.583-0.146-0.583-0.146s-0.343-0.292-0.585-0.439c-0.245-0.146-0.489-0.438-0.685-0.682%20c-0.194-0.245-0.683-0.977-0.73-1.268c-0.049-0.294%2C0-0.49%2C0-0.831s0-0.536%2C0.048-0.78c0.049-0.244%2C0.195-0.537%2C0.342-0.781%20c0.146-0.244%2C0.683-0.536%2C0.828-0.634c0.146-0.097%2C0.488-0.389%2C0.488-0.585c0-0.195%2C0.196-0.292%2C0.292-0.488%20c0.099-0.195%2C0.44-0.682%2C0.879-0.487c0%2C0%2C0.389-0.048%2C0.535-0.097s0.536-0.194%2C0.729-0.292c0.195-0.098%2C0.681-0.144%2C0.681-0.144%20s0.384%2C0.153%2C0.53%2C0.153s0.622-0.085%2C0.622-0.085s0.22%2C0.707%2C0.22%2C0.854s0.146%2C0.292%2C0.391%2C0.39%20C17.44%2C11.562%2C18.563%2C11.807%2C19.051%2C11.416z%20M24.66%2C20.977c0%2C0.146-0.049%2C0.537-0.098%2C0.732c-0.051%2C0.195-0.147%2C0.537-0.195%2C0.73%20c-0.049%2C0.196-0.293%2C0.586-0.438%2C0.684c-0.146%2C0.098-0.391%2C0.391-0.536%2C0.439c-0.146%2C0.049-0.245-0.342-0.196-0.537%20c0.05-0.195%2C0.293-0.731%2C0.293-0.731s0.049-0.292%2C0.097-0.488c0.05-0.194%2C0.635-0.438%2C0.635-0.438l0.391-0.732%20C24.611%2C20.635%2C24.66%2C20.832%2C24.66%2C20.977z%20M3.015%2C18.071c0.063%2C0.016%2C0.153%2C0.062%2C0.28%2C0.175c0.184%2C0.16%2C0.293%2C0.242%2C0.537%2C0.341%20c0.243%2C0.099%2C0.341%2C0.243%2C0.634%2C0.39c0.293%2C0.147%2C0.196%2C0.05%2C0.585%2C0.488c0.391%2C0.438%2C0.342%2C0.438%2C0.439%2C0.683%20s0.244%2C0.487%2C0.342%2C0.635c0.098%2C0.146%2C0.39%2C0.243%2C0.536%2C0.341s0.39%2C0.195%2C0.536%2C0.195c0.147%2C0%2C0.586%2C0.439%2C0.83%2C0.487%20c0.244%2C0.05%2C0.244%2C0.538%2C0.244%2C0.538l-0.244%2C0.682l-0.196%2C0.731l0.196%2C0.585c0%2C0-0.294%2C0.245-0.487%2C0.245%20c-0.18%2C0-0.241%2C0.114-0.438%2C0.06C4.949%2C22.91%2C3.6%2C20.638%2C3.015%2C18.071z%22%2F%3E%3C%2Fsvg%3E\x22);opacity:0.8;border-radius:50%;height:'+M+'px;width:'+M+'px;cursor:pointer;display:block;transition:all\x200.3s}',d+='.gglobe:hover{opacity:1;transform:scale(1.2)}',d+='.gsatelite{text-decoration:none;position:absolute;z-index:100000;display:none;line-height:0}',d+='.gsatelite\x20img{border-radius:50%;opacity:0.9;transition:all\x200.3s;width:'+w+'px;height:'+w+'px;object-fit:cover}',d+='.gsatelite:hover\x20img{opacity:1;transform:scale(1.3)}',d+='.gsatelite.gt-current-lang\x20img{opacity:1;box-shadow:rgba(0,0,0,0.5)\x200\x200\x2035px\x2020px;transform:scale(1.3)}';s=='none'&&(o+='<div\x20id=\x22google_translate_element2\x22></div>',d+='div.skiptranslate,#google_translate_element2{display:none!important}',d+='body{top:0!important}',d+='font\x20font{background-color:transparent!important;box-shadow:none!important;position:initial!important}');if(Z!='inline')o='<div\x20class=\x22gt_switcher_wrapper\x22\x20style=\x22position:fixed;'+g+':15px;'+Z+':15px;z-index:999999;\x22>'+o+'</div>';var V=document['createElement']('style');V['classList']['add']('gtranslate_css'),V['textContent']=d,document['head']['appendChild'](V),document['querySelectorAll'](j)['forEach'](function(T){T['classList']['add'](m['substring'](0x1)),T['innerHTML']+=o;});var D=![];function t(T){D=!![],T['querySelectorAll']('.gsatelite\x20img:not([src])')['forEach'](function(a){a['setAttribute']('src',a['getAttribute']('data-gt-lazy-src'));});var E=T['querySelector']('.gglobe'),p=T['querySelector']('.gsatelites');if(E['parentNode']['style']['position']!='fixed')E['parentNode']['style']['position']='relative';var U=p['parentNode']['style']['position']=='fixed'&&{'top':p['offsetParent']['offsetTop'],'left':p['offsetParent']['offsetLeft']}||{'top':p['getBoundingClientRect']()['top'],'left':p['getBoundingClientRect']()['left']},W={'top':E['offsetTop']+E['clientHeight']/0x2,'left':E['offsetLeft']+E['clientWidth']/0x2},I=G['length'],H=1.375*M,N=H,B=1.4*w,R=0x0,A=Math['PI'],k=0x0,Q=0.75*A,h=Math['floor'](0x2*A*N/B),Y=0x0,y=0x2*A/h;T['querySelectorAll']('.gsatelite')['forEach'](function(a,q){do{Y>=h&&(R++,N+=H,Y=0x0,h=Math['floor'](0x2*A*N/B),y=0x2*A/h);Q+=y;var J=W['left']+Math['cos'](Q)*N-w/0x2,n=W['top']+Math['sin'](Q)*N-w/0x2,l0=window['innerHeight'],l1=Math['floor'](document['body']['getBoundingClientRect']()['width']),l2=U['top']+n>=0x0&&U['top']+n<l0,l3=U['top']+n+w>0x0&&U['top']+n+w<=l0,l4=U['left']+J>=0x0&&U['left']+J<l1,l5=U['left']+J+w>0x0&&U['left']+J+w<=l1,l6=l2&&l3,l7=l4&&l5;if(l6&&l7)break;k++,Y++;}while(k-q<0xa*I);a['style']['left']=J+'px',a['style']['top']=n+'px',k++,Y++,setTimeout(function(){a['style']['display']='inline';},(q+0x1)*0xa);});}function b(){D=![];var T=document['querySelectorAll']('.gsatelite');T['forEach'](function(E,p){setTimeout(function(){E['style']['display']='none';},(T['length']-p-0x1)*0xa);});}document['addEventListener']('click',function(){if(D)b();}),document['querySelectorAll'](m+'\x20.gglobe')['forEach'](function(T){T['addEventListener']('click',function(E){E['stopPropagation']();if(D)b();else t(T['parentNode']);}),T['addEventListener']('pointerenter',function(E){E['target']['parentNode']['querySelectorAll']('.gsatelite\x20img:not([src])')['forEach'](function(p){p['setAttribute']('src',p['getAttribute']('data-gt-lazy-src'));});});});if(s=='none'){function T(){var U=document['cookie']['match']('(^|;)\x20?googtrans=([^;]*)(;|$)');return U?U[0x2]['split']('/')[0x2]:null;}function E(U,W){try{if(document['createEventObject']){var I=document['createEventObject']();U['fireEvent']('on'+W,I);}else{var I=document['createEvent']('HTMLEvents');I['initEvent'](W,!![],!![]),U['dispatchEvent'](I);}}catch(H){}}function p(){!window['gt_translate_script']&&(window['gt_translate_script']=document['createElement']('script'),gt_translate_script['src']='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2',document['body']['appendChild'](gt_translate_script));}window['doGTranslate']=function(U){if(U['value'])U=U['value'];if(U=='')return;var W=U['split']('|')[0x1];if(T()==null&&W==U['split']('|')[0x0])return;var I,H=document['getElementsByTagName']('select');for(var N=0x0;N<H['length'];N++)if(H[N]['className']['indexOf']('goog-te-combo')!=-0x1){I=H[N];break;}document['getElementById']('google_translate_element2')==null||document['getElementById']('google_translate_element2')['innerHTML']['length']==0x0||I['length']==0x0||I['innerHTML']['length']==0x0?setTimeout(function(){doGTranslate(U);},0x1f4):(I['value']=W,E(I,'change'),E(I,'change'));},window['googleTranslateElementInit2']=function(){new google['translate']['TranslateElement']({'pageLanguage':c,'autoDisplay':![]},'google_translate_element2');};if(x!=c)p();else document['querySelectorAll'](m)['forEach'](function(U){U['addEventListener']('pointerenter',p);});document['querySelectorAll'](m+'\x20a[data-gt-lang]')['forEach'](function(U){U['addEventListener']('click',function(W){W['preventDefault'](),document['querySelectorAll'](m+'\x20a.gt-current-lang')['forEach'](function(I){I['classList']['remove']('gt-current-lang');}),U['classList']['add']('gt-current-lang'),doGTranslate(c+'|'+U['getAttribute']('data-gt-lang'));});});}if(X&&window['localStorage']&&window['navigator']&&localStorage['getItem']('gt_autoswitch')==null&&!/bot|spider|slurp|facebook/i['test'](navigator['userAgent'])){var L=(navigator['language']||navigator['userLanguage'])['toLowerCase']();switch(L){case'zh':case'zh-cn':var f='zh-CN';break;case'zh-tw':case'zh-hk':var f='zh-TW';break;case'he':var f='iw';break;default:var f=L['substr'](0x0,0x2);break;}if(x==c&&f!=c&&G['includes'](f)){if(s=='none')load_tlib(),window['gt_translate_script']['onload']=function(){doGTranslate(c+'|'+f),document['querySelectorAll'](m+'\x20a.gt-current-lang')['forEach'](function(U){U['classList']['remove']('gt-current-lang');}),document['querySelector'](m+'\x20a[data-gt-lang=\x22'+f+'\x22]')['classList']['add']('gt-current-lang');};else document['querySelectorAll'](m+'\x20a[data-gt-lang=\x22'+f+'\x22]')['forEach'](function(U){location['href']=U['href'];});}localStorage['setItem']('gt_autoswitch',0x1);}}());