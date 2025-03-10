// Wait for both DOM and Chart.js to be ready
function initChartsWhenReady() {
    console.log('Checking if ready to initialize charts...');
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded yet, waiting...');
        setTimeout(initChartsWhenReady, 100);
        return;
    }
    initializeCharts();
}

// Initialize on both load events to ensure we catch all scenarios
window.addEventListener('load', initChartsWhenReady);
document.addEventListener('DOMContentLoaded', initChartsWhenReady);

function initializeCharts() {
    console.log('Initializing charts...');
    
    // Token Distribution Pie Chart
    const distributionCtx = document.getElementById('tokenDistribution');
    console.log('Distribution context:', distributionCtx);
    
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'pie',
            data: {
                labels: [
                    'Community Treasury',
                    'Development Fund',
                    'Team & Advisors',
                    'Early Contributors',
                    'Marketing & Partnerships'
                ],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#00FF9D',  // primary
                        '#4DEEEA',  // secondary
                        '#FF10F0',  // accent1
                        '#74EE15',  // accent2
                        '#FFE500'   // accent3
                    ],
                    borderWidth: 2,
                    borderColor: '#00251f'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Token Growth Projection Chart
    const growthCtx = document.getElementById('tokenGrowth');
    console.log('Growth context:', growthCtx);
    
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['Launch', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                datasets: [{
                    label: 'Total Supply (Millions)',
                    data: [100, 150, 225, 300, 350, 375],
                    borderColor: '#00FF9D',
                    backgroundColor: 'rgba(0, 255, 157, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#00FF9D',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            callback: function(value) {
                                return value + 'M';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Supply: ${context.raw}M tokens`;
                            }
                        }
                    }
                }
            }
        });
    }
}
