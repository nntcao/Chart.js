module.exports = {
  config: {
    type: 'scatter',
    options: {
      font: {
        size: 20,
      },
      scales: {
        x: {
          min: 0,
          max: 10,
          title: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          }
        },
        y: {
          min: 0,
          max: 10,
          title: {
            display: false,
          },
          grid: {
            display: false,
          },
          ticks: {
            display: true,
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
