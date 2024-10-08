import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { BiInfoCircle } from "react-icons/bi";

import 'chart.js/auto';
import './PieChart.css';

const PieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#FA7E7E', '#2CDED5'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false,
      },
      cutout: '70%', 
    },
    maintainAspectRatio: false,
  };

  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
      if (chart.config.type !== 'pie') return; 
      const { ctx, chartArea: { width, height } } = chart;
      ctx.save();

      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
      ctx.fillText('2659', width / 2, height / 2);

      ctx.font = '12px Arial';
      ctx.fillText('Total', width / 2, height / 2 - 20);

      chart.getDatasetMeta(0).data.forEach((arc, index) => {
        const dataset = chart.data.datasets[0];
        const value = dataset.data[index];
        const text = `${value}%`;

        const { startAngle, endAngle, innerRadius, outerRadius } = arc;
        const angle = (startAngle + endAngle) / 2;
        const radius = (innerRadius + outerRadius) / 2;

        const textX = width / 2 + radius * Math.cos(angle);
        const textY = height / 2 + radius * Math.sin(angle);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, textX, textY);
      });

      ctx.restore();
    },
  };

  Chart.register(centerTextPlugin);

  return (
    <div className="pie-chart">
      <h3>Portion of Sales<BiInfoCircle /></h3>
      <Pie data={data} options={options} className='pie' />
      <div className="legend">
        <div>
          <span className="legend-color" style={{ backgroundColor: '#FA7E7E' }}></span>
          WooCommerce Store
        </div>
        <div>
          <span className="legend-color" style={{ backgroundColor: '#2CDED5' }}></span>
          Shopify Store
        </div>
      </div>
    </div>
  );
};

export default PieChart;
