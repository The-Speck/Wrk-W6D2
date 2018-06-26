class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on('click', 'li', (e) => {
    const $square = $(e.target);
    this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    try {
      this.game.playMove(pos); 
      $square.css('background', 'white');
      $square.append(this.game.currentPlayer);
    } catch (e){
      alert(e.msg);
    }
    
    if (this.game.winner()) {
      alert("You awesome, you.");
    }
  }

  setupBoard() {
    for (let i = 0; i < 3; i++) {
      const $row = $('<ul></ul>');
      $row.data('row', i);
      
      for (let j = 0; j < 3; j++){
        const $col = $('<li></li>');
        $col.data('pos', [i, j]);
        
        $row.append($col);
      }
      
      this.$el.append($row);
    }
    
  }
}

module.exports = View;
