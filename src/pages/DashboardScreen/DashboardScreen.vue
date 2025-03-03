<script>
import { Line, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

// Registrar todos os componentes necessários
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, ArcElement)

export default {
  components: {
    LineChart: Line,
    PieChart: Pie
  },
  data() {
    return {
      lineChartData: {
        labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
        datasets: [
          {
            label: 'PV',
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
            borderColor: '#8884d8',
            fill: false
          },
          {
            label: 'UV',
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
            borderColor: '#82ca9d',
            fill: false
          }
        ]
      },
      pieChartData: {
        labels: ['Group A', 'Group B', 'Group C'],
        datasets: [
          {
            label: 'Pie Chart',
            data: [400, 300, 300],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Pages'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Values'
            }
          }
        }
      },
      pieChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return tooltipItem.raw + '%';
              }
            }
          }
        }
      }
    }
  }
}
</script>

<template>
    <div>
        <h1 class="title">Dashboard Teste</h1>
        <div class="container">
            <div class="chartWrapper">
                <div class="chart">
                    <line-chart :data="lineChartData" :options="chartOptions" />
                </div>
                <div class="chart">
                    <pie-chart :data="pieChartData" :options="pieChartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title{
    padding-top: 20px;
    text-align: center;
    font-size: 40px;
}
.container {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.chartWrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}

.chart {
    width: 800px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
