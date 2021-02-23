import React from 'react'
// import { graphql } from 'gatsby'
import Meta from "../components/meta"
import { Link } from "gatsby"
import Layout from '../components/Layout'


export default () => (
  <Layout>
    <Meta
      title="ワークスタイル"
      bodyclass="workstyle gallery"
    />

    <main id="main">
      <div className="area-img fade-in"></div>
      <div className="main-gradient-overlay"></div>
      <div className="dot-img fade-out"></div>
      <div className="main-title-wrap">
        <h1 className="fade-in">WorkStyle</h1>
        <p className="message-main-copy fade-in">働き方が「自分らしさ」をつくる。<br />ZENKIGEN創業者が考えるこれからのWorkStyle</p>
      </div>
    </main>

      <div className="workstyle-read sc-f">
        <p>人とAIが調和する社会を目指し採用DXを推進しているZENKIGENは、WEB面接サービス「harutaka」や面接官支援サービス「ZIGAN」など、最先端テクノロジーを駆使したサービスを提供してきました。このような新たな時代をリードするサービスや事業の展開を支えてきたのは、組織の成長を牽引してきた創業者の野澤と水野のこれまでの常識にとらわれない「働き方に対する柔軟な発想と環境づくりへの想い」に他なりません。なぜ、メンバーが自らの能力を最大限発揮できる組織づくりにチャレンジしているのか。創業から3年となる節目のタイミングに、ZENKIGENの土台となるカルチャー、2人が考える新しい働き方についてインタビューしました。</p>
      </div>

      <section className="sec workstyle-profile sc-f">
        <div className="sec-container">
          <h2>Profile</h2>
          <p className="profile-name">野澤 比日樹（のざわ・ひびき）</p>
          <p className="profile-jp">1998年株式会社インテリジェンス（現：パーソルキャリア）に新卒入社。1999年創業期のサイバーエージェントへ転職し、大阪支社の立ち上げ、社長室、事業責任者等に従事し、会社の成長に貢献。2011年に孫正義会長の誘いでソフトバンクグループの社長室に入社し、電力事業であるSB Power株式会社の設立、立ち上げに携わる。2017年10月株式会社ZENKIGEN創業。</p>

          <p className="profile-name">水野 宇広（みずの たかひろ）</p>
          <p className="profile-jp">1999年安田火災海上保険株式会社（現：損害保険ジャパン日本興亜）に新卒入社。2000年株式会社インテリジェンス（現：パーソルキャリア）へ転職。その後、株式会社ノッキングオンの創業、クックパッド上場準備・人事部長、AOI Pro.(現：AOI TYO Holdings)を経て、2012年12月より株式会社ユニコン代表取締役COOとして創業より参画。2017年10月株式会社ZENKIGEN創業。</p>
        </div>
      </section>

      <section className="sec workstyle-sec">
        <div className="section-title sc-f">
          <h3>ZENKIGENに集まるのは「意識が社会に向いてる人々」</h3>
        </div>
        <div className="sec-workstyle-container">
          <p className="interview-q sc-f">ZENKIGENはこの3年で「harutaka」や「ZIGAN」など、人工知能（AI）を用いたサービスを世の中に送り出してきました。この成長を支えている一番の要因はなんでしょうか。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>それは間違いなく、志の高い優秀なメンバーが集まり、日々事業の成長、自身の成長のために懸命に努力をしてくれているからです。さらに、ただこの会社のことだけを考えているわけでなく、「意識が社会に向いてる人が多く集まっている」というのがZENKIGENメンバーの特徴だと考えています。<br /><br />私も水野も、「今だけ」、「お金だけ」、「自分たちの会社だけ」という発想ではなく「社会や次世代のことをしっかりと視野に入れて物事を考える」ということを日頃から強く意識しています。その想いを会社のビジョンにも込めていますし、社会へ貢献していくということが最終的には事業の成長にも直結する信じています。</p>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>これまでの採用活動においてもそのような想いを伝え続けてきたので、ZENKIGENのビジョンに共感して集まってくれたメンバーが多いと思いますし、現在活躍をしてくれているメンバーが、この組織の成長とカルチャーを今まさにつくってくれているところだと感じています。私は、ビジョンを実現するために組織があると考えています。そのために野澤と会社を立ち上げました。</p>
          <p className="interview-q sc-f">まさにお二人の想いに共感して引き寄せられたメンバーが集まったということですね。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>そうと信じたいです（笑）。振り返れば、互いに人柄や考えによって引き寄せられたのだと思います。「この人と一緒に仕事したい」、「この考えが好きだな」という人が自然と集まっている気がします。</p>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>面接後に「一緒に働きたい」とその場で言ってくれる方もいて、私たちが言葉として伝えている気持ちや想いは、きちんと応募者の方にも伝わっているのだと信じています。ただそれは、あくまでもZENKIGENの一部です。嬉しいことにこの3年間で多くの仲間がZENKIGENにジョインしてくれました。ここにいるメンバーは全員が創業メンバーといっても過言ではないですし、彼らがつくり出したカルチャーも含め、人が集まる雰囲気をつくってくれていると思います。</p>
        </div>
      </section>

      <section className="sec workstyle-sec">
        <div className="section-title sc-f">
          <h3>自宅、茅ヶ崎、大手町、青山ーー働く場所を問わないオンライン時代の関係性</h3>
        </div>


        <div className="photo-gallery sc-f">
          <figure className="photo-main">
            <img src="/img/workstyle01.jpg" alt="" className="show" />
              <figcaption className="show">ZENKIGEN本社のあるInspired.Labにて対談</figcaption>
          </figure>
          <ul>
            <li className="current"><img src="/img/workstyle01.jpg" alt="ZENKIGEN本社があるInspireLabにて対談" /></li>
            <li><img src="/img/workstyle02.jpg" alt="Inspired.Labのコワーキングスペース" /></li>
            <li><img src="/img/workstyle03.jpg" alt="Inspired.Labのコワーキングスペース" /></li>
            <li><img src="/img/workstyle04.jpg" alt="Inspired.Labのカフェスペース" /></li>
          </ul>
        </div>

        <div className="sec-workstyle-container">
          <p className="interview-q sc-f">今、ZENKIGENでは「WorkStyle」と言うテーマでオフィスのあり方や働き方の当たり前を見直す動きが進んでいます。その背景について教えてください。</p>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>はい、ZENKIGENでは創業時からフルフレックス、フルリモートを導入していました。私個人として、多くの人が職場の近くに住むことが常態化してしまっていて、住むところや働き方の選択肢を自由に持てない状況に違和感を覚えたからです。<br /><br />しかし、新型コロナウイルス感染拡大によって一気にオンライン化が進み、ZENKIGENだけでなく在宅勤務が当たり前になりました。そこで新たに問題となったのが、集まる場所がないことによる「関係性の欠如」です。「リアルでもオンラインでもきちんと関係性をつくる場を会社が提供することが大事ではないのか」、「通勤の最中に季節の移ろいやトレンドを社会から感じ取るきっかけになるのではないか」、「出社することで得られるリアルな雑談がセレンディピティとの出会いにつながるのではないか」などの想いからオフィスのあり方を再定義しました。</p>
          <p className="interview-q sc-f">具体的にどのように見直したのでしょう。</p>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>「オフライン」、「オンライン」という切り口で、見直しました。会社としては、現在の大手町オフィスをはじめ、青山のエイベックス株式会社内にあるコワーキングスペース、そして2020年11月からは茅ヶ崎サザンビーチオフィスを働く場所として提供しています。新しいワークスペースの提供として茅ヶ崎を選んだのは、自然豊かな湘南地域で働くことが、人間らしい暮らしの実現につながると思ったからです。<br /><br />また、創業当初から導入している自宅でのオンライン勤務も引き続き可能です。もちろん自宅だけにとどまらず、周辺のカフェやワークスペースなど、その日の状況に合わせて勤務場所を選択してもらうこともできます。</p>

          <section className="workstyle-chart sc-f">
            <h5>その日の状況によって勤務場所の選択が可能</h5>
            <dl className="workstyle-chart-list">
              <dt>オフィス</dt>
              <dd>
                <ul>
                  <li>
                    <div className="workstyle-space-name">Inspired.Lab</div>
                    <div className="workstyle-space-name-sub">大手町</div>
                    <div className="workstyle-space-text">本社。抜群の交通利便性、<br />テクノロジーイメージ</div>
                  </li>
                  <li>
                    <div className="workstyle-space-name">Zenkigen Sazan Beach Office</div>
                    <div className="workstyle-space-name-sub">茅ヶ崎</div>
                    <div className="workstyle-space-text">仕事X遊びX自然<br />クリエイティビティ促進</div>
                   </li>
                </ul>
              </dd>
              <dt>リモート</dt>
              <dd>
                <ul>
                  <li>
                    <div className="workstyle-space-name">エイベックス</div>
                    <div className="workstyle-space-text">営業中の中継、トレンドの中心地</div>
                  </li>
                  <li>
                    <div className="workstyle-space-name">自宅</div>
                    <div className="workstyle-space-text">通勤なし、時間の有効活用</div>
                  </li>
                </ul>
              </dd>
            </dl>
          </section>

          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>在宅中心の生活になると、どうしても自宅に籠りがちとなり、自然に触れる余裕がなく、自律神経が乱れやすくなってしまいます。このため、自然の近くで過ごすことは、健康的な暮らしを実現する方法の一つとして大切です。ZENKIGENメンバーには最大限の能力を発揮していてほしいので、まずは健康でいてもらえるような環境づくりを心がけています。<br /><br />
            また湘南地域の学生や地元の方々とコミュニティ形成やイベントの共催など積極的に交流していけたら面白いなとも考えています。この地域を拠点とするスタートアップがまだまだ少ないため、その地で活動したいという気持ちもありました。</p>
        </div>
      </section>

      <section className="sec workstyle-sec">
        <div className="section-title sc-f">
          <h3>ワーケーションで広げる「働き方の多様性」</h3>
        </div>
        <div className="photo-gallery sc-f">
          <figure className="photo-main">
            <img src="/img/workstyle06.jpg" alt="" className="show" />
              <figcaption className="show">Zenkigen Sazan Beach Office</figcaption>
          </figure>
          <ul>
            <li className="current"><img src="/img/workstyle06.jpg" alt="ZENKIGEN本社があるInspireLabにて対談" /></li>
            <li><img src="/img/workstyle07.jpg" alt="Zenkigen Sazan Beach Officeのワーキングスペース" /></li>
            <li><img src="/img/workstyle05.jpg" alt="Zenkigen Sazan Beach Officeのテラス" /></li>
            <li><img src="/img/workstyle08.jpg" alt="Zenkigen Sazan Beach Officeのバーカウンター" /></li>
          </ul>
        </div>
        <div className="sec-workstyle-container">
          <p className="interview-q sc-f">確かに在宅勤務によってオンライン中心の生活になってから、外出する機会が減ったという言う話もよく聞きます。</p>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>オンライン漬けの生活によって一歩も外に出ない日があるというのは、心身の健康に影響を及ぼしかねません。自然の近くに働く場を置く決断をしたのは、私たちの中でも一つのチャレンジです。</p>
          <p className="interview-q sc-f">まさにお二人の想いに共感して引き寄せられたメンバーが集まったということですね。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>私たちは、AIを活用したサービスを展開していますが、一番やりたいことは多くの人が仕事でもプライベートでも自身の能力を最大限発揮できる状態である「全機現（ゼンキゲン）」な状況を社会につくることです。これは禅の言葉の一つで、ZENKIGENの社名由来でもあります。<br /><br />
            仕事は人生の一部ですが、仕事だけが人生ではありません。皆さん大切なご家族も居て、趣味もあると思います。何よりも自分が幸せでないと、社会に対して何かをすることはできません。その中で、新しい働き方をつくろうとしてるZENKIGENが、過去の働き方のままでいる訳にはいかないと思いました。</p>
          <p className="interview-q sc-f">働く場所の選択も含め、多様化を進めようとしていると。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>はい、さらに今回の茅ヶ崎オフィスを第一弾の取り組みとし、今後はワーケーションを導入し、働き方の多様性を広げる予定です。この冬、札幌へワーケーションに行くメンバーには、仕事の量を調整したり、有給を織り交ぜたりして、「本当に生産性が高くなるかを客観的に判断してほしい」とお願いしました。<br /><br />新しいことにどんどんトライして、生産性と創造性を高める方法を積極的に取り入れていく、仕事と人生のどちらも諦めず、成果を出しながら豊かに暮らすことを追求していく。それだけ自律した人でないとZENKIGENはマッチしないし、自律している人だからこそ安心して送り出せます。</p>
        </div>
      </section>

      <section className="sec workstyle-sec">
        <div className="section-title sc-f">
          <h3>「親孝行制度」「ZENKIGEN休暇」「ファミリーデー」独自の福利厚生でメンバーの働きを後押し</h3>
        </div>
        <div className="sec-workstyle-container">
          <p className="interview-q sc-f">働き方や働く場所以外にもZENKIGENにはさまざまな福利厚生が準備されています。その中でもお二人がすすめる福利厚生は何でしょう。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>私は「親孝行制度」をおすすめしたいです。メンバー自身もしくは配偶者のご家族と食事をするときの金額を支援します。本制度は、家族の大切さを感じてもらいたくて考案しました。私たちが存在しているのは、親のおかげです。私は母親を若くして亡くしたので、それができません。1年に1回でも、ご家族に顔を見せる機会をつくることで、メンバーの親孝行に役立ててもらえればと思いました。</p>

          <dl className="workstyle-worksystem sc-f">
            <dt><span>親孝行制度</span></dt>
            <dd>本制度は自身のご両親、または配偶者のご両親までが対象です。それぞれに対し1回／年まで利用可能で、食事風景の写真をSlackに投稿してもらうことで証明はOKです。実家に帰るときや、また逆に上京されるタイミングなどに利用するメンバーが多いです。ご両親が近所にお住まいの場合は、お誕生日をはじめ、お祝いのタイミングなどで活用されています。</dd>
          </dl>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>私は「ZENKIGEN休暇」かな。普通の有休とは別に、5日間連続で取得できる特別休暇を用意しました。「心身をよく休め、その後の仕事で全機現するために使ってください」という休暇です。これも私たちらしい福利厚生だと思います。</p>

          <dl className="workstyle-worksystem sc-f">
            <dt><span>ZENKIGEN休暇</span></dt>
            <dd>通常有給とは別に、特別付与される平日5日間連続で取得できる特別休暇です。目的はあくまで休暇明け後の全機現のため。座禅などの修行に出る人もいれば、気分転換のため海外旅行に行く人もいます。逆に自宅周辺でひたすら家族と濃密な時間を過ごすメンバーもいます。皆がそれぞれ思い思いに工夫し、活用しています。</dd>
          </dl>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>他にも「ファミリーデー」というイベントがあります。面白いのが、家族やパートナー、親友など自分の大切な人を招待できることです。私たちがZENKIGENとして一生懸命働けるのは、周りの家族や仲間に支えられているからです。このイベントは、大切な人に感謝の気持ちを伝える場でもあります。</p>

          <dl className="workstyle-worksystem sc-f">
            <dt><span>ファミリーデー</span></dt>
            <dd>日頃、ZENKIGENメンバーを支えてくれている家族やパートナー、親友など自分の大切な人と一緒に参加できるイベントです。まだまだ無名のスタートアップに入社することを許可してくれた身近な方々。彼らの寛容な姿勢がなければ、ZENKIGENで働く私たちは生まれませんでした。その感謝を伝えるための非常に大切な機会であり、また、会社の成長や様々なチャレンジをしっかりとお伝えすることで、安心感を得てもらうことと、ZENKIGENをより好きになってもらいたいという意図もあります。美味しい料理やお酒、そして楽しい企画を多数用意して、皆で盛り上がっています。</dd>
          </dl>
          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>あと忘れてはいけないのが、代表自らがCHO（チーフ・ヘルス・オフィサー、Chief Health Officer）となり、メンバーの健康にも気を使っていることです。私たちは、静岡県西部・浜名湖畔にあるMARU FARMさんと連携し、ZENKIGEN農園を運営しています。そこからZENKIGENがメンバーとなっているInspired.Lab内にあるカフェへ新鮮な有機野菜を届けてもらい、新型コロナウィルスが感染拡大する前まではその野菜を使った料理が食べられるランチ会を定期的に開催していました。社員の健康まで主体的に関われる代表は、中々いないと思います。</p>

          <dl className="workstyle-worksystem sc-f">
            <dt><span>ZENKIGEN農園</span></dt>
            <dd>静岡県西部・浜名湖畔に位置するMARU FARMと連携し、運営している農園です。そこでつくられた新鮮な有機野菜をZENKIGENがメンバーとなっているInspired.Lab内にあるカフェへ届けてもらっています。メンバーの健康を支えるための取り組みの一つです。</dd>
          </dl>
        </div>
      </section>

      <section className="sec workstyle-sec">
        <div className="section-title sc-f">
          <h3>目指すは誰しもが「最大限の能力」を発揮できる社会</h3>
        </div>
        <div className="sec-workstyle-container">
          <p className="interview-q sc-f">ZENKIGENはテクノロジーの開発を通して、何を目指すのでしょう。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>今、日本の大問題は職場環境が原因で発症するうつ病等のメンタル疾患です。最悪の場合には、自殺にまで及ぶこともあります。私たちはテクノロジーの力で、この問題を解決しようとしています。自身の能力を最大限に発揮できる全機現と対極にあるのが、このような課題です。本人は全機現できない状態に苦しみ、家族や周りのメンバーもそんな状態を見ているのは辛い。社会からそうした状態を無くしたいのはもちろん、当社メンバーにももちろんそのような状態になってほしくないと心から思います。</p>
          <p className="interview-q sc-f">社会が元気な状態であってほしい、それをテクノロジーの力で解決したいという気持ちが伝わってきました。最後にお二人は新たなWorkStyleを通して、メンバーにどうあってほしいと考えていますか。</p>

          <p className="interview-a sc-f"><span className="intervew-em">水野：</span>私は「毎日生まれ変わるという意識」を持ってほしいです。全機現という言葉は、「毎日死んで、毎日生まれ変わろう」という意味を持ちます。例えば生まれたばかりの赤ちゃんは自我のまま生きていますよね。だけど成長するにつれて、気がついたら「会社や世間に縛られている」という人も少なくありません。<br /><br />これは自身の意識の問題で、自分がつくり出している状況です。自身を縛るものを毎日捨て、ゼロから生まれ変わるという気持ちで生きていくことは、自分らしさを追求する上で一番重要だと思います。これからの時代、過去の考えに縛られていても仕方がありません。未来がどうなるか分からない時代、あらためて「毎日生まれ変わろう」とメンバーには伝えたいです。</p>
          <p className="interview-a sc-f"><span className="intervew-em">野澤：</span>「自分らしさ」を持ってほしいです。私はいつもメンバーに「自分の人生を生きよう」と伝えます。自分らしい人生を生きる中で大事なのは、精神や時間の余裕、家族の支えなどです。こうした状態が整っていない環境では、自分の人生を生きるのは、かなり難しいと思います。ZENKIGENではこれからも、時間や場所にとらわれ過ぎずに働くことができる環境や、自然溢れるワークスペースを提供していきます。休暇やワーケーションを通して心身をリセットしたり、家族に感謝を伝えたりすることで、常に自分らしくあってほしいと思います。</p>
          <p className="interview-q sc-f">野澤さん、水野さんありがとうございました。</p>

        </div>
      </section>

  </Layout>
  )