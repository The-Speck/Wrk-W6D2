class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    
    this.setupTowers();
    this.render();
  }
  
  setupTowers(){
    for (let i = 0; i < 3; i++) {
      const towers = $('<ul></ul>');
      
      for (let j = 0; j < 3; j++){
        const $disc = $('<li></li>');
        $disc.addClass(`pos${i}${j}`);
        
        towers.append($disc);
      }
      
      this.$el.append(towers);
    }
    const $underline = $('<div></div>');
    $('ul').$el.append($underline);
  }
  
  render() {
    const towers = this.game.towers;
    $('li').removeClass('disc1');
    $('li').removeClass('disc2');
    $('li').removeClass('disc3');
    
    for( let i = 0; i < 3; i++) {
      if (towers[i].reverse().length > 0) {
        for (let j = 0; j < towers[i].length; j++) {
          let $tower = $(`.pos${i}${j}`);
          $tower.addClass(`disc${towers[i][j]}`);
        }
      }
    }
  }  
}

module.exports = HanoiView;