module.exports = {
  config: {
    type: 'line',
    options: {
      font: {
        size: 20,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'horizontal',
          },
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          }
        },
        y: {
          title: {
            display: true,
            text: 'vertical',
          },
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          }
        }
      }
    }
  },
  options: {
    canvas: {
      spriteText: true,
      height: 256,
      width: 256
    },
  }
};
