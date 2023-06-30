/*export interface Paper {
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
}*/

export interface Paper {
  id: number;
  created_at: string;
  title: string;
  abstract: string;
  pdf_url: string;
  year_published: number;
  authors: string[];

  // new props

  category: string;
}
  
export const initialPaperData: Paper[] = [
  {
    "id": 2,
    "created_at": "2022-10-10T14:59:56.22502+00:00",
    "title": "An Scéalaí: autonomous learners harnessing speech and language technologies",
    "abstract": "This paper presents an autonomous language learning platform which has speech and language technology at its core. An Scealaí ('the Storyteller') is a web-based interactive iCALL system that allows learners to compose their own text and correct it by listening to the text spoken with synthetic voices (aural proofing) and by responding to NLP prompts that detect errors. All learner interactions are logged and monitored, allowing researchers to observe the learning processes. A pilot study by 14 learners of Irish in the US was conducted to explore the efficacy of the corrective mechanisms currently implemented in the platform. The results of the pilot study indicate that both mechanisms currently on offer were effective in the development of writing skills but work in rather different ways. Aural proofing appears to generate an immediate corrective response which indicates that it is serving both to develop awareness of specific phonological contrasts as well as basic phonic rules of the language. In the case of the NLP prompts, corrections were also made, although the data suggest that this is a slower process and that learners may, at least initially, merely be satisfying the system's prompts rather than discovering the grammatical basis of the correction. The pilot has been useful in pointing towards future directions for platform development that can take the needs of this type of adult autonomous learner into account.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/An%20Scealai:%20autonomous%20learners%20harnessing%20speech%20and%20language%20technologies.pdf?",
    "year_published": 2019,
    "authors": ["Ni Chiarain, Neasa", "Ni Chasaide, Ailbhe"],
    "category": "paper"
  },
  {
    "id": 1,
    "created_at": "2022-10-10T14:56:50.964953+00:00",
    "title": "The ABAIR Initiative: Bringing Spoken Irish into the Digital Space",
    "abstract": "The processes of language demise take hold when a language ceases to belong to the mainstream of life’s activities. Digital communication technology increasingly pervades all aspects of modern life. Languages not digitally ‘available’ are ever more marginalised, whereas a digital presence often yields unexpected opportunities to integrate the language into the mainstream. The ABAIR initiative embraces three central aspects of speech technology development for Irish (Gaelic): the provision of technology-oriented linguistic-phonetic resources; the building and perfecting of core speech technologies; and the development of technology applications, which exploit both the technologies and the linguistic resources. The latter enable the public, learners, and those with disabilities to integrate Irish into their day-to-day usage. This paper outlines some of the specific linguistic and sociolinguistic challenges and the approaches adopted to address them. Although machine-learning approaches are helping to speed up the process of technology provision, the ABAIR experience highlights how phonetic-linguistic resources are also crucial to the development process. For the endangered language, linguistic resources are central to many applications that impact on language usage. The sociolinguistic context and the needs of potential end users should be central considerations in setting research priorities and deciding on methods.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/The%20ABAIR%20Initiative%20Bringing%20Spoken%20Irish%20into%20the%20Digital%20Space%20-%20Ni%20Chasaide%20et%20al%20-%20The%20ABAIR%20initiative,%20Bringing%20Spoken%20Irish%20into%20the%20Digital%20Space%20-%20Interspeech2017.PDF.pdf",
    "year_published": 2017,
    "authors": [
      "Ni Chiarain, Neasa",
      "Ni Chasaide, Ailbhe",
      "Gobl, Christer",
      "Murphy, Andrew"
    ],
    "category": "paper"
  },
  {
    "id": 3,
    "created_at": "2022-10-27T14:02:04.115198+00:00",
    "title": "Leveraging Phonetic and Speech Research for Irish Language Revitalisation and Maintenance",
    "abstract": "The ABAIR initiative illustrates how phonetic research can drive innovative applications that provide endangered-language communities with powerful tools and resources for language maintenance and revitalisation. ABAIR encompasses a cluster of Irish-language projects with parallel basic and applied research strands. These reflect its evolution from (i) developing phonetic/speech resources to (ii) building technologies (to date, TTS) that use these resources, and to (iii) implementing applications that exploit both resources and technologies to meet urgent needs of the language communities. A key feature is the ongoing collaboration with the language communi¬ties. Rather than passive recipients of resources (developed for commercial purposes), they actively help in setting research priorities, assisting the design, testing and dissemination of outputs, and increasingly, in the collection/curation of data. The paper describes two specific areas, education and access – both pillars of language maintenance – where phonetic resources and applications are impacting.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/ICPhS_1043.pdf?t=2022-10-28T17%3A09%3A06.194Z",
    "year_published": 2019,
    "authors": [
      "Ni Chiarain, Neasa",
      "Gobl, Christer",
      "Ni Chasaide, Ailbhe",
      "Barnes, Emily"
    ],
    "category": "paper"
  },
  {
    "id": 7,
    "created_at": "2022-10-27T14:09:34.147841+00:00",
    "title": "Using Speech and NLP Resources to build an iCALL platform for a minority language, the story of An Scéalaí, the Irish experience to date",
    "abstract": "This paper describes how emerging linguistic resources and technologies can be used to build a language learning platform for Irish, an endangered language. This platform, An Scéalaí, harvests learner corpora-a vital resource both to study the stages of learners’ language acquisition and to guide future platform development. A technical description of the platform is provided, including details of how different speech technologies and linguistic resources are fused to provide a holistic learner experience. The active continuous participation of the community, and platform evaluations by learners and teachers, are discussed.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/The%20ABAIR%20Initiative%20Bringing%20Spoken%20Irish%20into%20the%20Digital%20Space%20-%20Ni%20Chasaide%20et%20al%20-%20The%20ABAIR%20initiative,%20Bringing%20Spoken%20Irish%20into%20the%20Digital%20Space%20-%20Interspeech2017.PDF.pdf",
    "year_published": 2022,
    "authors": [
      "Neasa Ní Chiaráin",
      "Oisín Nolan",
      "Madeleine Comtois",
      "Neimhin Robinson Gunning",
      "Harald Berthelsen",
      "Ailbhe Ní Chasaide"
    ],
    "category": "paper"
  },
  {
    "id": 5,
    "created_at": "2022-10-27T14:07:07.852035+00:00",
    "title": "AAC don Ghaeilge: the Prototype Development of Speech-Generating Assistive Technology for Irish",
    "abstract": "This paper describes the prototype development of an Alternative and Augmentative Communication (AAC) system for the Irish language. This system allows users to communicate using the ABAIR synthetic voices, by selecting a series of words or images. Similar systems are widely available in English and are often used by autistic people, as well as by people with Cerebral Palsy, Alzheimer’s and Parkinson’s disease. A dual-pronged approach to development has been adopted: this involves (i) the initial short-term prototype development that targets the immediate needs of specific users, as well as considerations for (ii) the longer term development of a bilingual AAC system which will suit a broader range of users with varying linguistic backgrounds, age ranges and needs. This paper described the design considerations and the implementation steps in the current system. Given the substantial differences in linguistic structures in Irish and English, the development of a bilingual system raises many research questions and avenues for future development.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/2022.cltw-1.18.pdf?t=2022-10-28T17%3A10%3A22.991Z",
    "year_published": 2022,
    "authors": [
      "Emily Barnes",
      "Oisín Morrin",
      "Ailbhe Ní Chasaide",
      "Julia Cummins",
      "Harald Berthelsen",
      "Andy Murphy",
      "Muireann Nic Corcráin",
      "Claire O’Neill",
      "Christer Gobl",
      "Neasa Ní Chiaráin"
    ],
    "category": "paper"
  },
  {
    "id": 6,
    "created_at": "2022-10-27T14:08:17.035323+00:00",
    "title": "Celtic CALL: strengthening the vital role of education for language transmission",
    "abstract": "In this paper, we present the Irish language learning platform, An Sc ́eala ́ı, an intelligent Computer-Assisted Language Learning (iCALL) system which incorporates speech and language technologies in ways that promote the holistic development of the language skills-writing, listening, reading, and speaking. The technologies offer the advantage of extensive feedback in spoken and written form, enabling learners to improve their production. The system works equally as a classroom-based tool and as a standalone platform for the autonomous learner. Given the key role of education for the transmission of all the Celtic languages, it is vital that digital technologies be harnessed to maximise the effectiveness of language teaching/learning. An Scéalaí has been used by large numbers of learners and teachers and has received very positive feedback. It is built as a modular system which allows existing and newly emerging technologies to be readily integrated, even if those technologies are still in development phase. The architecture is largely language-independent, and as an open-source system, it is hoped that it can be usefully deployed in other Celtic languages.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/2022.cltw-1.10.pdf?t=2022-10-28T17%3A10%3A49.023Z",
    "year_published": 2022,
    "authors": [
      "Neasa Ní Chiaráin",
      "Madeleine Comtois",
      "Oisín Nolan",
      "Neimhin Robinson Gunning",
      "John Sloan",
      "Harald Berthelsen",
      "Ailbhe Ní Chasaide"
    ],
    "category": "paper"
  },
  {
    "id": 4,
    "created_at": "2022-10-27T14:05:35.191022+00:00",
    "title": "Automatic Speech Recognition for Irish: the ABAIR-ÉIST System",
    "abstract": "This paper describes ÉIST, automatic speech recogniser for Irish, developed as part of the ongoing ABAIR initiative, combining (1) acoustic models,(2) pronunciation lexicons and (3) language models into a hybrid system. A priority for now is a system that can deal with the multiple diverse native-speaker dialects. Consequently,(1) was built using predominately native-speaker speech, which included earlier recordings used for synthesis development as well as more diverse recordings obtained using the MíleGlór platform. The pronunciation variation across the dialects is a particular challenge in the development of (2) and is explored by testing both Trans-dialect and Multi-dialect letter-to-sound rules. Two approaches to language modelling (3) are used in the hybrid system, a simple n-gram model and recurrent neural network lattice rescoring, the latter garnering impressive performance improvements. The system is evaluated using a test set that is comprised of both native and non-native speakers, which allows for some inferences to be made on the performance of the system on both cohorts.",
    "pdf_url": "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/publications/2022.cltw-1.7.pdf?t=2022-10-28T17%3A09%3A53.505Z",
    "year_published": 2022,
    "authors": [
      "Liam Lonergan",
      "Mengjie Qian",
      "Harald Berthelsen",
      "Andy Murphy",
      "Christoph Wendler",
      "Neasa Ní Chiaráin",
      "Christer Gobl",
      "Ailbhe Ní Chasaide"
    ],
    "category": "paper"
  }
]