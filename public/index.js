class Game {
  constructor (player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.refresh()
  }

  refresh () {
    $.getJSON('http://localhost:3000/api', (response) => {
      this.state = response.state
      this.renderBoard()
      setTimeout(() => this.refresh(), 3000)
    })
  }

  renderBoard () {
    $('#board').html(this.drawBoard())
  }

  drawBoard () {
    let board = '<table>'
    for (let row = 0; row < this.state.length; row = row + 1) {
      board += this.drawRow(this.state[row])
    }
    board += '</table>'
    return board
  }

  drawRow (row) {
    let board = '<tr>'
    for (let col = 0; col < row.length; col = col + 1) {
      board += this.drawCell(row[col])
    }
    board += '</tr>'
    return board
  }

  drawCell (player) {
    let board = '<td>'
    if (player !== '#' && player !== ' ') {
      board += '<div class="piece player' + player + '" draggable="true"></div>'
    }
    board += '</td>'
    return board
  }
}

class Piece {
  constructor (player, column, row) {
    this.player = player
    this.column = column
    this.row = row
  }
}

const game = new Game()
