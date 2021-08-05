const quiz = [
    {
      question: '私の飼っているペットの種類は？',
      answers: [ 'ねこ', 'いぬ', 'うさぎ', 'とり'],
      correct: 'ねこ'
    }, {
      question: '2020オリンピックの開催国は？',
      answers: [ 'ロシア', 'アメリカ', '日本', 'オーストラリア'],
      correct: '日本'
    }, {
      question: '日本で一番大きい都道府県は北海道ですが、私の１晩好きな食べ物は次のうちどれ？',
      answers: [ '味噌ラーメン', '牛タン', '梅', 'スープカレー'],
      correct: 'スープカレー'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }