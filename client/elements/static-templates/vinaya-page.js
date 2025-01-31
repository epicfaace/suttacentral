import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCVinaya extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <div id="page-wrap">
        <main>
          <section>
            <h1>${_`Monastic Law`}</h1>
            <p class="byline">${_`Bhikkhu Brahmali`}</p>
            <nav class="contents">
              <ol>
                <li>${_`<a href="#item1">Origin</a>`}</li>
                <li>${_`<a href="#item2">Textual Transmission and the Schools</a>`}</li>
                <li>${_`<a href="#item3">Content</a>`}</li>
                <li>${_`<a href="#item4">Modern Perspectives</a>`}</li>
                <li>${_`<a href="#item5">Commentaries</a>`}</li>
                <li>${_`<a href="#item6">References and Further Reading</a>`}</li>
              </ol>
            </nav>
            <p>
              ${_`The Vinaya Piṭaka, “The Basket of Monastic Law,” contains the rules that are binding on monastics and the regulations that apply to monastic communities. The Monastic Law is available in more recensions than any other part of the Tipiṭaka. There is a full version in Pali, and four complete versions extant in Chinese translation, all belonging to different schools of early Buddhism: Mahāsāṅghika, Dharmaguptaka, Mahīśāsaka, and Sarvāstivāda. The Chinese Tipiṭaka also preserves other Vinaya related texts, such as an independent <i>bhikkhu pātimokkha</i> of the Kāśyapīya School and several more or less school-specific Vinaya texts. The Vinaya of the Mūlasarvāstivāda school exists in three versions: a complete text in Tibetan translation, a mostly complete version in Chinese, and substantial portions in Sanskrit. There are also several Vinaya texts, as well as a large number of fragments, in Sanskrit and other Indic languages, mostly of Mahāsāṅghika, Sarvāstivāda, and Mūlasarvāstivāda provenance.`}
            </p>
            <h2 id="item1">${_`Origin`}</h2>
            <p>
              ${_`The word <i>vinaya</i>, here translated as “Monastic Law,” originally probably meant “training,” as can be seen from its usage in the Sutta Piṭaka, “the Basket of Discourses.” In this sense it complements the Dhamma, the doctrine or teaching, which provides the instructions on how the training is to be achieved. The compound <i>dhamma-vinaya</i> is a common one in the earliest literature and might be rendered as “theory and practice.” Gradually the meaning shifted to refer to the rules of conduct instead, thus referring to the training in a narrower sense. Although the former usage is more common in the <i>suttas</i>, it is this latter usage of <i>vinaya</i> which has become the dominant one and which has prevailed to the present day.`}
            </p>
            <p>
              ${_`The Monastic Law developed over a period of several centuries after the Buddha’s passing away. Yet given the close agreement on some of the most fundamental aspects of the Vinaya across all surviving scriptures, it seems likely that the earliest parts originated in the lifetime of the Buddha. This includes the rules of conduct binding on all monastics, known as the <i>pātimokkha</i>, and several of the most important procedures that regulate the proper functioning of the monastic communities. It is only these parts of the Vinaya that are part of the Early Buddhist Texts in the strictest sense.`}
            </p>
            <p>
              ${_`Around this kernel the Vinaya gradually expanded. Over time, the <i>pātimokkha</i> rules gained a canonical commentary that included origin stories, word analyses, detailed permutation series on the applicability of the rules, non-offense clauses, and case studies. For the rest of the Vinaya, known as the Khandhakas, the expansion was less structured, with minor rules, stories, and procedures apparently being added as the need arose. It has been shown by Frauwallner (1956) that, despite a significant common core, many of the details of this part of the Vinaya vary between the schools.`}
            </p>
            <p>
              ${_`The exact cut-of-point after which no new material was added to the Canonical Vinaya is impossible to pin down and it would have varied from school to school. On linguistic grounds, it seems likely that the majority of additions to the Pali Vinaya, with the exception of the Parivāra, were done prior to its arrival in Sri Lanka in the third century BCE. After this point new material was added to the commentarial literature, which, despite its likely origin in the mainland, was greatly expanded and developed in Sri Lanka.`}
            </p>
            <p>
              ${_`The Vinaya was not established as part of an overall plan to provide the monastic community with a legal structure, but was laid down rule by rule in response to problems as they arose in the monastic Order. It is the Dhamma, the teaching, that guided the laying down of the Vinaya, and the Vinaya is subsidiary to and bound up with the broader concerns of the proper practice of the Buddhist path. A large number of rules were laid down in response the lay people’s criticism of the monastic Order.`}
            </p>
            <h2 id="item2">${_`Textual Transmission and the Schools`}</h2>
            <p>
              ${_`The number of extant Vinaya texts is quite large and the process of transmission and translation into various Indic languages and especially into Chinese and Tibetan is quite complex. In what follows I give an outline of how the main Vinaya texts were transmitted to China and Tibet.`}
            </p>
            <p>
              ${_`The first split in the monastic Order occurred between the Mahāsāṅghikas and the Sthaviras, very roughly around 200 BCE. Each of these branches subsequently split into a number of sub-schools. Of the six complete Vinayas still extant, only one belongs to the Mahāsāṅghika group and the remaining five to sub-schools of the Sthaviras. We should therefore expect to find shared qualities between the Vinayas of the Sthavira schools that are lacking in the Mahāsāṅghika Vinaya. Indeed, the Khandhakas of the Mahāsāṅghika Vinaya are structured differently from those of all the other Vinayas.`}
            </p>
            <p>
              ${_`The sub-schools of the Sthavira branch for which we still have complete Vinayas fall into two sub-groups: the Sarvāstivāda and the Mūlasarvāstivāda on the one hand, and the Dharmaguptaka, the Mahīśāsaka, and the Theravāda on the other. First the Sarvāstivādins split from the rest of the Sthaviras. Over time the Mūlasarvāstivāda emerged as a sub-school of the Sarvāstivāda, and for this reason the Vinayas of these two schools share certain characteristics (Frauwallner, 1956: 194). After the Sarvāstivādin split, the remainder of the Sthaviras divided further, including into the Dharmaguptaka, the Mahīśāsaka, and the Theravāda. Yet these three schools were probably no more than regional variations of each other (Sujato, 2012: 102) and consequently their Vinayas have much in common (Frauwallner, 1956: 181).`}
            </p>
            <p>
              ${_`Apart from the Theravāda Vinaya, the following are the main Canonical Vinayas still extant:`}
            </p>
            <ul>
              <li>
                ${_`A complete Mahāsāṅghika Vinaya, found in the Chinese Tipiṭaka at T 1425, was translated into Chinese by Faxian and Buddhabhadra in 416-418 CE. Although its section of Khandhakas is structured differently from that of the other schools, the content appears to largely overlap. Further study is required to clarify the degree of divergence. Substantial parts of this Vinaya has also been preserved in Buddhist Hybrid Sanskrit, including the Mahāvastu, a large work mostly concerned with the biography of the Buddha, as well as the Suttavibhaṅga for the nuns and the monks’ <i>pātimokkha</i>.`}
              </li>
              <li>
                ${_`A complete Sarvāstivāda Vinaya is preserved in Chinese at T 1435, translated by Kumārajīva in 404-409 CE. There are also a number of surviving fragments in Sanskrit.`}
              </li>
              <li>
                ${_`A full translation of the Mūlasarvāstivāda Vinaya into Tibetan, found in the Kanjur at D 1-7/P 1030-1036, was completed in first decade of 9th century CE by Jinamitra of Kashmir and various others. There is a version of this Vinaya in Chinese at T 1441-1457, largely translated by Yijing in 703-710 CE. This translation is incomplete and full of gaps (Frauwallner, 1956: 195). In addition to this, approximately 80 percent of the Khandhakas exist in Sanskrit (Clarke, 2015: 75).`}
              </li>
              <li>
                ${_`Apart from a few fragments in Sanskrit and Gāndhārī, a full Dharmaguptaka Vinaya is only preserved in Chinese at T 1428, translated by Buddhayaśas and Zhu Fonian in 410-412 CE. Of all the extant Vinayas, this is the one normally regarded as closest to the Theravāda Vinaya (Clarke, 2015: 69).`}
              </li>
              <li>
                ${_`The Mahīśāsaka Vinaya is only extant in Chinese at T 1421, translated by Buddhajīva from Kashmir and others in 423-424 CE from a manuscript brought from Sri Lanka by Faxian. According to Frauwallner (1956: 183-84), this Vinaya is full of gaps. It is closely related to the Dharmaguptaka Vinaya (Frauwallner, 1956: 181).`}
              </li>
              <li>
                ${_`Apart from the full Vinayas listed above, there are a variety of Canonical Vinaya texts and fragments in different languages. One significant text is the monks’ <i>pātimokkha</i> of the Kāśyapīya School, available at T 1460 and translated into Chinese by Gautama Prajñāruci in 543 CE.`}
              </li>
            </ul>
            <h2 id="item3">${_`Content`}</h2>
            <p>
              ${_`The Vinaya Piṭaka is divided into two main parts: the Suttavibhaṅga, “The Analysis of the Rules,” and The Khandhakas, “the Chapters.” The individual schools sometimes have additional texts, such as the Parivāra, “The Compendium,” belonging to the Theravāda tradition, and the Uttaragrantha belonging to the Mūlasarvāstivādins.`}
            </p>
            <h3>${_`Suttavibhaṅga`}</h3>
            <p>
              ${_`Suttavibhaṅga means “Analysis of the <i>sutta</i>.” <i>Sutta</i> here does not refer to the discourses, but rather to the <i>pātimokkha</i> rules as a complete set.`}
            </p>
            <p>
              ${_`The Suttavibhaṅga consists of the <i>pātimokkha</i> rules embedded in a commentary that analyses each rule in detail. The Suttavibhaṅga is divided into two parts, the 227 rules for the monks and the 311 rules for the nuns. The majority of rules are the same for the two Orders, but 130 rules are specific to the nuns and 46 specific to the monks. The greater number of rules for the nuns is in large part due to the subdivision of individual monks’ rules into multiple rules for the nuns and to the fact that the nuns have rules in their <i>pātimokkha</i> that the monks have in the Khandhakas.`}
            </p>
            <p>
              ${_`The rules are categorised according to the penalty incurred for breaching them. The heaviest penalty, expulsion from the monastic Order, is incurred only for conduct that is fundamentally opposed to monastic life, such a sexual intercourse or murder. There are 4 such rules for the monks and 8 for the nuns. The second heaviest penalty consists of a period of suspension and probation during which time one is not a full member of the monastic Order. There are 13 such rules for the monks and 17 for the nuns. The vast majority of offenses, however, are cleared simply by confession. These rules are subdivided into a number of categories dependent on factors such as the severity of the breach, the sort of confession that is required, and additional requirements such as relinquishment of wrongly acquired requisites. The last seven rules of the Suttavibhaṅga are principles for resolving “legal” issues. Most of the material connected with these principles is now found in the Khandhakas.`}
            </p>
            <p>
              ${_`Within the Suttavibhaṅga, each rule is largely self-contained and forms its own subsection. These sections begin with one or more origin stories that relate the incident that led the Buddha to lay down a particular rule. Many of these are no more than brief accounts of a stereotypical monk or nun who is simply stated to have done something inappropriate. A few are elaborate narratives that may include sub-rules or important procedures for the monastic Order, and occasionally even <i>sutta</i>-type material or Jātaka-type stories. The majority of origin stories fall somewhere in between these two extremes.`}
            </p>
            <p>
              ${_`Following the origin story is the actual rule. In a number of cases the original rule is later amended by the Buddha, sometimes several times, before it reaches its final form. The rule is then analysed in detail in a word commentary, in which each significant word of the rule is defined. These definitions range from merely supplying a synonym to large sections with a detailed exposition. The word commentary is always technical in nature.`}
            </p>
            <p>
              ${_`After the word commentary, many rules are further analysed as to their applicability given a number of general scenarios. These section normally take the form of a permutation series in which a certain number of factors are varied in all possible combinations with each other. These sections, too, are highly technical.`}
            </p>
            <p>
              ${_`Next comes a non-offense clause, which sets out important exemptions for each rule. The non-offense clause is sometimes followed by a set of case studies. These concern specific instances where a monastic acts in such a way that it is not clear-cut whether they have committed an offense. The incident is related and the Buddha then decides on the matter. This section is similar in content to the origin stories. Only the first nine rules of the monks’ <i>pātimokkha</i> have this section.`}
            </p>
            <p>
              ${_`Comparative study of the various <i>pātimokkhas</i> makes it clear that these texts in large part go back to the pre-sectarian period of Buddhism (Pachow, 2000). As for the rest of the material in the Suttavibhaṅga, academics normally consider this material to be significantly younger than the <i>pātimokkha</i> rules (v. Hinüber, 2000: 13f), but it is nevertheless likely that some of it goes back to the earliest period (Pachow, 2000: 14ff). In the absence of more detailed research, it seems prudent to regard the <i>pātimokkha</i> as the only part of the Suttavibhaṅga that belongs to the Early Buddhist Texts.`}
            </p>
            <p>
              ${_`But even this overstates the case, for it is clear that not even all the <i>pātimokkha</i> rules belong to the earliest period (Pachow, 2000). This is true of many, perhaps all, of the most minor rules of the monks’ <i>pātimokkha</i>, the <i>sekhiyas</i>, but especially of the rules for the nuns, many of which vary considerably between the different schools, making it likely that they stem from the sectarian period.`}
            </p>
            <h3>${_`Khandhakas`}</h3>
            <p>
              ${_`The other main part of the Vinaya, the Khandhakas, is a group of sections that each discuss a major area of monastic law, such as a section on ordination, several sections on allowable requisites, and a number of sections that deal with technical matters. The Theravāda Khandhakas is a set of 22 sections, all of which are matched by equivalent sections in the other existing Vinaya recensions, with the partial exception of the Mahāsāṅghikas. The Khandhakas of the Mahāsāṅghikas, although containing much of the same material as the other Vinaya recensions, are structured differently. There is as yet no scholarly consensus as to why this is the case and what might be the implications for the historical evolution of the Khandhakas.`}
            </p>
            <p>
              ${_`The Khandhakas lack the close unifying principle found in the Suttavibhaṅga, which, as we have seen, is organised as a commentary and analysis of the <i>pātimokkha</i> rules. This makes the Khandhakas less integrated and more diverse than the Suttavibhaṅga.`}
            </p>
            <p>
              ${_`In place of the rigid structure of the Suttavibhaṅga, the Khandhakas are loosely structured around the life story of the Buddha. After the Buddha’s awakening, he set out to teach others about his discovery. As he started to gain a monastic following, the need for rules and procedures gradually arose. This need continued throughout the Buddha’s life. It is this process that furnishes the framework for the Khandhakas as a whole.`}
            </p>
            <p>
              ${_`The “biography” of the Buddha is in fact largely considered part of the Vinaya in all Buddhist schools. (Some schools even include their version of the Mahāparinibbāna Sutta in the Vinaya, rather than among the <i>suttas</i>, as with the Theravādins.) The Khandhakas show ordinary interactions of the Buddha with monastics and lay people, and we get a glimpse of the Buddha as real person, not just as the distant teacher and leader of a large religious organisation. We see him walking around the Ganges plain, meeting a variety of people. We see him in close contact with his monastic disciples, criticising their misdeeds, but also praising them when they get it right. The touching story of the Buddha and Ven. Ānanda cleaning up a monk suffering from dysentery is found in the Khandhakas. This close and almost personal view of the Buddha is one factor that makes the Khandhakas a particularly interesting collection.`}
            </p>
            <p>
              ${_`One of the main functions of the Khandhakas is to present the procedures by which the monastic Orders conduct their business. These include the ordination procedure and the <i>uposatha</i> ceremony, but also a number of other procedures that enable the Orders to function properly. These procedures are governed by precise rules, especially regarding democratic participation and decentralised decision making. They allow for effective and harmonious dispatch of monastic business.`}
            </p>
            <p>
              ${_`The Khandhakas include a large number of minor rules not found in the <i>pātimokkha</i>. These rules are diverse, but can broadly be summarised as prohibiting luxuries and sensual behaviour, both of which are incompatible with the renunciant life.`}
            </p>
            <p>
              ${_`The Khandhakas also include background stories of some of the Buddha’s most well-known lay disciples, such as Anāthapiṇḍika, Visākhā, and Jīvaka. There are also stories about monastic disciples, such as the remarkable story of Pilindavaccha, the inspiring stories of Soṇa Kolivisa and Soṇa Kuṭikaṇṇa, as well as the downfall of Devadatta. Then there are several Jātaka-type stories, some of which are also found in the Jātaka collection. On top of this, each section often has its own origin story, similar to those found in the Suttavibhaṅga. But apart from the origin stories, the Khandhakas lack the detailed exegetical material found in the Suttavibhaṅga.`}
            </p>
            <p>
              ${_`The third last chapter of the Khandhakas deals with rules and procedures that are specific to the nuns, including their ordination procedure. Unless specifically stated or implied, the rest of Khandhakas are equally valid for both Orders.`}
            </p>
            <p>
              ${_`The Khandhakas end with a description of the first <i>saṅgīti</i>, the first “communal recitation” of the teachings after the Buddha’s passing away, as well as the famous Vesālī affair, sometimes known as the Second Council, where the Order with difficulty resolved a disagreement over issues of Vinaya. The Vesālī affair is said to have happened around one hundred years after the Buddha passed away. It is around this time that sectarian tendencies are starting to form in the monastic Order, and this is roughly the cut-off point for the common heritage of all Buddhists.`}
            </p>
            <h3>${_`Other Texts`}</h3>
            <p>
              ${_`The Theravāda tradition includes the Parivāra in its Vinaya Piṭaka. Oskar von Hinüber (2000: 22) suggests it was completed no later than the first century AD. The Parivāra is an analytical summary of the first two parts of the Vinaya. In style and method it is sometimes compared to the Abhidhamma.`}
            </p>
            <p>
              ${_`Other schools, too, have Vinaya summaries and addenda that may or may not share material with the Parivāra. Because of a lack of research, not much is known about these texts. It seems clear, however, that none of them is part of the Early Buddhist Texts.`}
            </p>
            <h2 id="item4">${_`Modern Perspectives`}</h2>
            <p>
              ${_`Most of the early schools of Buddhism have long since disappeared, but three Vinaya traditions are still alive: the Dharmaguptaka, practiced in East Asia, including China and Korea; the Mūlasarvāstivāda, practiced in Tibet and Mongolia; and the Theravāda, practiced in South and Southeast Asia.`}
            </p>
            <p>
              ${_`In practice, it is rare for monastics to follow all the stipulations of their chosen Vinaya lineage. For instance, although the use of money is prohibited by the <i>pātimokkha</i> rules of all schools, it is nevertheless used by the vast majority of monastics. The extent to which the rules are followed varies enormously, but most monastic do at least follow the most important rules, that is, the rules entailing expulsion and those entailing suspension. A similar situation holds for the procedures that govern the Orders. Sometimes they are practiced to the letter, such as most ordination ceremonies in the Theravāda tradition. At other times the procedures are misinterpreted or simply disregarded, such as the procedures for choosing the officials of the Order.`}
            </p>
            <p>
              ${_`Over the course of Buddhist history, there have been periodic reform movements and irregular attempts at purifying the monastic Order. Typically the Order gradually degenerates until a charismatic leader starts a reform movement aimed at the proper practice of the Buddhist path, including the Vinaya. These reform movement sometimes manifest as “forest traditions,” whereby monastics establish forest monasteries in conformity with the ideals of early Buddhism. Over the last three decades, one controversial and ongoing reform has been the reestablishment of an Order of nuns, <i>bhikkhunīs</i>, in the Theravāda tradition.`}
            </p>
            <h2 id="item5">${_`Commentaries`}</h2>
            <p>
              ${_`Another important component of the monastic Vinaya is the vast commentarial literature that has gradually evolved over the centuries and millennia, and continues to do so to the present day. All three of the living Vinaya traditions have such a commentarial literature.`}
            </p>
            <p>
              ${_`The commentarial literature begins with the Suttavibhaṅga, which, although it is now part of the Canon, is an early commentary on the <i>pātimokkha</i> rules. Next we have other Canonical commentaries or summaries, such as the Parivāra of the Theravādins. Beyond these, we come to the commentaries proper, the <i>atthakathās</i>, “The Discussion on Meaning.”`}
            </p>
            <p>
              ${_`The most important non-canonical commentary on the Theravādin Vinaya Piṭaka is the Samantapāsādikā, composed in Sri Lanka by Buddhaghosa in the fifth century CE based on pre-existing commentaries that probably originated in India. There is also another important commentary from this period, the Kaṅkhāvitaraṇī, also composed by Buddhaghosa. The next layer of commentaries are the <i>ṭīkās</i>, the sub-commentaries, of which there are over a dozen, including highly specialised literature, such as handbooks on monastery boundaries (<i>sīmās</i>). <i>Ṭīkās</i> continue to be composed to the present day. The extent to which the Canonical Vinaya needs to be interpreted in line with this commentarial tradition is typically controversial, and practices vary widely.`}
            </p>
            <p>
              ${_`To navigate this vast literature, many Theravāda monasteries rely on modern summaries for their practice of the Vinaya. Examples include the Vinayamukha in Thai and Ajahn Ṭhānissaro’s The Buddhist Monastic Code in English.`}
            </p>
            <p>
              ${_`In addition to the above, most Theravāda monasteries follow a number of rules that are more informal in nature. These include rules used to distinguish individual sects (<i>nikāyas</i>), such as rules on the style of robes and on the manner of wearing them. Then there are rules that pertain to particular teacher traditions, such as those that often form around especially charismatic and famous teachers. The final set of rules are those laid down at individual monasteries. These regulate the daily schedule and other aspects of monastic life that are monastery specific. Although all these rules are sometimes called Vinaya and therefore assumed to stem from the Vinaya Piṭaka or at least the commentaries, in reality few of them have any Canonical basis.`}
            </p>
            <h2 id="item6">${_`References and Further Reading`}</h2>
            <ul>
              <li>
                ${_`Clarke, Shayne; <cite>Vinaya Mātṛikā – Mother of the Monastic Codes, or just Another Set of Lists?</cite>; Indo-Iranian Journal 47: 77–120, 2004`}
              </li>
              <li>
                ${_`Clarke, Shayne; <cite>Vinayas</cite>; in Brill’s Encyclopaedia of Buddhism; Leiden, 2015; vol. I, pp. 60-87.`}
              </li>
              <li>
                ${_`Frauwallner, Erich; <cite>The Earliest Vinaya and the Beginnings of Buddhist Literature</cite>; Rome, 1956`}
              </li>
              <li>
                ${_`v. Hinüber, Oskar; <cite>A Handbook of Pāli Literature</cite>; Walter de Gruyter, Berlin, 2000`}
              </li>
              <li>
                ${_`Kabilsingh, Chatsumarn (trans.); <cite>The Bhikkhunī Patimokkha of the Six Schools</cite>; Bangkok, 1991`}
              </li>
              <li>
                ${_`Norman, K.R.; <cite>Pāli Literature</cite>; Otto Harrassowitz, Wiesbaden, 1983`}
              </li>
              <li>
                ${_`Ñāṇatusita, Bhikkhu; <cite>A Translation and Analysis of the Pātimokkha</cite>; Kandy, 2008`}
              </li>
              <li>
                ${_`Pachow, W; <cite>A Comparative Study of the Prātimokṣa</cite>; Motilal Banarsidass, Delhi, 2000`}
              </li>
              <li>${_`Sujato, Bhikkhu; <cite>Sects and Sectarianism</cite>; Santipada, 2012`}</li>
              <li>${_`Sujato, Bhikkhu; <cite>Bhikkhunī Vinaya Studies</cite>; Santipada, 2009`}</li>
            </ul>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_vinaya-page';
  }
}

customElements.define('sc-vinaya', SCVinaya);
