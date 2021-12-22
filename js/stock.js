var target = $('#chart_view_top');


const labels = [
  'Citibank',
  '국민연금',
  'sk텔레콤',
  'sk(주)',
  '기타'
];
const data = {
  labels: labels,
  datasets: [
    {
    label: '2020',
    pointRadius:5,
    pointHoverRadius:10,
    backgroundColor: 'rgb(114,113,113)',
    hoverBackgroundColor:'rgba(114,113,113,.5)',
    borderColor: 'rgb(255, 99, 132)',
    borderDash:[20,5],
    data: [9.8, 11.12, 9.42, 26.78, 42.91],
  },
    {
    label: '2021',
    pointRadius:5,
    pointHoverRadius:10,
    backgroundColor: 'rgb(234,0,44)',
    hoverBackgroundColor:'rgba(234,0,44,.5)',
    borderColor: 'rgb(0, 0, 132)',
    borderDash:[20,5],
    data: [8.41, 10.97, 11.66, 26.78, 42.18],
  }
  ]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        align : 'end',
        position: 'bottom',
        labels: {
          padding: 15
        }
      }
    }
  }
};

var myChart = new Chart(
    target,
    config
  );


// chart2 -------------------------------- 
var target2 = $('#chart_view_bottom');

const labels2 = [
  '자사주',
  '의결권 행사',
];

const data2 = {
  labels: labels2,
  datasets: [
    {
    label: ['의결권 행사', '자사주'],
    pointRadius:5,
    pointHoverRadius:10,
    backgroundColor: ["rgb(255,122,0)","rgb(234,0,44)"], 
    hoverBackgroundColor:["rgba(255,122,0,.5)","rgba(234,0,44,.5)"],
    borderDash:[20,5],
    data: [11.6, 88.3],
  }
  ]
};

const config2 = {
  type: 'pie',
  data: data2,
  options: {
    responsive: false,
    plugins: {
      legend: {
        align : 'center',
        position: 'right',
        labels: {
          padding: 15
        }
      }
    }
  }
};


var myChart2 = new Chart(
  target2,
  config2
);


$(window).trigger('resize')
