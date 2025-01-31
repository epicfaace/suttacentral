import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class Discourses extends SCStaticPage {
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
            <h1>${_`Discourses`}</h1>
            <p class="byline">${_`Bhikkhu Sujato`}</p>
            <nav class="contents">
              <ol>
                <li>${_`<a href="#item1">Origins</a>`}</li>
                <li>${_`<a href="#item2">Transmission</a>`}</li>
                <li>${_`<a href="#item3">The Early Schools of Buddhism</a>`}</li>
                <li>${_`<a href="#item4">Structure</a>`}</li>
                <li>${_`<a href="#item5">Canonicity of the Suttas</a>`}</li>
                <li>${_`<a href="#item6">Suttas in the Buddhist Traditions</a>`}</li>
                <li>${_`<a href="#item7">Modern Reform and Postmodern Criticism</a>`}</li>
                <li>${_`<a href="#item8">Translations</a>`}</li>
              </ol>
            </nav>
            <p>
              ${_`The most important body of sacred scripture in Buddhism is the Suttapiṭaka, the “basket of discourses”. This collection contains the teachings of the Buddha and his disciples, as collected and transmitted by the schools of early Buddhism. This is the well-spring of Dhamma, from which the teachings and practices of the many schools of Buddhism are drawn.`}
            </p>
            <p>
              ${_`The term <i>sutta</i> in Pali or <i>sūtra</i> in Sanskrit is used quite liberally in the Buddhist traditions and may include a range of later texts. However, we only consider the earliest of these, which are the texts included in the Suttapiṭaka of the Pali canon, and the various corresponding collections and texts in other languages. Not all of these texts stem from the very earliest period, but we aim to be inclusive, so as to not miss any of the early scriptures. Generally speaking, they represent the first few centuries of Buddhist texts, with a special emphasis on those that may be plausibly attributed to the historical Buddha and his immediate disciples. Later texts such as the Mahāyāna sūtras fall outside our scope, except in cases where they quote from the early texts.`}
            </p>
            <p>
              ${_`SuttaCentral includes almost all of the scriptures of this period. Exceptions include such things as certain manuscripts that are unpublished or unavailable, or too fragmentary, and some passages or quotes found in later texts and commentaries in Chinese and Tibetan.`}
            </p>
            <p>
              ${_`This article is a general overview, and more specific details may be found on the pages for each collection. Please note that this article deals with the history and nature of the textual collections, not with the content and themes.`}
            </p>
            <h2 id="item1">${_`Origins`}</h2>
            <p>
              ${_`The Buddha lived around the 5th century BCE, and lived and taught in the nations of the Ganges plain in northern India, especially the regions known today as Bihar and Uttar Pradesh. He had a long career, and was said to have taught for forty-five years. The canonical Vinaya texts relate how, after his passing towards the end of the 5th century BCE, the Buddha’s followers, led by his closest disciple, Ānanda, collected his teachings at the great First Council in Rājagaha (modern Rajgir), ensuring their survival until today.`}
            </p>
            <p>
              ${_`There are several different accounts of the First Council, and they vary somewhat in the details of the texts recited there. But it seems likely that the main content was similar to what is included today in the four main <i>nikāyas</i>, as well as the six early books of the Khuddaka, together with the early portions of the Vinaya. These are sometimes referred to as the Early Buddhist Texts (EBTs). It’s not the case that everything recited at the Council was identical with what we have today. Even the traditions acknowledge that there were additions. However, it seems reasonable to accept that the bulk of the content of these texts stems from this time. The main changes were in structure and arrangement, while changes to content were limited and readily identifiable.`}
            </p>
            <p>
              ${_`The texts would have originally been in a Prākrit, that is, a dialect of Middle Indo-Aryan closely related to Sanskrit. The exact form of Prākrit is unknown, and indeed it may not have been entirely standardized, since monastics from the earliest times were using different dialects. Indications in the Pali texts suggest that they were derived from an earlier version in Māgadhī, that is, the language of the kingdom of Magadha. It appears that they were standardized in later centuries to a dialect similar to that used widely across central India for inscriptions, with a partial Sanskritization. Nevertheless, these languages differ mostly in phonology, and apart from a few edge cases, changes from one form to another do not affect the meaning.`}
            </p>
            <h2 id="item2">${_`Transmission`}</h2>
            <p>
              ${_`For many years, the texts were passed down in an oral form. This was organized with groups of reciters, all reciting together the same text to ensure accuracy. We are often skeptical that an oral tradition can maintain texts accurately for a long time. This is our cultural bias, since all we’ve known are written texts. But oral transmission was normal in ancient India. The brahmanical Ṛg Veda, for example, was passed down in letter-perfect form for hundreds, maybe thousands, of years before being written down. No matter what the medium of transmission—oral, written, or digital—corruptions and changes can creep in. The most important thing in maintaining accuracy is not the medium, but the care and dedication of the people doing the work. The Buddhist texts, through the use of such devices as repetition, are highly optimized for reliable transmission of doctrine.`}
            </p>
            <p>
              ${_`The Sri Lankan historical chronicles record that in 29 BCE, to guard against upheaval in the country, the Pali canon was written down in the Aluvihare Rock Temple. While we don’t have historical records for the mainland, it seems safe to assume that texts there were written down around the same period. Indeed, a range of Buddhist manuscripts from northern regions have been found dating from the early centuries CE, one of which has been carbon dated to around 75 CE.`}
            </p>
            <p>
              ${_`Due to the materials and climate, no such early manuscripts of the Pali canon have survived. There are a few earlier passages in inscriptions and the like, but the bulk of our Pali texts come from manuscripts that have been recopied in the past few centuries.`}
            </p>
            <p>
              ${_`The Chinese texts originate from manuscripts of various schools that were taken to China and translated there by teams of monks. Each collection has a different origin, and due to the meticulous records of the Chinese canon, the translators and dates of these are usually well known. Most of the early Buddhist discourses were translated around the 5th century CE, though some were earlier and some later than this. It is not always possible to determine exactly what the original language of the manuscripts was, but in many cases it was probably Sanskrit. However, a variety of other Indic languages such as Gandhārī or Buddhist Hybrid Sanskrit may have been used.`}
            </p>
            <p>
              ${_`Likewise, the early texts found in Tibetan stem from Sanskrit texts that were translated in Tibet over millenium ago.`}
            </p>
            <p>
              ${_`None of the modern forms of Buddhism normally use Sanskrit texts, as the northern schools preserved only the translations. The texts in Sanskrit and other early Indic dialects stem from a range of fortuitous finds in the past century. Certain Sanskrit texts were discovered in ancient manuscripts in Nepal and Tibet, where they had lain mostly untouched since being brought from India nearly a thousand years ago. Several finds have unearthed more texts. Manuscripts from Gilgit and elsewhere in central Asia, Afghanistan, and Pakistan contain suttas in several different languages, ranging from extensive texts to tiny scraps containing only a few letters. Some were recovered from proper archaeological research, but other manuscripts simply appeared on the black market and their origin can only be guessed at. These manuscripts represent the spectrum of Buddhist literature of the time, including early suttas, Vinaya, Abhidhamma, legends, Mahāyāna texts, and commentaries. Here we are only concerned with the early sutta material.`}
            </p>
            <p>
              ${_`Such texts are sometimes called the “Dead Sea Scrolls” of Buddhism, but this is misleading. While the Dead Sea Scrolls contained new texts indicating a radically different perspective on early Christianity, these Buddhist suttas are almost always minor variations on what we find in the Pali canon. They serve to indicate the spread and diversity of Buddhism, and offer clarification on many points of history and detail, but they do not radically revise our understanding of the teachings.`}
            </p>
            <h2 id="item3">${_`The Early Schools of Buddhism`}</h2>
            <p>
              ${_`The century after the Buddha passed away witnessed a transformation in Indian political history. The 16 nations of the Buddha’s time were amalgamated by the superior force of the Magadhan kingdom, which became an empire encompassing most of the Indian mainland. At the same time, the invasion by Alexander the Great established Greek kingdoms in the north-west, initiating an era of international trade.`}
            </p>
            <p>
              ${_`The Buddhist community, sponsored by kings such as Aśoka, took full advantage of these favorable conditions to spread the Dhamma over the Indian subcontinent and further. Less than two centuries after the Buddha’s passing, Buddhist communities were thriving in regions as far-flung as Sri Lanka and Afghanistan.`}
            </p>
            <p>
              ${_`But with this growth came new challenges. The community began to diverge, driven primarily by distance, but also by doctrinal disagreements and personality clashes. Soon there were, according to the traditional reckoning, “eighteen” schools. This is just a conventional number, and there were really four or five major groups of schools, with many regional branches.`}
            </p>
            <p>
              ${_`Each of these schools would have preserved a scriptural collection. Today we have only a small selection of these. Nevertheless, though much is lost, we do have enough to get a reasonable idea of the similarities and differences. Note that, unlike the Vinaya texts, it is sometimes difficult to determine the school affiliation of a sutta collection.`}
            </p>
            <p>
              ${_`For the purposes of the Discourses, the following schools are most important.`}
            </p>
            <ul>
              <li>
                ${_`<strong>Theravāda:</strong> More precisely known as the Mahāvihāravāsins, the “Dwellers in the Great Monastery (at Anurādhapura)”, this group was established in Sri Lanka by Aśoka’s son, Mahinda. They passed down the collection known as the Pali Tipiṭaka, or Pali Canon. The collection retains the characteristics of its mainland origin, possibly from Avanti, and few changes were made on the island. This school exclusively used Pali for its canonical texts.`}
              </li>
              <li>
                ${_`<strong>Sarvāstivāda:</strong> This was an influential school, or group of schools, mostly based in the north-west of India. We possess an extensive range of their Discourses—a Majjhima, a Saṁyutta, most of a Dīgha, and several partial collections. The bulk of the extant sutta texts in Sanskrit, Chinese, and Tibetan hail from this school, or one of their branches such as the Mūlasarvāstivāda. Their distinctive doctrine was that all phenomena in some sense “exist” in the past, present, and future. However, like all sectarian doctrines, this made little to no impact on their canonical texts. Their texts were passed down mainly in Sanskrit, and sometimes in a sanskritized Prākrit.`}
              </li>
              <li>
                ${_`<strong>Dharmaguptaka:</strong> A school doctrinally almost indistinguishable from the Theravāda, but based in Gandhāra, in modern Pakistan and Afghanistan. They mainly used the language we call Gandhārī, and we possess a Dharmapada and some suttas in the original. The Dīrghāgama in Chinese (DA) is believed to have been translated from a text of this school.`}
              </li>
              <li>
                ${_`<strong>Mahāsaṅghika:</strong> Some texts in Hybrid Sanskrit are from this school, and the Ekottarikāgama (EA) in Chinese is sometimes attributed to them, though this is unclear.`}
              </li>
            </ul>
            <p>
              ${_`Of these, only the Theravāda still exists as a school today, with an unbroken history of transmission of an entire collection in the original language. In addition, there is a complete set of commentaries for all the texts. For these reasons, the Pali collection has been, and will continue to be, the primary source for the early Buddhist teachings.`}
            </p>
            <p>
              ${_`For the rest, we have collections and fragments that were preserved primarily in Chinese translation, and to a lesser extent in Tibetan. The few texts in Sanskrit and other early Indic languages stem from chance finds; thousand year-old manuscripts preserved in mountain monasteries in Tibet or Nepal, or even older texts dug up from the sands of Central Asia. These texts are much less complete than the Pali, have been little studied, and pose a range of difficult linguistic and practical problems. Nevertheless, they have a unique value in offering an alternate source for checking and comparing the Pali texts.`}
            </p>
            <p>
              ${_`The unanimous opinion of the scholars who have studied these texts is that they are mostly consistent in doctrine and content, and differ mainly in arrangement and organization. While it is true that the differences are not small, and it is hard to generalize, it is clear that the early community saw their main task to preserve verbatim the words of the Buddha, especially the essential teachings, a task that they took very seriously.`}
            </p>
            <h2 id="item4">${_`Structure`}</h2>
            <p>
              ${_`In the Buddha’s forty-five years of teaching, he was mainly concerned to address the person or people he was with, to appease their suffering. Thus he was not concerned with creating a overarching canon of his teachings. However, he did give some indications of a broader system of classifying the teachings. Sometimes he mentioned certain doctrinal formulations as the central content of his teachings—the four noble truths, or the sets of teachings on practice that came to be known as the <i>bodhipakkhiyā dhammā</i>, the “things leading to awakening”. These sets of doctrines form the backbone of the Saṁyutta Nikāya. He also mentioned an organization by literary style, known as the <i>aṅgas</i> or “branches”. While the Pali texts mention nine <i>aṅgas</i>, the northern texts typically mention twelve, and there is some indication that originally there may have been only three or four.`}
            </p>
            <p>
              ${_`Regardless of how the texts were organized in the Buddha’s life, early on the schools reorganized the texts in the system of <i>nikāyas</i> or <i>āgamas</i> as we have them today. (The term <i>nikāya</i>, a “collection” or “group”, is preferred in the Theravādin context, while the northern tradition usually used <i>āgama</i>, which has the sense of a “tradition” or “transmission”; however, these usages are not specific and may be used in any tradition.) This reorganization may well have started from the First Council, or at any rate, not much later. The primary motive was to arrange the collection into more manageable sections in order to facilitate memorization. The <i>nikāyas</i> were not absolute or fixed categories, but standards or templates which the different branches implemented in their own way.`}
            </p>
            <p>
              ${_`Each of the schools seems to have had main four <i>nikāyas</i>. The sequence of these is not fixed. The form adopted on SuttaCentral is the well-known sequence as used in the Pali tradition. In other schools, as implied by the accounts of the First Council, the collections were in different orders, such as placing the Saṁyutta first. Note that in the Chinese canon, the editors of the Taishō edition rearranged their material under the influence of the Pali canon to adopt the same sequence.`}
            </p>
            <p>
              ${_`Each of the <i>nikāyas</i> includes material that was edited and arranged, and sometimes added to, over a period of time. While each collection contains some unique texts, for the most part the differences in the number of discourses is simply due to the fact that a given discourse may be assigned a different place in different collections.`}
            </p>
            <ul>
              <li>
                ${_`<strong>Long:</strong> A collection of the “long” discourses. The Dīgha has more elaborate literary ambitions than the remaining texts, and one of its aims seems to have been the conversion of brahmins, an educated class used to sophisticated literature. The Pali Dīgha Nikāya (DN) has 34 discourses, the Chinese (Dharmagupta) Dīrghāgama (DA) has 30. An old Sanskrit manuscript of the Sarvāstivādins, largely unpublished, indicates that their collection contained 47 discourses. In addition, there are a number of individual Dīrgha discourses preserved in Chinese translation.`}
              </li>
              <li>
                ${_`<strong>Middle:</strong> The Majjhima contains a group of “middle length” discourses, 152 in Pali (MN), and 222 in the Chinese Sarvāstivāda version (MA). As with the Dīgha, there are a number of independent discourses in Chinese, too. The Majjhima contains a wide range of discourses on diverse topics, with an emphasis on dialogue and discussion.`}
              </li>
              <li>
                ${_`<strong>Linked:</strong> The “linked” or “connected” discourses consists of a large number of smaller discourses organized mostly by topic, but also sometimes by the person who is involved. Here we find large collections of discourses on such key Buddhist topics as dependent origination, the five aggregates, the four noble truths, and the eightfold noble path. We have the Saṁyutta Nikāya (SN) in Pali, and a comparable Saṁyuktāgama of the Sarvāstivādins in Chinese translation (SA). In Chinese we also find two smaller, incomplete translations. In addition, there are a significant number of Saṁyutta style texts in Tibetan and Sanskrit.`}
              </li>
              <li>
                ${_`<strong>Numbered:</strong> The “numbered” or “numerical” discourses are usually known as Aṅguttara Nikāya in Pali. However, the Pali tradition also knows the form Ekottara (“one-up” or “incremental”), and this is the form usually found in the northern collections. These collections organize texts in numbered sets, from one to eleven. Compared to the other <i>nikāyas</i>, they are more oriented to the lay community. The Ekottarikāgama (EA) in Chinese is a highly unusual text, which features a range of variations within itself when it comes even to basic doctrines. It shares considerably less in common with the Pali Aṅguttara than the other collections do with their counterparts. In addition, there is a partial Ekottarikāgama in Chinese, as well as a variety of individual discourses and fragments in Chinese and Sanskrit.`}
              </li>
            </ul>
            <p>
              ${_`The four <i>nikāyas</i> in Pali are a highly integrated corpus of texts, and we continually find passages, teachings, and phrases that are shared throughout. It is possible to discern differences in emphasis and orientation between them, but this should not obscure the fact that the bulk of the main doctrines are shared. Lacking complete sets of <i>āgamas</i> from other schools, it is hard to know for sure that their collections were similarly integrated, but it seems likely that this was the case.`}
            </p>
            <p>
              ${_`Early discourses that were not included in the <i>nikāyas</i> were gathered by the Pali tradition into their Khuddaka or “minor” collection. It’s not entirely clear why these weren’t simply included in the four <i>nikāyas</i>; originally it may have simply been a matter of organizational convenience. The Pali has six works in the Khuddaka that are considered to belong to the early period. These mostly consist of verse, with some narrative and doctrinal material in prose.`}
            </p>
            <ul>
              <li>${_`Dhammapada`}</li>
              <li>${_`Udāna`}</li>
              <li>${_`Itivuttaka`}</li>
              <li>${_`Sutta Nipāta`}</li>
              <li>${_`Theragāthā`}</li>
              <li>${_`Therīgāthā`}</li>
            </ul>
            <p>
              ${_`While these texts are considered early, they are on the whole probably a little later than the main <i>nikāyas</i>. Certain chapters of the Sutta Nipāta have often been regarded as an especially early and authentic portion of the canon, but this should not be over-interpreted. Other parts of the Sutta Nipāta are clearly late. And there is nothing in the early portions to indicate that they are earlier than the bulk of the prose discourses.`}
            </p>
            <p>
              ${_`The collection seems to have been considered an open one until quite a late date. The Burmese recension of the Pali canon even includes the Milindapañha, a text that could not have been written less than three hundred years after the Buddha’s passing.`}
            </p>
            <p>
              ${_`It is unclear whether each school had its own version of the Khuddaka. However, many of these texts, especially the Dhammapada, have counterparts in the northern collections. It seems likely that despite differences in organization, each school would have had some collection loosely corresponding to the Khuddaka.`}
            </p>
            <p>
              ${_`The remaining texts in the Khuddaka were added later. In style and content, they represent a striking shift from the early texts. They indicate different developments within the Buddhist community in the centuries following the Buddha. These later texts include the extensive collections of Jātaka tales, found in Pali and other traditions. Note that in the Pali tradition, only the verses are canoncial, while the stories themselves are found in the commentary.`}
            </p>
            <h2 id="item5">${_`Canonicity of the Suttas`}</h2>
            <p>
              ${_`The early Discourses are regarded as canonical in all schools of Buddhism. They are considered to be Buddhavacana, the “words of the Buddha”, and are revered as sacred scripture. Each school, of course, accepts other texts as canonical also; but the Discourses, together with the Vinayas, are the main areas of overlap between the schools.`}
            </p>
            <p>
              ${_`This general picture, however, gets more complicated when we try to pin down the details. While the Discourses are largely similar in each canon, they are not identical. Each of the three main schools maintains its own distinct canons: the Theravāda of South and Southeast Asia have their texts in Pali; Buddhists of Central Asia use Tibetan; and in East Asia the canon is in Chinese. A full set of <i>nikāyas</i> are in Pali; extensive collections are found in Chinese; and limited selections are found in Tibetan. The Sanskrit and other early Indic texts are not part of any formal canon, but the texts are nevertheless canonical in the sense that they are recognized as being the same as the texts in the canon.`}
            </p>
            <p>
              ${_`So while we can say that the early Discourses are in principle considered canonical generally, for practical purposes each of the schools has a specific set of early Discourses found in their own canon.`}
            </p>
            <h2 id="item6">${_`Suttas in the Buddhist Traditions`}</h2>
            <p>
              ${_`In traditional Buddhist education, the Discourses have usually not been directly taught. Rather, the teachings and principles found in the Discourses have been assimilated and organized in later texts, which became the medium of education. In the Theravāda, Discourses were until recently passed down in Pali, and so were only accessible to those, usually monks, who learned Pali. And not all those who learned Pali would study the Discourses. It seems that teaching was for practical purposes handed down in local monastic traditions, based on handbooks and sets of notes and commentaries. Before modern times, it would have been rare to find any but the largest monasteries that actually possessed a full set of the Tipiṭaka. Today, printed sets of the canon are widely available in both Pali and translation; but they are still often left in a locked cabinet on the shrine, unread.`}
            </p>
            <p>
              ${_`For the most part, Buddhists might be familiar with a small set of popular discourses. These would include such texts as the Dhammacakkappavattana Sutta—the famous first sermon of the Buddha—and some short texts used for protection chanting and as the basis of sermons for the laity, such as the Maṅgala, Ratana, and Metta Suttas.`}
            </p>
            <p>
              ${_`Apart from scholars, most Theravāda Buddhists do not clearly distinguish early Discourses from other sacred texts. The word <i>sutta</i> can mean simply “sacred scripture” and may even be used for such things as magic formulas and the like. While Buddhists are generally aware that there is such a thing as the Tipiṭaka that contains the words of the Buddha, only educated Buddhists have a clear idea of the contents. There is no tradition in Buddhism comparable to the Bible readings of the Christian Mass, and so no standard way of communicating the contents of the texts directly to the people.`}
            </p>
            <p>
              ${_`In some Buddhist traditions, it is considered mandatory for ordained monks to memorize and study closely certain portions of the ancient texts. Sri Lankan monks, for example, memorize the Dhammapada. However, this is not the case in Thailand, for example, where there is no education requirement for monks. Even in the nine years of the formal Dhamma study curriculum in Thailand, the canonical Discourses are not studied, as they are considered too sacred.`}
            </p>
            <p>
              ${_`In East Asian Buddhism, traditional education focused on the Mahāyāna sutras and the texts of the Chinese masters, and there is little evidence that the early discourses were widely studied. It is sometimes said that the translation style of the <i>āgamas</i> compares poorly with the more elegant diction of the Mahāyāna translations by Xuanzang and other masters. And the early discourses are, of course, not organized for easy reading and study.`}
            </p>
            <p>
              ${_`Tibetan Buddhism includes study of early Buddhist schools as part of its regular curriculum. However, this refers to the Abhidhamma doctrines of the later schools. A reasonable grasp of the early Buddhist texts is, nevertheless, possible to achieve in Tibetan. Even though full <i>āgama</i> texts are lacking, substantial passages from the early texts are found in the Upāyika, which is a compilation of passages referred to in the Abhidharmakoṣa, and in other scattered texts.`}
            </p>
            <h2 id="item7">${_`Modern Reform and Postmodern Criticism`}</h2>
            <p>
              ${_`From the middle of the 19th Century, European and Asian scholars began to study the Buddhist texts on historical grounds. Whereas traditional scholarship remained within each school, interpreting them within their local contexts, the new scholarship aimed to locate the texts in historical time and place. This approach was both critical—in the sense of being skeptical of traditional claims to authority, and requiring evidence to support claims—and constructive, in the sense that it aimed to build a coherent and meaningful historical picture in which to understand the texts.`}
            </p>
            <p>
              ${_`Modernity brought a range of new techniques and achievements. These include:`}
            </p>
            <ul>
              <li>
                ${_`Comparative study of the previously isolated scriptures in Chinese, Pali, Tibetan, and Sanskrit revealed both similarities and differences.`}
              </li>
              <li>
                ${_`Based on the accounts of Chinese pilgrims, archaeologists unearthed a series of ancient sites in India, proving that familiar sutta locations like Sāvatthī or Rājagaha were real places.`}
              </li>
              <li>
                ${_`Comparison of Buddhist scriptures with Hindu and Jaina texts allowed for a better understanding of the cultural forces active in the Buddha’s time.`}
              </li>
              <li>
                ${_`Application of text-critical methods established the historical and doctrinal evolution of the Buddhist texts and their relation to one another.`}
              </li>
              <li>
                ${_`The Aśokan pillars and inscriptions were discovered and deciphered, allowing for a proper historical understanding of this seminal Buddhist monarch.`}
              </li>
              <li>
                ${_`There was a new emphasis on the early Discourses as the historical source for the Buddha’s teachings.`}
              </li>
            </ul>
            <p>
              ${_`Modernist developments such as these are not confined to Western scholarship, but have been conducted in conjunction with textual and practical reforms throughout Asian Buddhism. Each of the traditions of Asian Buddhism has participated in and applied these developments in diverse ways. Some examples include:`}
            </p>
            <ul>
              <li>
                ${_`In Theravāda, the Fifth and Sixth Councils reasserted the centrality of the Pali canon.`}
              </li>
              <li>
                ${_`Translations of the Pali canon have been made into modern Asian languages and widely distributed across the Buddhist world, along with English translations.`}
              </li>
              <li>
                ${_`The reformist Buddhism of King Mongkut in 19th Century Thailand was largely inspired by modernist ideas of textual and disciplinary reform.`}
              </li>
              <li>
                ${_`Modern approaches to meditation were developed based on Pali texts. The Burmese <i>vipassanā</i> schools took the Satipaṭṭhāna Sutta as their core text, making this the single most influential text in the modern practice of meditation. In Thailand, reform movements such as the Forest Tradition, or Ajahn Buddhadāsa’s explicitly sutta-based approach, rejected traditional contemplative practices based on magical invocations, and advocated a return to the body-focused and grounded mindfulness practices of the early suttas.`}
              </li>
              <li>
                ${_`The hugely influential Taishō edition of the Chinese canon was developed by Japanese scholars who had studied text-critical techniques in Germany. They rearranged the canon to put the <i>āgamas</i> in pride of place at the start of the collection, in the sequence found in the Pali. They also included limited information on Pali parallels.`}
              </li>
              <li>
                ${_`The empirical and rational strands of the early texts were emphasized, arguing for an essential compatibility with modern science. This provided the basis for the later application of scientific method to mindfulness meditation, which has proved crucial to the global acceptance of meditation as an evidence-based approach to happiness, stress relief, and psychological wellness.`}
              </li>
            </ul>
            <p>
              ${_`It remains the case that direct study of the suttas is a minority practice. However, across Asia we find popular reform movements that emphasize the central importance of the suttas. Sutta study is most popular in Sri Lanka, where there is a proliferation of teachers and movements advocating a return to the suttas. The hugely popular monk Venerable Kiribathgoda Gnanananda Thero is controversial for his insistence on treating the suttas as the primary sources of Dhamma. In Thailand, the Buddhavacana movement of Ajahn Kukrit Sotthibalo is changing the face of contemporary Thailand, bringing many people to read the suttas for the first time. In Taiwan, similarly, the recently deceased master Yin Shun emphasized the historical primacy of the early texts, arguing that there was an essential continuity between them and early Mahāyāna. And in countries outside the regions of traditional Buddhism, teachers such as Ajahn Brahm, Bhikkhu Bodhi, and many others advocate the teachings of the suttas.`}
            </p>
            <p>
              ${_`Since the 1980s, such modernist reforms have come under postmodern criticism, mostly from American scholars who specialize in later forms of Buddhism. These criticisms aim to dislodge the modernist consensus, arguing that we have no real way of knowing what the Buddha taught, or the provenance of the Pali and other texts. A variety of specific arguments attempt to refute key claims of the modernists, such as the idea that the Buddha’s teaching was essentially rational. These arguments have been repeatedly criticized by experts in the field. The postmodern approach has yet to produce constructive results comparable to those of modernism.`}
            </p>
            <h2 id="item8">${_`Translations`}</h2>
            <p>
              ${_`One of the most concrete outcomes of the modernist reforms has been the availability of translations of the early texts. Until now, almost all such translations have been from the Pali canon. But a few translations from the Chinese, Tibetan, and Sanskrit texts are now starting to appear.`}
            </p>
            <p>
              ${_`Work began in Europe with isolated translations such as Viggo Fausböll’s translation of the Dhammapada in 1855 and the Sutta Nipāta in 1881. Under the leadership of T.W. Rhys Davids, the Pali Text Society, founded in 1881, undertook the task of translating the entire canon into English. These translations were groundbreaking, but have for the most part been replaced by a more modern and accurate generation of translations by scholars such as Bhikkhu Bodhi. We include some of the older translations on SuttaCentral, but for the most part they are primarily of historical interest, since not only is the language archaic, but they contain many errors.`}
            </p>
            <p>
              ${_`Major translations from the Pali have also been made into Thai, Sinhala, Burmese, Cambodian, Vietnamese, Japanese, Hindi, and most recently Bangla. Most of these have been digitized and are available on SuttaCentral. However, we are still looking forward to including the Bangla and Cambodian translations, and the Japanese translation, though in the public domain, is unavailable due to the actions of the publisher.`}
            </p>
            <p>
              ${_`It’s not always possible to easily find out the translation methods and approaches of these different editions. However, my understanding is that the above translations were all made directly from the Pali. In addition to this, there have been many secondary translations made from the English translations. Most of the remaining translations in SuttaCentral fall into this category, though not all. Some translations, for instance, in German or Norwegian, have been made directly from the Pali.`}
            </p>
            <p>
              ${_`The new set of translations made from the Pali for SuttaCentral by myself and Bhante Brahmali build on this tradition. They aim to provide accurate, clear, and idiomatic translations of the early texts in Pali.`}
            </p>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_discourses-page';
  }
}

customElements.define('sc-discourses', Discourses);
