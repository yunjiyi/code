(function(){var h=window['gtranslateSettings']||{};h=h[document['currentScript']['getAttribute']('data-gt-widget-id')]||h;if(h['default_language']==null){console['log']('gtranslateSettings\x20is\x20not\x20properly\x20initialized');return;}var O={'af':'Afrikaans','sq':'Albanian','am':'Amharic','ar':'Arabic','hy':'Armenian','az':'Azerbaijani','eu':'Basque','be':'Belarusian','bn':'Bengali','bs':'Bosnian','bg':'Bulgarian','ca':'Catalan','ceb':'Cebuano','ny':'Chichewa','zh-CN':'Chinese\x20(Simplified)','zh-TW':'Chinese\x20(Traditional)','co':'Corsican','hr':'Croatian','cs':'Czech','da':'Danish','nl':'Dutch','en':'English','eo':'Esperanto','et':'Estonian','tl':'Filipino','fi':'Finnish','fr':'French','fy':'Frisian','gl':'Galician','ka':'Georgian','de':'German','el':'Greek','gu':'Gujarati','ht':'Haitian\x20Creole','ha':'Hausa','haw':'Hawaiian','iw':'Hebrew','hi':'Hindi','hmn':'Hmong','hu':'Hungarian','is':'Icelandic','ig':'Igbo','id':'Indonesian','ga':'Irish','it':'Italian','ja':'Japanese','jw':'Javanese','kn':'Kannada','kk':'Kazakh','km':'Khmer','ko':'Korean','ku':'Kurdish\x20(Kurmanji)','ky':'Kyrgyz','lo':'Lao','la':'Latin','lv':'Latvian','lt':'Lithuanian','lb':'Luxembourgish','mk':'Macedonian','mg':'Malagasy','ms':'Malay','ml':'Malayalam','mt':'Maltese','mi':'Maori','mr':'Marathi','mn':'Mongolian','my':'Myanmar\x20(Burmese)','ne':'Nepali','no':'Norwegian','ps':'Pashto','fa':'Persian','pl':'Polish','pt':'Portuguese','pa':'Punjabi','ro':'Romanian','ru':'Russian','sm':'Samoan','gd':'Scottish\x20Gaelic','sr':'Serbian','st':'Sesotho','sn':'Shona','sd':'Sindhi','si':'Sinhala','sk':'Slovak','sl':'Slovenian','so':'Somali','es':'Spanish','su':'Sundanese','sw':'Swahili','sv':'Swedish','tg':'Tajik','ta':'Tamil','te':'Telugu','th':'Thai','tr':'Turkish','uk':'Ukrainian','ur':'Urdu','uz':'Uzbek','vi':'Vietnamese','cy':'Welsh','xh':'Xhosa','yi':'Yiddish','yo':'Yoruba','zu':'Zulu'},H={'af':'Afrikaans','sq':'Shqip','am':'አማርኛ','ar':'العربية','hy':'Հայերեն','az':'Azərbaycan\x20dili','eu':'Euskara','be':'Беларуская\x20мова','bn':'বাংলা','bs':'Bosanski','bg':'Български','ca':'Català','ceb':'Cebuano','ny':'Chichewa','zh-CN':'简体中文','zh-TW':'繁體中文','co':'Corsu','hr':'Hrvatski','cs':'Čeština‎','da':'Dansk','nl':'Nederlands','en':'English','eo':'Esperanto','et':'Eesti','tl':'Filipino','fi':'Suomi','fr':'Français','fy':'Frysk','gl':'Galego','ka':'ქართული','de':'Deutsch','el':'Ελληνικά','gu':'ગુજરાતી','ht':'Kreyol\x20ayisyen','ha':'Harshen\x20Hausa','haw':'Ōlelo\x20Hawaiʻi','iw':'עִבְרִית','hi':'हिन्दी','hmn':'Hmong','hu':'Magyar','is':'Íslenska','ig':'Igbo','id':'Bahasa\x20Indonesia','ga':'Gaeilge','it':'Italiano','ja':'日本語','jw':'Basa\x20Jawa','kn':'ಕನ್ನಡ','kk':'Қазақ\x20тілі','km':'ភាសាខ្មែរ','ko':'한국어','ku':'كوردی‎','ky':'Кыргызча','lo':'ພາສາລາວ','la':'Latin','lv':'Latviešu\x20valoda','lt':'Lietuvių\x20kalba','lb':'Lëtzebuergesch','mk':'Македонски\x20јазик','mg':'Malagasy','ms':'Bahasa\x20Melayu','ml':'മലയാളം','mt':'Maltese','mi':'Te\x20Reo\x20Māori','mr':'मराठी','mn':'Монгол','my':'ဗမာစာ','ne':'नेपाली','no':'Norsk\x20bokmål','ps':'پښتو','fa':'فارسی','pl':'Polski','pt':'Português','pa':'ਪੰਜਾਬੀ','ro':'Română','ru':'Русский','sm':'Samoan','gd':'Gàidhlig','sr':'Српски\x20језик','st':'Sesotho','sn':'Shona','sd':'سنڌي','si':'සිංහල','sk':'Slovenčina','sl':'Slovenščina','so':'Afsoomaali','es':'Español','su':'Basa\x20Sunda','sw':'Kiswahili','sv':'Svenska','tg':'Тоҷикӣ','ta':'தமிழ்','te':'తెలుగు','th':'ไทย','tr':'Türkçe','uk':'Українська','ur':'اردو','uz':'O‘zbekcha','vi':'Tiếng\x20Việt','cy':'Cymraeg','xh':'isiXhosa','yi':'יידיש','yo':'Yorùbá','zu':'Zulu'},Q=h['default_language'],D=h['languages']||Object['keys'](O),i=h['alt_flags']||{},L=h['flag_size']||0x20,y=h['flags_location']||'https://cdn.gtranslate.net/flags/svg/',X=h['globe_size']||0x3c,p=h['globe_color']||'#66aaff',a=h['url_structure']||'none',r=h['custom_domains']||{},s=h['horizontal_position']||'inline',w=h['vertical_position']||null,u=h['native_language_names']||![],N=h['detect_browser_language']||![],k=h['wrapper_selector']||'.gtranslate_wrapper',V=h['custom_css']||'',E=u&&H||O,C='.gt_container-'+Array['from']('globe'+k)['reduce'](function(J,g){return 0x0|0x1f*J+g['charCodeAt'](0x0);},0x0)['toString'](0x24),d='<!--\x20Google\x20Translate\x20-->',K='';function m(J){if(!i[J])return y+J+'.svg';else{if(i[J]=='usa')return y+'en-us.svg';else{if(i[J]=='canada')return y+'en-ca.svg';else{if(i[J]=='brazil')return y+'pt-br.svg';else{if(i[J]=='mexico')return y+'es-mx.svg';else{if(i[J]=='argentina')return y+'es-ar.svg';else{if(i[J]=='colombia')return y+'es-co.svg';else{if(i[J]=='quebec')return y+'fr-qc.svg';else return i[J];}}}}}}}}function U(J){var g='#';if(a=='sub_directory'){var z=(document['currentScript']['getAttribute']('data-gt-orig-url')||(location['pathname']['startsWith']('/'+o+'/')&&'/'+location['pathname']['split']('/')['slice'](0x2)['join']('/')||location['pathname']))+location['search']+location['hash'];g=J==Q&&location['protocol']+'//'+location['hostname']+z||location['protocol']+'//'+location['hostname']+'/'+J+z;}else{if(a=='sub_domain'){var z=(document['currentScript']['getAttribute']('data-gt-orig-url')||location['pathname'])+location['search']+location['hash'],A=document['currentScript']['getAttribute']('data-gt-orig-domain')||location['hostname'];if(typeof r=='object'&&r[J])g=J==Q&&location['protocol']+'//'+A+z||location['protocol']+'//'+r[J]+z;else g=J==Q&&location['protocol']+'//'+A+z||location['protocol']+'//'+J+'.'+A['replace'](/^www\./,'')+z;}}return g;}var o=document['querySelector']('html')['getAttribute']('lang')||Q;if(a=='none'){var R=document['cookie']['match']('(^|;)\x20?googtrans=([^;]*)(;|$)');o=R&&R[0x2]['split']('/')[0x2]||o;}if(!E[o])o=Q;d+='<span\x20class=\x22gsatelites\x22>',D['forEach'](function(J){var g=document['createElement']('a');g['href']=U(J),g['classList']['add']('nturl','gsatelite'),o==J&&g['classList']['add']('gt-current-lang'),g['setAttribute']('data-gt-lang',J),g['title']=E[J],g['style']['width']=g['style']['height']=L+'px';var z=document['createElement']('img');z['setAttribute']('data-gt-lazy-src',m(J)),g['appendChild'](z),d+=g['outerHTML'];}),d+='</span><span\x20class=\x22gglobe\x22></span>',K+='.gglobe{background-image:url(\x22data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill%3D%22'+encodeURIComponent(p)+'%22%20d%3D%22M15.624%2C1.028c-7.811%2C0-14.167%2C6.355-14.167%2C14.167c0%2C7.812%2C6.356%2C14.167%2C14.167%2C14.167%20c7.812%2C0%2C14.168-6.354%2C14.168-14.167C29.792%2C7.383%2C23.436%2C1.028%2C15.624%2C1.028z%20M28.567%2C15.195c0%2C0.248-0.022%2C0.49-0.037%2C0.735%20c-0.091-0.23-0.229-0.53-0.262-0.659c-0.048-0.196-0.341-0.879-0.341-0.879s-0.293-0.39-0.488-0.488%20c-0.194-0.098-0.341-0.342-0.683-0.536c-0.342-0.196-0.487-0.293-0.779-0.293c-0.294%2C0-0.585-0.391-0.928-0.586%20c-0.342-0.194-0.39-0.097-0.39-0.097s0.39%2C0.585%2C0.39%2C0.731c0%2C0.146%2C0.438%2C0.39%2C0.879%2C0.292c0%2C0%2C0.292%2C0.537%2C0.438%2C0.683%20c0.146%2C0.146-0.049%2C0.293-0.341%2C0.488c-0.293%2C0.194-0.244%2C0.146-0.392%2C0.292c-0.146%2C0.146-0.633%2C0.392-0.78%2C0.488%20c-0.146%2C0.097-0.731%2C0.39-1.023%2C0.097c-0.143-0.141-0.099-0.438-0.195-0.634c-0.098-0.195-1.122-1.707-1.61-2.389%20c-0.085-0.12-0.293-0.49-0.438-0.585c-0.146-0.099%2C0.342-0.099%2C0.342-0.099s0-0.342-0.049-0.585%20c-0.05-0.244%2C0.049-0.585%2C0.049-0.585s-0.488%2C0.292-0.636%2C0.39c-0.145%2C0.098-0.292-0.194-0.486-0.439%20c-0.195-0.243-0.391-0.537-0.439-0.781c-0.049-0.243%2C0.244-0.341%2C0.244-0.341l0.438-0.243c0%2C0%2C0.537-0.097%2C0.879-0.049%20c0.341%2C0.049%2C0.877%2C0.098%2C0.877%2C0.098s0.146-0.342-0.049-0.488c-0.194-0.146-0.635-0.39-0.83-0.341%20c-0.194%2C0.048%2C0.097-0.244%2C0.34-0.439l-0.54-0.098c0%2C0-0.491%2C0.244-0.638%2C0.293c-0.146%2C0.048-0.4%2C0.146-0.596%2C0.39%20c-0.194%2C0.244%2C0.078%2C0.585-0.117%2C0.683c-0.194%2C0.098-0.326%2C0.146-0.473%2C0.194c-0.146%2C0.049-0.61%2C0-0.61%2C0%20c-0.504%2C0-0.181%2C0.46-0.05%2C0.623l-0.39-0.476L18.564%2C8.88c0%2C0-0.416-0.292-0.611-0.389c-0.195-0.098-0.796-0.439-0.796-0.439%20l0.042%2C0.439l0.565%2C0.572l0.05%2C0.013l0.294%2C0.39l-0.649%2C0.049V9.129c-0.612-0.148-0.452-0.3-0.521-0.347%20c-0.145-0.097-0.484-0.342-0.484-0.342s-0.574%2C0.098-0.721%2C0.147c-0.147%2C0.049-0.188%2C0.195-0.479%2C0.292%20c-0.294%2C0.098-0.426%2C0.244-0.523%2C0.39s-0.415%2C0.585-0.608%2C0.78c-0.196%2C0.196-0.558%2C0.146-0.704%2C0.146%20c-0.147%2C0-0.851-0.195-0.851-0.195V9.173c0%2C0%2C0.095-0.464%2C0.047-0.61l0.427-0.072l0.713-0.147l0.209-0.147l0.3-0.39%20c0%2C0-0.337-0.244-0.094-0.585c0.117-0.164%2C0.538-0.195%2C0.733-0.341c0.194-0.146%2C0.489-0.244%2C0.489-0.244s0.342-0.292%2C0.683-0.634%20c0%2C0%2C0.244-0.147%2C0.536-0.245c0%2C0%2C0.83%2C0.732%2C0.977%2C0.732s0.683-0.341%2C0.683-0.341s0.146-0.438%2C0.098-0.585%20c-0.049-0.146-0.293-0.634-0.293-0.634s-0.146%2C0.244-0.292%2C0.439s-0.244%2C0.439-0.244%2C0.439s-0.683-0.047-0.731-0.193%20c-0.05-0.147-0.146-0.388-0.196-0.533c-0.047-0.147-0.438-0.142-0.729-0.044c-0.294%2C0.098%2C0.047-0.526%2C0.047-0.526%20s0.294-0.368%2C0.488-0.368s0.635-0.25%2C0.828-0.298c0.196-0.049%2C0.783-0.272%2C1.025-0.272c0.244%2C0%2C0.537%2C0.105%2C0.684%2C0.105%20s0.731%2C0%2C0.731%2C0l1.023-0.082c0%2C0%2C0.879%2C0.325%2C0.585%2C0.521c0%2C0%2C0.343%2C0.211%2C0.489%2C0.357c0.137%2C0.138%2C0.491-0.127%2C0.694-0.24%20C26.127%2C6.525%2C28.567%2C10.576%2C28.567%2C15.195z%20M5.296%2C7.563c0%2C0.195-0.266%2C0.242%2C0%2C0.732c0.34%2C0.634%2C0.048%2C0.927%2C0.048%2C0.927%20s-0.83%2C0.585-0.976%2C0.683c-0.146%2C0.098-0.536%2C0.634-0.293%2C0.487c0.244-0.146%2C0.536-0.292%2C0.293%2C0.098%20c-0.244%2C0.391-0.683%2C1.024-0.78%2C1.269s-0.585%2C0.829-0.585%2C1.122c0%2C0.293-0.195%2C0.879-0.146%2C1.123%20c0.033%2C0.17-0.075%2C0.671-0.16%2C0.877c0.066-2.742%2C0.989-5.269%2C2.513-7.336C5.26%2C7.55%2C5.296%2C7.563%2C5.296%2C7.563z%20M6.863%2C5.693%20c1.193-1.101%2C2.591-1.979%2C4.133-2.573c-0.152%2C0.195-0.336%2C0.395-0.336%2C0.395s-0.341-0.001-0.976%2C0.683%20C9.051%2C4.881%2C9.197%2C4.686%2C9.051%2C4.88S8.953%2C5.124%2C8.611%2C5.369C8.271%2C5.612%2C8.124%2C5.905%2C8.124%2C5.905L7.587%2C6.1L7.149%2C5.905%20c0%2C0-0.392%2C0.147-0.343-0.049C6.82%2C5.804%2C6.841%2C5.75%2C6.863%2C5.693z%20M12.709%2C6.831l-0.194-0.292L12.709%2C6.1l0.47%2C0.188V5.417%20l0.449-0.243l0.373%2C0.536l0.574%2C0.635l-0.381%2C0.292l-1.016%2C0.195V6.315L12.709%2C6.831z%20M19.051%2C11.416%20c0.114-0.09%2C0.487%2C0.146%2C0.487%2C0.146s1.219%2C0.244%2C1.414%2C0.39c0.196%2C0.147%2C0.537%2C0.245%2C0.635%2C0.392%20c0.098%2C0.146%2C0.438%2C0.585%2C0.486%2C0.731c0.05%2C0.146%2C0.294%2C0.684%2C0.343%2C0.878c0.049%2C0.195%2C0.195%2C0.683%2C0.341%2C0.927%20c0.146%2C0.245%2C0.976%2C1.317%2C1.268%2C1.805l0.88-0.146c0%2C0-0.099%2C0.438-0.196%2C0.585c-0.097%2C0.146-0.39%2C0.536-0.536%2C0.731%20c-0.147%2C0.195-0.341%2C0.488-0.634%2C0.731c-0.292%2C0.243-0.294%2C0.487-0.439%2C0.683c-0.146%2C0.195-0.342%2C0.634-0.342%2C0.634%20s0.098%2C0.976%2C0.146%2C1.171s-0.341%2C0.731-0.341%2C0.731l-0.44%2C0.44l-0.588%2C0.779l0.048%2C0.731c0%2C0-0.444%2C0.343-0.689%2C0.537%20c-0.242%2C0.194-0.204%2C0.341-0.399%2C0.537c-0.194%2C0.194-0.957%2C0.536-1.152%2C0.585s-1.271%2C0.195-1.271%2C0.195v-0.438l-0.022-0.488%20c0%2C0-0.148-0.585-0.295-0.78s-0.083-0.489-0.327-0.732c-0.244-0.244-0.334-0.438-0.383-0.586c-0.049-0.146%2C0.053-0.584%2C0.053-0.584%20s0.197-0.537%2C0.294-0.732c0.098-0.195%2C0.001-0.487-0.097-0.683s-0.145-0.684-0.145-0.829c0-0.146-0.392-0.391-0.538-0.537%20c-0.146-0.146-0.097-0.342-0.097-0.535c0-0.197-0.146-0.635-0.098-0.977c0.049-0.341-0.438-0.098-0.731%2C0%20c-0.293%2C0.098-0.487-0.098-0.487-0.391s-0.536-0.048-0.878%2C0.146c-0.343%2C0.195-0.732%2C0.195-1.124%2C0.342%20c-0.389%2C0.146-0.583-0.146-0.583-0.146s-0.343-0.292-0.585-0.439c-0.245-0.146-0.489-0.438-0.685-0.682%20c-0.194-0.245-0.683-0.977-0.73-1.268c-0.049-0.294%2C0-0.49%2C0-0.831s0-0.536%2C0.048-0.78c0.049-0.244%2C0.195-0.537%2C0.342-0.781%20c0.146-0.244%2C0.683-0.536%2C0.828-0.634c0.146-0.097%2C0.488-0.389%2C0.488-0.585c0-0.195%2C0.196-0.292%2C0.292-0.488%20c0.099-0.195%2C0.44-0.682%2C0.879-0.487c0%2C0%2C0.389-0.048%2C0.535-0.097s0.536-0.194%2C0.729-0.292c0.195-0.098%2C0.681-0.144%2C0.681-0.144%20s0.384%2C0.153%2C0.53%2C0.153s0.622-0.085%2C0.622-0.085s0.22%2C0.707%2C0.22%2C0.854s0.146%2C0.292%2C0.391%2C0.39%20C17.44%2C11.562%2C18.563%2C11.807%2C19.051%2C11.416z%20M24.66%2C20.977c0%2C0.146-0.049%2C0.537-0.098%2C0.732c-0.051%2C0.195-0.147%2C0.537-0.195%2C0.73%20c-0.049%2C0.196-0.293%2C0.586-0.438%2C0.684c-0.146%2C0.098-0.391%2C0.391-0.536%2C0.439c-0.146%2C0.049-0.245-0.342-0.196-0.537%20c0.05-0.195%2C0.293-0.731%2C0.293-0.731s0.049-0.292%2C0.097-0.488c0.05-0.194%2C0.635-0.438%2C0.635-0.438l0.391-0.732%20C24.611%2C20.635%2C24.66%2C20.832%2C24.66%2C20.977z%20M3.015%2C18.071c0.063%2C0.016%2C0.153%2C0.062%2C0.28%2C0.175c0.184%2C0.16%2C0.293%2C0.242%2C0.537%2C0.341%20c0.243%2C0.099%2C0.341%2C0.243%2C0.634%2C0.39c0.293%2C0.147%2C0.196%2C0.05%2C0.585%2C0.488c0.391%2C0.438%2C0.342%2C0.438%2C0.439%2C0.683%20s0.244%2C0.487%2C0.342%2C0.635c0.098%2C0.146%2C0.39%2C0.243%2C0.536%2C0.341s0.39%2C0.195%2C0.536%2C0.195c0.147%2C0%2C0.586%2C0.439%2C0.83%2C0.487%20c0.244%2C0.05%2C0.244%2C0.538%2C0.244%2C0.538l-0.244%2C0.682l-0.196%2C0.731l0.196%2C0.585c0%2C0-0.294%2C0.245-0.487%2C0.245%20c-0.18%2C0-0.241%2C0.114-0.438%2C0.06C4.949%2C22.91%2C3.6%2C20.638%2C3.015%2C18.071z%22%2F%3E%3C%2Fsvg%3E\x22);opacity:0.8;border-radius:50%;height:'+X+'px;width:'+X+'px;cursor:pointer;display:block;transition:all\x200.3s}',K+='.gglobe:hover{opacity:1;transform:scale(1.2)}',K+='.gsatelite{text-decoration:none;position:absolute;z-index:100000;display:none;line-height:0}',K+='.gsatelite\x20img{border-radius:50%;opacity:0.9;transition:all\x200.3s;width:'+L+'px;height:'+L+'px;object-fit:cover}',K+='.gsatelite:hover\x20img{opacity:1;transform:scale(1.3)}',K+='.gsatelite.gt-current-lang\x20img{opacity:1;box-shadow:rgba(0,0,0,0.5)\x200\x200\x2035px\x2020px;transform:scale(1.3)}';a=='none'&&(d+='<div\x20id=\x22google_translate_element2\x22></div>',K+='div.skiptranslate,#google_translate_element2{display:none!important}',K+='body{top:0!important}',K+='font\x20font{background-color:transparent!important;box-shadow:none!important;position:initial!important}');if(s!='inline')d='<div\x20class=\x22gt_switcher_wrapper\x22\x20style=\x22position:fixed;'+w+':15px;'+s+':15px;z-index:999999;\x22>'+d+'</div>';var G=document['createElement']('style');G['classList']['add']('gtranslate_css'),G['textContent']=K,document['head']['appendChild'](G),document['querySelectorAll'](k)['forEach'](function(J){J['classList']['add'](C['substring'](0x1)),J['innerHTML']+=d;});var B=![];function T(J){B=!![],J['querySelectorAll']('.gsatelite\x20img:not([src])')['forEach'](function(S){S['setAttribute']('src',S['getAttribute']('data-gt-lazy-src'));});var g=J['querySelector']('.gglobe'),z=J['querySelector']('.gsatelites');if(g['parentNode']['style']['position']!='fixed')g['parentNode']['style']['position']='relative';var A=z['parentNode']['style']['position']=='fixed'&&{'top':z['offsetParent']['offsetTop'],'left':z['offsetParent']['offsetLeft']}||{'top':z['getBoundingClientRect']()['top'],'left':z['getBoundingClientRect']()['left']},c={'top':g['offsetTop']+g['clientHeight']/0x2,'left':g['offsetLeft']+g['clientWidth']/0x2},F=D['length'],M=1.375*X,v=M,x=1.4*L,Z=0x0,e=Math['PI'],f=0x0,Y=0.75*e,q=Math['floor'](0x2*e*v/x),W=0x0,I=0x2*e/q;J['querySelectorAll']('.gsatelite')['forEach'](function(S,n){do{W>=q&&(Z++,v+=M,W=0x0,q=Math['floor'](0x2*e*v/x),I=0x2*e/q);Y+=I;var l=c['left']+Math['cos'](Y)*v-L/0x2,t=c['top']+Math['sin'](Y)*v-L/0x2,h0=window['innerHeight'],h1=Math['floor'](document['body']['getBoundingClientRect']()['width']),h2=A['top']+t>=0x0&&A['top']+t<h0,h3=A['top']+t+L>0x0&&A['top']+t+L<=h0,h4=A['left']+l>=0x0&&A['left']+l<h1,h5=A['left']+l+L>0x0&&A['left']+l+L<=h1,h6=h2&&h3,h7=h4&&h5;if(h6&&h7)break;f++,W++;}while(f-n<0xa*F);S['style']['left']=l+'px',S['style']['top']=t+'px',f++,W++,setTimeout(function(){S['style']['display']='inline';},(n+0x1)*0xa);});}function P(){B=![];var J=document['querySelectorAll']('.gsatelite');J['forEach'](function(g,z){setTimeout(function(){g['style']['display']='none';},(J['length']-z-0x1)*0xa);});}document['addEventListener']('click',function(){if(B)P();}),document['querySelectorAll'](C+'\x20.gglobe')['forEach'](function(J){J['addEventListener']('click',function(g){g['stopPropagation']();if(B)P();else T(J['parentNode']);}),J['addEventListener']('pointerenter',function(g){g['target']['parentNode']['querySelectorAll']('.gsatelite\x20img:not([src])')['forEach'](function(z){z['setAttribute']('src',z['getAttribute']('data-gt-lazy-src'));});});});if(a=='none'){function J(){var A=document['cookie']['match']('(^|;)\x20?googtrans=([^;]*)(;|$)');return A?A[0x2]['split']('/')[0x2]:null;}function g(A,c){try{if(document['createEventObject']){var F=document['createEventObject']();A['fireEvent']('on'+c,F);}else{var F=document['createEvent']('HTMLEvents');F['initEvent'](c,!![],!![]),A['dispatchEvent'](F);}}catch(M){}}function z(){!window['gt_translate_script']&&(window['gt_translate_script']=document['createElement']('script'),gt_translate_script['src']='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2',document['body']['appendChild'](gt_translate_script));}window['doGTranslate']=function(A){if(A['value'])A=A['value'];if(A=='')return;var c=A['split']('|')[0x1];if(J()==null&&c==A['split']('|')[0x0])return;var F,M=document['getElementsByTagName']('select');for(var v=0x0;v<M['length'];v++)if(M[v]['className']['indexOf']('goog-te-combo')!=-0x1){F=M[v];break;}document['getElementById']('google_translate_element2')==null||document['getElementById']('google_translate_element2')['innerHTML']['length']==0x0||F['length']==0x0||F['innerHTML']['length']==0x0?setTimeout(function(){doGTranslate(A);},0x1f4):(F['value']=c,g(F,'change'),g(F,'change'));},window['googleTranslateElementInit2']=function(){new google['translate']['TranslateElement']({'pageLanguage':Q,'autoDisplay':![]},'google_translate_element2');};if(o!=Q)z();else document['querySelectorAll'](C)['forEach'](function(A){A['addEventListener']('pointerenter',z);});document['querySelectorAll'](C+'\x20a[data-gt-lang]')['forEach'](function(A){A['addEventListener']('click',function(c){c['preventDefault'](),document['querySelectorAll'](C+'\x20a.gt-current-lang')['forEach'](function(F){F['classList']['remove']('gt-current-lang');}),A['classList']['add']('gt-current-lang'),doGTranslate(Q+'|'+A['getAttribute']('data-gt-lang'));});});}if(N&&window['localStorage']&&window['navigator']&&localStorage['getItem']('gt_autoswitch')==null&&!/bot|spider|slurp|facebook/i['test'](navigator['userAgent'])){var b=(navigator['language']||navigator['userLanguage'])['toLowerCase']();switch(b){case'zh':case'zh-cn':var j='zh-CN';break;case'zh-tw':case'zh-hk':var j='zh-TW';break;case'he':var j='iw';break;default:var j=b['substr'](0x0,0x2);break;}if(o==Q&&j!=Q&&D['includes'](j)){if(a=='none')load_tlib(),window['gt_translate_script']['onload']=function(){doGTranslate(Q+'|'+j),document['querySelectorAll'](C+'\x20a.gt-current-lang')['forEach'](function(A){A['classList']['remove']('gt-current-lang');}),document['querySelector'](C+'\x20a[data-gt-lang=\x22'+j+'\x22]')['classList']['add']('gt-current-lang');};else document['querySelectorAll'](C+'\x20a[data-gt-lang=\x22'+j+'\x22]')['forEach'](function(A){location['href']=A['href'];});}localStorage['setItem']('gt_autoswitch',0x1);}}());