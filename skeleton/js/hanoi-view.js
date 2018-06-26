class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    
    this.setupTowers();
    this.render();
    
    let isFirstMove = true;
    let firstMove;
    
    $('ul').on('click', (e) => {
      if (isFirstMove) {
        const $divEl = $(e.currentTarget).find('div');
        $divEl.css('background', 'red');
        
        isFirstMove = false;
        firstMove = $(e.currentTarget).data('tower');
      } else {
        $('div').css('background', 'black');
        isFirstMove = true;
        
        let secondMove = $(e.currentTarget).data('tower');
        this.game.move(firstMove, secondMove);
        firstMove = null;
      }
      this.render();
    });
  }
  
  setupTowers(){
    for (let i = 0; i < 3; i++) {
      const towers = $('<ul></ul>');
      towers.data('tower', i);
      
      for (let j = 0; j < 3; j++){
        const $disc = $('<li></li>');
        $disc.addClass(`pos${i}${j}`);
        
        towers.append($disc);
      }
      
      this.$el.append(towers);
    }
    const $underline = $('<div></div>');
    $underline.addClass('underline');
    $('ul').append($underline);
  }
  
  render() {
    const towers = this.game.towers;
    $('li').removeClass('disc1');
    $('li').removeClass('disc2');
    $('li').removeClass('disc3');
    
    for( let i = 0; i < 3; i++) {
      if (towers[i].length > 0) {
        for (let j = 0; j < towers[i].length; j++) {
          let $tower = $(`.pos${i}${j}`);
          $tower.addClass(`disc${towers[i][j]}`);
        }
      }
    }
  }  
}

module.exports = HanoiView;