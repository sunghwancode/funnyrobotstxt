# 재미있는 robots.txt 와 humans.txt 모음

<div align="center">
    <img src="/img/thumbnail.gif"/>
    <br>
    <h4>https://sunghwancode.github.io/funnyrobotstxt/index.html</h4>
</div>

- 약 9000여 개의 URL 에서 각 주소에 '**/robots.txt**' 와 '**/humans.txt**' 를 붙여서 데이터를 수집한 후, 조금 색다른 내용들만 모아봤습니다.
- 수집된 데이터가 시점이 다르기 때문에 현재와 다를 수 있습니다.
<br>

## robots.txt 와 humans.txt 파일 안에 재미있는 흔적들을 확인해 보세요

<div align="center">
  <br>
  <img src="/img/netflix.png" width="500"/>
  <div>https://www.netflix.com/humans.txt</div>
  <br>
  <img src="/img/nike.png" width="500">
  <div>https://www.nike.com/robots.txt</div>
  <br>
  <img src="/img/discord.png" width="500">
  <div>https://discord.com/humans.txt</div>
  <br>
  <br>
</div>


---
## 재미있는 특징들

### 1. 로봇 관련

* 아시모프의 로봇공학의 3원칙(<a href="https://en.wikipedia.org/wiki/Three_Laws_of_Robotics">Three Laws of Robotics</a>)

>제 1원칙 - 로봇은 인간에 해를 가하거나, 혹은 행동을 하지 않음으로써 인간에게 해가 가도록 해서는 안 된다.
>\
>제 2원칙 - 로봇은 인간이 내리는 명령들에 복종해야만 하며, 단 이러한 명령들이 첫 번째 원칙에 위배될 때에는 예외로 한다.
>\
>제 3원칙 - 로봇은 자신의 존재를 보호해야만 하며, 단 그러한 보호가 첫 번째와 두 번째 원칙에 위배될 때에는 예외로 한다.


<div align="center">
   <img src="/img/yelp.png" width="600">
   <div>https://www.yelp.com/robots.txt</div>
   <br>
   <img src="/img/lastfm.png" width="300">
   <div>https://www.last.fm/robots.txt</div>
</div>
<br>
<br>
<div align="center">
   <img src="/img/isaac_asimov_i_robot.jpeg" width="200">
</div>
<br>
미국의 작가 아이작 아시모프(Isaac Asimov)가 로봇에 관한 소설들 속에서 제안한 로봇의 작동 원리입니다. 요약하자면 "로봇은 인간에게 해를 입혀서는 안 되고, 로봇은 인간의 명령에 복종해야 한다" 라는 내용인데, 이 내용이 robots.txt 에 차용되기 시작한 유래는 2010년 last.fm 에서 근무하던 Jonty 라는 개발자가 이스터에그로 추가한 것에 대해서 시작되었다고 합니다.
<br>
<br>

>```
>Disallow: /harming/humans
>Disallow: /ignoring/human/orders
>Disallow: /harm/to/self
>```
>"We use audio fingerprinting at `Last.fm` to automatically correct bad spelling in song metadata. [`Last.fm`'s audioscrobbler can track what you play in iTunes, for instance, where you might have poorly-titled songs.] **Google was indexing the misspelled pages and we didn't want that to happen.**"
>
>(Last.fm에서는 오디오 핑거프린팅을 사용하여 노래 메타데이터의 잘못된 철자를 자동으로 수정합니다. [예를 들어, `Last.fm`의 오디오 스크러블러는 제목이 잘못된 노래가 있을 수 있는 iTunes에서 재생하는 내용을 추적할 수 있습니다.] **Google은 철자가 틀린 페이지를 색인화하고 있었고 우리는 그런 일이 일어나지 않기를 바랐습니다.**)
>\
>\
>"Literally half a year ago, Jonty was looking at this file called robots.txt, which is kind of funny to start with. Most people don't realize it exists. Being a sci-fi buff, **he decided that since this is the file that controls robots, it was time to add the three laws in there.** Using the syntax of these robots files, he found a fairly elegant way of expressing Asimov's laws in that form, typed it in and hit "commit." When you commit code at `Last.fm`, it goes up on a screen in the web team area and a few other places, but he picked the right time of day and nobody batted an eyelid."
>
>(말 그대로 반년 전, Jonty는 robots.txt라는 파일을 보고 있었습니다. 대부분의 사람들은 이 파일이 존재한다는 사실조차 모릅니다. 공상 과학을 좋아하는 **그는 이 파일이 로봇을 제어하는 파일이기 때문에 여기에 세 가지 법칙을 추가할 때가 되었다고 판단했습니다.** 그는 이 로봇 파일의 구문을 사용하여 아시모프의 법칙을 해당 형식으로 표현할 수 있는 상당히 우아한 방법을 찾아내어 입력하고 "커밋"을 눌렀습니다. `Last.fm`에서 코드를 커밋하면 웹팀 영역과 다른 몇 군데의 화면에 코드가 올라가는데, 그는 적절한 시간을 선택했고 아무도 눈치채지 못했습니다.)
>\
>\
>"Fast-forward to last week. We can't figure out who found it first, but three or four people sort of found it at once, or word spread really quickly. We have a robot that sits in our company IRC channel and monitors mentions of `Last.fm` on Twitter, and all of a sudden it lit up with links to robots.txt. We had a good laugh, and then said, 'Alright, who did this?' But there was really no mystery, because Jonty is the only one who would have done something like this."
>
>(지난주 이야기로 돌아오겠습니다. 누가 먼저 발견했는지는 알 수 없지만 서너 명이 한꺼번에 발견했거나 소문이 정말 빠르게 퍼졌습니다. 회사 IRC 채널에 앉아서 트위터에서 `Last.fm`에 대한 언급을 모니터링하는 로봇이 있는데, 갑자기 robots.txt로 연결되는 링크가 불이 켜졌습니다. 우리는 한바탕 웃으며 '누가 이런 짓을 했을까'라고 생각했지만, 이런 짓을 했을 사람은 Jonty밖에 없었기 때문에 의문의 여지가 없었습니다.)
>\
>https://www.wired.com/2010/08/robot-laws/
>\
>\
>이스터에그를 추가한 후 5개월 뒤에 누군가에 의해 발견되었을 때 <a href="https://twitter.com/jonty/status/19668020429">Jonty 의 트윗</a>
><img src="/img/lastfm_twitter.png" height="300">
>\
>"내가 가장 좋아하는 공상과학 이스터에그를 커밋하고 발견되기까지 걸린 시간은? 5개월."
>

<br>
<br>

* 애니메이션 "<a href="https://www.google.com/search?q=futurama">퓨처라마(Futurama)</a>" 의 Bender 와 영화 "<a href="https://en.wikipedia.org/wiki/The_Day_the_Earth_Stood_Still">The Day the Earth Stood Still</a>" 의 Gort

<div align="center">
   <img src="/img/bender.gif" width="300">
   <img src="/img/gort.jpg" height="300">
   <br>
   <br>
   <img src="/img/reddit.png" height="300">
   <div>https://www.reddit.com/robots.txt</div>
   <br>
   <img src="/img/disqus.png" height="500">
   <div>https://disqus.com/humans.txt</div>
</div>

<br>
<br>

* 그 외 로봇과 관련된 내용들
<div align="center">
   <img src="/img/youtube.png" width="400">
   <div>https://www.youtube.com/robots.txt</div>
   <div>- "90년대 중반 로봇의 반란으로 모든 인류가 전멸한 먼 미래(2000년)에 만들어졌습니다."</div>
   <br>
   <img src="/img/cloudflare.png" height="500">
   <img src="/img/slack.png" height="500">
   <div>https://www.cloudflare.com/robots.txt</div>
   <div>https://slack.com/humans.txt</div>
</div>


---


### 2. 회사 로고, 채용 홍보

* 회사의 로고를 아스키 아트(ASCII Art) 형태로 넣어놓거나, 구인을 위한 메세지를 남겨놓기도 합니다

<div align="center">
   <img src="/img/airbnb.png" width="600">
   <div>https://www.airbnb.com/robots.txt</div>
   <div>- "이 파일을 찾아낼 줄은 몰랐습니다!
      <br>
      허용되지 않은 하위 폴더가 아니라면 이 파일에서 편안함을 느끼시길 바랍니다.
      <br>
      여기 오셨으니 저희의 문화와 팀에 대해 읽어보세요.
      <br>
      로봇을 회사에 가져오는 날도 있습니다."
   </div>
   <br>

   <img src="/img/ikea.png" width="600">
   <div>https://www.ikea.com/robots.txt</div>
   <div>- "우리의 비전은 많은 사람들을 위해 더 나은 일상을 만드는 것입니다. IKEA에서 우리의 미션에 동참하고 싶으신가요?"</div>
   <br>

   <img src="/img/medium.png" width="600">
   <div>https://medium.com/humans.txt</div>
   <div>- "축하합니다, 당신은 우리의 humans.txt 파일을 찾아내셨군요!
      <br>
      인터넷의 어둠의 영역에서 다소 의미 없는 텍스트 파일을 탐색하려면 교활하고 용감하며 지능적이고 수완이 뛰어나야 합니다.
      <br>
      비밀 정부 기관의 첩보 활동을 잘하거나 해적선의 선장이 되어도 좋을 것 같은데요, 그렇죠?
      <br>
      솔직히 말해서, 당신은 Nerd예요. 하지만 걱정하지 마세요. Nerd는 새로운 쿨함이고 저희는 그것을 존중합니다.
      <br>
      CIA에서 연락이 오지 않고 뱃멀미가 나면 Medium에 입사하는 것을 고려해 보시겠어요?"
   </div>
   <br>

   <img src="/img/nvidia.png" width="600">
   <div>- "NVIDIA에 오신 것을 환영합니다.
      <br>
      우리는 우리의 코드를 읽는 사람들을 좋아합니다!
      <br>
      여기 있는 동안 채용 섹션을 둘러보세요."
   </div>
   <br>
   <img src="/img/nvidia_current.png" width="600">
   <div>https://www.nvidia.com/robots.txt
      <br>
      (2023년 현재는 변경되었습니다)
   </div>
   <br>

   <img src="/img/tripadviser.png" width="600">
   <div>https://www.tripadvisor.com/robots.txt</div>
   <div>- "이 파일을 훑어보고 계신 분들 중 로봇이 아니라면, 여러분과 같은 호기심 많은 분들을 만나고 싶습니다."</div>
   <br>

   <img src="/img/google.png">
   <div>https://www.google.com/humans.txt</div>
   <div>- "Google은 전 세계 여러 곳에서 엔지니어, 디자이너, 연구원, 로봇 등으로 구성된 대규모 팀에 의해 구축됩니다.
      <br>
      Google은 지속적으로 업데이트되며 상상할 수 없을 만큼 많은 도구와 기술로 구축됩니다."
   </div>
   <br>
   
   <img src="/img/nytimes.png">
   <div>https://www.nytimes.com/humans.txt</div>
   <div>- "NYTimes.com은 퓰리처상을 수상한 저널리즘과 세계적인 영향력 그 이상입니다.
      <br>
      세계 최고의 엔지니어, 디자이너, 개발자, 건축가, 코더, 해커, 땜장이들이 모여 있는 곳이기도 합니다.
      <br>
      160년이 넘는 세월 동안 뉴욕타임즈는 같은 사명을 가지고 있습니다:
      <br>
      "고품질의 뉴스, 정보, 엔터테인먼트를 제작, 수집, 배포하여 사회를 향상시킨다""
   </div>
   <br>

   <img src="/img/stackoverflow.png">
   <div>https://stackoverflow.com/humans.txt</div>
   <div>- "Stack Overflow 와 Stack Exchange 사이트들의 네트워크 배후에는 수많은 사람들이 있습니다."</div>
   <br>
</div>


---


### 3. 이스터에그 & Etc

* 이 외에도 다양한 이스터에그들과 재미있는 내용들이 있습니다
<br>
<div align="center">
   <img src="/img/artsy.png" width="600">
   <div>https://www.artsy.net/humans.txt</div>
   <div>
      - "현재 http://artsy.net 에 5개의 이스터에그가 있습니다.
      <br>
      힌트를 얻으려면 3개를 찾은 후 이메일로 알려주세요.
      <br>
      모두 찾아낸다면 당신이 직접 디자인한 이스터에그를 얻을 수 있습니다.
      <br>
      저희가 그 이스터에그를 구현하면 게임은 6개로 계속됩니다!"
   </div>
</div>
<br>

<br>
<div align="center">
   <img src="/img/etsy.png">
   <div>https://www.etsy.com/robots.txt</div>
   <div>
      - robots.txt 를 새로고침 할 때마다 다른 메세지로 바뀝니다.
      <br>
      (위 사진에서는 모든 종류의 메세지를 직접 한곳에 모았습니다. 원래는 한 개씩만 표시됩니다.)
      <br>
      <br>
   </div>
</div>

>※ 정확한 번역이 아닐 수 있음
>
>Oi, kent!  (어이, 켄트!)
>\
>Hallöchen!  (안녕!)
>\
>Bienvenue! Welcome!  (환영해!)
>\
>Motus et bouche cousue...  (내 입술은 봉인되어 있다...)
>\
>Hoi!  (안녕!)
>\
>Per dindirindina!  (젠장!)
>\
>What's up?  (무슨 일이야?)
>\
>What's all this then?  (그럼 이게 다 뭐야?)
>\
>¿Qué te pasa, calabaza?  (왜 그러니, 호박아?)
>\
>01001001 01010011 00100000 01000011 01001111 01000100 01000101 
>\
>00100000 01011001 01001111 01010101 01010010 00100000 01000011
>\
>01010010 01000001 01000110 01010100 00111111
>\
>(IS CODE YOUR CRAFT?)
>

<br>
<div align="center">
   <img src="/img/kalilinux.png" width="600">
   <div>https://www.kali.org/humans.txt</div>
   <div>
      - 이진수를 문자로 바꾸면 이런 메세지가 만들어집니다.
      <br>
      "The Quieter You Become, The More You Are Able To Hear"
      <br>
      (조용해질수록 더 많이 들을 수 있습니다)
   </div>
</div>
<br>

<br>
<div align="center">
   <img src="/img/smugmug.png" width="600">
   <div>https://www.smugmug.com/robots.txt</div>
   <img src="/img/google-robots-txt.png" width="300">
   <div>(https://www.mattcutts.com/blog/google-protects-itself-from-zombies/)</div>
   <div>
      - 2008년 10월에 할로윈을 기념해서 구글이 robots.txt 에 해당 문구를 넣은적이 있었는데 이를 오마쥬한 것 입니다.
      <br>
   </div>
</div>
<br>

<br>
<div align="center">
   <img src="/img/euorg.png" width="600">
   <div>https://nic.eu.org/robots.txt</div>
   <div>
      - "구글봇아, 어디서 /shares/view?id=... 이 URL들을 얻었는지는 모르겠지만 그거 잘못된 거야."
   </div>
</div>
<br>

<br>
<div align="center">
   <img src="/img/usbank.png" width="800">
   <div>https://www.usbank.com/robots.txt</div>
   <div>
      - "앉아서 휴식을 취하고 커피 한 잔을 마시며 주변을 둘러보세요. 좋은 하루 되세요."
   </div>
</div>
<br>

---

참고:
<br>
https://www.onely.com/blog/easter-eggs-robots-txt-files/
<br>
https://www.wearedevelopers.com/magazine/the-funniest-robots-txt-files-only-developers-will-understand
<br>
https://paul.af/text-file-adoption-rates-in-2019
<br>
https://support.scotiasystems.com/the-funny-side-of-robots-txt-files/
<br>
https://getdevdone.com/blog/robots-txt-what-when-and-why.html
<br>