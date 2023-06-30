export interface News {
  id: number;
  created_at: string;
  date: string;
  title_en: string;
  blurb_en: string;
  body_en: null | string;
  images: { url: string }[];
  title_ga: string;
  blurb_ga: string;
  body_ga: null | string;
  video: null | string;

  // new props

  link: string;
  category: string;
  altText: string;
}
  
export const initialNewsData: News[] = [
  {
    "id": 12,
    "created_at": "2022-11-02T10:03:28.448392+00:00",
    "date": "2022-11-02",
    "title_en": "Míle Glór",
    "blurb_en": "Recordings that will help build Automatic Speech Recognition systems for Irish",
    "body_en": "The MÍLE GLÓR initiative is running all week at Oireachtas na Samhna 2022. The ABAIR team would appreciate 15 minutes of your time to record your voice reading some sentences from a screen. These recordings will be used to further develop speech recognition systems for the dialects of Irish.",
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/thumbnail_Logo_mileglor.png?t=2022-11-02T10%3A13%3A59.480Z"
      }
    ],
    "title_ga": "Míle Glór",
    "blurb_ga": "Taifeadtaí a chabhróidh Córais Aitheanta Cainte a thógáil",
    "body_ga": "Tá feachtas MÍLE GLÓR faoi lán seoil! Tá ABAIR ag lorg go dtabharfadh MÍLE DUINE 15 nóiméad dóibh chun taifeadadh a dhéanamh ar a nguthanna, trí abairtí atá ar scáileán a léamh os ard.",
    "video": null,
    "link": "https://google.com",
    "category": "misc",
    "altText": "image"
  },
  {
    "id": 11,
    "created_at": "2022-11-02T10:01:31.331817+00:00",
    "date": "2022-11-02",
    "title_en": "Introduction to the new female Connaught text-to-speech voice",
    "blurb_en": "The new “Sibéal” voice will be introduced to the public for the first time at Oireachtas na Samhna 2022. The ABAIR.ie research team look forward to hearing the opinions of the public in order to enhance its future development",
    "body_en": null,
    "images": [
      {
        "url": "https://www.abair.tcd.ie/voiceday/logoabair_blue.png"
      }
    ],
    "title_ga": "Nochtadh glór nua baineann Connachtach",
    "blurb_ga": "Is ag Oireachtas 2022 a chéad chloisfidh an pobal an glór nua “Sibéal”, tógtha le hinneall cainte Nemo. Tá foireann ABAIR.ie ag tnúth go mór le haiseolas a fháil ón bpobal.",
    "body_ga": null,
    "video": null,
    "link": "https://google.com",
    "category": "launch",
    "altText": "image"
  },
  {
    "id": 10,
    "created_at": "2022-11-01T22:13:30.757186+00:00",
    "date": "2022-11-02",
    "title_en": "ABAIR launch",
    "blurb_en": "Wednesday, 2 November 2022, Oireachtas na Samhna",
    "body_en": "A little background – ongoing work in the Phonetics and Speech Laboratory, Trinity College Dubli",
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Screenshot%20from%202022-11-02%2010-26-18.png?t=2022-11-02T10%3A28%3A21.251Z"
      }
    ],
    "title_ga": "Seoladh ABAIR.ie",
    "blurb_ga": "ag Oireachtas na Samhna 2022, 2 Samhain 2022",
    "body_ga": "Spléachadh ar an obair atá ar siúl sa tSaotharlann Foghraíochta agus Urlabhra, Coláiste na Tríonóide",
    "video": "<iframe title=\"vimeo-player\" src=\"https://player.vimeo.com/video/368653020?h=55db86f7b3\" width=\"360\" height=\"220\" frameborder=\"0\" allowfullscreen></iframe>",
    "link": "https://google.com",
    "category": "launch",
    "altText": "image"
  },
  {
    "id": 13,
    "created_at": "2022-11-02T10:04:30.675197+00:00",
    "date": "2022-11-01",
    "title_en": "European Language Label Award 2022",
    "blurb_en": "An Scéalaí has won a European Language Label Award 2022!",
    "body_en": "The ELL is a cross-sectoral Award that recognises the most innovative language learning projects. The is an Award coordinated by the European Commission and it has been managed by Léargas in Ireland since 1999.",
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/llaward.png?t=2022-11-02T10%3A14%3A18.982Z"
      }
    ],
    "title_ga": "An Séala Eorpach Teanga 2022",
    "blurb_ga": "Bronnfar An Séala Eorpach Teanga ar thionscadal ABAIR-An Scéalaí ag ócáid i bPáirc an Chrócaigh, 10 Samhain.",
    "body_ga": "Is duais é seo a bhronntar ar na tionscadail fhoghlama teanga is nuálaí. Tá an Séala seo comhordnaithe ag an gCoimisiún Eorpach agus á riaradh ag Léargas in Éirinn ó 1999",
    "video": null,
    "link": "https://google.com",
    "category": "misc",
    "altText": "image"
  },
  {
    "id": 14,
    "created_at": "2023-06-02T16:34:31.625549+00:00",
    "date": "2023-05-31",
    "title_en": "NEARTÚ ",
    "blurb_en": "Patrick O'Donovan, Minister of State for the Gaeltacht, launches the new NEARTÚ network in collaboration with ABAIR at Trinity College Dublin",
    "body_en": "The Minister of State for the Gaeltacht, Patrick O'Donovan, announced yesterday a new network – NEARTÚ – which brings together community groups interested in accessibility technologies for the Irish language. The NEARTÚ network – which stands for Nasc Eolais: Abhchóideacht & Rochtain ar Theicneolaíocht na hUrlabhra (Information Link: Advocacy and Access to Speech Technology) – will work closely with the 'ABAIR' project in Trinity College, Dublin.\n\nThe members of the new NEARTÚ network will provide advice on development priorities and on the design and testing of resources and in the coming period a NEARTÚ page will be added to the www.abair.ie website to disseminate information among the community about the possibilities that exist for those with disabilities to work through Irish using speech and language technologies. The network aims to address the needs of the Irish-speaking community for information about everything related to the acquisition and use of Irish for those with disabilities as well as providing research-based information about the benefits of bilingualism. The members of this network will participate in the ongoing research and development that is needed.\n\nAlready, aids are available on the ABAIR site that provide text-to-speech voices in the various dialects of Irish in access technologies, for example, a screen reader for those with visual disabilities.\n\nThe Minister recognised that the establishment of the NEARTÚ network is a significant milestone, and that it fits closely with the goals of the Department's Digital Plan for the Irish language, which places great emphasis on the accessibility needs of people with disabilities. It also corresponds to the Convention on the Rights of People with Disabilities, which was recently ratified by the Irish Government. The Minister congratulates the teams working to provide access to Irish for everyone in the Irish-speaking community.\n\nSpeaking at the launch, Minister of State O’Donovan said: \n\n\"My Department published a Digital Plan for the Irish Language at the end of last year. That publication sets out a roadmap to ensure that the Irish language will thrive in the digital age in the coming years. The Plan recognises the importance of making Irish language resources more accessible and easier to use, and it also recognises the need for text-to-speech voices in the various dialects of Irish as well as recognised speech systems.\n\n\"It is specifically mentioned in the Plan that it is necessary to establish advocacy networks that will guide and support this development of access facilities. The Irish Government recently ratified the Convention on the Rights of People with Disabilities. The establishment of the new NEARTÚ network will go towards fulfilling that need.\"\n\nTrinity’s ABAIR research leaders, Neasa Ní Chiaráin and Ailbhe Ní Chasaide, see the development as an important milestone in forging a partnership between the ABAIR research group and the communities of users who require these technologies for accessibility and communication. \n\nDr Neasa Ní Chiaráin, School of Linguistic, Speech and Communication Sciences, points out:\n\n“Access to Irish speech and language technology for all is a core mission of the ABAIR initiative. We are delighted that this new NEARTÚ network will enable the ABAIR research group to partner with communities of users. This network will ensure Irish speech and language technology developments are appropriate to all users – not only to those for whom Irish is central to their lives, but to everyone who has an interest in the language.”\n\nProf. Ailbhe Ní Chasaide, School of Linguistic, Speech and Communication Sciences, adds: \n\n“ABAIR’s speech technologies are the result of the partnership of ABAIR with the language community, which has given, and continues to give so generously of its many voices. This new network will deepen the partnership with the wider community and entail extensive collaboration with specific user groups. We thank the community today for its ongoing support.”",
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/NEARTU_Launch.jpg"
      },
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Neartu_01.jpg"
      },
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/neartu_02.jpg"
      }
    ],
    "title_ga": "NEARTÚ \n",
    "blurb_ga": "Seolann Patrick O’Donovan, Aire Stáit na Gaeltachta, líonra nua NEARTÚ i gcomhar le ABAIR ",
    "body_ga": "D’fhógair Aire Stáit na Gaeltachta, Patrick O’Donovan, líonra nua ­­– NEARTÚ – ina dtugtar le chéile grúpaí pobail ar spéis leo teicneolaíochtaí inrochtaineachta don Ghaeilge.  Beidh an líonra NEARTÚ – a sheasann do Nasc Eolais: Abhcóideacht & Rochtain ar Theicneolaíocht na hUrlabhra – ag obair go dlúth leis an tionscadal ‘ABAIR' i gColáiste na Tríonóide, Baile Átha Cliath.\nCuirfidh baill an líonra nua NEARTÚ comhairle ar fáil maidir le tosaíochtaí forbartha agus maidir le dearadh agus tástáil ar acmhainní agus sa tréimhse romhainn cuirfear le leathanach NEARTÚ ar shuíomh Gréasáin www.abair.iechun eolas a scaipeadh i measc an phobail faoi na féidearthachtaí atá ann dóibh siúd atá faoi mhíchumas feidhmiú trí Ghaeilge ag baint úsáid as teicneolaíochtaí urlabhra agus teanga. Tá sé i gceist go mbeidh an líonra in ann aghaidh a thabhairt ar an ngá atá ag pobal na Gaeilge le heolas faoi gach a mbaineann le sealbhú agus úsáid na Gaeilge dóibh siúd atá faoi mhíchumas mar aon le heolas taighde-bhunaithe a chur ar fáil faoi bhuntáistí an dátheangachais. Tá sé mar sprioc go mbeidh baill an líonra seo ag glacadh páirt sa taighde agus sa bhforbairt leanúnach atá ag teastáil.\n\nCheana féin, tá áiseanna ar shuíomh ABAIR a chuireann na guthanna téacs-go-hurlabhra Gaeilge sna canúintí éagsúla ar fáil i dteicneolaíochtaí rochtana, mar shampla, léitheoir scáileáin dóibh siúd atá faoi mhíchumas radhairc.\n\nD’aithin an tAire gur cloch mhíle shuntasach é bunú an líonra NEARTÚ, agus go luíonn sé go dlúth le spriocanna Phlean Digiteach don Ghaeilge na Roinne ina bhfuil an-bhéim ar riachtanais inrochtaineachta lucht an mhíchumais. Freagraíonn sé chomh maith don Choinbhinsiún um Cearta Daoine atá faoi Mhíchumas, a dhaingnigh Rialtas na hÉireann le déanaí. Tréaslaíonn an tAire leis na foirne atá ag obair chun rochtain don Ghaeilge a chur ar fáil do gach aon duine i bpobal na Gaeilge.\n\nAg labhairt dó ag an seoladh, dúirt an tAire Stáit O’Donovan:\n\n“D’fhoilsigh mo Roinn Plean Digiteach don Ghaeilge ag deireadh na bliana seo caite. Leagtar amach san fhoilseachán sin treochlár chun a chinntiú go mbeidh rath ar an nGaeilge sa ré dhigiteach sna blianta amach romhainn. Aithnítear sa Phlean an tábhacht a bhaineann le hacmhainní Gaeilge a dhéanamh níos inrochtana agus níos éasca le húsáid, agus aithnítear ann freisin an gá atá le guthanna téacs-go-hurlabhra i gcanúintí éagsúla na Gaeilge chomh maith le córais aitheanta cainte.\n\n\"Tá sé luaite go sonrach sa Phlean gur gá líonraí abhcóideachta a bhunú a threoróidh agus a thacóidh leis an bhforbairt seo ar áiseanna rochtana. Le déanaí dhaingnigh Rialtas na hÉireann an Coinbhinsiún maidir le Cearta Daoine atá faoi Mhíchumas. Tá an líonra nua NEARTÚ á bhunú chun dul i dtreo an riachtanas sin a chomhlíonadh.”\nDar le ceannairí taighde ABAIR i gColáiste na Tríonóide, Neasa Ní Chiaráin agus Ailbhe Ní Chasaide, gur cloch mhíle thábhachtach í forbairt an lae inné chun comhpháirtíocht a chruthú idir grúpa taighde ABAIR agus pobail úsáideoirí a dteastaíonn na teicneolaíochtaí seo uathu le haghaidh inrochtaineachta agus cumarsáide.\n\nDúirt an Dr Neasa Ní Chiaráin, Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide\n\n\"Is croí-mhisean de chuid thionscnamh ABAIR é rochtain ar theicneolaíocht urlabhra agus teanga na Gaeilge a bheith ann do chách. Tá an-áthas orainn go gcuirfidh an líonra nua NEARTÚ seo ar chumas ghrúpa taighde ABAIR dul i gcomhpháirtíocht le pobail úsáideoirí. Cinnteoidh an gréasán seo go mbeidh forbairtí teicneolaíochta urlabhra agus teanga na Gaeilge oiriúnach do gach úsáideoir – ní hamháin dóibh siúd a bhfuil an Ghaeilge fite fuaite ina saol, ach do gach duine a bhfuil suim acu sa teanga.\"\n\nAgus í ag cur leis an méid sin, dúirt an tOllamh Ailbhe Ní Chasaide,Scoil na nEolaíochtaí Teangeolaíochta, Urlabhra agus Cumarsáide:\n\n\"Is toradh iad teicneolaíochtaí cainte ABAIR ar an chomhpháirtíocht idir ABAIR agus pobal na teanga, a thug, agus a thugann go fóill, an oiread sin dá nguthanna di. Neartóidh an líonra nua seo an chomhpháirtíocht leis an phobal i gcoitinne agus beidh comhoibriú fairsing ann le grúpaí úsáideoirí ar leith. Gabhaimid buíochas leis an phobal inniu as a dtacaíocht leanúnach.\"",
    "video": null,
    "link": "https://google.com",
    "category": "misc",
    "altText": "image"
  },
  {
    "id": 15,
    "created_at": "2023-06-23T11:07:19.441006+00:00",
    "date": "2023-04-04",
    "title_en": "Maddie's Graduation",
    "blurb_en": "ABAIR member Madeline Comtois receives her Masters Degree!",
    "body_en": "",
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Maddies-graduation.jpg"
      }
    ],
    "title_ga": "Céim Maddie",
    "blurb_ga": "Ball ABAIR Madeline Comtois ag fáil a Céim Mháistreachta!",
    "body_ga": "",
    "video": null,
    "link": "https://google.com",
    "category": "misc",
    "altText": "image"
  },
  {
    "id": 16,
    "created_at": "2023-06-23T11:13:33.884369+00:00",
    "date": "2023-06-15",
    "title_en": "Neasa gives Keynote Address at UK Speech",
    "blurb_en": "Professor Neasa Ní  Chiaráin gave the keynote speech at  Sheffield University to the top Speech Technology experts in the UK and Ireland",
    "body_en": null,
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Neasa_UK_Speech_Keynote.JPG"
      },
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/UK_speech_attendees.JPG"
      }
    ],
    "title_ga": "Tugann Neasa Príomhaitheasc ag Óráid na Ríochta Aontaithe",
    "blurb_ga": "Thug an tOllamh Neasa Ní Chiaráin an phríomhóráid ag Ollscoil Sheffield do na saineolaithe is fearr sa Teicneolaíocht Urlabhra sa RA agus in Éirinn",
    "body_ga": null,
    "video": null,
    "link": "https://google.com",
    "category": "presentation",
    "altText": "image"
  },
  {
    "id": 17,
    "created_at": "2023-06-23T11:17:59.015968+00:00",
    "date": "2023-06-08",
    "title_en": "Liam Wins Best Young Presenter!",
    "blurb_en": "ABAIR member Liam Lonergan won the Best Young Presenter accolade for his talk delivered to Teangeolaíocht na Gaeilge (Linguistics of the Gaelic Language) conference hosted by the Royal Irish Academy",
    "body_en": null,
    "images": [
      {
        "url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Liam_best_presenter.jpeg"
      }
    ],
    "title_ga": "Bhuaigh Liam an Láithreoir Óg is Fearr!",
    "blurb_ga": "Bhuaigh ball ABAIR Liam Lonergan gradam an Láithreoir Óg is Fearr as an óráid a thug sé do chomhdháil Teangeolaíocht na Gaeilge a bhí á reachtáil ag Acadamh Ríoga na hÉireann",
    "body_ga": null,
    "video": null,
    "link": "https://google.com",
    "category": "presentation",
    "altText": "image"
  }
]