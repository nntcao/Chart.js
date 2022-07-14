module.exports = {
    config: {
      type: 'line',
      data: {
        datasets: [
          {label: 'a', data: []},
          {label: 'b', data: []},
          {label: 'c', data: []}
        ]
      },
      options: {
        font: {
            size: 20,
        },
        plugins: {
          legend: {
            title: {
              display: true,
              text: 'title'
            }
          }
        },
        scales: {
          x: {display: false},
          y: {display: false}
        }
      }
    },
    options: {
        spriteText: true,
        canvas: {
        height: 256,
        width: 256
      }
    }
  };
  