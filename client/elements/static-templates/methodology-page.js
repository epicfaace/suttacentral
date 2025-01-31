import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCMethodologyPage extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <style>
        .author {
          font-variant-caps: small-caps;
          letter-spacing: var(--sc-caps-letter-spacing);
        }

        .byline {
          font-style: italic;
        }
      </style>
      <div id="page-wrap">
        <main>
          <section>
            <article>
              <h1>${_`Methodology and Sources`}</h1>
              <nav class="contents">
                <ol>
                  <li>${_`<a href="#item1">Background</a>`}</li>
                  <li>${_`<a href="#item2">Sutta parallels</a>`}</li>
                  <li>${_`<a href="#item3">Vinaya parallels</a>`}</li>
                  <li>${_`<a href="#item4">Text sources</a>`}</li>
                  <li>${_`<a href="#item5">Markup</a>`}</li>
                  <li>${_`<a href="#item6">Bibliographies</a>`}</li>
                </ol>
              </nav>
              <h2 id="item1">${_`Background`}</h2>
              <p>
                ${_`Since the 19th century it has been recognized by scholars that many Buddhist texts found in the Pali canon have counterparts or parallels in the Chinese and other collections. The first documentation of these parallels was published by Nanjio Bunyiu (Nanjō Bun’yū, 南條文雄) in his <cite>A Catalogue of the Chinese Translation of the Buddhist Tripiṭaka</cite> of 1883. Nanjio listed 24 Dīgha Nikāya discourses as parallels to the Dīrghāgama in Chinese. These embryonic tables represent an important first step, demonstrating that comparison of the Chinese <i>āgamas</i> with the Pali <i>nikāyas</i> is a potentially fruitful undertaking. In the following year, Samuel Beal described similarities between various Pali and Chinese Buddhist texts, and remarked:`}
              </p>
              <blockquote>
                ${_`“It is plain, as well from their agreements as from the slight differences that occur throughout, that these discourses are derived from one source, not the original, but from versions made from the original; and from one of these versions the Chinese translation was prepared.” (<cite>Buddhism in China</cite>, p. 25.)`}
              </blockquote>
              <p>
                ${_`In 1908 Masaharu Anesaki published <cite>The Four Buddhist Āgamas in Chinese: A Concordance of their Parts and the Corresponding Counterparts in the Pāli Nikāyas</cite>, followed in 1929 by Chizen Akanuma’s <cite>The Comparative Catalogue of Chinese Āgamas &amp; Pāli Nikāyas</cite>. This became the standard reference in the field, and was corrected and improved over subsequent decades by a series of mostly Japanese and Taiwanese scholars. In the 1990s, Rod Bucknell undertook the task of digitizing the latest versions of these parallels tables. In addition, he worked with Venerable Anālayo to further improve and expand the coverage. These tables became the basis for SuttaCentral’s parallels for the four main <i>nikāyas</i>/<i>āgamas.</i>`}
              </p>
              <p>
                ${_`In 2014, Bhikkhu Sujato prepared a set of parallels for the Vinayas which was added to SuttaCentral, and in 2016, Ayya Vimala added verse parallels for the Dhammapadas.`}
              </p>
              <p>
                ${_`The parallels data is maintained in a single text file, <a href="https://github.com/suttacentral/sc-data/blob/master/relationship/parallels.json" rel="noopener" target="_blank">parallels.json</a>, which may be found on <a href="https://github.com/suttacentral" rel="noopener" target="_blank" title="SuttaCentral on Github">SuttaCentral’s Github repository</a>.`}
              </p>
              <p>
                ${_`In addition to the parallels, SuttaCentral hosts original texts and translations when they are available. A brief note on the sources of these texts is found below.`}
              </p>
              <h2 id="item2">${_`Sutta Parallels`}</h2>
              <p class="byline">${_`Rod Bucknell, updated by Sujato`}</p>
              <h3>${_`Kinds of Parallels`}</h3>
              <p>
                ${_`In keeping with the simple classification established in Akanuma (1929), two types of discourse parallel were recognized in the original SuttaCentral data:`}
              </p>
              <ul>
                <li>
                  ${_`<strong>Full parallel:</strong> Full parallels may differ in content to a certain extent, but they are similar enough to make it likely that they stem from a common ancestor.`}
                </li>
                <li>
                  ${_`<strong>Partial parallel:</strong> Partial parallels display markedly incomplete agreement. Usually, a <em>partial</em> parallel has only a relatively small <em>part</em> of its content in common with the other discourse, a situation that could have arisen through various different historical processes.`}
                </li>
              </ul>
              <p>
                ${_`Distinguishing between full parallel and partial parallel involves some degree of subjectivity. Consequently, it should be seen as providing helpful guidance rather than as delivering a final judgment about the relationship between the two texts.`}
              </p>
              <p>
                ${_`Fragmentary manuscript remains in Sanskrit or other languages are not “partial parallels” in this sense. They are identified instead as fragments.`}
              </p>
              <p>
                ${_`For the 2018 upgrade of SuttaCentral, we added a number of refinements and enhancements to this model. We now represent the following kinds of relations.`}
              </p>
              <ul>
                <li>
                  ${_`<strong>Full parallel:</strong> As before, except with the clarification that a full parallel applies not just to whole suttas, but to anything that has been specified with an ID on SuttaCentral. Thus a “section” of a text, or else a “range” of several texts, may be considered as a full parallel. Consider the case of the Dhammacakkappavattana Sutta. Among the many parallels, we find one Pali version in the first Vinaya Khandhaka. There it makes up only a small section of the whole text, but it is clearly a full parallel of the text at SN 56.11. Since we can fully define the content of this section with IDs, this ranks as a full parallel.`}
                </li>
                <li>
                  ${_`<strong>Resembling parallel:</strong> This includes texts that “resemble” each other, but where the parallel passages have not been further specified. By default, the old “partial” parallels are included here, unless the parallel sections have been fully specified, in which case they are considered “full”. A good example of a pair of “resembling” parallels is MN 10 Satipaṭṭhāna and MN 119 Kāyagatāsati. These suttas share much in common, in particular an extended list of meditation subjects that is not found anywhere else. Yet they also have many systematic differences, and it is not possible or practical to fully specify which portions are shared. So the best we can say is that these texts “resemble” each other, and if studying one text, you may well want to study the other, too.`}
                </li>
                <li>
                  ${_`<strong>Mention:</strong> This covers cases where one passage “mentions” another. In such cases, the mention may not actually include the text itself, so could not be considered a parallel. Nevertheless, it is a meaningful point of relation between the texts. An example would be SN 41.3, which refers to the “sixty-two” views found in the Brahmajāla Sutta (DN 1).`}
                </li>
                <li>
                  ${_`<strong>Retelling:</strong> This refers to cases where the same or similar events are “retold” in more than one place in the canon. The story of Baka the Brahmā is a good example. It appears in SN 6.4 and MN 49. The two texts are very different, and don’t count as parallels. Nevertheless, in some sense it does appear to be the same or a closely related story, so some connection can be recognized. This kind of relation is also used for the “retellings” of the lives of the monks and nuns found in the Gāthās and the Apadānas.`}
                </li>
              </ul>
              <p>
                ${_`The “mentions” and “retellings” are mostly derived from the cross-reference metadata contained in the Mahāsaṅgīti text, sorted and added by Ayya Vimala.`}
              </p>
              <h3>${_`Implied Parallels`}</h3>
              <p>
                ${_`Discourses listed as full parallels to a given Pali discourse can safely be assumed to be full parallels to one another. For example, DN 22 is shown as having full parallels in MN 10, MA 98, and EA 12.1, and from this one can safely infer that MA 98 is a full parallel to MN 10 and EA 12.1.`}
              </p>
              <p>
                ${_`However, for discourses listed as partial parallels to a given Pali discourse, no such inferences can be drawn. For example, DN 22 is shown as having partial parallels in MN 141, MA 31, and T 32. From this one cannot infer any correspondence between MA 31 and T 32 (though in fact they are full parallels of each other), or between MA 31 and MN 141 (which in fact are quite unrelated).`}
              </p>
              <h2 id="item3">${_`Vinaya Parallels`}</h2>
              <p class="byline">${_`Bhikkhu Sujato`}</p>
              <p>
                ${_`Here is outlined in brief the method used for compiling the Vinaya correspondences.`}
              </p>
              <p>
                ${_`My primary source work was Nishimoto’s 1928 paper on comparative Pātimokkha rules. While I can’t speak Japanese, I was able to make sense of his tables, which were kindly supplied by Shayne Clarke. I checked this against Pachows’s 1955 <cite>Comparative Study of the Pratimoksa</cite>, which was apparently compiled without knowledge of Nishimoto’s earlier work. These two works thus provide a useful check against each other. For the nuns’ rules, the main source was Waldschmidt’s <cite>Bruchstücke des Bhikṣuṇī-Prātimokṣa der Sarvāstivādins</cite> of 1928. This provides tables of Pātimokkha concordances for the Pali, the five main Chinese vinayas, the Tibetan, a Sarvāstivāda Sanskrit version, and the Mahāvyutpatti. A variety of more specialized studies were also consulted.`}
              </p>
              <p>
                ${_`Most of these works assume that the Vinaya rules of one school are the same in the Vibhaṅga and the Pātimokkha, except in the case of multiple separate texts such as with the Sarvāstivāda. However, as I proceeded I discovered that in several cases, especially in the Chinese Vinayas, the Vibhaṅga and the Pātimokka had minor differences in numbering. So I decided to treat each individual text as a separate entity, even though in some cases, notably the Pali, the numbering of rules is identical.`}
              </p>
              <p>
                ${_`Due to this and other minor differences, each of the sources I consulted gave slightly different numberings for the rules. Almost all of these variations occur in the <i>sekhiya</i> rules, while the remainder of Vinaya rules are almost entirely straightforward. In fact I spent more time trying to straighten out the <i>sekhiya</i> rules than the rest of the Vinaya combined, and I frequently despaired of the task. The rules are short and lack context, and use obscure terms that differ in spelling from one text to another. Often my search in Sanskrit dictionaries ended with the discovery that this is the only occurrence of the word, and its meaning and derivation are unknown. No doubt the Chinese translators faced similar difficulties. In extreme cases a rule might be represented by a single Chinese character. It seemed to me that the attempt was pushing the limits of what was possible with parallels. I was only able to keep going buoyed by the thought that my predecessors had thought it worthwhile and had come so far. Even so, I am far from confident that they have been properly sorted out. So please treat the <i>sekhiya</i> correspondences with care!`}
              </p>
              <p>
                ${_`In cases where my sources differed, I consulted the original Chinese and Sanskrit texts, using the texts as published on SuttaCentral. There is obviously a degree of subjectivity involved in making these decisions, and on the whole I probably tended to ascribe correspondences a little more liberally than Nishimoto or Pachow. This was mainly because I used a wider variety of sources, especially from the Sanskrit, and sometimes similarities emerge that are not obvious just from the Chinese texts. Nevertheless, as I said above, almost all such marginal cases pertain to the <i>sekhiyas</i>.`}
              </p>
              <p>
                ${_`Given the vast numbers of parallel rules in different texts, I had to find a way of assigning each instance of each rule with a unique ID. These IDs are not only used to name each rule, they also form the URLs that identify the web page for that rule. These IDs use abbreviations that are subject to a number of constraints: they must be unique on SuttaCentral, case-insensitive, and use no special characters. While the method might seem a little arcane at first, once you have remembered a few abbreviations it is really quite simple. Pli Tv Bu Pm Pj 1 is “Pali Theravāda Bhikkhu Pātimokkha Pārājika 1″; Lzh Sv Bi Vb Ss 3 is “Chinese Sarvāstivāda Bhikkhunī Vibhaṅga Saṅghādisesa 3”, and so on.`}
              </p>
              <p>
                ${_`Throughout I try to use Pali names for titles, rule names and so on. This is simply to preserve consistency, not out of any belief that Pali was the original language of these texts. On the contrary, each text or school would have used a slightly different dialect. Sometimes we find spelling variations even within the same text. Moreover, in many texts it is difficult to ascertain what the traditional title of a rule was, or even if there was one, as such information is usually merely inferred from the summaries or <i>uddānas</i>. In cases where there is no Pali title, I supply a Sanskrit title when possible. These don’t represent any particular Sanskrit texts, but are selected simply on the basis of what seems most clear. Very rarely I supply a title in Pali form for a rule that doesn’t exist in Pali; this is where rules are paired with a nearly identical one that is in the Pali. Where there is neither Pali nor Sanskrit, I have supplied an English title. In all cases these titles, as with headings for Buddhist texts generally, should be regarded merely as aids for the reader supplied by editors, ancient or modern, rather than as intrinsic to the text.`}
              </p>
              <p>
                ${_`In addition to the Pātimokkha correspondences, we also offer much less detailed correspondences of the Khandhakas. These are based on the details provided by Frauwallner in his classic study. I was tempted to include his more detailed breakdown, which showed parallels in various sections within each Khandhaka; however in the end I kept the correspondences at the level of the chapter or Khandhaka only. This is, on the whole, much simpler than dealing with the Pātimokkha correspondences, although there are, as always, unexpected complexities and problematic exceptions.`}
              </p>
              <p>
                ${_`In this case the major exception is the Mahāsaṅghika Vinaya, which doesn’t really have a Khandhaka section at all. Frauwallner treated it as a Khandhaka, albeit one that had been drastically reshaped by later editors, but Clarke has more recently shown that this is not the case. The exact relation between this and other Vinayas remains uncertain, although it seems likely to me that Frauwallner was correct to treat it as a later reorganization of material that previously resembled the Khandhakas more closely. However, despite the great differences in form, the subject matter discussed in various sections of the Mahāsaṅghika Vinaya shares much in common with the corresponding chapters in the Khandhakas. Since the main purpose of providing correspondences on SuttaCentral is to help the reader find similar passages for comparison, I have therefore retained as much as possible of Frauwallner’s correspondences for the Mahāsaṅghika Vinaya. Due to the way these passages are scattered through the text, however, it was not possible to show everything.`}
              </p>
              <p>
                ${_`Note that, due to the nature of the Vinaya texts, there is no need for the different kinds of relations as specified for the Suttas. In almost all cases, it is clear that a particular rule is a full parallel of the other rules, in the sense that they are different versions of the same “thing”. There are, of course, occasional exceptions to this, but nothing, I think, is to be gained by trying to specify a few such marginal cases in the data.`}
              </p>
              <h2 id="item4">${_`Text sources`}</h2>
              <h3>${_`Pali`}</h3>
              <p>
                ${_`The Pali text on SuttaCentral is the Mahāsaṅgīti edition, sometimes called the “World Tipitaka”. This is a version of the Sixth Council text that was edited and published by the Dhamma Society of Bangkok, based on the digital text supplied by the Vipassana Research Insititute. The Dhamma Society undertook an extensive review of the text, correcting it against multiple printed editions. They took as their mainline source the first edition of the Sixth Council text, which represents the Burmese manuscript tradition. We believe this is the most accurate, consistent, and well-edited digital edition of the Pali canon available.`}
              </p>
              <p>
                ${_`The first version of SuttaCentral linked to the Dhamma Society website. However, that went offline and we decided that we needed to host the text ourselves. Fortunately, Venerable Yuttadhammo had made a complete copy of the Mahāsaṅgīti for his Digital Pali Reader, and he kindly supplied us with the source files.`}
              </p>
              <p>
                ${_`We have supplemented the Mahāsaṅgīti text with the pātimokkhas for both monks and nuns from the VRI edition.`}
              </p>
              <p>
                ${_`We have made no changes to the text of the Mahāsaṅgīti edition. However, we have made some minor adjustments to the numbering and punctuation.`}
              </p>
              <p>
                ${_`In addition to the text, we make use of the critical apparatus of the Mahāsaṅgīti, including variant readings, reference numbers, and cross-references. The latter form the basis for most of our Pali-Pali parallels.`}
              </p>
              <h3>${_`Chinese`}</h3>
              <p>
                ${_`The definitive edition of the Chinese Buddhist canon is the Tripiṭaka Koreana. This is an extremely accurate and well-preserved set of 81,258 wood blocks dating from the 13th century. It was used as the primary source for the modern Taishō edition, edited by Takakusu Junjiro and others, and published in the early 20th century through the Taishō University in Japan. This was digitized by CBETA, from which our Chinese texts are sourced.`}
              </p>
              <h3>${_`Tibetan`}</h3>
              <p>
                ${_`Our Tibetan texts are from the Tibetan and Himalayan Library text, which is based on the Derge edition of the Kangyur. Note that the basic text numbers as used by THLIB usually differ by one from the numbers used on SuttaCentral and elsewhere. The numbers used by SuttaCentral are equivalent to the “Master Catalog Number” on THLIB.`}
              </p>
              <h3>${_`Sanskrit and others`}</h3>
              <p>
                ${_`As the texts in Sanskrit and other Indic languages do not form a coherent canon, but were sourced from multiple chance findings, there is no single source. Editions are as noted in the texts. Digital texts are mostly from the Göttingen Register of Electronic Texts in Indian Languages (GRETIL).`}
              </p>
              <h3>${_`Translations`}</h3>
              <p>${_`Translations are from many different sources as noted in each text.`}</p>
              <h2 id="item5">${_`Markup`}</h2>
              <p>
                ${_`SuttaCentral texts are provided with a clear, accurate, and detailed markup using valid, semantic, standards-compliant HTML5. One of our major tasks has been to transform the many texts we have inherited from diverse sources and put them all in the same format. This is exceedingly complex, as the source texts rarely have a clear semantic markup of any sort, but range from unmarked plain text to verbose messes produced by word processors. We aim to render all this complexity in clear and simple markup, without losing detail.`}
              </p>
              <p>
                ${_`Some sister projects to SuttaCentral—notably CBETA—use the academic Text Encoding Initiative (TEI) XML standard for markup. While we appreciate the advantages of an XML approach, we have found that modern HTML allows us to do everything we need, and is substantially easier to work with and deploy. Our source texts can be displayed natively in a browser without any preprocessing. Nevertheless, while we don’t use TEI, we do adopt many of the TEI names and semantics for text-critical markup.`}
              </p>
              <p>${_`Here I will give the basic outlines of some of the less obvious details.`}</p>
              <h3>${_`References`}</h3>
              <p>
                ${_`Our text files include complex reference data. Currently we list more than a hundred different reference sources. There is a lack of a centralized, detailed, and uniform reference system for Buddhist texts, so we have done the best we could. The data is encoded as empty tags, and may be display optionally via javascript.`}
              </p>
              <h3>${_`Text-critical Information`}</h3>
              <p>
                ${_`Our original-language texts include a range of text-critical information of interest to scholars. We try to present this in a way that will not be intrusive to readers, but is informative when researching. Traditional digital files often use print-based conventions such as [brackets] to indicate such matter. But this is ugly, interrupting the reading flow. Worse, it’s uninformative. It is often hard to find out exactly what these various marks mean; in fact we have sometimes had to resort to educated guesswork.`}
              </p>
              <p>
                ${_`Text-critical information is marked in the files with classes such as “var” for variant readings, “supplied” for supplied text, and so on. Typically we indicate this visually with styles, and display a tooltip explaining the meaning. Most of this may be activated optionally.`}
              </p>
              <p>
                ${_`<a href="/zz1/zz/test" title="Text-critical markup on SuttaCentral">See list of text-critical markup classes here</a>.`}
              </p>
              <h3>${_`Structural and other`}</h3>
              <p>
                ${_`We use semantic markup with around a hundred different classes to indicate the detailed structure of texts. These include such things as:`}
              </p>
              <ul>
                <li>
                  ${_`Headings, with proper structured headings using hX tags. Pali texts have such a detailed hierarchy that in some cases we use all the tags as far as h6.`}
                </li>
                <li>
                  ${_`<i>Uddānas</i>, which summarize vaggas and similar structural elements.`}
                </li>
                <li>${_`Various kinds of numbers, such as rule numbers.`}</li>
                <li>${_`Verses.`}</li>
                <li>
                  ${_`End of sutta or end of section titles. Buddhist texts usually have the title at the end of a section rather than the modern heading.`}
                </li>
              </ul>
              <p>
                ${_`<a href="/zz3/zz/test" title="Structural and other markup on SuttaCentral">See list of structural and other markup classes here</a>.`}
              </p>
              <h2 id="item6">${_`Bibliographies`}</h2>
              <h3>${_`Sutta parallels`}</h3>
              <p>
                ${_`Here are the main bibliographic sources supplied by Rod Bucknell, representing the primary resources for the sutta parallels and the editions of the various texts. Note that this bibliography does not attempt to be comprehensive or ongoing, but represents a snapshot of the academic background for Rod’s fundamental research.`}
              </p>
              <ul>
                <li>
                  ${_`<span class="author">Akanuma</span>, Chizen 1929. <cite>The Comparative Catalogue of Chinese Āgamas &amp; Pāli Nikāyas</cite>. Nagoya: Hajinkaku-shobō. Reprinted 1990, Delhi: Sri Satguru Publications.`}
                </li>
                <li>
                  ${_`<span class="author">Allon</span>, Mark 2001. <cite>Three Gāndhārī Ekottarikāgama-Type Sūtras: British Library Kharoṣṭhī Fragments 12 and 14.</cite> Seattle: University of Washington Press.`}
                </li>
                <li>
                  ${_`<span class="author">Allon</span>, Mark 2008. A Gāndhārī Version of the Simile of the Turtle and the Hole in the Yoke. <cite>Journal of the Pali Text Society</cite> 29: 229–262.`}
                </li>
                <li>
                  ${_`<span class="author">Allon</span>, Mark & <span class="author">Salomon</span>, Richard 2000. Kharoṣṭhī Fragments of a Gāndhārī Version of the Mahāparinirvāṇasūtra. In <span class="author">Braarvig</span>, Jens (ed). <cite>Buddhist Manuscripts</cite> vol. <span class="roman_numerals">I</span> (<cite>= Manuscripts in the Schøyen Collection</cite> 1), Oslo: Hermes Publishing, 242–284.`}
                </li>
                <li>
                  ${_`<span class="author">Anālayo</span>, Bhikkhu 2012. On the Five Aggregates (1): A translation of Saṁyukta-āgama Discourses 1 to 32. <cite>Dharma Drum Journal of Buddhist Studies</cite> 11: 1–61.`}
                </li>
                <li>
                  ${_`<span class="author">Anālayo</span> and <span class="author">Bucknell</span>, Roderick S. 2006. Correspondence Table for Parallels to the Discourses of <i>Majjhima Nikāya</i>: Toward a Revision of Akanuma’s <cite>Comparative Catalogue</cite>. <cite>Journal of the Centre for Buddhist Studies, Sri Lanka</cite> 4: 215–238.`}
                </li>
                <li>
                  ${_`<span class="author">Anesaki</span>, Masaharu 1905. Le <i>Sagātha-vagga</i> du <i>Saṁyutta-nikāya</i> et ses versions chinoises. <cite>Le Muséon</cite> (nouvelle série) 24: 23–37.`}
                </li>
                <li>
                  ${_`<span class="author">Anesaki</span>, Masaharu 1908. The Four Buddhist Āgamas in Chinese: A Concordance of their Parts and the Corresponding Counterparts in the Pāli Nikāyas. <cite>Transactions of the Asiatic Society of Japan</cite> 35.3: 1–149.`}
                </li>
                <li>
                  ${_`<span class="author">Bapat</span>, P.<span class="roman_numerals">V</span>. 1949. Another Valuable Collection of Buddhist Sanskrit Manuscripts. <cite>Annals of the Bhandarkar Oriental Research Institute</cite> 30: 241–253.`}
                </li>
                <li>
                  ${_`<span class="author">Basak</span>, Radhagovinda 1963. <cite>Mahāvastu Avadāna,</cite> vol. 1 (<cite>Calcutta Sanskrit College Research Series</cite>). Calcutta: Sanskrit College.`}
                </li>
                <li>
                  ${_`<span class="author">Basak</span>, Radhagovinda 1965. <cite>Mahāvastu Avadāna,</cite> vol. 2 (<cite>Calcutta Sanskrit College Research Series</cite>). Calcutta: Sanskrit College.`}
                </li>
                <li>
                  ${_`<span class="author">Basak</span>, Radhagovinda 2004. <cite>Mahāvastu Avadāna,</cite> vol. 3. Darbhanga: Mithila Institute.`}
                </li>
                <li>
                  ${_`<span class="author">Beckh</span>, Hermann 1911. <cite>Udānavarga, Eine Sammlung buddhistischer Sprüche in tibetischer Sprache, nach dem Kanjur und Tanjur mit Anmerkungen herausgegeben</cite>. Berlin: Reimer.`}
                </li>
                <li>
                  ${_`<span class="author">Benveniste</span>, E. 1940. <cite>Textes Sogdiens, édités, traduits et commentés</cite> (<cite>Mission Pelliot en Asie Centrale</cite>, series in-quarto). Paris: Paul Geuthner.`}
                </li>
                <li>
                  ${_`<span class="author">Bernhard</span>, Franz 1965. <cite>Udānavarga</cite> (= <cite>Sanskrittexte aus den Turfanfunden <span class="roman_numerals">X</span></cite>). Göttingen: Vandenhoeck & Ruprecht.`}
                </li>
                <li>
                  ${_`<span class="author">Bersing</span>, Siegfried 1930. <cite>Das Chung-tsi-king des chinesischen Dīrghāgama, Übersetztung und Anmerkungen</cite>. Leipzig: Asia Major.`}
                </li>
                <li>
                  ${_`<span class="author">Bingenheimer</span>, Marcus 2011. <cite>Studies in Āgama Literature: With special reference to the Shorter Chinese Saṁyuktāgama</cite>. (<cite>Dharma Drum Buddhist College Special Series</cite>) Taipei: Xin Wen Feng.`}
                </li>
                <li>
                  ${_`<span class="author">Bodhi</span>, Bhikkhu 2000. <cite>The Connected Discourses of the Buddha: A New Translation of the Saṁyutta Nikāya</cite>. Boston: Wisdom Publications.`}
                </li>
                <li>
                  ${_`<span class="author">Bollée</span>, Willem 2002. <cite>The Story of Paesi</cite>. Wiesbaden: Harrassowitz.`}
                </li>
                <li>
                  ${_`<span class="author">Bongard-Levin</span>, Gregory 1989. Three New Fragments of the Bodharājakumārasūtra from Eastern Turkestan. <cite>Journal of the American Oriental Society</cite> 109: 509–512.`}
                </li>
                <li>
                  ${_`<span class="author">Bongard-Levin</span>, Gregory et al. 1996. The Nagaropamasūtra: An Apotropaic Text from the Saṁyuktāgama. In <cite>Sanskrit Wörterbuch der Buddhistischen Texte aus den Turfan Funden</cite>, Beiheft 6: 7–103.`}
                </li>
                <li>
                  ${_`<span class="author">Brekke</span>, Torkel 2000. The Caṁgīsūtra of the Mahāsaṁghika-Lokottaravādins. In <span class="author">Braarvig</span>, Jens (ed.) <cite>Buddhist Manuscripts</cite> vol. 1 (= <cite>Manuscripts in the Schøyen Collection</cite> <span class="roman_numerals">I</span>), Oslo: Hermes Publishing, 53–62.`}
                </li>
                <li>
                  ${_`<span class="author">Brough</span>, John 1962/2001. <cite>The Gāndhārī Dharmapada, edited with an Introduction and Commentary</cite> (= <cite>Buddhist Tradition Series</cite>, vol. 43) Delhi: Motilal Banarsidass.`}
                </li>
                <li>
                  ${_`<span class="author">Chakravarti</span>, N. p. 1930. <cite>L’Udānavarga sanskrit: Texte sanscrit en transcription, avec traduction et annotations, suivi d’une étude critique et de planches</cite> (<cite>Mission Pelliot en Asie Centrale</cite>, série petit in-octavo, vol. iv). Paris: Paul Geuthner.`}
                </li>
                <li>
                  ${_`<span class="author">Choong</span>, Mun-keat 2004. <cite>Annotated Translations of Sutras from the Chinese Saṁyuktāgama Relevant to the Early Buddhist Teachings on Emptiness and the Middle Way</cite>. Penang: Chee Khoon Printings.`}
                </li>
                <li>
                  ${_`<span class="author">Chung</span>, Jin-il 2008. <cite>A Survey of the Sanskrit Fragments Corresponding to the Chinese Saṁyuktāgama</cite>. Tokyo: Sankibō Busshorin.`}
                </li>
                <li>
                  ${_`<span class="author">Chung</span>, Jin-il and <span class="author">Fukita</span>, Takamichi 2011. <cite>A Survey of the Sanskrit Fragments Corresponding to the Chinese Madhyamāgama (including references to Sanskrit parallels, citations, numerical categories of doctrinal concepts, and stock phrases)</cite>. Tokyo: Sankibō Busshorin.`}
                </li>
                <li>
                  ${_`<span class="author">Cone</span>, Margaret 1989. Patna Dharmapada. <cite>Journal of the Pali Text Society</cite> 13: 101–217.`}
                </li>
                <li>
                  ${_`<span class="author">Cooper</span>, John M. 1980. A fragment of the Nidānasūtra. <cite>Pali Buddhist Review</cite> 5.3: 53–58.`}
                </li>
                <li>
                  ${_`<span class="author">Cowell</span>, E. B. et al. 1886. <cite>The Divyāvadāna, a Collection of Early Buddhist Legends</cite>. Cambridge: Cambridge University Press.`}
                </li>
                <li>
                  ${_`<span class="author">Devacandra</span> 1996. <cite>Gaṅ po la sogs pa’i rtogs pa brjod pa brgya pa</cite>. Xining.`}
                </li>
                <li>
                  ${_`<span class="author">Dhammadinnā</span> 2012. A Translation of the Quotations in Śamathadeva’s Abhidharmakośopāyikā-ṭīkā Parallel to the Chinese Saṁyukta-āgama Discourses 8, 9, 11, 12, 17 and 28. <cite>Dharma Drum Journal of Buddhist Studies</cite> 11: 63–96.`}
                </li>
                <li>
                  ${_`<span class="author">Dietz</span>, Siglinde 2002. Fragments of the Andhasūtra, of the Sūtra on the Three Moral Defects of Devadatta, and of the Kavikumārāvadāna. In <span class="author">Braarvig</span>, Jens (ed.) <cite>Buddhist Manuscripts</cite> vol. <span class="roman_numerals">II</span> (= <cite>Manuscripts in the Schøyen Collection</cite> <span class="roman_numerals">III</span>), Oslo: Hermes Publishing, 25–36.`}
                </li>
                <li>
                  ${_`<span class="author">Dutt</span>, Nalinaksha 1984a (part 1), 1984b (part 2). <cite>Gilgit Manuscripts</cite> (<cite>= Bibliotheca Indo-Buddhica No. 16, No. 17</cite>). Delhi: Sri Satguru, vol. 3.`}
                </li>
                <li>
                  ${_`<span class="author">Eimer</span>, Helmut 1983. <cite>Rab tu ''byuṅ ba''i gźi. Die Tibetische Übersetzung des Pravrajyāvastu im Vinaya der Mūlasarvāstivādins</cite>. Wiesbaden: Harrasowitz. vol. 2.`}
                </li>
                <li>
                  ${_`<span class="author">Enomoto</span>, Fumio 1985. Zōagon-gyō kankei no Bonbun shahon danpen [Sanskrit fragments relating to the Saṁyuktāgama. Identification of some fragments of SHT5]. <cite>Bukkyō Kenkyū</cite> 15 (Dec.): 81–93.`}
                </li>
                <li>
                  ${_`<span class="author">Enomoto</span>, Fumio 1989. Sanskrit fragments from the Saṁyuktāgama discovered in Bamiyan and Eastern Turkestan. In <span class="author">Enomoto</span> Fumio, <span class="author">Hartmann</span>, Jens-Uwe, and <span class="author">Matsumura</span> Hisashi (eds) Sanskrit-Texte aus dem buddhistischen Kanon: Neuentdeckungen und Neueditionen (= Sanskrit-Wörterbuch der buddhistischen Texte aus den Turfan-Funden, Beiheft 2), Göttingen: 7–16.`}
                </li>
                <li>
                  ${_`<span class="author">Enomoto</span>, Fumio 1994. A comprehensive study of the Chinese Saṁyuktāgama: Indic texts corresponding to the Chinese Saṁyuktāgama as found in the Sarvāstivāda-Mūlasarvāstivāda literature. Part 1: *Saṁgītanipāta. Kyoto: Kacho Junior College.`}
                </li>
                <li>
                  ${_`<span class="author">Enomoto</span>, Fumio 1997. Sanskrit Fragments from the Saṁgītanipāta of the Saṁyuktāgama. In <span class="author">Kieffer-Pülz</span>, Petra and <span class="author">Hartmann</span>, Jens-Uwe (eds), Bauddhavidyasudhakarah: Studies in Honour of Heinz Bechert on the Occasion of his 65th birthday, Swisstal-Odendorf, India et Tibetica 30: 91–105.`}
                </li>
                <li>
                  ${_`<span class="author">Feer</span>, Léon 1883. Fragments extraits du Kanjour (= Annales du Musée Guimet, tome 5). Paris: E. Leroux.`}
                </li>
                <li>
                  ${_`<span class="author">Foguang</span> 1972–1987. Foguang Dazangjing, Ahan zang: Za Ahan (1972), Zhong Ahan (1984), Chang Ahan (1985), Zengyi Ahan (1987) [Foguang Tripiṭaka, Āgama: Saṁyuktāgama (1972), Madhyamāgama (1984), Dīrghāgama (1985), Ekottarikāgama (1987)]. Kaohsiung: Foguang.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1982. Bonbun Daihongyō engisetsu no fukugen ni tsuite [On a restoration of the pratītyasamutpāda in the Mahāvadānasūtra]. <cite>Bukkyō Shigaku Kenkyū</cite> 24/2: 26–43.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1985a. The Mahāvadāna sūtra: A reconstruction of chapters <span class="roman_numerals">IV</span> and <span class="roman_numerals">V</span>. <cite>Bukkyō Daigaku Daigakuin Kenkyū Kiyō</cite> 13: 17–52.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1985b. Bonbun Daihongyō no fukugen ni kansuru jakkan no mondai [Some problems relating to the reconstruction of the Sanskrit Mahāvadānasūtra]. <cite>Indogaku Bukkyōgaku Kenkyū</cite> 33.2 (Mar): 547–548.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1987a. Bonbun Daihongyō dai-ni shō oboegaki [A note on chapter 2 of the Mahāvadānasūtra]. <cite>Bukkyō Ronsō</cite> 31 (Sep): 121–124.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1987b. Bonbun Daihongyō shahon Cat. No. 498 (= MAV 82, 83) ni kansuru chūkan hōkoku [Provisional report on the MAV Ms. Cat. No. 498]. <cite>Bukkyō Bunka Kenkyūsho Shohō</cite> 4: 20–19.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1987c. Vipaśyin-Butsu ichie sanga no ninzū o megutte: Bonbun Daihongyō dai-jusshō kessonbubun no fukugen [On the number of bhikṣus in Buddha Vipaśyin’s first Sangha: A reconstruction of the lost part of chapter 10 of the Mahāvadānasūtra]. <cite>Jōdo-shū Kyōgakuin Kenkyūsho-hō</cite> 9: 22–26.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1988a. Daihongyō to Hasōji ni miru kyōtsū no dentō to chihōteki hensen, tokuni Bosatsu-tanjō-densetsu o chūshin to shite [Common tradition and local development of the Mahāvadānasūtra and the Saṁghabhedavastu, particularly focusing on the Bodhisattva’s birth legend]. <cite>Hōnen Gakkai Ronsō</cite> 6: 5–22.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 1988b. Higashi Torukisutan Ubu no dokuju kyōten—Nagaropanavyākaraṇa (= Nagarasūtra)—to mayoke [A recitation of the Sarvāstivādins in Eastern Turkestan—the Nagaropamavyākaraṇa (= Nagarasūtra)—and a charm]. <cite>Sankō Bunka Kenkyūsho Nenpō</cite> 20: 27–49.`}
                </li>
                <li>
                  ${_`<span class="author">Fukita</span>, Takamichi 2003. <cite>The Mahāvadānasūtra: A new edition based on manuscripts discovered in northern Turkestan</cite> (= <cite>Sanskrit-Wörterbuch der buddhistischen Texte aus den Turfan-Funden</cite>, Beiheft 10). Göttingen: Vandenhoeck & Ruprecht.`}
                </li>
                <li>
                  ${_`<span class="author">Glass</span>, Andrew. 2007. <cite>Four Gāndhārī Saṁyuktāgama sūtras: Senior Kharoṣṭhī fragment 5.</cite> (= <cite>Gandhāran Buddhist Texts, vol. 4</cite>). Seattle and London: University of Washington Press.`}
                </li>
                <li>
                  ${_`<span class="author">Gnoli</span>, Raniero 1977. <cite>The Gilgit manuscript of the Saṅghabhedavastu: Being the 17th and last section of the Vinaya of the Mūlasarvāstivādin</cite>, Part <span class="roman_numerals">I</span> (= <cite>Serie Orientale Roma</cite>, <span class="roman_numerals">XLIX</span>, 1). Roma: Istituto Italiano per il Medio ed Estremo Oriente.`}
                </li>
                <li>
                  ${_`<span class="author">Gnoli</span>, Raniero 1978. <cite>The Gilgit manuscript of the Saṅghabhedavastu: Being the 17th and last section of the Vinaya of the Mūlasarvāstivādin</cite>, Part <span class="roman_numerals">II</span> (= <cite>Serie Orientale Roma</cite>, <span class="roman_numerals">XLIX</span>, 2). Roma: Istituto Italiano per il Medio ed Estremo Oriente.`}
                </li>
                <li>
                  ${_`<span class="author">Habata</span>, Hiromi 2007. <cite>Die zentralasiatischen Sanskrit-Fragmente des Mahāparinirvāna-Mahāsūtra: Kritische Ausgabe des Sanskrittextes und seiner tibetischen Übertragung im Vergleich mit den chinesischen Übersetzungen</cite>. Marburg: Indica et Tibetica.`}
                </li>
                <li>
                  ${_`<span class="author">Hahlweg</span>, Klaus 1954. <cite>Das Mahāgovinda-Sūtra, eine vergleichende Analyse der indischen und chinesischen Versionen</cite>, dissertation, University of München.`}
                </li>
                <li>
                  ${_`<span class="author">Hahn</span>, Michael 1977. Das Saptamaithunasaṁyuktasūtra: Ein Sūtra des Ekottarikāgama. In <span class="author">Härtel</span>, Herbert (ed.), <cite>Beiträge zur Indienforschung, Ernst Waldschmidt zum 80. Geburtstag gewidmet</cite>, Berlin: Museum für indische Kunst, 205–224.`}
                </li>
                <li>
                  ${_`<span class="author">Harrison</span>, Paul 1997. The Ekottarikāgama Translations of An Shigao. In Bauddhavidyasudhakarah: Studies in Honour of Heinz Bechert. <span class="author">Kieffer-Pülz</span>, Petra. and <span class="author">Hartmann</span>, Jens-Uwe (eds). Swisstal-Oldendorf, pp. 261–283.`}
                </li>
                <li>
                  ${_`<span class="author">Harrison</span>, Paul 2002. Another Addition to the An Shigao Corpus? Preliminary Notes on an Early Chinese Saṁyuktāgama Translation. In Sakurabe Ronshu Committee (ed.), <cite>Early Buddhism and Abhidharma Thought: In Honor of Doctor Hajime Sakurabe on His Seventy-seventh Birthday</cite>, Kyoto: Heirakuji Shoten, 1–32.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 1989. Fragmente aus dem Dīrghāgama der Sarvāstivādins. In <span class="author">Enomoto</span> Fumio, <span class="author">Hartmann</span>, Jens-Uwe, and <span class="author">Matsumura</span> Hisashi (eds), Sanskrit-Texte aus dem buddhistischen Kanon: Neuentdeckungen und Neueditionen (= Sanskrit-Wörterbuch der buddhistischen Texte aus den Turfan-Funden, Beiheft 2), Göttingen: Vandenhoeck & Ruprecht, 37–67.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 1991. <cite>Untersuchungen zum Dīrghāgama der Sarvāstivādins</cite>. Habilitationsschrift. Göttingen: Georg-August-Universität.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 1998. Sanskrit Fragments from the <i>Āgamas</i> (<span class="roman_numerals">I</span>): The Aṅgulimālāsūtra. <cite>Indologica Taurinensia</cite> 23/24: 351–362.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 2000. Zu einer neuen Handschrift des Dīrghāgama. In <cite>Vividharatnakaraṇḍaka: Festgabe für Adelheid Mette (= Indica et Tibetica: Monographien zu den Sprachen und Literaturen des indo-tibetischen Kulturraumes Band 37)</cite>. C Chojnacki et al. (eds). Swisstal-Odendorf: Indica und Tibetica, pp. 359–367.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 2002. More Fragments of the Caṅgīsūtra. In <span class="author">Braarvig</span>, Jens (ed). <cite>Buddhist Manuscripts</cite> vol. <span class="roman_numerals">II</span> (= <cite>Manuscripts in the Schøyen Collection</cite> <span class="roman_numerals">III</span>), Oslo: Hermes Publishing, 1–16.`}
                </li>
                <li>
                  ${_`<span class="author">Hartmann</span>, Jens-Uwe 2004. Contents and structure of the Dīrghāgama of the (Mūla)-Sarvāstivādins. <cite>Annual report of the International Research Institute for Advanced Buddhology at Soka University</cite> 7: 119–137.`}
                </li>
                <li>
                  ${_`<span class="author">Hoernle</span>, A. F. Rudolf 1916. <cite>Manuscript remains of Buddhist literature found in Eastern Turkestan: Facsimiles of manuscripts in Sanskrit, Khotanese, Kuchean, Tibetan and Chinese, with transcripts, translations and notes, edited in conjunction with other scholars, with critical introductions and vocabularies</cite>, vol. 1. Oxford. Reprinted 1970, St. Leonards: Ad Orientem.`}
                </li>
                <li>
                  ${_`<span class="author">Hoffmann</span>, Helmut 1939. Bruchstücke des Ātāṭātikasūtra aus dem zentralasiatischen Sanskritkanon der Buddhisten (= <cite>Kleinere Sanskrit-Texte</cite> <span class="roman_numerals">V</span>). Leipzig: F. A. Brockhaus. Reprinted 1987 in <span class="author">Sander</span>, Lore (ed.), <cite>Nachträge zu “Kleinere Sanskrit-Texte, Heft <span class="roman_numerals">V</span></cite>” (= <cite>Monographien zur indischen Archäologie, Kunst und Philologie</cite>, 3), Wiesbaden: Franz Steiner.`}
                </li>
                <li>
                  ${_`<span class="author">Honjō</span>, Yoshifumi 1984. <cite>A Table of Āgama-Citations in the Abhidharmakośa and the Abhidharmakośopāyikā</cite>. Kyoto.`}
                </li>
                <li>
                  ${_`<span class="author">Hosoda</span>, Noriaki 1989a. Sanskrit fragments from the Parivrājakasaṁyukta of the Saṁyuktāgama (1). In <cite>Indian Philosophy and Buddhism: Essays in honour of Professor Kotatsu Fujita on his sixtieth birthday</cite>: 185–206. Kyoto.`}
                </li>
                <li>
                  ${_`<span class="author">Hosoda</span>, Noriaki 1989b. Bonbun Zōagongyō Busshosetsuhon Gedōsōō (2) [Sanskrit fragments from the Parivrājakasaṁyukta of the Saṁyuktāgama (2)]. <cite>Hokkaidō Journal of Indological and Buddhist Studies</cite> 4: 140–153.`}
                </li>
                <li>
                  ${_`<span class="author">Hosoda</span>, Noriaki 1989c. Torufan shōrai mokuhansatsu Bonbun Zōagongyō danken: R. Pischel kōhyō Bonbun danken ni tsuite [Fragmentary woodblock mss of the Sanskrit Saṁyuktāgama from Turfan: On Sanskrit fragments published by R. Pischel]. <cite>Indogaku Bukkyōgaku Kenkyū</cite> 37.2: 540–546.`}
                </li>
                <li>
                  ${_`<span class="author">Hosoda</span>, Noriaki 1991. Bonbun Zōagongyō Busshosetsuhon Gedōsōō (3) [Sanskrit fragments from the Parivrājakasaṁyukta of the Saṁyuktāgama (3)]. <cite>Hokkaidō Journal of Indological and Buddhist Studies</cite> 6: 172–191.`}
                </li>
                <li>
                  ${_`<span class="author">Johnston</span>, E. H. 1995. <cite>Aśvaghoṣa’s Buddhacarita or Acts of the Buddha</cite>. Delhi: Munshiram Manoharlal.`}
                </li>
                <li>
                  ${_`<span class="author">Kuan</span>, Tse-Fu 2007. Annotated Translation of the Chinese Version of the Kāyagatāsati Sutta. <cite>Indian International Journal of Buddhist Studies</cite> 8: 175–194.`}
                </li>
                <li>
                  ${_`<span class="author">Kuan</span>, Tse-Fu 2008. <cite>Mindfulness in Early Buddhism: New Approaches through Psychology and Textual Analysis of Pali, Chinese, and Sanskrit Sources</cite> (<cite>Routledge Critical Studies in Buddhism</cite>) London: Routledge.`}
                </li>
                <li>
                  ${_`<span class="author">Kudara</span>, Kōgi et al. 1983. Uigurische Āgama-Fragmente (1). <cite>Altorientalische Forschungen</cite> 10: 269–309.`}
                </li>
                <li>
                  ${_`<span class="author">Kudara</span>, Kōgi et al. 1990. Uigurische Āgama-Fragmente (2). <cite>Altorientalische Forschungen</cite> 17: 130–145.`}
                </li>
                <li>
                  ${_`<span class="author">Kudara</span>, Kōgi et al. 1995. Uigurische Āgama-Fragmente (3). <cite>Bukkyō Bunka Kenkyū sho Kiyō</cite> 34: 23–84.`}
                </li>
                <li>
                  ${_`<span class="author">Kudo</span>, Noriyuki 2004. <cite>The Karmavibhaṅga</cite>. <cite>Transliterations and Annotations of the Original Sanskrit Manuscripts from Nepal.</cite> Tokyo: Soka University.`}
                </li>
                <li>
                  ${_`<span class="author">Kudo</span>, Noriyuki et al. 2006a. The First Three Folios of Manuscript B of the Karmavibhanga. <cite>Annual Report of the International Research Institute for Advanced Buddhology at Soka University</cite>, vol. 9 pp. 33–42.`}
                </li>
                <li>
                  ${_`<span class="author">Kudo</span>, Noriyuki 2006b. One More Manuscript of the Karmavibhanga in the National Archives of Nepal, Kathmandu: Transliteration of Manuscript E (1). <cite>Annual Report of the International Research Institute for Advanced Buddhology at Soka University</cite>, vol. 9 pp. 43–60.`}
                </li>
                <li>
                  ${_`<span class="author">La Vallée Poussin</span>, Louis de 1907. Mss. Cecil Bendall. <cite>Journal of the Royal Asiatic Society of Great Britain and Ireland</cite>: 375–379.`}
                </li>
                <li>
                  ${_`<span class="author">La Vallée Poussin</span>, Louis de 1911. Documents Sanscrits de la Second Collection M. Stein. <cite>Journal of the Royal Asiatic Society</cite>: 759–777 and 1063–1079.`}
                </li>
                <li>
                  ${_`<span class="author">La Vallée Poussin</span>, Louis de 1913. Documents sanskrit de la seconde collection M. A. Stein. Fragments du Saṁyuktakāgama. <cite>Journal of the Royal Asiatic Society of Great Britain and Ireland</cite>: 569–580.`}
                </li>
                <li>
                  ${_`<span class="author">Lefmann</span>, S. 1902. <cite>Lalita Vistara: Leben und Lehre des Çakya-Buddha, Textausgabe mit Varianten-, Metren- und Wörterverzeichnis</cite>. Halle: Verlag der Buchhandlung des Waisenhauses.`}
                </li>
                <li>
                  ${_`<span class="author">Lévi</span>, Sylvain 1904. Le Saṁyuktāgama sanscrit et les feuillets Grünwedel. <cite>T’oung Pao</cite> <span class="roman_numerals">II</span> 5: 297–307.`}
                </li>
                <li>
                  ${_`<span class="author">Lévi</span>, Sylvain 1910. Documents de l’Asie Central (Mission Pelliot). Textes sanscrits de Touen-Houang: Nidâna-Sûtra, Daçabala-Sûtra, Dharmapada, Hymne de Mâtṛceṭa. <cite>Journal Asiatique</cite>, sér. 10, 16: 433–456.`}
                </li>
                <li>
                  ${_`<span class="author">Lévi</span>, Sylvain 1925. Notes Indiennes. <cite>Journal Asiatique</cite> 206: 17–35.`}
                </li>
                <li>
                  ${_`<span class="author">Lévi</span>, Sylvain 1932. <cite>Mahākarmavibhaṅga (La Grande Classification des Actes) et Karmavibhaṅgopadeśa (Discussion sur le Mahā Karmavibhaṅga), Textes sanscrits rapportés du Népal, édités et traduits avec les textes parallèles en Sanscrit, en Pali, en Tibétain, en Chinois et en Koutchéen</cite>. Paris: Librairie Ernest Leroux.`}
                </li>
                <li>
                  ${_`<span class="author">Lévi</span>, Sylvain 1933. <cite>Fragments de Textes Koutchéens: Udānavarga, Udānastotra, Udānālaṁkāra et Karmavibhaṅga, Publiés et traduits avec un vocabulaire et une introduction sur le ‘Tocharien’ (Cahiers de la Société Asiatique, Première Série)</cite>. Paris: Imprimerie Nationale.`}
                </li>
                <li>
                  ${_`<span class="author">Maggi</span>, Mauro 1995. <cite>The Khotanese Karmavibhaṅga</cite> (= <cite>Serie Orientale Roma</cite>, <span class="roman_numerals">LXXIV</span>). Roma: Istituto Italiano per il Medio ed Estremo Oriente.`}
                </li>
                <li>
                  ${_`<span class="author">Matsuda</span>, Kazunobu 1996. Bonbun Chū-agon no Katomandō dankan (New Sanskrit fragments of the Madhyamāgama from the Cecil Bendall mss. in the National Archives, Kathmandu). <cite>Indogaku Bukkyōgaku Kenkyū</cite> 44/2 (Mar), 868–862 (113–119).`}
                </li>
                <li>
                  ${_`<span class="author">Matsumura</span>, Hisashi 1985. Raitawarakyō no tenkai no ichi danmen [One aspect of the development of the Rāṣṭrapālasūtra]. <cite>Bukkyō Kenkyū</cite> 15: 39–62.`}
                </li>
                <li>
                  ${_`<span class="author">Matsumura</span>, Hisashi 1988. <cite>The Mahāsudarśanāvadāna and the Mahāsudarśanasūtra</cite> (= <cite>Bibliotheca Indo-Buddhica</cite> No. 47). Delhi: Sri Satguru Publications.`}
                </li>
                <li>
                  ${_`<span class="author">Maue</span>, Dieter 1985. Sanskrit-uigurische Fragmente des Āṭānāṭikasūtra und des Āṭānāṭiyahṛdaya. <cite>Ural-Altaische Jahrbücher</cite> 5: 98–122.`}
                </li>
                <li>
                  ${_`<span class="author">Meltzer</span>, Gudrun 2006. <cite>Ein Abschnitt aus dem Dīrghāgama</cite>. PhD thesis. München: Ludwig-Maximilians-Universität.`}
                </li>
                <li>
                  ${_`<span class="author">Minayeff</span>, <span class="roman_numerals">I</span>. P. and <span class="author">Oldenburg</span>, S. 1983. <cite>Buddhist Texts from Kashgar and Nepal</cite>. New Delhi.`}
                </li>
                <li>
                  ${_`<span class="author">Mitra</span>, Raj. (ed & trl) 1877. The Lalita Vistara or Memoirs of the Early Life of Śākya Siñha. (= Biliotheca Indica vol. 15). Calcutta: C. B. Lewis.`}
                </li>
                <li>
                  ${_`<span class="author">Mittal</span>, Kusum 1957. <cite>Dogmatische Begriffsreihen im älteren Buddhismus <span class="roman_numerals">I</span></cite>: Fragmente des Daśottarasūtra aus zentralasiatischen Sanskrit-Handschriften [<span class="roman_numerals">i–viii</span>] (= <cite>Sanskrittexte aus den Turfanfunden</cite> <span class="roman_numerals">IV</span>). Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Miyasaka</span>, Yusho 1970. Mahāsamayasūtra, <cite>Acta Indologica</cite> <span class="roman_numerals">I</span>: 109–135.`}
                </li>
                <li>
                  ${_`<span class="author">Nagashima</span>, Jundo 2009. The Sanskrit Fragments Or. 15009/51–90 in the Hoernle Collection. In <cite>Buddhist Manuscripts from Central Asia: The British Library Sanskrit Fragments</cite>. S. Karashima et al. (eds). Tokyo: The International Research Institute for Advanced Buddhology, Soka University, vol. 2, pp. 128–159.`}
                </li>
                <li>
                  ${_`<span class="author">Nakatani</span>, Hideaki 1986. Un fragment xylographique de l’Upāli-sūtra conservé au Musée Guimet. <cite>Bulletin d’Études Indiennes</cite> 4: 305–319.`}
                </li>
                <li>
                  ${_`<span class="author">Neumann</span>, Karl Eugen 1896/1995. <cite>Die Reden des Buddha: Mittlere Sammlung, aus dem Pāli-Kanon übersetzt</cite>. Herrnschrot: Beyerlein & Steinschulte.`}
                </li>
                <li>
                  ${_`<span class="author">Oberlies</span>, Thomas 2003. Ein bibliographischer Überblick über die kanonischen Texte der Śrāvakayāna-Schulen des Buddhismus (ausgenommen der des Mahāvihāra-Theravāda). <cite>Wiener Zeitschrift für die Kunde Südasiens</cite> 47: 37–84.`}
                </li>
                <li>
                  ${_`<span class="author">Ōkubo</span>, Yusen 1982. The Ekottara-āgama Fragments of the Gilgit Manuscript: Romanized Text. <cite>Bukkyōgaku</cite> <cite>Seminā</cite> 35: 120–91.`}
                </li>
                <li>
                  ${_`<span class="author">Pāsādika</span>, Bhikkhu 1989: <cite>Kanonische Zitate im Abhidharmakośabhāṣya des Vasubandhu</cite>. Göttingen: Vandenhoeck & Ruprecht.`}
                </li>
                <li>
                  ${_`<span class="author">Pauly</span>, Bernard 1957–1967. Fragments Sanskrits de Haute Asie (Mission Pelliot), <cite>Journal Asiatique</cite> vol. 245 (1957) pp. 281–307; vol. 247 (1959) pp. 203–249; vol. 248 (1960) pp. 213–258 and pp. 509–538; vol. 249 (1961) pp. 333–410; vol. 250 (1962) pp. 593–612; vol. 252 (1964) pp. 197–271; vol. 253 (1965) pp. 83–121 and 183–187; vol. 254 (1966) pp. 245–304; vol. 255 (1967) pp. 231–241.`}
                </li>
                <li>
                  ${_`<span class="author">Pauly</span>, Bernard 1959. Fragments sanskrits de Haute Asie (Mission Pelliot). Journal Asiatique (Année 1959): 247, 203–249.`}
                </li>
                <li>
                  ${_`<span class="author">Peipina</span>, Lita 2008. <cite>The Piṅgalātreya sūtra of the (Mūla-)sarvāstivādins: Its Edition and Study. Investigation of the Piṁgalātreya sūtra’s status within the Dīrghāgama “Collection of Long (Discourses of the Buddha)”</cite>. MA thesis, University of Oslo.`}
                </li>
                <li>
                  ${_`<span class="author">Peyrot</span>, Michael 2008. More Sanskrit, Tocharian B Bilingual Udānavarga Fragments. <cite>Indogermanische Forschungen, Zeitschrift für Indogermanistik und allgemeine Sprachwissenschaft</cite> 113: 83–125.`}
                </li>
                <li>
                  ${_`<span class="author">Pischel</span>, R. 1904a. Bruchstücke des Sanskritkanons der Buddhisten aus Idykutšari, Chinesisch-Turkestan. <cite>Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften in Berlin</cite> 25: 807–827.`}
                </li>
                <li>
                  ${_`<span class="author">Pischel</span>, R. 1904b. Neue Bruchstücke des Sanskritkanons der Buddhisten aus Idykutšari, Chinesisch-Turkestan. <cite>Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften in Berlin</cite> 25: 1138–1145.`}
                </li>
                <li>
                  ${_`<span class="author">Rosenberg</span>, F. 1920. Deux fragments sogdien-bouddhiques du Ts’ien-fo-tong de Touen-Houang, <span class="roman_numerals">II</span>: Fragment d’un Sūtra. <cite>Izvestija Rossijskoj akademii nauk</cite>: 399–420.`}
                </li>
                <li>
                  ${_`<span class="author">Salomon</span>, Richard 2000. <cite>A Gāndhārī Version of the Rhinoceros Sūtra, British Library Kharoṣṭhī Fragment 5B</cite> (= <cite>Gandhāran Buddhist Texts 1</cite>) Seattle: University of Washington Press.`}
                </li>
                <li>
                  ${_`<span class="author">Salomon</span>, Richard 2003. The Senior Manuscripts: Another Collection of Gandhāran Buddhist Scrolls. <cite>Journal of the American Oriental Society</cite> 123/1: 73–92.`}
                </li>
                <li>
                  ${_`<span class="author">Sander</span>, Lore 1987. <cite>Nachträge zu “Kleine Sanskrit-Texte Heft <span class="roman_numerals">iii–v</span>”</cite> (= <cite>Monographien zur indischen Archäologie, Kunst und Philologie</cite>, 3). Wiesbaden: Franz Steiner.`}
                </li>
                <li>
                  ${_`<span class="author">Schlingloff</span>, Dieter 1961. Zum Mahāgovindasūtra. <cite>Mitteilungen des Instituts für Orientforschung, Deutsche Akademie der Wissenschaften zu Berlin</cite> 7: 32–50.`}
                </li>
                <li>
                  ${_`<span class="author">Schlingloff</span>, Dieter 1962. <cite>Dogmatische Begriffsreihen im älteren Buddhismus Ia: Daśottarasūtra <span class="roman_numerals">ix–x</span></cite> (= <cite>Sanskrittexte aus den Turfanfunden,</cite> IVa). Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Schlingloff</span>, Dieter 1963. Zum Mahāgovindasūtra. <cite>Mitteilungen des Instituts für Orientforschung, Deutsche Akademie der Wissenschaften zu Berlin</cite> 8: 38–44.`}
                </li>
                <li>
                  ${_`<span class="author">Schlingloff</span>, Dieter 1964. <cite>Ein Buddhistisches Yogalehrbuch: Textband</cite>. (= Sanskrittexte aus den Turfanfunden <span class="roman_numerals">VII</span>). Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Schmidt</span>, <span class="roman_numerals">I</span>. J. 1843. <cite>Der Weise und der Thor, aus dem Tibetischen übersetzt und mit dem Originaltexte herausgegeben</cite>. St. Petersburg: Kaiserliche Akademie der Wissenschaften.`}
                </li>
                <li>
                  ${_`<span class="author">Senart</span>, Emile 1882. <cite>Le Mahāvastu</cite> (vol. 1): <cite>Texte sanscrit publié pour la première fois et accompagné d’introductions et d’un commentaire (Société Asiatique, Collection d’Ouvrages Orientaux, Seconde série</cite>. Paris: Imprimerie Nationale.`}
                </li>
                <li>
                  ${_`<span class="author">Senart</span>, Emile 1890. <cite>Le Mahāvastu</cite> (vol. 2): <cite>Texte sanscrit publié pour la première fois et accompagné d’introductions et d’un commentaire (Société Asiatique, Collection d’Ouvrages Orientaux, Seconde série</cite>. Paris: Imprimerie Nationale.`}
                </li>
                <li>
                  ${_`<span class="author">Senart</span>, Emile 1897. <cite>Le Mahāvastu</cite> (vol. 3): <cite>Texte sanscrit publié pour la première fois et accompagné d’introductions et d’un commentaire (Société Asiatique, Collection d’Ouvrages Orientaux, Seconde série</cite>. Paris: Imprimerie Nationale.`}
                </li>
                <li>
                  ${_`<span class="author">Shōgaito</span>, Masahiro 1998. Three Fragments of Uighur Āgama. In <span class="author">Laut</span> and <span class="author">Ölmez</span> (eds.), <cite>Bahşi Ögdisi, Festschrift für Klaus Röhrborn, Freiburg/Istanbul</cite>, 363–378.`}
                </li>
                <li>
                  ${_`<span class="author">Shōgaito</span>, Masahiro 2002. Fragments of Uighur Daśabala Sūtra. In <cite>Splitter aus der Gegend von Turfan: Festschrift für Peter Zieme</cite> (<cite>Türk Dilleri Arastirmalari Dizisi, 35</cite>). M. Ölmez et al. (eds). Berlin pp. 291–297.`}
                </li>
                <li>
                  ${_`SHT, <cite>Sanskrithandschriften aus den Turfanfunden</cite>. 1965 (vol. i) ed. W. Clawiter, L. Holzmann, E. Waldschmidt; 1968 (vol. ii) ed. idem; 1971 (vol. iii) ed. idem; 1980 (vol. iv) ed. L. Sander, E. Waldschmidt; 1985 (vol. v) ed. idem; 1989 (vol. vi) ed. H. Bechert, K. Wille; 1995 (vol. vii) ed. idem; 2000 (vol. viii) ed. idem; 2004 (vol. ix) ed. idem; 2008 (vol. x) ed. K. Wille. Wiesbaden/Stuttgart: Franz Steiner.`}
                </li>
                <li>
                  ${_`<span class="author">Sieg</span>, E. 1938. Die Kutschischen Karmavibhaṅga Texte der Bibliothèque Nationale in Paris. <cite>Zeitschrift für Vergleichende Sprachforschung auf dem Gebiete der Indogermanischen Sprachen</cite>, 65: 165–172.`}
                </li>
                <li>
                  ${_`<span class="author">Sieg</span>, E. et al. 1949. <cite>Tocharische Sprachreste, Sprache B. Die Udānālaṅkāra-Fragmente.</cite> Göttingen: Vandenhoeck & Ruprecht.`}
                </li>
                <li>
                  ${_`<span class="author">Silverlock</span>, Blair 2009. <cite>An Edition, Translation, and Study of the Bodha-sūtra from the Manuscript of the Gilgit Dīrghāgama of the (Mūla-)Sarvāstivādins.</cite> BA thesis, University of Sydney.`}
                </li>
                <li>
                  ${_`<span class="author">Simon</span>, Walther 1970. A Note on the Tibetan Version of the Karmavibhaṅga Preserved in the MS Kanjur of the British Museum. <cite>Bulletin of the School of Oriental and African Studies</cite> 33: 161–166.`}
                </li>
                <li>
                  ${_`<span class="author">Skilling</span>, Peter 1994. <cite>Mahāsūtras: Great Discourses of the Buddha</cite>, Volume <span class="roman_numerals">I</span>: Texts. Oxford: Pali Text Society.`}
                </li>
                <li>
                  ${_`<span class="author">Skilling</span>, Peter 1997. Discourse on the Four Kinds of Karma. <cite>Journal of Religious Studies</cite> 7: 86–91.`}
                </li>
                <li>
                  ${_`<span class="author">Skilling</span>, Peter 2000. Vasubandhu and the Vyākhāyukti Literature. <cite>Journal of the International Association of Buddhist Studies</cite> 23,2: 297–350.`}
                </li>
                <li>
                  ${_`<span class="author">Skilling</span>, Peter 2011. Discourse on the Twenty-two Faculties, Translated from Śamathadeva’s Upāyikā-ṭīkā. In <cite>Felicitation Volume for Professor Samtani</cite>. L. Shravak (ed.) (forthcoming).`}
                </li>
                <li>
                  ${_`<span class="author">Somaratne</span>, G. A. 1999. <cite>Saṁyutta-nikāya Vol. <span class="roman_numerals">I</span>.</cite> Oxford: Pali Text Society.`}
                </li>
                <li>
                  ${_`<span class="author">Speyer</span>, J. S. 1970a (1906). <i>Avadānaśataka: A Century of Edifying Tales Belonging to the Hīnayāna</i>, vol. 1 <cite>(Bibliotheca Buddhica <span class="roman_numerals">III</span>)</cite>. Osnabrück: Biblio Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Speyer</span>, J. S. 1970b (1909). <cite>Avadānaśataka: A Century of Edifying Tales Belonging to the Hīnayāna</cite>, vol. 2 <cite>(Bibliotheca Buddhica <span class="roman_numerals">III</span>)</cite>. Osnabrück: Biblio Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Stache-Rosen</span>, Valentina 1968. <cite>Dogmatische Begriffsreihen im älteren Buddhismus <span class="roman_numerals">II</span>: Das Saṅgītisūtra und sein Kommentar Saṅgītiparyāya, nach Vorarbeiten von Kusum Mittal bearbeitet</cite>. Teil 1–2 (= <cite>Sanskrittexte aus den Turfanfunden</cite> <span class="roman_numerals">IX</span>). Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Tekin</span>, Şinasi 1980. <cite>Maitrisimit nom bitig. Die Uigurische Übersetzung eines Werkes der Buddhistischen Vaibhāṣika Schule</cite>. Berlin: Akademie Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Thich</span>, Minh Chau 1964. <cite>The Chinese Madhyama Āgama and the Pāli Majjhima Nikāya: A Comparative Study</cite>. Reprinted 1991, Delhi: Motilal Banarsidass.`}
                </li>
                <li>
                  ${_`<span class="author">Thich</span>, Nhat Hanh 1996. <cite>Breathe! You are Alive: Sutra on the Full Awareness of Breathing</cite>. Berkeley: Parallax Press.`}
                </li>
                <li>
                  ${_`<span class="author">Thich</span> Huyen-vi and <span class="author">Pāsādiko</span> Bhikkhu 1984–2004. [Partial Translation of Ekottarikāgama, T125]. <cite>Buddhist Studies Review</cite> 1.2 onwards.`}
                </li>
                <li>
                  ${_`<span class="author">Tripāṭhi</span>, Chandrabhal 1962. Fünfundzwanzig Sūtras des Nidānasaṁyukta (= <cite>Sanskrittexte aus den Turfanfunden</cite> <span class="roman_numerals">VIII</span>). Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Tripāṭhi</span>, Chandrabhal 1980. Die Einleitung des Daśottarasūtra. <cite>Indianisme et Bouddhisme</cite> 23: 353–358.`}
                </li>
                <li>
                  ${_`<span class="author">Tripāṭhi</span>, Chandrabhal 1985. Saṅgīti-Sūtra, Nipāta <span class="roman_numerals">II</span>, und Ekottarāgama-Parallelen. In <span class="author">Bechert</span>, Heinz (ed.), <cite>Die Sprache der ältesten buddhistischen Überlieferung</cite>, Göttingen: Vandenhoeck & Ruprecht, 191–199.`}
                </li>
                <li>
                  ${_`<span class="author">Tripāṭhi</span>, Chandrabhal 1995. <cite>Ekottarāgama-Fragmente der Gilgit-Handschrift</cite>. Reinbek: Dr Inge Wezler Verlag für Orientalistische Fachpublikationen.`}
                </li>
                <li>
                  ${_`<span class="author">Vaidya</span>, P. L. 1958a. <cite>Avadāna-śataka (Buddhist Sanskrit Texts No. 19)</cite>. Darbhanga: Mithila Institute.`}
                </li>
                <li>
                  ${_`<span class="author">Vaidya</span>, P. L. 1958b. <cite>Lalita-vistaraḥ (Buddhist Sanskrit Texts No. 1)</cite>. Darbhanga: Mithila Institute.`}
                </li>
                <li>
                  ${_`<span class="author">Vaidya</span>, P. L. 1999. <cite>Divyāvadāna (Buddhist Sanskrit Texts No. 20)</cite>. Darbhanga: Mithila Institute.`}
                </li>
                <li>
                  ${_`<span class="author">Von Criegern</span>, Oliver 2002. <cite>Das Kūṭatāṇḍyasūtra, nach dem Dīrghāgama Manuskript herausgegeben und übersetzt.</cite> MA thesis. München: Ludwig-Maximilians-Universität.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1932. <cite>Bruchstücke buddhistischer Sūtras aus dem zentralasiatischen Sanskritkanon, <span class="roman_numerals">I</span>, herausgegeben und im Zusammenhang mit ihren Parallelversionen bearbeitet</cite> (= <cite>Kleinere Sanskrit-Texte</cite>, <span class="roman_numerals">IV</span>). Leipzig: Deutsche Morgenländishe Gesellschaft. Reprinted 1979, Wiesbaden: Franz Steiner.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1950–1951. <cite>Das Mahāparinirvāṇasūtra: Text in Sanskrit und Tibetisch, verglichen mit dem Pali nebst einer Übersetzung der chinesischen Entsprechung im Vinaya der Mūlasarvāstivādins, auf Grund von Turfan-handschriften</cite>. Teil <span class="roman_numerals">i–iii</span>. <cite>Abhandlungen der Deutschen Akademie der Wissenschaften zu Berlin, Klasse für Sprachen, Literatur und Kunst,</cite> 1949/1, 1950/2, 1950/3. Berlin: Akademie-Verlag.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1952a. Zur Śroṇakoṭikarṇa-Legende. <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1952/6: 129–151.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1952b. <cite>Das Catuṣpariṣatsūtra, eine Kanonische Lehrschrift über die Begründung der Buddhistischen Gemeinde</cite>. <cite>Text in Sanskrit und Tibetisch, verglichen mit dem Pali nebst einer Übersetzung der chinesischen Entsprechung im Vinaya der Mūlasarvāstivādins. Auf Grund von Turfan-Handschriten herausgegeben und bearbeitet</cite>. Teil <span class="roman_numerals">I</span>. Berlin: Akademie-Verlag = <cite>Abhandlungen der Deutschen Akademie der Wissenschaften zu Berlin, Klasse für Sprachen, Literatur und Kunst,</cite> 1952/2.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1953. <cite>Das Mahāvadānasūtra: Ein kanonischer Text über die sieben letzten Buddhas. Sanskrit, verglichen mit dem Pāli nebst einer Analyse der in chinesischer Übersetzung überlieferten Parallelversionen. Auf Grund von Turfan-Handschriften herausgegeben</cite>. Teil <span class="roman_numerals">i–ii</span>. <cite>Abhandlungen der deutschen Akademie der Wissenschaften zu Berlin, Klasse für Sprachen, Literatur und Kunst,</cite> 1952/8, 1954/3.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1955a. Zu einigen Bilinguen aus den Turfan-Funden. <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1955/1: 1–20. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.). <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht<cite>,</cite> 238–257.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1955b. Die Einleitung des Saṅgītisūtra. <cite>Zeitschrift der deutschen morgenländischen Gesellschaft</cite> 105: 298–318. Reprinted 1967 in B <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 258–278.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1956a. Ein Fragment des Saṁyuktāgama aus den “Turfan-Funden” (M476). <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1956/3: 45–53. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 279–287.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1956b. A fragment from the Saṁyuktāgama found in Chinese-Turkestan (“Turfan”). <cite>Adyar Library Bulletin</cite> 20: 213–228. (Revised translation of Waldschmidt 1956a).`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1957a. Identifizierung einer Handschrift des Nidānasaṁyukta aus den Turfanfunden. <cite>Zeitschrift der deutschen morgenländischen Gesellschaft</cite> 107: 372–401. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 288–317.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1957b. Sūtra 25 of the Nidānasaṁyukta. <cite>Bulletin of the School of Oriental and African Studies</cite> 20: 569–579. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 318–328.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1957c. Das Upasenasūtra, ein Zauber gegen Schlangenbiss aus dem Saṁyuktāgama. <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1957/2: 27–44. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 329–346.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1957d. <cite>Das Catuṣpariṣatsūtra, eine Kanonische Lehrschrift über die Begründung der Buddhistischen Gemeinde</cite>. <cite>Text in Sanskrit und Tibetisch, verglichen mit dem Pali nebst einer Übersetzung der chinesischen Entsprechung im Vinaya der Mūlasarvāstivādins. Auf Grund von Turfan-Handschriten herausgegeben und bearbeitet</cite>. Teil <span class="roman_numerals">II</span>. Berlin: Akademie-Verlag = <cite>Abhandlungen der Deutschen Akademie der Wissenschaften zu Berlin, Klasse für Sprachen, Literatur und Kunst,</cite> 1956/1.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1958. Ein Zweites Daśabalasūtra. <cite>Mitteilungen des Instituts für Orientforschung</cite> 6: 382–405. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 347–370.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1959a. Kleine Brahmi-Schriftrolle. <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1959/1: 1–25. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 371–395.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1959b. The Upasenasūtra, a charm against snake-bites from the Saṁyuktāgama. In <cite>Jñānamuktāvaī, Commemoration volume in honour of Johannes Nobel</cite>, New Delhi, 234–253.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1961a. Der Buddha preist die Verehrungswürdigkeit seiner Reliquien. <cite>Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse</cite> 1961.11: 375–385. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 417–427.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1961b. Über ein der Turfan-Handschrift TM 361 fälschlich zugeteiltes Sanskritfragment. <cite>Ural-Altäische Jahrbücher</cite> 33: 199–203. Reprinted 1967 in <span class="author">Bechert</span>, Heinz (ed.), <cite>Ernst Waldschmidt, Von Ceylon bis Turfan, Schriften zur Geschichte, Literatur, Religion und Kunst des indischen Kulturraumes. Festgabe zum 70. Geburtstag am 15. Juli 1967</cite>, Göttingen: Vandenhoeck & Ruprecht, 412–416.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1962. <cite>Das Catuṣpariṣatsūtra, eine Kanonische Lehrschrift über die Begründung der Buddhistischen Gemeinde</cite>. <cite>Text in Sanskrit und Tibetisch, verglichen mit dem Pali nebst einer Übersetzung der chinesischen Entsprechung im Vinaya der Mūlasarvāstivādins. Auf Grund von Turfan-Handschriten herausgegeben und bearbeitet</cite>. Teil <span class="roman_numerals">III</span>. Berlin: Akademie-Verlag = <cite>Abhandlungen der Deutschen Akademie der Wissenschaften zu Berlin, Klasse für Sprachen, Literatur und Kunst,</cite> 1960/1.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1968a. Drei Fragmente buddhistischer Sūtras aus den Turfan-handschriften. Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse 1968.1, 3–26. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner Verlag, 232–255.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1968b. Ein Beitrag zur Überlieferung vom Sthavira Śroṇa Koṭiviṁśa. In Mélanges d’indianisme. À la mémoire de Louis Renou (= Publications de l’Institut de Civilisation Indienne, Fasc. 28). Paris: E. de Boccard, 773–787. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner Verlag, 217–231.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1968c. A Note on Names and Surnames of Indra in a Fragment of a Buddhist Canonical Sanskrit Text from Central Asia, Journal of the Bihar Research Society, 54: 33–39. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner Verlag, 256–264.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1970a. Buddha frees the disc of the moon (Candrasūtra). Bulletin of the School of Oriental and African Studies 33: 179–183. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 296–301.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1970b. Fragment of a Buddhist Sanskrit text on cosmogony. In Tilakasiri, J. (ed.), Añjali. Papers on Indology and Buddhism. O. H. Vijesekera felicitation volume: 40–45. Peradeniya. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 290–295.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1972. A contribution to our knowledge of Sthavira Sroṇa Koṭhiviṁśa. In <span class="author">Hazra</span>, R. C. & <span class="author">Banerji</span>, S. C. (eds), S. K. De memorial volume, Calcutta, 107–116.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1976. “Teufeleien” in den Turfan-Sanskrittexten. In <span class="author">Franke</span>, H., <span class="author">Heissig</span>, W. & <span class="author">Treue</span>, W. (eds), Folia rara, Wolfgang Voigt <span class="roman_numerals">LXV</span>. diem natalem celebranti: 140–147. Wiesbaden: Franz Steiner. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 312–319.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1978. Mahāmaudgalyāyana’s sermon on the letting-in and not letting-in (of sensitive influences). Journal of the International Association of Buddhist Studies 1: 25–33. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 320–328.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1979. The Varṇaśatam. An eulogy of hundred epitheta of Lord Buddha spoken by the gṛhapati Upāli(n). Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse 1979.1: 1–19. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 329–345.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1980a. Central Asian sūtra fragments and their relation to the Chinese āgamas. In <span class="author">Bechert</span>, Heinz (ed.), Die Sprache der ältesten buddhistischen Überlieferung. Göttingen: Vandenhoeck & Ruprecht, 136–174. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften. Stuttgart: Franz Steiner, 370–408.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1980b. The Rāṣṭrapālasūtra in Sanskrit remnants from Central Asia. In Indianisme et Bouddhisme: Mélanges offerts à Mgr. Étienne Lamotte: 359–374. Louvain-la-Neuve: Institut Orientaliste de l’Université Catholique, Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 346–361.`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst 1980c. On a Sanskrit version of the Verahaccāni Sutta of the Saṁyuttanikāya. Nachrichten der Akademie der Wissenschaften in Göttingen, Philologisch-Historische Klasse 1980.4: 69–76. Reprinted 1989 in <span class="author">Bechert</span>, Heinz & <span class="author">Kieffer-Pülz</span>, Petra (eds), Ernst Waldschmidt, Ausgewählte kleine Schriften, Stuttgart: Franz Steiner, 362–369.`}
                </li>
                <li>
                  ${_`<span class="author">Weller</span>, Friedrich, 1935. Das tibetische Brahmajālasūtra. <cite>Zeitschrift für Indologie und Iranistik</cite>, 10: 1–61.`}
                </li>
                <li>
                  ${_`<span class="author">Wille</span>, Klaus 2002. Fragments of the Mahāparinirvāṇasūtra. In <span class="author">Braarvig</span>, Jens (ed.) <cite>Buddhist Manuscripts</cite> vol. <span class="roman_numerals">II</span> (= <cite>Manuscripts in the Schøyen Collection</cite> <span class="roman_numerals">III</span>): 17–24. Oslo: Hermes Publishing.`}
                </li>
                <li>
                  ${_`<span class="author">Wille</span>, Klaus 2005. Survey of the Sanskrit Manuscripts in the Turfan Collection. Vortrag anlässlich des Workshops <cite>Digitalisierung der chinesischen, tibetischen, syrischen und Sanskrit-Texte der Berliner Turfansammlung,</cite> Berlin, 02.06.2005.`}
                </li>
                <li>
                  ${_`<span class="author">Wille</span>, Klaus 2006. The Sanskrit Fragments Or. 15003 in the Hoernle Collection. <cite>Buddhist Manuscripts from Central Asia, The British Library Sanskrit Fragments</cite>, S. Karashima et al. (ed.), Tokyo: Soka University, vol. 1 pp 65–153.`}
                </li>
                <li>
                  ${_`<span class="author">Yinshun</span> 1971. <cite>Yuanshi Fojiao shengdian zhi jicheng</cite> [The Compilation of the Scriptures of Early Buddhism]. Reprinted 1988, Taipei: Zhengwen.`}
                </li>
                <li>
                  ${_`<span class="author">Yinshun</span> 1983. <cite>Za Ahan jing lun huibian</cite> [Saṁyuktāgama Sūtra and Commentary] (3 vols.). Taipei: Zhengwen.`}
                </li>
                <li>
                  ${_`<span class="author">Zhang</span>, Lixiang 2003. <cite>Das Śaṁkarakasūtra: Eine Übersetzung des Sanskrit-Textes im Vergleich mit der Pāli-Fassung</cite>. München.`}
                </li>
                <li>
                  ${_`<span class="author">Zhou</span>, Chungyang 2008. <cite>Das Kaivartisūtra der neuentdeckten Dīrghāgama-Handschrift: Eine Edition und Rekonstruction des Textes</cite>. MA thesis. Göttingen: Georg-August-Universität.`}
                </li>
                <li>
                  ${_`<span class="author">Zongtse</span>, Champa Thupten 1990. Udānavarga Band <span class="roman_numerals">III</span>. Der tibetische Text, unter Mitarbeit von Siglinde Dietz herausgegeben von Champa Tupten Zongtse (<cite>Sanskrittexte aus den Turfanfunden <span class="roman_numerals">X</span>, 3. Abhandlungen der Akademie der Wissenschaften in Göttingen, Philologisch-historische Klasse, Dritte Folge, Nr. 187</cite>). Göttingen: Vandenhoeck & Ruprecht.`}
                </li>
                <li>
                  ${_`<span class="author">Zürcher</span>, Erik 1995. Obscure Texts on Favourite Topics. Dao’an’s Anonymous Scriptures. In H. Schmidt-Glintzer (ed.), <cite>Das andere China</cite>. Wiesbaden: Harrassowitz, pp. 161–181.`}
                </li>
              </ul>
              <h3>${_`Vinaya parallels`}</h3>
              <ul>
                <li>
                  ${_`<span class="author">Banerjee</span>, Anukul Chandra. <cite>Sarvāstivāda Literature</cite>, The World Press Private Limited, 1979.`}
                </li>
                <li>
                  ${_`<span class="author">Banerjee</span>, Anukul Chandra. <cite>Two Buddhist Vinaya Texts in Sanskrit (Prātimokṣa sūtra and Bhikṣukarmavākya)</cite>, The World Press Private Limited, 1977.<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/5/5cc698a7147e40ce8e6efa6354cf4e63bf4289df.pdf">skt-mu-bu-pm-gbm3.pdf</a> (11.7 MB)<br/> SC ID: skt-mu-bu-pm-gbm3.`}
                </li>
                <li>
                  ${_`<span class="author">Beal</span>, Samuel. <cite>A Catena of Buddhist Scriptures from the Chinese</cite>, Trubner & Co., 1871.`}
                </li>
                <li>
                  ${_`<span class="author">Chandra</span>, Lokesh. <cite>Unpublished Gilgit Fragment of the Prātimokṣa Sūtra</cite><br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/a/a36850452675e4fabea360d3ad601ba496920bce.pdf">skt-mu-bu-pm-gbm2.pdf</a> (3.0 MB)<br/> SC ID: skt-mu-bu-pm-gbm2.`}
                </li>
                <li>
                  ${_`<span class="author">Clarke</span>, Shayne. <cite>Vinaya Mātṛkā—Mother of the Monastic codes, or Just Another Set of Lists?</cite>, Indo-Iranian Journal, 44: 77–120, 2004.`}
                </li>
                <li>
                  ${_`<span class="author">Finot</span>, Louis. <cite>Le Prātimokṣasūtra des Sarvāstivādins</cite>, Journale Asiatique, Nov–Dec, 1913, 465–558. (Including fragment of <cite>bhikṣuṇī prātimokṣa</cite>.)<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/0/0de2b67dae51dcec8e29eee49c6890037253de88.pdf">skt-sv-bu-pm-finot.pdf</a> (3.4 MB)<br/> SC ID: skt-sv-bu-pm-finot.`}
                </li>
                <li>
                  ${_`<span class="author">Frauwallner</span>, E. <cite>The Earliest Vinaya and the Beginnings of Buddhist Literature</cite>, Is. M.E.O. 1956.`}
                </li>
                <li>
                  ${_`Akira <span class="author">Hirakawa</span>, in collaboration with Zenno Ikuno and Paul Groner: <cite>Monastic Discipline for the Buddhist Nuns, an English translation of the Chinese text of the Mahāsaṁghika Bhiksuṇī Vinaya</cite>, K. P. Jayaswal Research Institute, Patna, 1982.`}
                </li>
                <li>
                  ${_`<span class="author">Horner</span>, I. B. <cite>The Book of the Discipline</cite>, Pali Text Society, vols. 1–6.`}
                </li>
                <li>
                  ${_`<span class="author">Kabalsingh</span>, Chatsumarn. <cite>The Bhikkhunī Patimokkha of the Six Schools</cite>, Thammasat University, 1991.`}
                </li>
                <li>
                  ${_`R. <span class="author">Nishimoto</span>, <cite>Rajū-yaku Jūju Bikuni Haradaimokusha Kaihon no Shutsugen narabini Shobu Sō-Ni Kaihon no Taishō Kenkyū</cite> (a recently discovered Bhipra of the Sarvāstivādins, translated by Kumārajīva, and a comparative study with the Bhipras of the other schools), Ōtani Gakuhō 9.2, 1928, pp. 27 (245)–60 (278) (with comprehensive comparative charts). <br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/9/9cd49b0ed139b2af3457c2475b155edd801bc72e.zip">nishimoto-all-compressed.zip</a> (27.3 MB).`}
                </li>
                <li>
                  ${_`<span class="author">Nolot</span>, Edith. <cite>Regles de Discipline des Nonnes Bouddhistes</cite>, College de France, 1991.`}
                </li>
                <li>
                  ${_`<span class="author">Prebish</span>, Charles S. <cite>A Survey of Vinaya Literature</cite>, Jin Luen Publishing House, Taipei, 1994.`}
                </li>
                <li>
                  ${_`<span class="author">Pachow</span>, W. <cite>A Comparative Study of the Pratimoksa: On the Basis of its Chinese, Tibetan, Sanskrit and Pali Versions </cite>, Motilal Banarsidass Publishers, 1955.`}
                </li>
                <li>
                  ${_`<span class="author">Rosen</span>, Valentina. <cite>Comparative Tables of Pratimoksha</cite><br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/6/69e671680c0d219e7d14585209abae0b384c8809.pdf">Valentina Rosen, comparative tables of pratimoksa.pdf</a> (1.6 MB).`}
                </li>
                <li>
                  ${_`<span class="author">Tsomo</span>, Karma Lekshe. <cite>Sisters in Solitude</cite>, State University of New York Press, 1996.`}
                </li>
                <li>
                  ${_`<span class="author">Rosen</span>, Valentina. <cite>Upāliparipṛcchāsūtra</cite>, Vandenhoeck & Ruprecht, 1984.`}
                </li>
                <li>
                  ${_`<span class="author">Roth</span>, Gustav. <cite>Bhikṣuṇī Vinaya, including Bhikhṣuṇī Prakīrṇaka and a summary of the Bhikhṣu Prakīrṇaka of the Ārya Mahāsaṁghika Lokuttaravādin</cite>, K. P. Jayaswal Research Institute, Patna, 1970.`}
                </li>
                <li>
                  ${_`<span class="author">Singh</span> and Kenryo <span class="author">Minow</span>, Sanghasen. <cite>A Critical Edition and Translation of Abhisamācārikā Nāma Bhikhṣu-Prakīrṇakaḥ</cite>, Buddhist Studies, Department of Buddhist Studies, University of Delhi, Vol. XII, 1988.<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/7/75496923e12ba733c684fa6a55f98653a0dc48e6.pdf">Abhisamacarika ed with trs by Sanghasen and Minowa.pdf</a> (13.8 MB).`}
                </li>
                <li>
                  ${_`<span class="author">Tathaaloka</span>, Ayya. <cite>Vinaya Matrix—Reference key to precept numbering</cite>, 2003.`}
                </li>
                <li>
                  ${_`<span class="author">Vidyabhusana</span>, Satis Chandra. <cite>So-sor-thar-pa; or, a Code of Buddhist Monastic Laws: Being the Tibetan version of Prātimokṣa of the Mūlasarvāstivāda School</cite>, Journal of the Asiatic Society of Bengal, vol. xi, 1915, p. 29<em>ff</em>.<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/a/a8a6be946f3ea0bf2dec552df8c15952f241c9bf.pdf">bo-mu-bu-pm.pdf</a> (9.0 MB).`}
                </li>
                <li>
                  ${_`<span class="author">Waldschmidt</span>, Ernst. <cite>Bruchstücke des Bhikṣuṇī- Prātimokṣa der Sarvāstivādins, mit einer darstellung der Überlieferung des Bhikṣuṇī-Prātimokṣa in den verschiedenen Schulen</cite>, Leipzig, 1926. <br/>(<a href="https://books.google.com.tw/books/about/Bruchst%C3%BCcke_des_Bhik%E1%B9%A3u%E1%B9%87%C4%AB_Pr%C4%81timok.html?id=7UvhOwAACAAJ&amp;redir_esc=y">Google books</a>)<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/9/96f85c4e0d8d1f9105e9c34334adfede261ad383.pdf">Waldschmidt, Bruchstucke der Bhiksunipratimoksa.pdf</a> (55.2 MB).`}
                </li>
                <li>
                  ${_`<span class="author">Wille</span>, Klaus. <cite>Survey of the Sanskrit Manuscripts in the Turfan Collection</cite>, Vortrag anläßlich des Workshops Digitalisierung der chinesischen, tibetischen, syrischen und Sanskrit-Texte der Berliner Turfansammlung, Berlin, 02.06.2005<br/><a href="https://discourse.suttacentral.net/uploads/default/original/2X/9/9e4ffab8ef1fb6d9614c00d84d3164efedc0a513.pdf">Willie - Survey of Buddhist manuscripts in the Turfan collection.pdf</a> (96.2 KB).`}
                </li>
              </ul>
              <h3>${_`Dhammapada parallels`}</h3>
              <ul>
                <li>
                  ${_`<span class="author">Ānandajoti</span>, Bhikkhu. <cite>Parallels to the Dhammapada Verses</cite> (version 2.3, June 2016). Available, with a list of sources, on the author’s website: <br/><a href="https://www.ancient-buddhist-texts.net/Buddhist-Texts/K2-Dhammapada-Parallels/index.htm" rel="noopener" target="_blank">www.ancient-buddhist-texts.net/Buddhist-Texts/K2-Dhammapada-Parallels/index.htm</a>.`}
                </li>
                <li>
                  ${_`<span class="author">Su</span>, Ken. <cite>Correspondence Tables of Chinese Verses among T210, T212 and T213</cite>. Āgama research group. <br/><a href="http://yifertwtw.blogspot.tw/" rel="noopener" target="_blank">http://yifertwtw.blogspot.tw/</a>.`}
                </li>
                <li>
                  ${_`<span class="author">Bollée</span>, Willem B. <cite>Reverse Index of the Dhammapada, Suttanipāta, Thera- and Therīgāthā Pādas with Parallels from the Āyāraṅga, Sūyagaḍa, Uttarajjhāyā Dasaveyāliya and Isibhāsiyāiṁ.</cite>. Verlag für Orientalistische Fachpublikationen, <br>Reinbek 1983. </br>`}
                </li>
                <li>
                  ${_`<span class="author">Falk</span>, Harry. <cite>A new Gāndhārī Dharmapada (Texts from the Split Collection 3)</cite>. <a href="http://iriab.soka.ac.jp/content/pdf/aririab/Vol.%20XVIII%20(2015).pdf" rel="noopener" target="_blank">Annual Report of the International Research Institute for Advanced Buddhology,<br> at Soka University for the Academic Year 2014.<br/>Vol. XVIII (2015)</br></a>.`}
                </li>
                <li>
                  ${_`<span class="author">Braarvig</span>, Jens & <span class="author">Liland</span>, Fredrik. University of Oslo, Faculty of Humanities. <a href="https://www2.hf.uio.no/polyglotta/index.php?page=volume&amp;vid=71" rel="noopener" target="_blank">Udānavarga</a>.`}
                </li>
              </ul>
            </article>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_methodology-page';
  }
}

customElements.define('sc-methodology-page', SCMethodologyPage);
